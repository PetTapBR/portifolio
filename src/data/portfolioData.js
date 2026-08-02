export const LANGUAGES = Object.freeze({
  ptBR: "pt-BR",
  enUS: "en-US",
  esES: "es-ES",
});

export const DEFAULT_LANGUAGE = LANGUAGES.ptBR;

const portfolioByLanguage = {
  [LANGUAGES.ptBR]: {
    layout: {
      navItems: [
        { to: "/", label: "Início" },
        { to: "/sobre", label: "Sobre" },
        { to: "/projetos", label: "Projetos" },
        { to: "/contato", label: "Contato" },
      ],
      languageSwitchLabel: "Alternar idioma",
      footerTitle: "Vamos conversar sobre seu projeto?",
      footerText: "Projetos sob medida em web, IA e automação.",
      footerCta: "Falar Comigo",
    },
    home: {
      kicker: "Portfólio Profissional",
      name: "Rodrigo Ramos",
      title: "CTO, Founder e AI Product Builder",
      subtitle:
        "Transformando processos manuais em sistemas inteligentes com foco em resultado de negócio.",
      projectsCta: "Ver Projetos",
      contactCta: "Falar Comigo",
      photoAlt: "Foto profissional de Rodrigo Ramos",
      photoHintStart: "Use sua foto profissional em",
      photoHintEnd: "para exibir aqui.",
      avatarAria: "Avatar profissional",
      highlightLabel: "Destaque",
      highlightTitle: "🏆 Vencedor do Agro Inova Summit 2025",
      highlightText: "🚜 CTO e Sócio Fundador da Conecta Rural",
      aboutLabel: "Sobre",
      aboutTitle: "Quem sou eu",
      aboutText:
        "Sou CTO e Sócio Fundador da Conecta Rural, startup vencedora do Agro Inova Summit 2025. Desenvolvo plataformas web, soluções de inteligência artificial e sistemas de automação focados em resolver problemas reais de empresas e produtores rurais.",
      buildLabel: "Metodologia",
      buildTitle: "Como construo produtos",
      buildItems: [
        "🚀 Desenvolvimento acelerado por IA",
        "🤖 Agentes e automações",
        "⚙️ Integração entre sistemas",
        "📊 Desenvolvimento orientado a dados",
        "🌱 Soluções para agronegócio",
      ],
      technologiesLabel: "Tecnologias",
      technologiesTitle: "Stack principal",
      technologiesLine:
        "React • Next.js • Node.js • n8n • Firebase • Supabase • Google Apps Script • Docker • WhatsApp API • IA",
      metricsAria: "Métricas de impacto",
      projectsLabel: "Projetos",
      projectsTitle: "Projetos em Destaque",
      specialtiesLabel: "Especialidades",
      specialtiesTitle: "Problemas que resolvo",
    },
    aboutPage: {
      label: "Sobre",
      title: "Rodrigo Ramos",
      paragraphs: [
        "Desenvolvedor de soluções web, IA e automação com foco em transformar operações manuais em sistemas digitais inteligentes.",
        "Atuação orientada a produto: da descoberta e modelagem de negócio até arquitetura, implementação, integrações e evolução escalável da plataforma.",
      ],
      methodologyLabel: "Metodologia",
      methodologyTitle: "Como eu trabalho",
      methodologyText:
        "Utilizo inteligência artificial, automação e desenvolvimento assistido por IA para acelerar a criação de produtos, protótipos e soluções empresariais, mantendo foco em arquitetura, qualidade e resultado de negócio.",
      toolsLabel: "Ferramentas",
      toolsTitle: "Ferramentas que utilizo",
      tools: [
        "Codex",
        "Cursor",
        "GitHub Copilot",
        "n8n",
        "Firebase",
        "Supabase",
        "Vercel",
      ],
      cards: [
        {
          title: "Produto + Tecnologia",
          description: "da estratégia ao deploy",
        },
        {
          title: "IA + Automação",
          description: "foco em eficiência operacional",
        },
        {
          title: "Setores",
          description: "agronegócio, serviços e PMEs",
        },
      ],
    },
    projectsPage: {
      label: "Projetos",
      title: "Portfólio de produtos e cases",
      description:
        "Selecione um projeto para abrir o case completo em página dedicada.",
    },
    casePage: {
      label: "Case de Projeto",
      projectLinkLabel: "Link do projeto:",
      featuresDefaultTitle: "Principais funcionalidades",
      responsibilitiesTitle: "Principais responsabilidades",
      technologiesTitle: "Tecnologias utilizadas",
      approachTitle: "Abordagem",
      galleryLabel: "Galeria",
      galleryTitle: "Telas do projeto",
      backToProjects: "Voltar para projetos",
      openSystem: "Abrir Sistema",
      talkAboutProject: "Falar sobre este projeto",
      galleryAltSuffix: "do projeto",
      previousImage: "Imagem anterior",
      nextImage: "Próxima imagem",
      clientCasesLabel: "Cases reais",
      clientCasesTitle: "Soluções empresariais implementadas",
      problemLabel: "Problema:",
      solutionLabel: "Solução:",
      resultLabel: "Resultado:",
      screenshotLabel: "Screenshot do sistema",
      expandImage: "Expandir imagem",
      closeImage: "Fechar imagem",
    },
    contactPage: {
      label: "Contato",
      title: "Vamos falar sobre seu projeto",
      description:
        "Se você precisa de desenvolvimento web, automação de processos ou aplicações com IA, entre em contato para estruturarmos a solução.",
    },
    metrics: [
      { value: "🏆 1", label: "Startup Premiada" },
      { value: "🚀 3", label: "Produtos Próprios" },
      { value: "🤖", label: "Automações por encomenda desenvolvidas" },
      { value: "⚡ AI-Native", label: "Development" },
      { value: "🌱 AgroTech", label: "& IA" },
    ],
    problems: [
      "Automação de WhatsApp",
      "Sistemas para Agronegócio",
      "Integração entre plataformas",
      "IA para atendimento",
      "Dashboards operacionais",
      "Sistemas de pedidos",
    ],
    projectCards: [
      {
        id: "conecta-rural",
        name: "Conecta Rural",
        tag: "Startup Agro",
        problem:
          "Digitalização das operações do agronegócio com automação, integrações e dados em tempo real.",
        tech: ["React", "React Native", "APIs", "Automação de Processos"],
        path: "/projetos/conecta-rural",
        cta: "Ver Case",
        cover: "/images/conecta-rural/capa.png",
        tone: "tone-blue",
        featured: true,
      },
      {
        id: "pettapbr",
        name: "PetTapBR",
        tag: "NFC + Identificação Digital",
        problem:
          "Identificação digital de pets por NFC para ampliar as chances de reencontro com informações sempre atualizadas.",
        tech: ["React", "JavaScript", "NFC", "Cloud Hosting"],
        path: "/projetos/pettapbr",
        cta: "Ver Case",
        cover: "/images/pettapbr/capa.png",
        tone: "tone-violet",
        featured: false,
      },
      {
        id: "painel-ia",
        name: "Soluções Empresariais e Automações",
        tag: "Google Workspace + IA + WhatsApp",
        problem:
          "Automações personalizadas desenvolvidas para empresas locais com Google Apps Script, Google Sheets, Web Apps, IA e integrações com WhatsApp.",
        tech: [
          "Google Apps Script",
          "Google Sheets",
          "Web Apps",
          "IA",
          "WhatsApp",
        ],
        path: "/projetos/painel-ia",
        cta: "Ver Cases",
        cover: "/images/painel-ia/capa.png",
        tone: "tone-cyan",
        featured: false,
      },
      {
        id: "sistema-ark",
        name: "Sistema ARK",
        tag: "Gestão Rural",
        problem:
          "Plataforma web para centralizar gestão administrativa, financeira e operacional de propriedades rurais, com acesso por computador e celular.",
        tech: ["React", "JavaScript", "APIs", "Banco de Dados"],
        path: "/projetos/sistema-ark",
        cta: "Ver Case",
        cover: "/images/sistema-ark/capa.png",
        tone: "tone-emerald",
        featured: true,
      },
    ],
    cases: {
      conectaRural: {
        projectName: "Conecta Rural",
        roleTitle: "CTO & Sócio Fundador — Conecta Rural",
        summary: [
          "A Conecta Rural é uma startup focada na digitalização e otimização das operações do agronegócio, conectando produtores rurais, distribuidores e equipes de campo por meio de tecnologia, automação e inteligência artificial.",
          "Como CTO e Sócio Fundador, fui responsável pela concepção da plataforma, definição da arquitetura tecnológica, desenvolvimento do aplicativo e criação das soluções de automação que sustentam o ecossistema da empresa.",
          "Atuo desde o planejamento do produto até a implementação de sistemas, integrações, experiência do usuário e estratégias de escalabilidade. A plataforma foi desenvolvida para reduzir processos manuais, aumentar a eficiência operacional, melhorar a comunicação entre equipes e apoiar a tomada de decisões com dados em tempo real.",
        ],
        responsibilities: [
          "Idealização e desenvolvimento do aplicativo Conecta Rural.",
          "Arquitetura e implementação da plataforma.",
          "Desenvolvimento de sistemas web e mobile.",
          "Integração de automações e inteligência artificial.",
          "Gestão da infraestrutura tecnológica e evolução do produto.",
          "Definição da estratégia tecnológica da empresa.",
        ],
        highlight: {
          title: "Destaque",
          text: "A Conecta Rural foi vencedora do Agro Inova Summit 2025, reconhecimento que validou o potencial da solução para transformar processos e gerar eficiência no setor agropecuário.",
        },
        technologies: [
          "React",
          "React Native",
          "JavaScript",
          "APIs",
          "Automação de Processos",
          "Integrações Web",
        ],
        approach:
          "Desenvolvimento assistido por IA para acelerar entregas, validar hipóteses de produto e evoluir a plataforma com qualidade arquitetural.",
        gallery: {
          folder: "public/images/conecta-rural/",
          images: [
            { src: "/images/conecta-rural/app-01.png", label: "Tela 01" },
            { src: "/images/conecta-rural/app-02.png", label: "Tela 02" },
            { src: "/images/conecta-rural/app-03.png", label: "Tela 03" },
            { src: "/images/conecta-rural/app-04.png", label: "Tela 04" },
            { src: "/images/conecta-rural/app-05.png", label: "Tela 05" },
            { src: "/images/conecta-rural/app-06.png", label: "Tela 06" },
          ],
        },
      },
      pettapbr: {
        projectName: "PetTapBR",
        roleTitle: "Fundador & Desenvolvedor — PetTapBR",
        summary: [
          "A PetTapBR é uma plataforma que combina tecnologia NFC e identificação digital para ajudar tutores a proteger seus animais de estimação.",
          "A solução permite que uma tag NFC instalada na coleira do pet dê acesso instantâneo ao seu perfil digital, contendo contatos de emergência, dados do animal e formas rápidas de comunicação com o tutor.",
          "Como Fundador e Desenvolvedor, fui responsável pela idealização do produto, desenvolvimento da plataforma, experiência do usuário, estrutura tecnológica e definição do modelo de negócio. O objetivo é oferecer uma solução simples, acessível e eficiente para aumentar as chances de reencontro de pets perdidos.",
        ],
        responsibilities: [
          "Criação do conceito e modelo de negócio.",
          "Desenvolvimento da plataforma web.",
          "Estruturação do sistema de perfis digitais para pets.",
          "Integração com tecnologia NFC.",
          "Desenvolvimento da identidade visual e experiência do usuário.",
          "Planejamento de escalabilidade e monetização da plataforma.",
        ],
        highlight: {
          title: "Problema resolvido",
          text: "As plaquinhas tradicionais possuem espaço limitado e podem ficar desatualizadas. A PetTapBR transforma a identificação do pet em um perfil digital dinâmico, acessível instantaneamente pela aproximação de um smartphone compatível com NFC.",
        },
        technologies: [
          "React",
          "JavaScript",
          "NFC",
          "Desenvolvimento Web",
          "Cloud Hosting",
          "UX/UI Design",
        ],
        approach:
          "Desenvolvimento assistido por IA para acelerar prototipação, testes de usabilidade e validação rápida do modelo de produto.",
        gallery: {
          folder: "public/images/pettapbr/",
          images: [
            { src: "/images/pettapbr/app-01.png", label: "Tela 01" },
            { src: "/images/pettapbr/app-02.png", label: "Tela 02" },
            { src: "/images/pettapbr/app-03.png", label: "Tela 03" },
            { src: "/images/pettapbr/app-04.png", label: "Tela 04" },
            { src: "/images/pettapbr/app-05.png", label: "Tela 05" },
            { src: "/images/pettapbr/app-06.png", label: "Tela 06" },
          ],
        },
      },
      painelIa: {
        projectName: "Soluções Empresariais e Automações",
        roleTitle: "Cases Reais - Soluções Empresariais",
        summary: [
          "Automações implementadas para empresas locais usando IA, WhatsApp, Google Workspace e sistemas web personalizados.",
          "Esta divisão apresenta casos reais com foco em ganho operacional, redução de retrabalho e decisão orientada a dados.",
        ],
        responsibilities: [
          "Mapeamento de processos e gargalos operacionais.",
          "Desenvolvimento de web apps e automações sob medida.",
          "Integração entre Google Workspace, WhatsApp e APIs.",
          "Evolução contínua baseada em métricas de negócio.",
        ],
        clientCases: [
          {
            name: "Empresa A - Distribuidora Hortifruti da Região Serrana",
            problem:
              "Envio manual de pedidos via WhatsApp, com necessidade de procurar contatos, montar mensagens e conferir produtos e quantidades.",
            solution:
              "Sistema integrado ao Google Sheets que automatiza o envio de pedidos para fornecedores pelo WhatsApp com apenas alguns cliques.",
            result:
              "Processo mais rápido, padronizado e com menos erros operacionais.",
            image: "/images/painel-ia/case-01.png",
          },
          {
            name: "Empresa B - Distribuidora Hortifruti da Região Serrana",
            problem:
              "Controle manual de pedidos e falta de visibilidade para os clientes sobre compras anteriores.",
            solution:
              "Portal de pedidos online integrado ao Google Sheets, permitindo que cada cliente realize pedidos através de um link personalizado e consulte seu histórico de compras em tempo real.",
            result:
              "Processo digitalizado, atendimento mais ágil, redução de retrabalho e melhor relacionamento com os clientes.",
            image: "/images/painel-ia/case-02.png",
          },
          {
            name: "Empresa C - Distribuidora Hortifruti da Região Serrana",
            problem:
              "A montagem das rotas era feita manualmente, exigindo conferência de fornecedores, produtos, quantidades e caixas por caminhão, aumentando o tempo operacional e o risco de erro.",
            solution:
              "Sistema web integrado aos pedidos que agrupa automaticamente os itens por rota/caminhão, calcula a quantidade de caixas por fornecedor e gera um PDF pronto para envio aos motoristas.",
            result:
              "Rotas organizadas com mais rapidez, redução de retrabalho, melhor conferência logística e envio padronizado das informações para a equipe de entrega.",
            image: "/images/painel-ia/case-03.png",
          },
          {
            name: "Empresa D - Distribuidora Hortifruti da Região Serrana",
            problem:
              "Parte dos clientes enviava pedidos em formato de texto pelo WhatsApp, exigindo que os funcionários identificassem produtos, localizassem as linhas corretas na planilha e lançassem manualmente cada item, tornando o processo lento e sujeito a erros.",
            solution:
              "Desenvolvimento de uma ferramenta de lançamento inteligente que interpreta automaticamente o texto enviado pelo cliente. O operador apenas copia e cola a mensagem do WhatsApp, e o sistema identifica os produtos, converte as quantidades para o formato correto e registra o pedido diretamente na planilha do cliente.",
            result:
              "Redução drástica do tempo de lançamento de pedidos, eliminação de erros de digitação e padronização do processo de cadastro, mesmo para clientes que não utilizam o portal de pedidos.",
            image: "/images/painel-ia/case-04.png",
          },
        ],
        highlight: {
          title: "Diferencial",
          text: "Com esta estrutura, o visitante entende que além de produtos próprios você também entrega soluções reais para clientes, aumentando credibilidade e autoridade técnica.",
        },
        technologies: [
          "Google Apps Script",
          "Google Sheets",
          "Web Apps",
          "IA",
          "WhatsApp API",
          "Automação de Processos",
        ],
        approach:
          "Entrega modular e iterativa: cada automação nasce de uma dor concreta e evolui com ciclos curtos de validação junto ao cliente.",
        gallery: {
          folder: "public/images/painel-ia/",
          images: [],
        },
      },
      sistemaArk: {
        projectName: "Sistema ARK",
        roleTitle: "Criador & Desenvolvedor — Sistema ARK",
        liveUrl: "https://sistema.arksistemas.com.br/",
        summary: [
          "O Sistema ARK é uma plataforma web desenvolvida para atender as necessidades de produtores rurais, oferecendo uma solução completa para gestão operacional, administrativa e financeira da propriedade.",
          "O sistema foi projetado para funcionar de forma totalmente responsiva, permitindo acesso por computador e smartphone, garantindo praticidade para o produtor em qualquer lugar.",
          "Como idealizador e desenvolvedor do projeto, fui responsável pela concepção da plataforma, definição dos processos, arquitetura da solução e desenvolvimento das funcionalidades voltadas à realidade do agronegócio.",
          "O objetivo do Sistema ARK é centralizar informações que normalmente ficam dispersas em planilhas, cadernos e aplicativos diferentes, transformando a gestão da propriedade em um processo simples, organizado e acessível.",
        ],
        featuresTitle: "Principais funcionalidades",
        features: [
          "Cadastro e gestão de funcionários.",
          "Cadastro de clientes e fornecedores.",
          "Controle de produtos e estoque.",
          "Lançamentos financeiros.",
          "Relatórios gerenciais.",
          "Fechamentos financeiros.",
          "Controle operacional da propriedade.",
          "Histórico de movimentações.",
          "Dashboard com indicadores estratégicos.",
          "Acesso web com compatibilidade para celular e computador.",
          "Interface simples e intuitiva para usuários com diferentes níveis de familiaridade tecnológica.",
        ],
        responsibilities: [
          "Concepção do produto.",
          "Levantamento de requisitos junto aos usuários.",
          "Arquitetura da plataforma.",
          "Desenvolvimento front-end e back-end.",
          "Modelagem de banco de dados.",
          "Design da experiência do usuário (UX/UI).",
          "Planejamento de futuras integrações com automações e inteligência artificial.",
        ],
        highlight: {
          title: "Problema resolvido",
          text: "Muitos produtores rurais ainda realizam controles administrativos de forma manual, utilizando planilhas ou anotações descentralizadas. O Sistema ARK centraliza todas as informações em uma única plataforma, reduzindo erros, aumentando a produtividade e facilitando a tomada de decisão baseada em dados.",
        },
        technologies: [
          "React",
          "JavaScript",
          "APIs",
          "Banco de Dados",
          "Cloud Computing",
          "UX/UI",
          "Desenvolvimento Web Responsivo",
        ],
        approach:
          "Desenvolvimento assistido por IA e automação para reduzir tempo de entrega, estruturar integrações e acelerar a evolução funcional do produto.",
        gallery: {
          folder: "public/images/sistema-ark/",
          images: [
            { src: "/images/sistema-ark/app-01.png", label: "Tela 01" },
            { src: "/images/sistema-ark/app-02.png", label: "Tela 02" },
            { src: "/images/sistema-ark/app-03.png", label: "Tela 03" },
            { src: "/images/sistema-ark/app-04.png", label: "Tela 04" },
            { src: "/images/sistema-ark/app-05.png", label: "Tela 05" },
            { src: "/images/sistema-ark/app-06.png", label: "Tela 06" },
          ],
        },
      },
    },
  },
  [LANGUAGES.enUS]: {
    layout: {
      navItems: [
        { to: "/", label: "Home" },
        { to: "/sobre", label: "About" },
        { to: "/projetos", label: "Projects" },
        { to: "/contato", label: "Contact" },
      ],
      languageSwitchLabel: "Switch language",
      footerTitle: "Let's talk about your project?",
      footerText: "Tailored projects in web, AI and automation.",
      footerCta: "Contact Me",
    },
    home: {
      kicker: "Professional Portfolio",
      name: "Rodrigo Ramos",
      title: "CTO, Founder and AI Product Builder",
      subtitle:
        "Turning manual processes into smart systems focused on business outcomes.",
      projectsCta: "View Projects",
      contactCta: "Contact Me",
      photoAlt: "Rodrigo Ramos professional photo",
      photoHintStart: "Place your professional photo at",
      photoHintEnd: "to display it here.",
      avatarAria: "Professional avatar",
      highlightLabel: "Highlight",
      highlightTitle: "🏆 Agro Inova Summit 2025 Winner",
      highlightText: "🚜 CTO and Co-Founder at Conecta Rural",
      aboutLabel: "About",
      aboutTitle: "Who I am",
      aboutText:
        "I am CTO and Co-Founder of Conecta Rural, a startup that won Agro Inova Summit 2025. I build web platforms, AI solutions and automation systems focused on solving real problems for companies and rural producers.",
      buildLabel: "Methodology",
      buildTitle: "How I build products",
      buildItems: [
        "🚀 AI-accelerated development",
        "🤖 Agents and automations",
        "⚙️ Cross-system integration",
        "📊 Data-driven development",
        "🌱 Agribusiness-focused solutions",
      ],
      technologiesLabel: "Technologies",
      technologiesTitle: "Core stack",
      technologiesLine:
        "React • Next.js • Node.js • n8n • Firebase • Supabase • Google Apps Script • Docker • WhatsApp API • AI",
      metricsAria: "Impact metrics",
      projectsLabel: "Projects",
      projectsTitle: "Featured Projects",
      specialtiesLabel: "Specialties",
      specialtiesTitle: "Problems I solve",
    },
    aboutPage: {
      label: "About",
      title: "Rodrigo Ramos",
      paragraphs: [
        "Web, AI and automation solutions developer focused on turning manual operations into intelligent digital systems.",
        "Product-driven work across the full cycle: discovery and business modeling through architecture, implementation, integrations and scalable platform evolution.",
      ],
      methodologyLabel: "Methodology",
      methodologyTitle: "How I work",
      methodologyText:
        "I use artificial intelligence, automation and AI-assisted development to speed up the creation of products, prototypes and business solutions, while maintaining focus on architecture, quality and business outcomes.",
      toolsLabel: "Tools",
      toolsTitle: "Tools I use",
      tools: [
        "Codex",
        "Cursor",
        "GitHub Copilot",
        "n8n",
        "Firebase",
        "Supabase",
        "Vercel",
      ],
      cards: [
        {
          title: "Product + Technology",
          description: "from strategy to deployment",
        },
        {
          title: "AI + Automation",
          description: "focused on operational efficiency",
        },
        {
          title: "Sectors",
          description: "agribusiness, services and SMBs",
        },
      ],
    },
    projectsPage: {
      label: "Projects",
      title: "Product and case portfolio",
      description:
        "Select a project to open the full case on its dedicated page.",
    },
    casePage: {
      label: "Project Case",
      projectLinkLabel: "Project link:",
      featuresDefaultTitle: "Key features",
      responsibilitiesTitle: "Main responsibilities",
      technologiesTitle: "Technologies used",
      approachTitle: "Approach",
      galleryLabel: "Gallery",
      galleryTitle: "Project screens",
      backToProjects: "Back to projects",
      openSystem: "Open System",
      talkAboutProject: "Talk about this project",
      galleryAltSuffix: "from the project",
      previousImage: "Previous image",
      nextImage: "Next image",
      clientCasesLabel: "Real cases",
      clientCasesTitle: "Delivered business automations",
      problemLabel: "Problem:",
      solutionLabel: "Solution:",
      resultLabel: "Result:",
      screenshotLabel: "System screenshot",
      expandImage: "Expand image",
      closeImage: "Close image",
    },
    contactPage: {
      label: "Contact",
      title: "Let's discuss your project",
      description:
        "If you need web development, process automation or AI applications, get in touch and we can structure the right solution.",
    },
    metrics: [
      { value: "🏆 1", label: "Award-Winning Startup" },
      { value: "🚀 3", label: "Proprietary Products" },
      { value: "🤖", label: "Custom automations delivered" },
      { value: "⚡ AI-Native", label: "Development" },
      { value: "🌱 AgriTech", label: "& AI" },
    ],
    problems: [
      "WhatsApp automation",
      "Agribusiness systems",
      "Cross-platform integration",
      "AI for customer service",
      "Operational dashboards",
      "Order management systems",
    ],
    projectCards: [
      {
        id: "conecta-rural",
        name: "Conecta Rural",
        tag: "Agri Startup",
        problem:
          "Digitalization of agribusiness operations through automation, integrations and real-time data.",
        tech: ["React", "React Native", "APIs", "Process Automation"],
        path: "/projetos/conecta-rural",
        cta: "View Case",
        cover: "/images/conecta-rural/capa.png",
        tone: "tone-blue",
        featured: true,
      },
      {
        id: "pettapbr",
        name: "PetTapBR",
        tag: "NFC + Digital ID",
        problem:
          "NFC-based digital pet identification to increase reunion rates with always up-to-date information.",
        tech: ["React", "JavaScript", "NFC", "Cloud Hosting"],
        path: "/projetos/pettapbr",
        cta: "View Case",
        cover: "/images/pettapbr/capa.png",
        tone: "tone-violet",
        featured: false,
      },
      {
        id: "painel-ia",
        name: "Business Solutions and Automations",
        tag: "Google Workspace + AI + WhatsApp",
        problem:
          "Custom automations developed for local companies using Google Apps Script, Google Sheets, Web Apps, AI and WhatsApp integrations.",
        tech: [
          "Google Apps Script",
          "Google Sheets",
          "Web Apps",
          "AI",
          "WhatsApp",
        ],
        path: "/projetos/painel-ia",
        cta: "View Cases",
        cover: "/images/painel-ia/capa.png",
        tone: "tone-cyan",
        featured: false,
      },
      {
        id: "sistema-ark",
        name: "Sistema ARK",
        tag: "Farm Management",
        problem:
          "Web platform that centralizes administrative, financial and operational management for rural properties with desktop and mobile access.",
        tech: ["React", "JavaScript", "APIs", "Database"],
        path: "/projetos/sistema-ark",
        cta: "View Case",
        cover: "/images/sistema-ark/capa.png",
        tone: "tone-emerald",
        featured: true,
      },
    ],
    cases: {
      conectaRural: {
        projectName: "Conecta Rural",
        roleTitle: "CTO & Co-Founder — Conecta Rural",
        summary: [
          "Conecta Rural is a startup focused on digitalizing and optimizing agribusiness operations, connecting rural producers, distributors and field teams through technology, automation and artificial intelligence.",
          "As CTO and Co-Founder, I led the platform concept, technology architecture, app development and the automation solutions that support the company's ecosystem.",
          "I work from product planning to system implementation, integrations, user experience and scalability strategy. The platform was built to reduce manual processes, increase operational efficiency, improve team communication and support real-time data-driven decisions.",
        ],
        responsibilities: [
          "Conception and development of the Conecta Rural app.",
          "Platform architecture and implementation.",
          "Web and mobile systems development.",
          "Automation and AI integrations.",
          "Technology infrastructure management and product evolution.",
          "Technology strategy definition for the company.",
        ],
        highlight: {
          title: "Highlight",
          text: "Conecta Rural won Agro Inova Summit 2025, a recognition that validated the solution's potential to transform processes and generate efficiency in agribusiness.",
        },
        technologies: [
          "React",
          "React Native",
          "JavaScript",
          "APIs",
          "Process Automation",
          "Web Integrations",
        ],
        approach:
          "AI-assisted development to speed up delivery, validate product hypotheses and evolve the platform with architectural quality.",
        gallery: {
          folder: "public/images/conecta-rural/",
          images: [
            { src: "/images/conecta-rural/app-01.png", label: "Screen 01" },
            { src: "/images/conecta-rural/app-02.png", label: "Screen 02" },
            { src: "/images/conecta-rural/app-03.png", label: "Screen 03" },
            { src: "/images/conecta-rural/app-04.png", label: "Screen 04" },
            { src: "/images/conecta-rural/app-05.png", label: "Screen 05" },
            { src: "/images/conecta-rural/app-06.png", label: "Screen 06" },
          ],
        },
      },
      pettapbr: {
        projectName: "PetTapBR",
        roleTitle: "Founder & Developer — PetTapBR",
        summary: [
          "PetTapBR is a platform that combines NFC technology and digital identification to help owners keep their pets safer.",
          "The solution allows an NFC tag on the pet collar to provide instant access to a digital profile containing emergency contacts, pet details and quick ways to reach the owner.",
          "As Founder and Developer, I was responsible for product ideation, platform development, user experience, technology structure and business model definition. The goal is to deliver a simple, accessible and efficient solution that increases the chances of reuniting lost pets with their owners.",
        ],
        responsibilities: [
          "Concept and business model creation.",
          "Web platform development.",
          "Digital pet profile system design.",
          "NFC technology integration.",
          "Visual identity and UX development.",
          "Scalability and monetization planning.",
        ],
        highlight: {
          title: "Problem solved",
          text: "Traditional pet tags have limited space and can become outdated. PetTapBR turns pet identification into a dynamic digital profile, instantly accessible through an NFC-enabled smartphone.",
        },
        technologies: [
          "React",
          "JavaScript",
          "NFC",
          "Web Development",
          "Cloud Hosting",
          "UX/UI Design",
        ],
        approach:
          "AI-assisted development to accelerate prototyping, usability testing and rapid validation of the product model.",
        gallery: {
          folder: "public/images/pettapbr/",
          images: [
            { src: "/images/pettapbr/app-01.png", label: "Screen 01" },
            { src: "/images/pettapbr/app-02.png", label: "Screen 02" },
            { src: "/images/pettapbr/app-03.png", label: "Screen 03" },
            { src: "/images/pettapbr/app-04.png", label: "Screen 04" },
            { src: "/images/pettapbr/app-05.png", label: "Screen 05" },
            { src: "/images/pettapbr/app-06.png", label: "Screen 06" },
          ],
        },
      },
      painelIa: {
        projectName: "Business Solutions and Automations",
        roleTitle: "Real Cases - Business Solutions",
        summary: [
          "+10 automations delivered for local companies using AI, WhatsApp, Google Workspace and custom web systems.",
          "This section presents real delivery cases focused on operational gains, less rework and data-driven decisions.",
        ],
        responsibilities: [
          "Process mapping and operational bottleneck discovery.",
          "Custom web apps and automation development.",
          "Google Workspace, WhatsApp and API integrations.",
          "Continuous evolution guided by business metrics.",
        ],
        clientCases: [
          {
            name: "Company A - Regional Produce Distributor",
            problem:
              "Manual order sending via WhatsApp, requiring contact lookup, message drafting, and product and quantity checking.",
            solution:
              "System integrated with Google Sheets that automates sending orders to suppliers via WhatsApp in just a few clicks.",
            result:
              "Faster, standardized process with fewer operational errors.",
            image: "/images/painel-ia/case-01.png",
          },
          {
            name: "Company B - Regional Produce Distributor",
            problem:
              "Manual order control and lack of visibility for customers regarding previous purchases.",
            solution:
              "Online ordering portal integrated with Google Sheets, allowing each customer to place orders through a personalized link and check purchase history in real time.",
            result:
              "Digitized process, faster service, less rework, and better customer relationships.",
            image: "/images/painel-ia/case-02.png",
          },
          {
            name: "Company C - Regional Produce Distributor",
            problem:
              "Route planning was manual, requiring verification of suppliers, products, quantities, and box allocation per truck, which increased operational time and error risk.",
            solution:
              "Web system integrated with order data that automatically groups items by route/truck, calculates box quantities per supplier, and generates a ready-to-send PDF for drivers.",
            result:
              "Routes organized faster, less rework, better logistics verification, and standardized delivery instructions for the transportation team.",
            image: "/images/painel-ia/case-03.png",
          },
          {
            name: "Company D - Regional Produce Distributor",
            problem:
              "Some customers sent orders as plain text over WhatsApp, requiring staff to identify products, find the correct spreadsheet rows, and manually input each item, making the process slow and error-prone.",
            solution:
              "Development of an intelligent order-entry tool that automatically interprets customer text. The operator only copies and pastes the WhatsApp message, and the system identifies products, converts quantities to the correct format, and records the order directly in the customer's spreadsheet.",
            result:
              "Dramatic reduction in order-entry time, elimination of typing errors, and standardized registration workflow, even for customers who do not use the ordering portal.",
            image: "/images/painel-ia/case-04.png",
          },
        ],
        highlight: {
          title: "Differential",
          text: "This structure shows visitors that beyond proprietary products, you also deliver real client solutions with execution depth and technical consistency.",
        },
        technologies: [
          "Google Apps Script",
          "Google Sheets",
          "Web Apps",
          "AI",
          "WhatsApp API",
          "Process Automation",
        ],
        approach:
          "Modular and iterative delivery: every automation starts from a concrete pain point and evolves through short validation cycles with the client.",
        gallery: {
          folder: "public/images/painel-ia/",
          images: [],
        },
      },
      sistemaArk: {
        projectName: "Sistema ARK",
        roleTitle: "Creator & Developer — Sistema ARK",
        liveUrl: "https://sistema.arksistemas.com.br/",
        summary: [
          "Sistema ARK is a web platform developed for rural producers, offering a complete solution for operational, administrative and financial farm management.",
          "The system was designed to be fully responsive, with access from desktop and mobile, ensuring practical use for producers anywhere.",
          "As the project's creator and developer, I was responsible for platform conception, process design, solution architecture and feature development aligned with agribusiness reality.",
          "The goal of Sistema ARK is to centralize information often spread across spreadsheets, notebooks and separate apps, turning farm management into a simple, organized and accessible process.",
        ],
        featuresTitle: "Key features",
        features: [
          "Employee registration and management.",
          "Customer and supplier registration.",
          "Product and inventory control.",
          "Financial entries.",
          "Management reports.",
          "Financial closings.",
          "Farm operational control.",
          "Movement history.",
          "Dashboard with strategic indicators.",
          "Web access with desktop and mobile compatibility.",
          "Simple and intuitive interface for users with different levels of digital familiarity.",
        ],
        responsibilities: [
          "Product conception.",
          "Requirements gathering with end users.",
          "Platform architecture.",
          "Front-end and back-end development.",
          "Database modeling.",
          "User experience design (UX/UI).",
          "Planning future integrations with automation and AI.",
        ],
        highlight: {
          title: "Problem solved",
          text: "Many rural producers still manage administrative controls manually using spreadsheets or decentralized notes. Sistema ARK centralizes all information in a single platform, reducing errors, increasing productivity and enabling data-driven decisions.",
        },
        technologies: [
          "React",
          "JavaScript",
          "APIs",
          "Database",
          "Cloud Computing",
          "UX/UI",
          "Responsive Web Development",
        ],
        approach:
          "AI-assisted and automation-first development to reduce delivery time, structure integrations and speed up product evolution.",
        gallery: {
          folder: "public/images/sistema-ark/",
          images: [
            { src: "/images/sistema-ark/app-01.png", label: "Screen 01" },
            { src: "/images/sistema-ark/app-02.png", label: "Screen 02" },
            { src: "/images/sistema-ark/app-03.png", label: "Screen 03" },
            { src: "/images/sistema-ark/app-04.png", label: "Screen 04" },
            { src: "/images/sistema-ark/app-05.png", label: "Screen 05" },
            { src: "/images/sistema-ark/app-06.png", label: "Screen 06" },
          ],
        },
      },
    },
  },
};

const spanishData = structuredClone(portfolioByLanguage[LANGUAGES.enUS]);

spanishData.layout = {
  navItems: [
    { to: "/", label: "Inicio" },
    { to: "/sobre", label: "Sobre mí" },
    { to: "/projetos", label: "Proyectos" },
    { to: "/contato", label: "Contacto" },
  ],
  languageSwitchLabel: "Cambiar idioma",
  footerTitle: "¿Hablamos de tu proyecto?",
  footerText: "Proyectos a medida de desarrollo web, IA y automatización.",
  footerCta: "Contactarme",
};

spanishData.home = {
  ...spanishData.home,
  kicker: "Portafolio Profesional",
  title: "CTO, fundador y creador de productos con IA",
  subtitle: "Transformo procesos manuales en sistemas inteligentes orientados a resultados de negocio.",
  projectsCta: "Ver Proyectos",
  contactCta: "Contactarme",
  photoAlt: "Foto profesional de Rodrigo Ramos",
  photoHintStart: "Usa tu foto profesional en",
  photoHintEnd: "para mostrarla aquí.",
  avatarAria: "Avatar profesional",
  highlightLabel: "Destacado",
  highlightTitle: "🏆 Ganador del Agro Inova Summit 2025",
  highlightText: "🚜 CTO y socio fundador de Conecta Rural",
  aboutLabel: "Sobre mí",
  aboutTitle: "Quién soy",
  aboutText: "Soy CTO y socio fundador de Conecta Rural, startup ganadora del Agro Inova Summit 2025. Desarrollo plataformas web, soluciones de inteligencia artificial y sistemas de automatización enfocados en resolver problemas reales de empresas y productores rurales.",
  buildLabel: "Metodología",
  buildTitle: "Cómo construyo productos",
  buildItems: [
    "🚀 Desarrollo acelerado por IA",
    "🤖 Agentes y automatizaciones",
    "⚙️ Integración entre sistemas",
    "📊 Desarrollo orientado a datos",
    "🌱 Soluciones para el agronegocio",
  ],
  technologiesLabel: "Tecnologías",
  technologiesTitle: "Stack principal",
  technologiesLine: "React • Next.js • Node.js • n8n • Firebase • Supabase • Google Apps Script • Docker • WhatsApp API • IA",
  metricsAria: "Métricas de impacto",
  projectsLabel: "Proyectos",
  projectsTitle: "Proyectos Destacados",
  specialtiesLabel: "Especialidades",
  specialtiesTitle: "Problemas que resuelvo",
};

spanishData.aboutPage = {
  label: "Sobre mí",
  title: "Rodrigo Ramos",
  paragraphs: [
    "Desarrollador de soluciones web, IA y automatización enfocado en transformar operaciones manuales en sistemas digitales inteligentes.",
    "Trabajo orientado a producto durante todo el ciclo: desde el descubrimiento y el modelado de negocio hasta la arquitectura, implementación, integraciones y evolución escalable de la plataforma.",
  ],
  methodologyLabel: "Metodología",
  methodologyTitle: "Cómo trabajo",
  methodologyText: "Utilizo inteligencia artificial, automatización y desarrollo asistido por IA para acelerar la creación de productos, prototipos y soluciones empresariales, manteniendo el foco en la arquitectura, la calidad y los resultados de negocio.",
  toolsLabel: "Herramientas",
  toolsTitle: "Herramientas que utilizo",
  tools: spanishData.aboutPage.tools,
  cards: [
    { title: "Producto + Tecnología", description: "de la estrategia al despliegue" },
    { title: "IA + Automatización", description: "enfoque en la eficiencia operativa" },
    { title: "Sectores", description: "agronegocio, servicios y pymes" },
  ],
};

spanishData.projectsPage = {
  label: "Proyectos",
  title: "Portafolio de productos y casos",
  description: "Selecciona un proyecto para abrir el caso completo en su página dedicada.",
};

spanishData.casePage = {
  label: "Caso de Proyecto",
  projectLinkLabel: "Enlace del proyecto:",
  featuresDefaultTitle: "Funcionalidades principales",
  responsibilitiesTitle: "Responsabilidades principales",
  technologiesTitle: "Tecnologías utilizadas",
  approachTitle: "Enfoque",
  galleryLabel: "Galería",
  galleryTitle: "Pantallas del proyecto",
  backToProjects: "Volver a proyectos",
  openSystem: "Abrir Sistema",
  talkAboutProject: "Hablar sobre este proyecto",
  galleryAltSuffix: "del proyecto",
  previousImage: "Imagen anterior",
  nextImage: "Imagen siguiente",
  clientCasesLabel: "Casos reales",
  clientCasesTitle: "Soluciones empresariales implementadas",
  problemLabel: "Problema:",
  solutionLabel: "Solución:",
  resultLabel: "Resultado:",
  screenshotLabel: "Captura de pantalla del sistema",
  expandImage: "Ampliar imagen",
  closeImage: "Cerrar imagen",
};

spanishData.contactPage = {
  label: "Contacto",
  title: "Hablemos de tu proyecto",
  description: "Si necesitas desarrollo web, automatización de procesos o aplicaciones con IA, ponte en contacto para que estructuremos la solución adecuada.",
};

spanishData.metrics = [
  { value: "🏆 1", label: "Startup Premiada" },
  { value: "🚀 3", label: "Productos Propios" },
  { value: "🤖", label: "Automatizaciones a medida desarrolladas" },
  { value: "⚡ AI-Native", label: "Desarrollo" },
  { value: "🌱 AgriTech", label: "e IA" },
];

spanishData.problems = [
  "Automatización de WhatsApp",
  "Sistemas para el agronegocio",
  "Integración entre plataformas",
  "IA para atención al cliente",
  "Paneles operativos",
  "Sistemas de pedidos",
];

const spanishCards = [
  ["Startup Agro", "Digitalización de las operaciones del agronegocio con automatización, integraciones y datos en tiempo real.", "Ver Caso"],
  ["NFC + Identificación Digital", "Identificación digital de mascotas mediante NFC para aumentar las posibilidades de reencuentro con información siempre actualizada.", "Ver Caso"],
  ["Google Workspace + IA + WhatsApp", "Automatizaciones personalizadas para empresas locales con Google Apps Script, Google Sheets, aplicaciones web, IA e integraciones con WhatsApp.", "Ver Casos"],
  ["Gestión Rural", "Plataforma web para centralizar la gestión administrativa, financiera y operativa de propiedades rurales, con acceso desde ordenador y móvil.", "Ver Caso"],
];
spanishData.projectCards = spanishData.projectCards.map((card, index) => ({
  ...card,
  tag: spanishCards[index][0],
  problem: spanishCards[index][1],
  cta: spanishCards[index][2],
}));

const spanishCaseCopy = {
  conectaRural: {
    roleTitle: "CTO y socio fundador — Conecta Rural",
    summary: [
      "Conecta Rural es una startup enfocada en digitalizar y optimizar las operaciones del agronegocio, conectando productores rurales, distribuidores y equipos de campo mediante tecnología, automatización e inteligencia artificial.",
      "Como CTO y socio fundador, lideré la concepción de la plataforma, la arquitectura tecnológica, el desarrollo de la aplicación y las soluciones de automatización que sostienen el ecosistema de la empresa.",
      "Trabajo desde la planificación del producto hasta la implementación de sistemas, integraciones, experiencia de usuario y estrategias de escalabilidad. La plataforma reduce procesos manuales, aumenta la eficiencia y apoya decisiones con datos en tiempo real.",
    ],
    responsibilities: ["Concepción y desarrollo de la aplicación Conecta Rural.", "Arquitectura e implementación de la plataforma.", "Desarrollo de sistemas web y móviles.", "Integración de automatizaciones e inteligencia artificial.", "Gestión de infraestructura tecnológica y evolución del producto.", "Definición de la estrategia tecnológica de la empresa."],
    highlight: { title: "Destacado", text: "Conecta Rural ganó el Agro Inova Summit 2025, reconocimiento que validó el potencial de la solución para transformar procesos y generar eficiencia en el agronegocio." },
    approach: "Desarrollo asistido por IA para acelerar entregas, validar hipótesis de producto y evolucionar la plataforma con calidad arquitectónica.",
  },
  pettapbr: {
    roleTitle: "Fundador y desarrollador — PetTapBR",
    summary: [
      "PetTapBR es una plataforma que combina tecnología NFC e identificación digital para ayudar a los tutores a proteger a sus mascotas.",
      "Una etiqueta NFC en el collar permite acceder al instante a un perfil digital con contactos de emergencia, datos del animal y formas rápidas de comunicarse con el tutor.",
      "Como fundador y desarrollador, fui responsable de la idea, la plataforma, la experiencia de usuario, la estructura tecnológica y el modelo de negocio.",
    ],
    responsibilities: ["Creación del concepto y modelo de negocio.", "Desarrollo de la plataforma web.", "Diseño del sistema de perfiles digitales para mascotas.", "Integración con tecnología NFC.", "Desarrollo de identidad visual y experiencia de usuario.", "Planificación de escalabilidad y monetización."],
    highlight: { title: "Problema resuelto", text: "Las placas tradicionales tienen espacio limitado y pueden quedar desactualizadas. PetTapBR convierte la identificación en un perfil digital dinámico, accesible al instante mediante un smartphone con NFC." },
    approach: "Desarrollo asistido por IA para acelerar el prototipado, las pruebas de usabilidad y la validación rápida del producto.",
  },
  painelIa: {
    roleTitle: "Casos reales - Soluciones empresariales",
    summary: ["Automatizaciones implementadas para empresas locales mediante IA, WhatsApp, Google Workspace y sistemas web personalizados.", "Esta sección presenta casos reales enfocados en ganancias operativas, reducción del retrabajo y decisiones orientadas a datos."],
    responsibilities: ["Mapeo de procesos y cuellos de botella operativos.", "Desarrollo de aplicaciones web y automatizaciones a medida.", "Integración entre Google Workspace, WhatsApp y APIs.", "Evolución continua basada en métricas de negocio."],
    highlight: { title: "Diferencial", text: "Esta estructura demuestra que, además de productos propios, también entrego soluciones reales para clientes con profundidad de ejecución y consistencia técnica." },
    approach: "Entrega modular e iterativa: cada automatización nace de una necesidad concreta y evoluciona mediante ciclos cortos de validación con el cliente.",
  },
  sistemaArk: {
    roleTitle: "Creador y desarrollador — Sistema ARK",
    summary: ["Sistema ARK es una plataforma web para productores rurales que ofrece una solución completa de gestión operativa, administrativa y financiera.", "El sistema es totalmente adaptable y puede utilizarse desde ordenador o móvil.", "Como creador y desarrollador, fui responsable de la concepción, el diseño de procesos, la arquitectura y las funcionalidades alineadas con la realidad del agronegocio.", "Su objetivo es centralizar información dispersa en hojas de cálculo, cuadernos y aplicaciones separadas."],
    featuresTitle: "Funcionalidades principales",
    features: ["Registro y gestión de empleados.", "Registro de clientes y proveedores.", "Control de productos e inventario.", "Movimientos financieros.", "Informes de gestión.", "Cierres financieros.", "Control operativo de la propiedad rural.", "Historial de movimientos.", "Panel con indicadores estratégicos.", "Acceso web desde ordenador y móvil.", "Interfaz sencilla e intuitiva."],
    responsibilities: ["Concepción del producto.", "Levantamiento de requisitos con usuarios finales.", "Arquitectura de la plataforma.", "Desarrollo front-end y back-end.", "Modelado de la base de datos.", "Diseño de experiencia de usuario (UX/UI).", "Planificación de futuras integraciones con automatización e IA."],
    highlight: { title: "Problema resuelto", text: "Muchos productores aún administran sus controles manualmente. Sistema ARK centraliza toda la información, reduce errores, aumenta la productividad y permite tomar decisiones basadas en datos." },
    approach: "Desarrollo asistido por IA y orientado a la automatización para reducir plazos, estructurar integraciones y acelerar la evolución del producto.",
  },
};

Object.entries(spanishCaseCopy).forEach(([caseName, copy]) => {
  spanishData.cases[caseName] = { ...spanishData.cases[caseName], ...copy };
});

spanishData.cases.painelIa.clientCases = [
  ["Empresa A - Distribuidora regional de frutas y verduras", "Envío manual de pedidos por WhatsApp, con búsqueda de contactos y revisión de productos y cantidades.", "Sistema integrado con Google Sheets que automatiza el envío de pedidos a proveedores por WhatsApp.", "Proceso más rápido, estandarizado y con menos errores operativos."],
  ["Empresa B - Distribuidora regional de frutas y verduras", "Control manual de pedidos y poca visibilidad de las compras anteriores.", "Portal de pedidos en línea integrado con Google Sheets, con enlaces personalizados e historial en tiempo real.", "Proceso digitalizado, atención más ágil, menos retrabajo y mejor relación con los clientes."],
  ["Empresa C - Distribuidora regional de frutas y verduras", "La planificación manual de rutas aumentaba el tiempo operativo y el riesgo de errores.", "Sistema web que agrupa artículos por ruta y camión, calcula cajas por proveedor y genera un PDF para los conductores.", "Rutas organizadas con mayor rapidez, menos retrabajo e información logística estandarizada."],
  ["Empresa D - Distribuidora regional de frutas y verduras", "Los pedidos por texto exigían identificar productos y registrar manualmente cada artículo.", "Herramienta inteligente que interpreta el mensaje de WhatsApp, identifica productos, convierte cantidades y registra el pedido.", "Reducción drástica del tiempo, eliminación de errores de digitación y proceso estandarizado."],
].map(([name, problem, solution, result], index) => ({ name, problem, solution, result, image: `/images/painel-ia/case-0${index + 1}.png` }));

Object.values(spanishData.cases).forEach((projectCase) => {
  if (projectCase.gallery?.images) {
    projectCase.gallery.images = projectCase.gallery.images.map((item, index) => ({ ...item, label: `Pantalla ${String(index + 1).padStart(2, "0")}` }));
  }
});

portfolioByLanguage[LANGUAGES.esES] = spanishData;

export function getPortfolioData(language) {
  return portfolioByLanguage[language] ?? portfolioByLanguage[DEFAULT_LANGUAGE];
}
