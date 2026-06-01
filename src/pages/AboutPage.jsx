import { useLanguage } from "../context/LanguageContext";
import { getPortfolioData } from "../data/portfolioData";

function AboutPage() {
  const { language } = useLanguage();
  const { aboutPage } = getPortfolioData(language);

  return (
    <>
      <section className="case-section page-header">
        <div className="section-head">
          <p>{aboutPage.label}</p>
          <h3>{aboutPage.title}</h3>
        </div>
        {aboutPage.paragraphs.map((paragraph) => (
          <p className="case-text" key={paragraph}>
            {paragraph}
          </p>
        ))}
      </section>

      <section className="case-section">
        <div className="section-head">
          <p>{aboutPage.methodologyLabel}</p>
          <h3>{aboutPage.methodologyTitle}</h3>
        </div>
        <p className="case-text">{aboutPage.methodologyText}</p>
      </section>

      <section className="case-section">
        <div className="section-head">
          <p>{aboutPage.toolsLabel}</p>
          <h3>{aboutPage.toolsTitle}</h3>
        </div>
        <div className="tech-grid">
          {aboutPage.tools.map((tool) => (
            <div className="tech-chip" key={tool}>
              {tool}
            </div>
          ))}
        </div>
      </section>

      <section className="metrics">
        {aboutPage.cards.map((card) => (
          <article className="metric-card" key={card.title}>
            <strong>{card.title}</strong>
            <span>{card.description}</span>
          </article>
        ))}
      </section>
    </>
  );
}

export default AboutPage;
