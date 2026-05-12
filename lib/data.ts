import { 
  Sun, 
  Telescope, 
  Orbit, 
  Rocket, 
  Map, 
  Wrench,
  BookOpen,
  Lightbulb,
  TestTube,
  Users
} from "lucide-react";

export const citiesByState = [
  {
    state: "RN",
    cities: [
      "Natal", "São Gonçalo do Amarante", "Goianinha", 
      "São Paulo do Potengi", "Pendências", "Parnamirim", 
      "Canguaretama", "Macaíba", "Extremoz", "Maxaranguape",
      "Vila Flor", "Açu"
    ]
  },
  {
    state: "BA",
    cities: [
      "Feira de Santana", "Vitória da Conquista", "Seabra", 
      "Andaraí", "Lençóis", "Ipecaetá", "Aramari",
      "Santo Antônio de Jesus", "Maetinga", "Poções",
      "Milagres", "Boa Nova", "Brumado", "Eunápolis",
      "Santa Terezinha", "Lamarão", "Mata de São João",
      "Arembepe", "Coração de Maria", "Barra do Choça"
    ]
  },
  {
    state: "CE",
    cities: ["Juazeiro do Norte", "Brejo Santo"]
  },
  {
    state: "PE",
    cities: ["Salgueiro"]
  }
];

export const experiments = [
  {
    title: "Observação Solar",
    description: "Equipamentos seguros para ver a estrela mais próxima de nós.",
    icon: Sun,
    gradient: "from-amber-500 to-orange-500",
  },
  {
    title: "Planetário",
    description: "Uma viagem imersiva pelas constelações e mitologias.",
    icon: Orbit,
    gradient: "from-blue-500 to-violet-500",
  },
  {
    title: "Espectroscopia",
    description: "Desvendando a composição das estrelas através da luz.",
    icon: TestTube,
    gradient: "from-emerald-500 to-cyan-500",
  },
  {
    title: "Foguetes",
    description: "Física aplicada com lançamentos de garrafa PET.",
    icon: Rocket,
    gradient: "from-slate-500 to-blue-500",
  },
  {
    title: "Trilha Científica",
    description: "Desafios de conhecimento em formato de gincana.",
    icon: Map,
    gradient: "from-green-700 to-blue-600",
  },
  {
    title: "Construção de Lunetas",
    description: "Óptica na prática, montando instrumentos caseiros.",
    icon: Telescope,
    gradient: "from-violet-500 to-indigo-500",
  }
];

export const team = [
  {
    name: "Prof. Leonardo Almeida",
    title: "Doutor em Astrofísica (INPE)",
    role: "Coord. UFRN",
    bio: "Especialista em estrelas massivas e buracos negros. Acredita que a ciência deve chegar a todos os cantos do Nordeste.",
    initials: "LA",
    image: "/images/leo.png"
  },
  {
    name: "Profª Selma Vieira",
    title: "Doutora em Física (UFRN)",
    role: "Coord. IFBA",
    bio: "Pesquisadora dedicada a levar o fascínio da física para além das paredes da universidade, focada na educação básica.",
    initials: "SV",
    image: "/images/selma.png"
  },
  {
    name: "Prof. Marildo Pereira",
    title: "Doutor em Astronomia (INPE)",
    role: "Coord. UEFS",
    bio: "Com vasta experiência em observação astronômica, coordena as ações no interior baiano inspirando novas gerações.",
    initials: "MP",
    image: "/images/marildo.png"
  }
];

export const pillars = [
  {
    title: "Acessibilidade",
    description: "Levar equipamentos e conhecimento onde eles raramente chegam, de forma totalmente gratuita e adaptada à realidade local.",
    icon: Users
  },
  {
    title: "Prática Científica",
    description: "Substituir a decoreba pela experiência mão na massa, onde cada estudante é protagonista da sua própria descoberta.",
    icon: Wrench
  },
  {
    title: "Identidade",
    description: "Valorizar o contexto e a cultura nordestina no ensino da ciência, provando que o sertão também é lugar de inovação.",
    icon: Lightbulb
  }
];

export const workshops = [
  { title: "Expansão do Universo" },
  { title: "Construção de Lunetas" },
  { title: "Luz e Matéria" },
  { title: "Quiz Científico" },
  { title: "Atividades Práticas" }
];

export const missions = [
  {
    step: "01",
    title: "Trilha Científica",
    description: "Despertar inicial com perguntas e desafios."
  },
  {
    step: "02",
    title: "Oficinas",
    description: "Atividades imersivas divididas em estações."
  },
  {
    step: "03",
    title: "Quiz",
    description: "Competição saudável para fixação do conhecimento."
  },
  {
    step: "04",
    title: "Foguetes",
    description: "Lançamento prático e cálculo de trajetórias."
  },
  {
    step: "05",
    title: "Observação Noturna",
    description: "Visualização de planetas e da Lua com telescópios."
  }
];
