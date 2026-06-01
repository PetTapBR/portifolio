import { useState } from "react";
import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import { useLanguage } from "../context/LanguageContext";
import { getPortfolioData } from "../data/portfolioData";
import { getWhatsAppUrlForPath } from "../utils/whatsapp";

function HomePage() {
  const [showPhotoFallback, setShowPhotoFallback] = useState(false);
  const { language } = useLanguage();
  const { home, metrics, problems, projectCards } = getPortfolioData(language);
  const whatsappUrl = getWhatsAppUrlForPath("/", language);

  return (
    <>
      <header className="hero">
        <div className="hero-content">
          <p className="kicker">{home.kicker}</p>
          <h1>{home.name}</h1>
          <h2>{home.title}</h2>
          <p className="subtitle">{home.subtitle}</p>
          <div className="hero-actions">
            <Link className="btn btn-primary" to="/projetos">
              {home.projectsCta}
            </Link>
            <a
              className="btn btn-ghost"
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
            >
              {home.contactCta}
            </a>
          </div>
        </div>

        <div className="hero-photo">
          <div className="photo-frame">
            {showPhotoFallback ? (
              <div className="photo-fallback" aria-label={home.avatarAria}>
                RR
              </div>
            ) : (
              <img
                src="/profile.png"
                alt={home.photoAlt}
                onError={() => setShowPhotoFallback(true)}
              />
            )}
          </div>
        </div>
      </header>

      <section className="case-section">
        <div className="section-head">
          <p>{home.highlightLabel}</p>
          <h3>{home.highlightTitle}</h3>
        </div>
        <p className="case-text">{home.highlightText}</p>
      </section>

      <section className="case-section">
        <div className="section-head">
          <p>{home.aboutLabel}</p>
          <h3>{home.aboutTitle}</h3>
        </div>
        <p className="case-text">{home.aboutText}</p>
      </section>

      <section className="case-section">
        <div className="section-head">
          <p>{home.buildLabel}</p>
          <h3>{home.buildTitle}</h3>
        </div>
        <div className="problem-grid">
          {home.buildItems.map((item) => (
            <div className="problem-card" key={item}>
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="case-section">
        <div className="section-head">
          <p>{home.technologiesLabel}</p>
          <h3>{home.technologiesTitle}</h3>
        </div>
        <p className="case-text tech-line">{home.technologiesLine}</p>
      </section>

      <section className="metrics" aria-label={home.metricsAria}>
        {metrics.map((item) => (
          <article className="metric-card" key={`${item.value}-${item.label}`}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </article>
        ))}
      </section>

      <section className="projects">
        <div className="section-head">
          <p>{home.projectsLabel}</p>
          <h3>{home.projectsTitle}</h3>
        </div>
        <div className="project-grid">
          {projectCards.map((project) => (
            <ProjectCard project={project} key={project.id} />
          ))}
        </div>
      </section>

      <section className="case-section">
        <div className="section-head">
          <p>{home.specialtiesLabel}</p>
          <h3>{home.specialtiesTitle}</h3>
        </div>
        <div className="problem-grid">
          {problems.map((problem) => (
            <div className="problem-card" key={problem}>
              {problem}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default HomePage;
