import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import SiteLayout from "./components/SiteLayout";
import { useLanguage } from "./context/LanguageContext";
import { getPortfolioData } from "./data/portfolioData";
import AboutPage from "./pages/AboutPage";
import CasePage from "./pages/CasePage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";

function App() {
  const { language } = useLanguage();
  const { cases } = getPortfolioData(language);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/sobre" element={<AboutPage />} />
          <Route path="/projetos" element={<ProjectsPage />} />
          <Route
            path="/projetos/conecta-rural"
            element={<CasePage caseData={cases.conectaRural} />}
          />
          <Route
            path="/projetos/pettapbr"
            element={<CasePage caseData={cases.pettapbr} />}
          />
          <Route
            path="/projetos/painel-ia"
            element={<CasePage caseData={cases.painelIa} />}
          />
          <Route
            path="/projetos/sistema-ark"
            element={<CasePage caseData={cases.sistemaArk} />}
          />
          <Route path="/contato" element={<ContactPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
