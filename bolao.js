// ============================================================
// MOTOR DO BOLÃO — não precisa editar para atualizar palpites
// Requer: dados.js carregado antes + const MODO_LIVE definida
//   MODO_LIVE = true  → placares e pontos parciais em tempo real
//   MODO_LIVE = false → placares e pontos só no fim do jogo
// ============================================================

// jogos encerrados que o usuário expandiu (persiste entre re-renders)
const EXPANDIDOS = new Set();
function chaveJogo(j) { return j.abbrCasa + "x" + j.abbrFora; }

// ----- pontuação -----
function calcPontos(palpite, resultado) {
  if (!palpite || !resultado) return null;
  const [ph, pa] = palpite, [rh, ra] = resultado;
  if (ph === rh && pa === ra) return 10;
  const pd = ph - pa, rd = rh - ra;
  if (Math.sign(pd) === Math.sign(rd) && pd === rd) return 6;
  if (Math.sign(pd) === Math.sign(rd)) return 3;
  return 0;
}

// ----- API ESPN -----
// Prioridade dos resultados:
// 1. `manual` no dados.js (resultado consolidado na plataforma) — não consulta API
// 2. cache local de finais já vistos pela API neste navegador
// 3. API ESPN (só para jogos ainda não resolvidos — economiza requisições)
function lerCache() {
  try { return JSON.parse(localStorage.getItem("bolao_finais") || "{}"); } catch (e) { return {}; }
}
function salvarCache(c) {
  try { localStorage.setItem("bolao_finais", JSON.stringify(c)); } catch (e) {}
}

async function buscarPlacares() {
  const cache = lerCache();

  // resolve primeiro o que já está consolidado (sem rede)
  const pendentes = [];
  for (const jogo of JOGOS) {
    if (jogo.manual) {
      jogo.estado = "post"; jogo.placar = jogo.manual; jogo.relogio = "";
    } else if (cache[chaveJogo(jogo)]) {
      jogo.estado = "post"; jogo.placar = cache[chaveJogo(jogo)]; jogo.relogio = "";
    } else {
      jogo.estado = "pre"; jogo.placar = null; jogo.relogio = "";
      pendentes.push(jogo);
    }
  }

  // só vai à API se houver jogo sem resultado consolidado
  if (pendentes.length === 0) return;

  const resp = await fetch(API_URL);
  if (!resp.ok) throw new Error("HTTP " + resp.status);
  const data = await resp.json();
  const eventos = data.events || [];

  for (const jogo of pendentes) {
    const ev = eventos.find(e => {
      const comp = e.competitions && e.competitions[0];
      if (!comp || !comp.competitors) return false;
      const abbrs = comp.competitors.map(c => c.team.abbreviation);
      return abbrs.includes(jogo.abbrCasa) && abbrs.includes(jogo.abbrFora);
    });
    if (ev) {
      const comp = ev.competitions[0];
      const st = comp.status || ev.status;
      jogo.estado = st.type.state; // pre | in | post
      jogo.relogio = st.displayClock || "";
      const cCasa = comp.competitors.find(c => c.team.abbreviation === jogo.abbrCasa);
      const cFora = comp.competitors.find(c => c.team.abbreviation === jogo.abbrFora);
      if (jogo.estado !== "pre" && cCasa && cFora) {
        jogo.placar = [parseInt(cCasa.score, 10) || 0, parseInt(cFora.score, 10) || 0];
      }
      // jogo acabou: memoriza o final neste navegador
      if (jogo.estado === "post" && jogo.placar) {
        cache[chaveJogo(jogo)] = jogo.placar;
        salvarCache(cache);
      }
    }
  }
}

// ----- card de jogo -----
function cardJogo(jogo) {
  const passado = jogo.estado === "post";
  const expandido = EXPANDIDOS.has(chaveJogo(jogo));
  const mostraParcial = MODO_LIVE && jogo.estado === "in" && jogo.placar;

  let cardCls = "", tag = "", placarHtml = "", centro = "VS";
  if (jogo.estado === "in") {
    cardCls = " aovivo";
    if (mostraParcial) {
      tag = `<span class="status-tag tag-vivo"><span class="live-dot"></span>AO VIVO ${jogo.relogio}</span>`;
      centro = `<span class="gol vivo">${jogo.placar[0]}</span><span>VS</span><span class="gol vivo">${jogo.placar[1]}</span>`;
    } else {
      tag = `<span class="status-tag tag-vivo"><span class="live-dot"></span>AO VIVO</span>`;
      placarHtml = `<a href="live.html" style="color:var(--texto2);font-size:12px;">acompanhar ⚡</a>`;
    }
  } else if (passado) {
    cardCls = " encerrado colapsavel" + (expandido ? "" : " colapsado");
    tag = `<span class="status-tag tag-encerrado">Encerrado</span>`;
    placarHtml = `<span class="seta">${expandido ? "▾" : "▸"}</span>`;
    centro = `<span class="gol">${jogo.placar[0]}</span><span>VS</span><span class="gol">${jogo.placar[1]}</span>`;
  } else {
    tag = jogo.brasil
      ? `<span class="status-tag tag-brasil">🇧🇷 Brasil</span>`
      : `<span class="status-tag tag-futuro">Em breve</span>`;
    placarHtml = `<span class="resultado-real pendente">Aguardando</span>`;
  }
  if (jogo.brasil && jogo.estado === "pre") cardCls = " brasil";

  let linhas = "";
  for (const p of PARTICIPANTES) {
    const palpite = jogo.palpites ? jogo.palpites[p] : null;
    const palpiteHtml = palpite
      ? `<span class="palpite-val">${palpite[0]} × ${palpite[1]}</span>`
      : `<span class="palpite-val aguardando">⏳ aguardando</span>`;
    let ptsHtml = `<span class="badge-pts badge-pending">—</span>`;
    const mostraPts = palpite && jogo.placar && (passado || mostraParcial);
    if (mostraPts) {
      const pts = calcPontos(palpite, jogo.placar);
      const prov = jogo.estado === "in" ? " badge-prov" : "";
      ptsHtml = `<span class="badge-pts badge-${pts}${prov}">${pts}</span>`;
    }
    linhas += `<tr><td>${p}</td><td>${palpiteHtml}</td><td>${ptsHtml}</td></tr>`;
  }

  return `<div class="jogo-card${cardCls}" data-jogo="${chaveJogo(jogo)}">
    <div class="jogo-header">
      <div class="jogo-info-linha"><span>📅 ${jogo.dia.split(", ")[1] || jogo.dia}</span><span>·</span><span>🕓 ${jogo.hora}</span><span>·</span><span>Grupo ${jogo.grupo}</span></div>
      <div style="display:flex;align-items:center;gap:8px">${tag}${placarHtml}</div>
    </div>
    <div class="jogo-times">
      <div class="time-nome esquerda">${jogo.casa}</div>
      <div class="vs">${centro}</div>
      <div class="time-nome direita">${jogo.fora}</div>
    </div>
    <div class="jogo-local">${jogo.local}</div>
    <table class="palpites-table">
      <thead><tr><th>Participante</th><th>Palpite</th><th>Pontos</th></tr></thead>
      <tbody>${linhas}</tbody>
    </table>
  </div>`;
}

function blocoPorDia(jogos) {
  let html = "", diaAtual = "";
  for (const jogo of jogos) {
    if (jogo.dia !== diaAtual) {
      if (diaAtual !== "") html += "</div>";
      html += `<div class="dia-bloco"><div class="dia-header">${jogo.dia}</div>`;
      diaAtual = jogo.dia;
    }
    html += cardJogo(jogo);
  }
  if (diaAtual !== "") html += "</div>";
  return html;
}

// ----- render -----
function render() {
  // ranking
  const totais = {};
  let temProvisorio = false;
  PARTICIPANTES.forEach(p => totais[p] = 0);
  for (const jogo of JOGOS) {
    if (!jogo.palpites || !jogo.placar) continue;
    const conta = jogo.estado === "post" || (MODO_LIVE && jogo.estado === "in");
    if (!conta) continue;
    if (jogo.estado === "in") temProvisorio = true;
    for (const p of PARTICIPANTES) {
      const pts = calcPontos(jogo.palpites[p], jogo.placar);
      if (pts !== null) totais[p] += pts;
    }
  }
  const ordenado = [...PARTICIPANTES].sort((a, b) => totais[b] - totais[a]);
  let html = "";
  let posAnterior = 0;
  ordenado.forEach((p, i) => {
    let pos = i + 1;
    if (i > 0 && totais[p] === totais[ordenado[i - 1]]) pos = posAnterior;
    posAnterior = pos;
    const cls = pos <= 3 ? " pos-" + pos : "";
    const nome = (pos === 1 && totais[p] > 0 ? "🎯 " : "") + p;
    html += `<div class="ranking-item${cls}">
      <div class="pos-badge">${pos}</div>
      <div class="nome">${nome}</div>
      <div style="text-align:right">
        <div class="total-pts">${totais[p]}</div>
        <div class="pts-label">pontos</div>
      </div>
    </div>`;
  });
  document.getElementById("ranking").innerHTML = html;
  const provEl = document.getElementById("prov-note");
  if (provEl) provEl.style.display = (MODO_LIVE && temProvisorio) ? "block" : "none";

  // fila: ao vivo primeiro, depois futuros (do mais próximo ao mais distante)
  const aoVivo = JOGOS.filter(j => j.estado === "in");
  const futuros = JOGOS.filter(j => j.estado === "pre" || j.estado === undefined);
  const passados = JOGOS.filter(j => j.estado === "post").slice().reverse(); // mais recente primeiro

  document.getElementById("jogos").innerHTML =
    (aoVivo.length || futuros.length)
      ? blocoPorDia([...aoVivo, ...futuros])
      : `<div class="api-status">Nenhum jogo na fila por enquanto.</div>`;

  const secPassados = document.getElementById("secao-passados");
  if (secPassados) {
    secPassados.style.display = passados.length ? "" : "none";
    document.getElementById("jogos-passados").innerHTML = blocoPorDia(passados);
  }

  // clique para expandir/colapsar jogos encerrados
  document.querySelectorAll(".jogo-card.colapsavel .jogo-header").forEach(h => {
    h.addEventListener("click", () => {
      const card = h.closest(".jogo-card");
      const chave = card.getAttribute("data-jogo");
      if (EXPANDIDOS.has(chave)) EXPANDIDOS.delete(chave); else EXPANDIDOS.add(chave);
      card.classList.toggle("colapsado");
      const seta = card.querySelector(".seta");
      if (seta) seta.textContent = card.classList.contains("colapsado") ? "▸" : "▾";
    });
  });
}

// ----- loop -----
async function atualizar() {
  const statusEl = document.getElementById("api-status");
  try {
    await buscarPlacares();
    render();
    statusEl.textContent = "";
    statusEl.className = "api-status";
    const agora = new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
    document.getElementById("last-update").textContent = "Atualizado às " + agora;
  } catch (e) {
    for (const jogo of JOGOS) {
      if (!jogo.placar && jogo.manual) { jogo.estado = "post"; jogo.placar = jogo.manual; }
      if (jogo.estado === undefined) jogo.estado = "pre";
    }
    render();
    statusEl.textContent = "⚠️ Não foi possível buscar os placares agora (" + e.message + "). Mostrando últimos dados conhecidos.";
    statusEl.className = "api-status erro";
  }
}

atualizar();
setInterval(atualizar, 60000);
