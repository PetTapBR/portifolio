import { NavLink, Outlet, useLocation } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { getPortfolioData, LANGUAGES } from "../data/portfolioData";
import { getWhatsAppUrlForPath } from "../utils/whatsapp";

function SiteLayout() {
  const { language, setLanguage } = useLanguage();
  const { layout } = getPortfolioData(language);
  const { pathname } = useLocation();
  const whatsappUrl = getWhatsAppUrlForPath(pathname, language);

  return (
    <div className="page">
      <div className="top-actions">
        <div className="language-switch" role="group" aria-label={layout.languageSwitchLabel}>
          <button
            type="button"
            className={`language-option ${language === LANGUAGES.ptBR ? "active" : ""}`}
            aria-pressed={language === LANGUAGES.ptBR}
            onClick={() => setLanguage(LANGUAGES.ptBR)}
          >
            <img className="flag-icon" src="/images/flags/br.svg" alt="Brasil" />
            <span>PT-BR</span>
          </button>
          <button
            type="button"
            className={`language-option ${language === LANGUAGES.enUS ? "active" : ""}`}
            aria-pressed={language === LANGUAGES.enUS}
            onClick={() => setLanguage(LANGUAGES.enUS)}
          >
            <img className="flag-icon" src="/images/flags/us.svg" alt="United States" />
            <span>EN-US</span>
          </button>
          <button
            type="button"
            className={`language-option ${language === LANGUAGES.esES ? "active" : ""}`}
            aria-pressed={language === LANGUAGES.esES}
            onClick={() => setLanguage(LANGUAGES.esES)}
          >
            <img className="flag-icon" src="/images/flags/es.svg" alt="España" />
            <span>ES</span>
          </button>
        </div>
      </div>

      <nav className="top-nav">
        {layout.navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === "/"}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>

      <main>
        <Outlet />
      </main>

      <footer className="contact">
        <h3>{layout.footerTitle}</h3>
        <p>{layout.footerText}</p>
        <a
          className="btn btn-primary"
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
        >
          {layout.footerCta}
        </a>
      </footer>
    </div>
  );
}

export default SiteLayout;
