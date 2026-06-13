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
    manual: [2, 1],
    palpites: { Rafa: [1,1], Xyko: [1,0], Teu: [0,0], Dani: [1,0], Soninha: [1,2], Lu: [1,1] }
  },
  {
    dia: "Sexta-feira, 12 de junho", hora: "16h00", grupo: "B",
    casa: "🇨🇦 Canadá", fora: "Bósnia 🇧🇦",
    abbrCasa: "CAN", abbrFora: "BIH",
    local: "📍 Toronto",
    manual: [1, 1],
    palpites: { Rafa: [1,0], Xyko: [1,1], Teu: [1,2], Dani: [0,0], Soninha: [0,2], Lu: [0,0] }
  },
  {
    dia: "Sexta-feira, 12 de junho", hora: "22h00", grupo: "D",
    casa: "🇺🇸 EUA", fora: "Paraguai 🇵🇾",
    abbrCasa: "USA", abbrFora: "PAR",
    local: "📍 Los Angeles",
    palpites: { Rafa: [1,0], Xyko: [1,1], Teu: [2,1], Dani: [0,2], Soninha: [2,2], Lu: [0,1] }
  },
  {
    dia: "Sábado, 13 de junho", hora: "16h00", grupo: "B",
    casa: "🇶🇦 Catar", fora: "Suíça 🇨🇭",
    abbrCasa: "QAT", abbrFora: "SUI",
    local: "📍 San Francisco",
    palpites: { Rafa: [0,2], Xyko: [1,2], Teu: [0,3], Dani: [0,1], Soninha: [1,2], Lu: [0,2] }
  },
  {
    dia: "Sábado, 13 de junho", hora: "19h00", grupo: "C",
    casa: "🇧🇷 Brasil", fora: "Marrocos 🇲🇦",
    abbrCasa: "BRA", abbrFora: "MAR",
    local: "📍 Nova York / NJ",
    brasil: true,
    palpites: { Rafa: [2,1], Xyko: [2,0], Teu: [2,1], Dani: [2,0], Soninha: [3,2], Lu: [3,0] }
  },
  {
    dia: "Sábado, 13 de junho", hora: "22h00", grupo: "C",
    casa: "🇭🇹 Haiti", fora: "Escócia 🏴󠁧󠁢󠁳󠁣󠁴󠁿",
    abbrCasa: "HAI", abbrFora: "SCO",
    local: "📍 Boston",
    palpites: { Rafa: [1,2], Xyko: [0,3], Teu: [0,3], Dani: [1,1], Soninha: [0,2], Lu: [0,0] }
  },
  {
    dia: "Domingo, 14 de junho", hora: "01h00", grupo: "D",
    casa: "🇦🇺 Austrália", fora: "Turquia 🇹🇷",
    abbrCasa: "AUS", abbrFora: "TUR",
    local: "📍 Vancouver",
    palpites: { Rafa: [0,0], Xyko: [1,1], Teu: [1,2], Dani: [1,0], Soninha: [1,1], Lu: [1,1] }
  },
  {
    dia: "Domingo, 14 de junho", hora: "14h00", grupo: "E",
    casa: "🇩🇪 Alemanha", fora: "Curaçao 🇨🇼",
    abbrCasa: "GER", abbrFora: "CUW",
    local: "📍 Houston",
    palpites: { Rafa: [4,0], Xyko: [4,0], Teu: [5,0], Dani: [4,0], Soninha: [3,0], Lu: [5,0] }
  },
  {
    dia: "Domingo, 14 de junho", hora: "17h00", grupo: "F",
    casa: "🇳🇱 Holanda", fora: "Japão 🇯🇵",
    abbrCasa: "NED", abbrFora: "JPN",
    local: "📍 Dallas",
    palpites: { Rafa: [1,2], Xyko: [3,1], Teu: [3,2], Dani: [2,0], Soninha: [2,1], Lu: [3,1] }
  },
  {
    dia: "Domingo, 14 de junho", hora: "20h00", grupo: "E",
    casa: "🇨🇮 C. do Marfim", fora: "Equador 🇪🇨",
    abbrCasa: "CIV", abbrFora: "ECU",
    local: "📍 Filadélfia",
    palpites: { Rafa: [0,2], Xyko: [0,1], Teu: [1,2], Dani: [1,2], Soninha: [1,2], Lu: [0,1] }
  },
  {
    dia: "Domingo, 14 de junho", hora: "23h00", grupo: "F",
    casa: "🇸🇪 Suécia", fora: "Tunísia 🇹🇳",
    abbrCasa: "SWE", abbrFora: "TUN",
    local: "📍 Monterrey",
    palpites: { Rafa: [1,0], Xyko: [3,0], Teu: [0,0], Dani: [2,0], Soninha: [2,0], Lu: [1,0] }
  }
];

const API_URL = "https://site.api.espn.com/apis/site/v2/sports/soccer/fifa.world/scoreboard?dates=20260611-20260719&limit=300";
