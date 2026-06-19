// ============================================================
// DADOS DO BOLÃO — gerado pela página de cadastro de palpites
// Palpites: [golsCasa, golsFora] na ordem mostrada (casa × fora)
// ============================================================
const PARTICIPANTES = ["Rafa","Xyko","Teu","Dani","Soninha","Lu"];

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
    manual: [4, 1],
    palpites: { Rafa: [1,0], Xyko: [1,1], Teu: [2,1], Dani: [0,2], Soninha: [2,2], Lu: [0,1] }
  },
  {
    dia: "Sábado, 13 de junho", hora: "16h00", grupo: "B",
    casa: "🇶🇦 Catar", fora: "Suíça 🇨🇭",
    abbrCasa: "QAT", abbrFora: "SUI",
    local: "📍 San Francisco",
    manual: [1, 1],
    palpites: { Rafa: [0,2], Xyko: [1,2], Teu: [0,3], Dani: [0,1], Soninha: [1,2], Lu: [0,2] }
  },
  {
    dia: "Sábado, 13 de junho", hora: "19h00", grupo: "C",
    casa: "🇧🇷 Brasil", fora: "Marrocos 🇲🇦",
    abbrCasa: "BRA", abbrFora: "MAR",
    local: "📍 Nova York / NJ",
    brasil: true,
    manual: [1, 1],
    palpites: { Rafa: [2,1], Xyko: [2,0], Teu: [2,1], Dani: [2,0], Soninha: [3,2], Lu: [3,0] }
  },
  {
    dia: "Sábado, 13 de junho", hora: "22h00", grupo: "C",
    casa: "🇭🇹 Haiti", fora: "Escócia 🏴󠁧󠁢󠁳󠁣󠁴󠁿",
    abbrCasa: "HAI", abbrFora: "SCO",
    local: "📍 Boston",
    manual: [0, 1],
    palpites: { Rafa: [1,2], Xyko: [0,3], Teu: [0,3], Dani: [1,1], Soninha: [0,2], Lu: [0,0] }
  },
  {
    dia: "Domingo, 14 de junho", hora: "01h00", grupo: "D",
    casa: "🇦🇺 Austrália", fora: "Turquia 🇹🇷",
    abbrCasa: "AUS", abbrFora: "TUR",
    local: "📍 Vancouver",
    manual: [2, 0],
    palpites: { Rafa: [0,0], Xyko: [1,1], Teu: [1,2], Dani: [1,0], Soninha: [1,1], Lu: [1,1] }
  },
  {
    dia: "Domingo, 14 de junho", hora: "14h00", grupo: "E",
    casa: "🇩🇪 Alemanha", fora: "Curaçao 🇨🇼",
    abbrCasa: "GER", abbrFora: "CUW",
    local: "📍 Houston",
    manual: [7, 1],
    palpites: { Rafa: [4,0], Xyko: [4,0], Teu: [5,0], Dani: [4,0], Soninha: [3,0], Lu: [5,0] }
  },
  {
    dia: "Domingo, 14 de junho", hora: "17h00", grupo: "F",
    casa: "🇳🇱 Holanda", fora: "Japão 🇯🇵",
    abbrCasa: "NED", abbrFora: "JPN",
    local: "📍 Dallas",
    manual: [2, 2],
    palpites: { Rafa: [1,2], Xyko: [3,1], Teu: [3,2], Dani: [2,0], Soninha: [2,1], Lu: [3,1] }
  },
  {
    dia: "Domingo, 14 de junho", hora: "20h00", grupo: "E",
    casa: "🇨🇮 C. do Marfim", fora: "Equador 🇪🇨",
    abbrCasa: "CIV", abbrFora: "ECU",
    local: "📍 Filadélfia",
    manual: [1, 0],
    palpites: { Rafa: [0,2], Xyko: [0,1], Teu: [1,2], Dani: [1,2], Soninha: [1,2], Lu: [0,1] }
  },
  {
    dia: "Domingo, 14 de junho", hora: "23h00", grupo: "F",
    casa: "🇸🇪 Suécia", fora: "Tunísia 🇹🇳",
    abbrCasa: "SWE", abbrFora: "TUN",
    local: "📍 Monterrey",
    manual: [5, 1],
    palpites: { Rafa: [1,0], Xyko: [3,0], Teu: [0,0], Dani: [2,0], Soninha: [2,0], Lu: [1,0] }
  },
  {
    dia: "Segunda-feira, 15 de junho", hora: "13h00", grupo: "H",
    casa: "🇪🇸 Espanha", fora: "Cabo Verde 🇨🇻",
    abbrCasa: "ESP", abbrFora: "CPV",
    local: "📍 Atlanta",
    manual: [0, 0],
    palpites: { Rafa: [6,0], Xyko: [5,0], Teu: [4,0], Dani: [3,0], Soninha: [3,0], Lu: [3,0] }
  },
  {
    dia: "Segunda-feira, 15 de junho", hora: "16h00", grupo: "G",
    casa: "🇧🇪 Bélgica", fora: "Egito 🇪🇬",
    abbrCasa: "BEL", abbrFora: "EGY",
    local: "📍 Seattle",
    manual: [1, 1],
    palpites: { Rafa: [3,1], Xyko: [1,1], Teu: [2,0], Dani: [2,0], Soninha: [2,1], Lu: [2,1] }
  },
  {
    dia: "Segunda-feira, 15 de junho", hora: "19h00", grupo: "H",
    casa: "🇸🇦 Arábia Saudita", fora: "Uruguai 🇺🇾",
    abbrCasa: "KSA", abbrFora: "URU",
    local: "📍 Miami",
    manual: [1, 1],
    palpites: { Rafa: [0,2], Xyko: [1,2], Teu: [1,2], Dani: [1,2], Soninha: [2,0], Lu: [0,1] }
  },
  {
    dia: "Segunda-feira, 15 de junho", hora: "22h00", grupo: "G",
    casa: "🇮🇷 Irã", fora: "Nova Zelândia 🇳🇿",
    abbrCasa: "IRN", abbrFora: "NZL",
    local: "📍 Los Angeles",
    manual: [2, 2],
    palpites: { Rafa: [2,0], Xyko: [1,1], Teu: [0,0], Dani: [0,1], Soninha: [1,0], Lu: [1,1] }
  },
  {
    dia: "Terça-feira, 16 de junho", hora: "16h00", grupo: "I",
    casa: "🇫🇷 França", fora: "Senegal 🇸🇳",
    abbrCasa: "FRA", abbrFora: "SEN",
    local: "📍 Nova York / NJ",
    manual: [3, 1],
    palpites: { Rafa: [3,0], Xyko: [3,0], Teu: [2,0], Dani: [3,0], Soninha: [2,0], Lu: [4,0] }
  },
  {
    dia: "Terça-feira, 16 de junho", hora: "19h00", grupo: "I",
    casa: "🇮🇶 Iraque", fora: "Noruega 🇳🇴",
    abbrCasa: "IRQ", abbrFora: "NOR",
    local: "📍 Boston",
    manual: [1, 4],
    palpites: { Rafa: [0,2], Xyko: [0,1], Teu: [0,1], Dani: [0,1], Soninha: [0,2], Lu: [0,1] }
  },
  {
    dia: "Terça-feira, 16 de junho", hora: "22h00", grupo: "J",
    casa: "🇦🇷 Argentina", fora: "Argélia 🇩🇿",
    abbrCasa: "ARG", abbrFora: "ALG",
    local: "📍 Kansas City",
    manual: [3, 0],
    palpites: { Rafa: [2,0], Xyko: [2,0], Teu: [2,1], Dani: [2,0], Soninha: [3,1], Lu: [2,0] }
  },
  {
    dia: "Quarta-feira, 17 de junho", hora: "01h00", grupo: "J",
    casa: "🇦🇹 Áustria", fora: "Jordânia 🇯🇴",
    abbrCasa: "AUT", abbrFora: "JOR",
    local: "📍 Santa Clara",
    manual: [3, 1],
    palpites: { Rafa: [1,0], Xyko: [1,1], Teu: [1,0], Dani: [1,1], Soninha: [2,0], Lu: [1,0] }
  },
  {
    dia: "Quarta-feira, 17 de junho", hora: "14h00", grupo: "K",
    casa: "🇵🇹 Portugal", fora: "Congo 🇨🇩",
    abbrCasa: "POR", abbrFora: "COD",
    local: "📍 Houston",
    manual: [1, 1],
    palpites: { Rafa: [5,0], Xyko: [4,0], Teu: [0,0], Dani: [3,0], Soninha: [4,0], Lu: [2,0] }
  },
  {
    dia: "Quarta-feira, 17 de junho", hora: "17h00", grupo: "K",
    casa: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 Inglaterra", fora: "Croácia 🇭🇷",
    abbrCasa: "ENG", abbrFora: "CRO",
    local: "📍 Dallas",
    manual: [4, 2],
    palpites: { Rafa: [1,1], Xyko: [3,1], Teu: [0,0], Dani: [2,2], Soninha: [3,2], Lu: [2,1] }
  },
  {
    dia: "Quarta-feira, 17 de junho", hora: "20h00", grupo: "L",
    casa: "🇬🇭 Gana", fora: "Panamá 🇵🇦",
    abbrCasa: "GHA", abbrFora: "PAN",
    local: "📍 Toronto",
    manual: [1, 0],
    palpites: { Rafa: [2,0], Xyko: [2,0], Teu: [2,0], Dani: [2,0], Soninha: [2,0], Lu: [1,0] }
  },
  {
    dia: "Quarta-feira, 17 de junho", hora: "23h00", grupo: "L",
    casa: "🇺🇿 Uzbequistão", fora: "Colômbia 🇨🇴",
    abbrCasa: "UZB", abbrFora: "COL",
    local: "📍 Monterrey",
    manual: [1, 3],
    palpites: { Rafa: [0,3], Xyko: [0,2], Teu: [2,2], Dani: [1,2], Soninha: [0,3], Lu: [0,2] }
  },
  {
    dia: "Quinta-feira, 18 de junho", hora: "13h00", grupo: "A",
    casa: "🇨🇿 Tchéquia", fora: "África do Sul 🇿🇦",
    abbrCasa: "CZE", abbrFora: "RSA",
    local: "📍 Atlanta",
    manual: [1, 1],
    palpites: { Rafa: [2,0], Xyko: [1,2], Teu: [1,0], Dani: [1,2], Soninha: [1,1], Lu: [2,1] }
  },
  {
    dia: "Quinta-feira, 18 de junho", hora: "16h00", grupo: "B",
    casa: "🇨🇭 Suíça", fora: "Bósnia 🇧🇦",
    abbrCasa: "SUI", abbrFora: "BIH",
    local: "📍 Los Angeles",
    manual: [4, 1],
    palpites: { Rafa: [2,1], Xyko: [2,1], Teu: [1,1], Dani: [2,0], Soninha: [3,1], Lu: [1,0] }
  },
  {
    dia: "Quinta-feira, 18 de junho", hora: "19h00", grupo: "B",
    casa: "🇨🇦 Canadá", fora: "Catar 🇶🇦",
    abbrCasa: "CAN", abbrFora: "QAT",
    local: "📍 Vancouver",
    manual: [6, 0],
    palpites: { Rafa: [1,0], Xyko: [1,1], Teu: [2,0], Dani: [1,1], Soninha: [2,0], Lu: [2,0] }
  },
  {
    dia: "Quinta-feira, 18 de junho", hora: "22h00", grupo: "A",
    casa: "🇲🇽 México", fora: "Coreia do Sul 🇰🇷",
    abbrCasa: "MEX", abbrFora: "KOR",
    local: "📍 Guadalajara",
    manual: [1, 0],
    palpites: { Rafa: [2,1], Xyko: [2,1], Teu: [2,2], Dani: [3,1], Soninha: [3,1], Lu: [2,1] }
  },
  {
    dia: "Sexta-feira, 19 de junho", hora: "16h00", grupo: "D",
    casa: "🇺🇸 EUA", fora: "Austrália 🇦🇺",
    abbrCasa: "USA", abbrFora: "AUS",
    local: "📍 Seattle",
    palpites: { Rafa: [1,1], Xyko: [1,1], Soninha: [3,1] }
  },
  {
    dia: "Sexta-feira, 19 de junho", hora: "19h00", grupo: "C",
    casa: "🏴󠁧󠁢󠁳󠁣󠁴󠁿 Escócia", fora: "Marrocos 🇲🇦",
    abbrCasa: "SCO", abbrFora: "MAR",
    local: "📍 Boston",
    palpites: { Rafa: [0,2], Xyko: [0,1], Soninha: [1,3] }
  },
  {
    dia: "Sexta-feira, 19 de junho", hora: "21h30", grupo: "C",
    casa: "🇧🇷 Brasil", fora: "Haiti 🇭🇹",
    abbrCasa: "BRA", abbrFora: "HAI",
    local: "📍 Filadélfia",
    brasil: true,
    palpites: { Rafa: [1,0], Xyko: [3,0], Soninha: [2,0] }
  },
  {
    dia: "Sábado, 20 de junho", hora: "00h00", grupo: "D",
    casa: "🇹🇷 Turquia", fora: "Paraguai 🇵🇾",
    abbrCasa: "TUR", abbrFora: "PAR",
    local: "📍 Santa Clara",
    palpites: { Rafa: [1,1], Xyko: [1,1], Soninha: [0,2] }
  },
  {
    dia: "Sábado, 20 de junho", hora: "14h00", grupo: "F",
    casa: "🇳🇱 Holanda", fora: "Suécia 🇸🇪",
    abbrCasa: "NED", abbrFora: "SWE",
    local: "📍 Houston",
    palpites: { Rafa: [2,1], Xyko: [2,1], Soninha: [3,2] }
  },
  {
    dia: "Sábado, 20 de junho", hora: "17h00", grupo: "E",
    casa: "🇩🇪 Alemanha", fora: "C. do Marfim 🇨🇮",
    abbrCasa: "GER", abbrFora: "CIV",
    local: "📍 Toronto",
    palpites: { Rafa: [3,0], Xyko: [4,0], Soninha: [5,1] }
  },
  {
    dia: "Sábado, 20 de junho", hora: "21h00", grupo: "E",
    casa: "🇪🇨 Equador", fora: "Curaçao 🇨🇼",
    abbrCasa: "ECU", abbrFora: "CUW",
    local: "📍 Kansas City",
    palpites: { Rafa: [2,0], Xyko: [2,0], Soninha: [4,0] }
  },
  {
    dia: "Domingo, 21 de junho", hora: "01h00", grupo: "F",
    casa: "🇹🇳 Tunísia", fora: "Japão 🇯🇵",
    abbrCasa: "TUN", abbrFora: "JPN",
    local: "📍 Monterrey",
    palpites: { Rafa: [0,2], Xyko: [0,2], Soninha: [1,2] }
  }
];

const API_URL = "https://site.api.espn.com/apis/site/v2/sports/soccer/fifa.world/scoreboard?dates=20260611-20260719&limit=300";
