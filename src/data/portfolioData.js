export const personalInfo = {
  name: "Shane Santiago",
  role: "Desenvolvedor Full Stack",
  description: "Transformo ideias em experiências digitais incríveis. Especializado em criar aplicações web modernas, escaláveis e com design impactante.",
  email: "shane.santiago.1@gmail.com",
  whatsapp: "31 991758963",
  location: "Brasil",
  profileImage: "https://portfolio-shanesantiago.netlify.app/static/media/1000108094.7edc85a990fe188985f2.jpg",
};

export const aboutMe = {
  title: "Sobre Mim",
  paragraphs: [
    "Olá! Sou desenvolvedor Full Stack apaixonado por criar soluções digitais que fazem a diferença. Com experiência em projetos web e mobile de diversos tamanhos e complexidades.",
    "Minha jornada começou com curiosidade sobre como as coisas funcionam na web, e hoje tenho a habilidade de transformar conceitos em realidade através do código.",
    "Quando não estou codando, você pode me encontrar explorando novas tecnologias, contribuindo para projetos ou aprendendo algo novo."
  ],
  stats: [
    { number: "50+", label: "Projetos Concluídos" },
    { number: "3+", label: "Anos de Experiência" },
    { number: "20+", label: "Clientes Satisfeitos" },
    { number: "100%", label: "Dedicação" },
  ]
};

export const skills = [
  {
    category: "Frontend",
    items: [
      { name: "HTML5", level: 100 },
      { name: "CSS3", level: 100 },
      { name: "JavaScript", level: 100 },
      { name: "TypeScript", level: 100 },
      { name: "React.js", level: 100 },
      { name: "React Native", level: 100 },
      { name: "Next.js", level: 85 },
      { name: "Styled Components", level: 100 },
    ]
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: 100 },
      { name: "Express.js", level: 88 },
      { name: "PostgreSQL", level: 100 },
      { name: "MySQL", level: 100 },
      { name: "MongoDB", level: 82 },
      { name: "Firebase", level: 78 },
      { name: "Sequelize", level: 100 },
      { name: "Prisma", level: 100 },
    ]
  },
  {
    category: "Ferramentas",
    items: [
      { name: "Git", level: 90 },
      { name: "GitHub", level: 100 },
      { name: "n8n", level: 100 },
      { name: "Jest", level: 75 },
    ]
  }
];

export const projects = [
  {
    id: 1,
    title: "Nutreedo",
    description: "Landing page completa de e-commerce para produtos de nutrição e suplementos, com design moderno e conversão otimizada.",
    image: "https://nutreedo.com.br/assets/image-DGA3uy_L.png",
    technologies: ["React", "Vite", "CSS3", "Responsivo"],
    liveUrl: "https://nutreedo.com.br/",
    githubUrl: null,
    featured: true,
  },
  {
    id: 2,
    title: "M30 Fitness",
    description: "Website institucional para academia com design impactante, informações sobre planos e integração com redes sociais.",
    image: "https://m30fitness.com.br/static/media/bg.84cc2f27facc58f5e716.png",
    technologies: ["React", "JavaScript", "CSS3", "UI/UX"],
    liveUrl: "https://m30fitness.com.br/",
    githubUrl: null,
    featured: true,
  },
  {
    id: 3,
    title: "Evangelize",
    description: "Aplicativo mobile para evangelização e estudos bíblicos, disponível na Google Play Store.",
    image: "https://play-lh.googleusercontent.com/6z05664aHxmLw3Ex5cvhG5BtD7C-218vw6sj_oJ-9q8RlI1r7aJwA3ZnLz2F8TKNdpI=w480-h960-rw",
    technologies: ["React Native", "Firebase", "Mobile", "Android"],
    liveUrl: "https://play.google.com/store/apps/details?id=com.valleai.evangelize&hl=pt_BR",
    githubUrl: null,
    featured: true,
  },
  {
    id: 4,
    title: "Super Treinos Coach",
    description: "Aplicativo para personal trainers gerenciarem seus alunos, treinos e acompanhamento de evolução.",
    image: "https://play-lh.googleusercontent.com/pgR_maw8_tXrjtG_IUBMW_Mj-UIgkziORHBez1arUsP1WWFuJbgBUGVe9rJUU-0f3XB4=w480-h960-rw",
    technologies: ["React Native", "Node.js", "API REST", "Mobile"],
    liveUrl: "https://play.google.com/store/apps/details?id=com.appsupercoach.app&hl=pt_BR",
    githubUrl: null,
    featured: true,
  },
  {
    id: 5,
    title: "Super Treinos",
    description: "Aplicativo de treinos para usuários finais com exercícios, rotinas e acompanhamento de progresso.",
    image: "https://play-lh.googleusercontent.com/__pcKhfJ83mFCGwGJpbLhW1NQOiJsdQrYwF1hEcwuxfRLYtyvL0PYP5zqWsT-bEt5yE=w480-h960-rw",
    technologies: ["React Native", "Firebase", "Redux", "Mobile"],
    liveUrl: "https://play.google.com/store/apps/details?id=com.appsupercoach.app&hl=pt_BR",
    githubUrl: null,
    featured: false,
  },
  {
    id: 6,
    title: "Super Treinos Coach Pro",
    description: "Versão profissional do app para coaches com recursos avançados de gestão e análise de dados.",
    image: "https://play-lh.googleusercontent.com/EIqwWi46rnicI8m2X0YyoBWlPlRao5qIn9teYlE6i8CNqugaW5QfKPtn0Hs8yEDvUNw=w480-h960-rw",
    technologies: ["React Native", "Node.js", "PostgreSQL", "Mobile"],
    liveUrl: "https://play.google.com/store/apps/details?id=com.appsupercoachteacher.app&hl=pt_BR",
    githubUrl: null,
    featured: false,
  },
];

export const experiences = [
  {
    role: "Desenvolvedor Full Stack",
    company: "Freelancer",
    period: "2021 - Presente",
    description: "Desenvolvimento de aplicações web e mobile para diversos clientes, incluindo e-commerces, sites institucionais e apps."
  },
  {
    role: "Desenvolvedor Mobile",
    company: "Projetos Próprios",
    period: "2022 - Presente",
    description: "Criação de aplicativos móveis publicados na Google Play Store com milhares de downloads."
  },
];

export const services = [
  {
    icon: "code",
    title: "Desenvolvimento Web",
    description: "Criação de sites e aplicações web modernas, responsivas e otimizadas."
  },
  {
    icon: "mobile",
    title: "Apps Mobile",
    description: "Desenvolvimento de aplicativos móveis com React Native para Android e iOS."
  },
  {
    icon: "design",
    title: "UI/UX Design",
    description: "Design de interfaces intuitivas e experiências de usuário memoráveis."
  },
  {
    icon: "server",
    title: "Backend & APIs",
    description: "Desenvolvimento de APIs robustas e escaláveis com Node.js e Python."
  },
];
