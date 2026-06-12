// ============================================================
// DADOS DO BOLÃO — para atualizar palpites/jogos, edite SÓ este arquivo
// Palpites: [golsCasa, golsFora] na ordem mostrada (casa × fora)
// Participante sem palpite no jogo: simplesmente não incluir a chave
// ============================================================
const PARTICIPANTES = ["Rafa", "Xyko", "Teu", "Dani", "Soninha", "Lu"];

const JOGOS = [
  {
    dia: "Quinta-feira, 11 de junho", hora: "16h00", grupo: "A",
    casa: "🇲🇽 México", fora: "África do Sul 🇿🇦",
    abbrCasa: "MEX", abbrFora: "RSA",
    local: "📍 Cidade do México",
    manual: [2, 0],
    palpites: { Rafa: [2,0], Xyko: [2,1], Teu: [3,0], Dani: [2,1], Soninha: [1,2], Lu: [1,0] }
  },
  {
    dia: "Quinta-feira, 11 de junho", hora: "23h00", grupo: "A",
    casa: "🇰🇷 Coreia do Sul", fora: "Rep. Tcheca 🇨🇿",
    abbrCasa: "KOR", abbrFora: "CZE",
    local: "📍 Guadalajara",
    manual: [1, 1],
    palpites: { Rafa: [1,1], Xyko: [1,0], Teu: [0,0], Dani: [1,0], Soninha: [1,2], Lu: [1,1] }
  },
  {
    dia: "Sexta-feira, 12 de junho", hora: "16h00", grupo: "B",
    casa: "🇨🇦 Canadá", fora: "Bósnia 🇧🇦",
    abbrCasa: "CAN", abbrFora: "BIH",
    local: "📍 Toronto",
    palpites: { Rafa: [1,0], Xyko: [1,1], Teu: [1,2], Dani: [0,0], Soninha: [0,2] }
  },
  {
    dia: "Sexta-feira, 12 de junho", hora: "22h00", grupo: "D",
    casa: "🇺🇸 EUA", fora: "Paraguai 🇵🇾",
    abbrCasa: "USA", abbrFora: "PAR",
    local: "📍 Los Angeles",
    palpites: { Rafa: [1,0], Xyko: [1,1], Teu: [2,1], Dani: [0,2], Soninha: [2,2] }
  },
  {
    dia: "Sábado, 13 de junho", hora: "16h00", grupo: "B",
    casa: "🇶🇦 Catar", fora: "Suíça 🇨🇭",
    abbrCasa: "QAT", abbrFora: "SUI",
    local: "📍 San Francisco",
    palpites: null
  },
  {
    dia: "Sábado, 13 de junho", hora: "19h00", grupo: "C",
    casa: "🇧🇷 Brasil", fora: "Marrocos 🇲🇦",
    abbrCasa: "BRA", abbrFora: "MAR",
    local: "📍 Nova York / NJ",
    brasil: true,
    palpites: null
  },
  {
    dia: "Sábado, 13 de junho", hora: "22h00", grupo: "C",
    casa: "🇭🇹 Haiti", fora: "Escócia 🏴󠁧󠁢󠁳󠁣󠁴󠁿",
    abbrCasa: "HAI", abbrFora: "SCO",
    local: "📍 Boston",
    palpites: null
  }
];

const API_URL = "https://site.api.espn.com/apis/site/v2/sports/soccer/fifa.world/scoreboard?dates=20260611-20260719&limit=300";
