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
    manual: [2, 0],
    palpites: { Rafa: [1,1], Xyko: [1,1], Teu: [3,1], Dani: [2,2], Soninha: [3,1], Lu: [2,0] }
  },
  {
    dia: "Sexta-feira, 19 de junho", hora: "19h00", grupo: "C",
    casa: "🏴󠁧󠁢󠁳󠁣󠁴󠁿 Escócia", fora: "Marrocos 🇲🇦",
    abbrCasa: "SCO", abbrFora: "MAR",
    local: "📍 Boston",
    manual: [0, 1],
    palpites: { Rafa: [0,2], Xyko: [0,1], Teu: [0,2], Dani: [0,2], Soninha: [1,3], Lu: [1,1] }
  },
  {
    dia: "Sexta-feira, 19 de junho", hora: "21h30", grupo: "C",
    casa: "🇧🇷 Brasil", fora: "Haiti 🇭🇹",
    abbrCasa: "BRA", abbrFora: "HAI",
    local: "📍 Filadélfia",
    brasil: true,
    manual: [3, 0],
    palpites: { Rafa: [1,0], Xyko: [3,0], Teu: [4,1], Dani: [3,0], Soninha: [2,0], Lu: [4,0] }
  },
  {
    dia: "Sábado, 20 de junho", hora: "00h00", grupo: "D",
    casa: "🇹🇷 Turquia", fora: "Paraguai 🇵🇾",
    abbrCasa: "TUR", abbrFora: "PAR",
    local: "📍 Santa Clara",
    manual: [0, 1],
    palpites: { Rafa: [1,1], Xyko: [1,1], Teu: [2,1], Dani: [1,2], Soninha: [0,2], Lu: [2,1] }
  },
  {
    dia: "Sábado, 20 de junho", hora: "14h00", grupo: "F",
    casa: "🇳🇱 Holanda", fora: "Suécia 🇸🇪",
    abbrCasa: "NED", abbrFora: "SWE",
    local: "📍 Houston",
    manual: [5, 1],
    palpites: { Rafa: [2,1], Xyko: [2,1], Teu: [1,1], Dani: [2,2], Soninha: [3,2], Lu: [2,0] }
  },
  {
    dia: "Sábado, 20 de junho", hora: "17h00", grupo: "E",
    casa: "🇩🇪 Alemanha", fora: "C. do Marfim 🇨🇮",
    abbrCasa: "GER", abbrFora: "CIV",
    local: "📍 Toronto",
    manual: [2, 1],
    palpites: { Rafa: [3,0], Xyko: [4,0], Teu: [2,1], Dani: [4,1], Soninha: [5,1], Lu: [3,0] }
  },
  {
    dia: "Sábado, 20 de junho", hora: "21h00", grupo: "E",
    casa: "🇪🇨 Equador", fora: "Curaçao 🇨🇼",
    abbrCasa: "ECU", abbrFora: "CUW",
    local: "📍 Kansas City",
    manual: [0, 0],
    palpites: { Rafa: [2,0], Xyko: [2,0], Teu: [2,0], Dani: [3,0], Soninha: [4,0], Lu: [1,0] }
  },
  {
    dia: "Domingo, 21 de junho", hora: "01h00", grupo: "F",
    casa: "🇹🇳 Tunísia", fora: "Japão 🇯🇵",
    abbrCasa: "TUN", abbrFora: "JPN",
    local: "📍 Monterrey",
    manual: [0, 4],
    palpites: { Rafa: [0,2], Xyko: [0,2], Teu: [1,2], Dani: [0,1], Soninha: [1,2], Lu: [0,3] }
  },
  {
    dia: "Domingo, 21 de junho", hora: "13h00", grupo: "H",
    casa: "🇪🇸 Espanha", fora: "Arábia Saudita 🇸🇦",
    abbrCasa: "ESP", abbrFora: "KSA",
    local: "📍 Atlanta",
    manual: [4, 0],
    palpites: { Rafa: [4,1], Xyko: [4,0], Teu: [2,0], Dani: [3,1], Soninha: [5,0], Lu: [2,0] }
  },
  {
    dia: "Domingo, 21 de junho", hora: "16h00", grupo: "G",
    casa: "🇧🇪 Bélgica", fora: "Irã 🇮🇷",
    abbrCasa: "BEL", abbrFora: "IRN",
    local: "📍 Los Angeles",
    manual: [0, 0],
    palpites: { Rafa: [3,1], Xyko: [2,1], Teu: [2,0], Dani: [2,0], Soninha: [3,1], Lu: [2,1] }
  },
  {
    dia: "Domingo, 21 de junho", hora: "19h00", grupo: "H",
    casa: "🇺🇾 Uruguai", fora: "Cabo Verde 🇨🇻",
    abbrCasa: "URU", abbrFora: "CPV",
    local: "📍 Miami",
    manual: [2, 2],
    palpites: { Rafa: [3,0], Xyko: [1,0], Teu: [2,0], Dani: [1,0], Soninha: [2,0], Lu: [1,1] }
  },
  {
    dia: "Domingo, 21 de junho", hora: "22h00", grupo: "G",
    casa: "🇳🇿 Nova Zelândia", fora: "Egito 🇪🇬",
    abbrCasa: "NZL", abbrFora: "EGY",
    local: "📍 Vancouver",
    manual: [1, 3],
    palpites: { Rafa: [1,2], Xyko: [1,1], Teu: [0,1], Dani: [2,1], Soninha: [1,2], Lu: [0,1] }
  },
  {
    dia: "Segunda-feira, 22 de junho", hora: "14h00", grupo: "J",
    casa: "🇦🇷 Argentina", fora: "Áustria 🇦🇹",
    abbrCasa: "ARG", abbrFora: "AUT",
    local: "📍 Dallas",
    manual: [2, 0],
    palpites: { Rafa: [3,0], Xyko: [2,1], Teu: [2,1], Dani: [4,0], Soninha: [3,0], Lu: [2,1] }
  },
  {
    dia: "Segunda-feira, 22 de junho", hora: "18h00", grupo: "I",
    casa: "🇫🇷 França", fora: "Iraque 🇮🇶",
    abbrCasa: "FRA", abbrFora: "IRQ",
    local: "📍 Filadélfia",
    manual: [3, 0],
    palpites: { Rafa: [4,0], Xyko: [3,0], Teu: [2,0], Dani: [3,0], Soninha: [4,0], Lu: [3,0] }
  },
  {
    dia: "Segunda-feira, 22 de junho", hora: "21h00", grupo: "I",
    casa: "🇳🇴 Noruega", fora: "Senegal 🇸🇳",
    abbrCasa: "NOR", abbrFora: "SEN",
    local: "📍 Nova York / NJ",
    manual: [3, 2],
    palpites: { Rafa: [1,1], Xyko: [3,1], Teu: [2,1], Dani: [2,2], Soninha: [2,1], Lu: [2,1] }
  },
  {
    dia: "Terça-feira, 23 de junho", hora: "00h00", grupo: "J",
    casa: "🇯🇴 Jordânia", fora: "Argélia 🇩🇿",
    abbrCasa: "JOR", abbrFora: "ALG",
    local: "📍 Santa Clara",
    manual: [1, 2],
    palpites: { Rafa: [0,1], Xyko: [1,1], Teu: [0,2], Dani: [1,1], Soninha: [0,0], Lu: [1,2] }
  },
  {
    dia: "Terça-feira, 23 de junho", hora: "14h00", grupo: "K",
    casa: "🇵🇹 Portugal", fora: "Uzbequistão 🇺🇿",
    abbrCasa: "POR", abbrFora: "UZB",
    local: "📍 Houston",
    manual: [5, 0],
    palpites: { Rafa: [3,0], Xyko: [3,0], Teu: [4,0], Dani: [3,0], Soninha: [2,0], Lu: [2,0] }
  },
  {
    dia: "Terça-feira, 23 de junho", hora: "17h00", grupo: "L",
    casa: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 Inglaterra", fora: "Gana 🇬🇭",
    abbrCasa: "ENG", abbrFora: "GHA",
    local: "📍 Boston",
    manual: [0, 0],
    palpites: { Rafa: [2,0], Xyko: [3,0], Teu: [2,1], Dani: [4,0], Soninha: [3,1], Lu: [3,1] }
  },
  {
    dia: "Terça-feira, 23 de junho", hora: "20h00", grupo: "L",
    casa: "🇵🇦 Panamá", fora: "Croácia 🇭🇷",
    abbrCasa: "PAN", abbrFora: "CRO",
    local: "📍 Toronto",
    manual: [0, 1],
    palpites: { Rafa: [0,2], Xyko: [0,1], Teu: [0,2], Dani: [1,2], Soninha: [0,2], Lu: [1,3] }
  },
  {
    dia: "Terça-feira, 23 de junho", hora: "23h00", grupo: "K",
    casa: "🇨🇴 Colômbia", fora: "Congo 🇨🇩",
    abbrCasa: "COL", abbrFora: "COD",
    local: "📍 Guadalajara",
    palpites: { Rafa: [1,0], Xyko: [2,1], Teu: [2,0], Dani: [2,0], Soninha: [3,1], Lu: [3,1] }
  },
  {
    dia: "Quarta-feira, 24 de junho", hora: "16h00", grupo: "B",
    casa: "🇧🇦 Bósnia", fora: "Catar 🇶🇦",
    abbrCasa: "BIH", abbrFora: "QAT",
    local: "📍 Seattle",
    palpites: {}
  },
  {
    dia: "Quarta-feira, 24 de junho", hora: "16h00", grupo: "B",
    casa: "🇨🇭 Suíça", fora: "Canadá 🇨🇦",
    abbrCasa: "SUI", abbrFora: "CAN",
    local: "📍 Vancouver",
    palpites: {}
  },
  {
    dia: "Quarta-feira, 24 de junho", hora: "19h00", grupo: "C",
    casa: "🇲🇦 Marrocos", fora: "Haiti 🇭🇹",
    abbrCasa: "MAR", abbrFora: "HAI",
    local: "📍 Atlanta",
    palpites: {}
  },
  {
    dia: "Quarta-feira, 24 de junho", hora: "19h00", grupo: "C",
    casa: "🏴󠁧󠁢󠁳󠁣󠁴󠁿 Escócia", fora: "Brasil 🇧🇷",
    abbrCasa: "SCO", abbrFora: "BRA",
    local: "📍 Miami",
    brasil: true,
    palpites: {}
  },
  {
    dia: "Quarta-feira, 24 de junho", hora: "22h00", grupo: "A",
    casa: "🇨🇿 Tchéquia", fora: "México 🇲🇽",
    abbrCasa: "CZE", abbrFora: "MEX",
    local: "📍 Cidade do México",
    palpites: {}
  },
  {
    dia: "Quarta-feira, 24 de junho", hora: "22h00", grupo: "A",
    casa: "🇿🇦 África do Sul", fora: "Coreia do Sul 🇰🇷",
    abbrCasa: "RSA", abbrFora: "KOR",
    local: "📍 Monterrey",
    palpites: {}
  },
  {
    dia: "Quinta-feira, 25 de junho", hora: "17h00", grupo: "E",
    casa: "🇨🇼 Curaçao", fora: "C. do Marfim 🇨🇮",
    abbrCasa: "CUW", abbrFora: "CIV",
    local: "📍 Filadélfia",
    palpites: {}
  },
  {
    dia: "Quinta-feira, 25 de junho", hora: "17h00", grupo: "E",
    casa: "🇪🇨 Equador", fora: "Alemanha 🇩🇪",
    abbrCasa: "ECU", abbrFora: "GER",
    local: "📍 Nova York / NJ",
    palpites: {}
  },
  {
    dia: "Quinta-feira, 25 de junho", hora: "20h00", grupo: "F",
    casa: "🇯🇵 Japão", fora: "Suécia 🇸🇪",
    abbrCasa: "JPN", abbrFora: "SWE",
    local: "📍 Dallas",
    palpites: {}
  },
  {
    dia: "Quinta-feira, 25 de junho", hora: "20h00", grupo: "F",
    casa: "🇹🇳 Tunísia", fora: "Holanda 🇳🇱",
    abbrCasa: "TUN", abbrFora: "NED",
    local: "📍 Kansas City",
    palpites: {}
  },
  {
    dia: "Quinta-feira, 25 de junho", hora: "23h00", grupo: "D",
    casa: "🇵🇾 Paraguai", fora: "Austrália 🇦🇺",
    abbrCasa: "PAR", abbrFora: "AUS",
    local: "📍 Santa Clara",
    palpites: {}
  },
  {
    dia: "Quinta-feira, 25 de junho", hora: "23h00", grupo: "D",
    casa: "🇹🇷 Turquia", fora: "EUA 🇺🇸",
    abbrCasa: "TUR", abbrFora: "USA",
    local: "📍 Los Angeles",
    palpites: {}
  },
  {
    dia: "Sexta-feira, 26 de junho", hora: "16h00", grupo: "I",
    casa: "🇳🇴 Noruega", fora: "França 🇫🇷",
    abbrCasa: "NOR", abbrFora: "FRA",
    local: "📍 Boston",
    palpites: {}
  },
  {
    dia: "Sexta-feira, 26 de junho", hora: "16h00", grupo: "I",
    casa: "🇸🇳 Senegal", fora: "Iraque 🇮🇶",
    abbrCasa: "SEN", abbrFora: "IRQ",
    local: "📍 Toronto",
    palpites: {}
  },
  {
    dia: "Sexta-feira, 26 de junho", hora: "21h00", grupo: "H",
    casa: "🇨🇻 Cabo Verde", fora: "Arábia Saudita 🇸🇦",
    abbrCasa: "CPV", abbrFora: "KSA",
    local: "📍 Houston",
    palpites: {}
  },
  {
    dia: "Sexta-feira, 26 de junho", hora: "21h00", grupo: "H",
    casa: "🇺🇾 Uruguai", fora: "Espanha 🇪🇸",
    abbrCasa: "URU", abbrFora: "ESP",
    local: "📍 Guadalajara",
    palpites: {}
  },
  {
    dia: "Sábado, 27 de junho", hora: "00h00", grupo: "G",
    casa: "🇪🇬 Egito", fora: "Irã 🇮🇷",
    abbrCasa: "EGY", abbrFora: "IRN",
    local: "📍 Seattle",
    palpites: {}
  },
  {
    dia: "Sábado, 27 de junho", hora: "00h00", grupo: "G",
    casa: "🇳🇿 Nova Zelândia", fora: "Bélgica 🇧🇪",
    abbrCasa: "NZL", abbrFora: "BEL",
    local: "📍 Vancouver",
    palpites: {}
  },
  {
    dia: "Sábado, 27 de junho", hora: "18h00", grupo: "L",
    casa: "🇭🇷 Croácia", fora: "Gana 🇬🇭",
    abbrCasa: "CRO", abbrFora: "GHA",
    local: "📍 Filadélfia",
    palpites: {}
  },
  {
    dia: "Sábado, 27 de junho", hora: "18h00", grupo: "L",
    casa: "🇵🇦 Panamá", fora: "Inglaterra 🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    abbrCasa: "PAN", abbrFora: "ENG",
    local: "📍 Nova York / NJ",
    palpites: {}
  },
  {
    dia: "Sábado, 27 de junho", hora: "20h30", grupo: "K",
    casa: "🇨🇴 Colômbia", fora: "Portugal 🇵🇹",
    abbrCasa: "COL", abbrFora: "POR",
    local: "📍 Miami",
    palpites: {}
  },
  {
    dia: "Sábado, 27 de junho", hora: "20h30", grupo: "K",
    casa: "🇨🇩 Congo", fora: "Uzbequistão 🇺🇿",
    abbrCasa: "COD", abbrFora: "UZB",
    local: "📍 Atlanta",
    palpites: {}
  },
  {
    dia: "Sábado, 27 de junho", hora: "23h00", grupo: "J",
    casa: "🇩🇿 Argélia", fora: "Áustria 🇦🇹",
    abbrCasa: "ALG", abbrFora: "AUT",
    local: "📍 Kansas City",
    palpites: {}
  },
  {
    dia: "Sábado, 27 de junho", hora: "23h00", grupo: "J",
    casa: "🇯🇴 Jordânia", fora: "Argentina 🇦🇷",
    abbrCasa: "JOR", abbrFora: "ARG",
    local: "📍 Dallas",
    palpites: {}
  }
];

const API_URL = "https://site.api.espn.com/apis/site/v2/sports/soccer/fifa.world/scoreboard?dates=20260611-20260719&limit=300";
