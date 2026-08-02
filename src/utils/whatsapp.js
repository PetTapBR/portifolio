const WHATSAPP_NUMBER = "5522988472248";

const messagesByLanguage = {
  "pt-BR": {
    default:
      "Olá Rodrigo! Vi seu portfólio e gostaria de conversar sobre um projeto.",
    "/":
      "Olá Rodrigo! Vi seu portfólio e gostaria de conversar sobre um projeto.",
    "/sobre":
      "Olá Rodrigo! Vi a página sobre do seu portfólio e gostaria de conversar sobre um projeto.",
    "/projetos":
      "Olá Rodrigo! Vi seus projetos e gostaria de conversar sobre uma solução para minha empresa.",
    "/contato":
      "Olá Rodrigo! Vim pela sua página de contato e gostaria de falar sobre um projeto.",
    "/projetos/painel-ia":
      "Olá Rodrigo! Vi seu projeto de automação empresarial e gostaria de conversar sobre uma solução parecida.",
    "/projetos/conecta-rural":
      "Olá Rodrigo! Vi o projeto Conecta Rural e gostaria de conversar sobre uma solução para o agro.",
    "/projetos/pettapbr":
      "Olá Rodrigo! Vi o projeto PetTapBR e gostaria de conversar sobre um projeto digital.",
    "/projetos/sistema-ark":
      "Olá Rodrigo! Vi o Sistema ARK e gostaria de conversar sobre um sistema para minha operação.",
  },
  "en-US": {
    default:
      "Hi Rodrigo! I saw your portfolio and would like to discuss a project.",
    "/":
      "Hi Rodrigo! I saw your portfolio and would like to discuss a project.",
    "/sobre":
      "Hi Rodrigo! I saw your About page and would like to discuss a project.",
    "/projetos":
      "Hi Rodrigo! I saw your projects and would like to discuss a solution for my business.",
    "/contato":
      "Hi Rodrigo! I came from your contact page and would like to talk about a project.",
    "/projetos/painel-ia":
      "Hi Rodrigo! I saw your business automation project and would like to discuss a similar solution.",
    "/projetos/conecta-rural":
      "Hi Rodrigo! I saw the Conecta Rural project and would like to discuss an agribusiness solution.",
    "/projetos/pettapbr":
      "Hi Rodrigo! I saw the PetTapBR project and would like to discuss a digital project.",
    "/projetos/sistema-ark":
      "Hi Rodrigo! I saw Sistema ARK and would like to discuss a system for my operation.",
  },
  "es-ES": {
    default: "¡Hola Rodrigo! Vi tu portafolio y me gustaría hablar sobre un proyecto.",
    "/": "¡Hola Rodrigo! Vi tu portafolio y me gustaría hablar sobre un proyecto.",
    "/sobre": "¡Hola Rodrigo! Vi la página sobre ti y me gustaría hablar sobre un proyecto.",
    "/projetos": "¡Hola Rodrigo! Vi tus proyectos y me gustaría hablar sobre una solución para mi empresa.",
    "/contato": "¡Hola Rodrigo! Llegué desde tu página de contacto y me gustaría hablar sobre un proyecto.",
    "/projetos/painel-ia": "¡Hola Rodrigo! Vi tu proyecto de automatización empresarial y me gustaría hablar sobre una solución similar.",
    "/projetos/conecta-rural": "¡Hola Rodrigo! Vi el proyecto Conecta Rural y me gustaría hablar sobre una solución para el agronegocio.",
    "/projetos/pettapbr": "¡Hola Rodrigo! Vi el proyecto PetTapBR y me gustaría hablar sobre un proyecto digital.",
    "/projetos/sistema-ark": "¡Hola Rodrigo! Vi Sistema ARK y me gustaría hablar sobre un sistema para mi operación.",
  },
};

function resolveLanguage(language) {
  return messagesByLanguage[language] ? language : "pt-BR";
}

function buildWhatsAppUrl(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function getWhatsAppUrlForPath(pathname, language) {
  const selectedLanguage = resolveLanguage(language);
  const messages = messagesByLanguage[selectedLanguage];
  const message = messages[pathname] ?? messages.default;
  return buildWhatsAppUrl(message);
}

export function getWhatsAppUrlForProject(projectName, language) {
  const selectedLanguage = resolveLanguage(language);

  if (selectedLanguage === "es-ES") {
    return buildWhatsAppUrl(
      `¡Hola Rodrigo! Vi tu proyecto "${projectName}" en el portafolio y me gustaría hablar sobre una solución similar para mi empresa.`
    );
  }

  const message =
    selectedLanguage === "en-US"
      ? `Hi Rodrigo! I saw your project "${projectName}" in your portfolio and would like to discuss a similar solution for my business.`
      : `Olá Rodrigo! Vi seu projeto "${projectName}" no portfólio e gostaria de conversar sobre uma solução parecida para meu negócio.`;

  return buildWhatsAppUrl(message);
}
