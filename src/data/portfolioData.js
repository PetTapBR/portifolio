export const LANGUAGES = Object.freeze({
  ptBR: "pt-BR",
  enUS: "en-US",
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

export function getPortfolioData(language) {
  return portfolioByLanguage[language] ?? portfolioByLanguage[DEFAULT_LANGUAGE];
}
