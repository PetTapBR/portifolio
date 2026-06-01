import { Link } from "react-router-dom";
import ClientCaseCard from "../components/ClientCaseCard";
import GalleryCarousel from "../components/GalleryCarousel";
import { useLanguage } from "../context/LanguageContext";
import { getPortfolioData } from "../data/portfolioData";
import { getWhatsAppUrlForProject } from "../utils/whatsapp";

function CasePage({ caseData }) {
  const { language } = useLanguage();
  const { casePage } = getPortfolioData(language);
  const projectTalkUrl = getWhatsAppUrlForProject(caseData.projectName, language);

  return (
    <>
      <section className="case-section page-header">
        <div className="section-head">
          <p>{casePage.label}</p>
          <h3>{caseData.roleTitle}</h3>
        </div>
        {caseData.summary.map((paragraph) => (
          <p className="case-text" key={paragraph}>
            {paragraph}
          </p>
        ))}
        {caseData.liveUrl ? (
          <p className="case-note">
            {casePage.projectLinkLabel}{" "}
            <a href={caseData.liveUrl} target="_blank" rel="noreferrer">
              {caseData.liveUrl}
            </a>
          </p>
        ) : null}
      </section>

      {caseData.features?.length ? (
        <section className="case-section">
          <div className="section-head">
            <p>{caseData.projectName}</p>
            <h3>{caseData.featuresTitle || casePage.featuresDefaultTitle}</h3>
          </div>
          <ul className="responsibility-list">
            {caseData.features.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      ) : null}

      {caseData.clientCases?.length ? (
        <section className="case-section">
          <div className="section-head">
            <p>{casePage.clientCasesLabel}</p>
            <h3>{casePage.clientCasesTitle}</h3>
          </div>
          <div className="client-cases-grid">
            {caseData.clientCases.map((clientCase) => (
              <ClientCaseCard
                key={clientCase.name}
                caseItem={clientCase}
                problemLabel={casePage.problemLabel}
                solutionLabel={casePage.solutionLabel}
                resultLabel={casePage.resultLabel}
                screenshotLabel={casePage.screenshotLabel}
                expandLabel={casePage.expandImage}
                closeLabel={casePage.closeImage}
              />
            ))}
          </div>
        </section>
      ) : null}

      <section className="case-section">
        <div className="section-head">
          <p>{caseData.projectName}</p>
          <h3>{casePage.responsibilitiesTitle}</h3>
        </div>
        <ul className="responsibility-list">
          {caseData.responsibilities.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="highlight">
        <strong>{caseData.highlight.title}</strong>
        <p>{caseData.highlight.text}</p>
      </section>

      <section className="case-section">
        <div className="section-head">
          <p>{caseData.projectName}</p>
          <h3>{casePage.technologiesTitle}</h3>
        </div>
        <div className="tech-grid">
          {caseData.technologies.map((tech) => (
            <div className="tech-chip" key={tech}>
              {tech}
            </div>
          ))}
        </div>
      </section>

      {caseData.approach ? (
        <section className="case-section">
          <div className="section-head">
            <p>{caseData.projectName}</p>
            <h3>{casePage.approachTitle}</h3>
          </div>
          <p className="case-text">{caseData.approach}</p>
        </section>
      ) : null}

      {caseData.gallery?.images?.length ? (
        <section className="case-section">
          <div className="section-head">
            <p>{casePage.galleryLabel}</p>
            <h3>{casePage.galleryTitle}</h3>
          </div>
          <GalleryCarousel
            images={caseData.gallery.images}
            altSuffix={casePage.galleryAltSuffix}
            previousLabel={casePage.previousImage}
            nextLabel={casePage.nextImage}
            expandLabel={casePage.expandImage}
            closeLabel={casePage.closeImage}
          />
        </section>
      ) : null}

      <section className="case-section actions-row">
        <Link to="/projetos" className="btn btn-ghost">
          {casePage.backToProjects}
        </Link>
        {caseData.liveUrl ? (
          <a
            href={caseData.liveUrl}
            className="btn btn-ghost"
            target="_blank"
            rel="noreferrer"
          >
            {casePage.openSystem}
          </a>
        ) : null}
        <a
          href={projectTalkUrl}
          className="btn btn-primary"
          target="_blank"
          rel="noreferrer"
        >
          {casePage.talkAboutProject}
        </a>
      </section>
    </>
  );
}

export default CasePage;
