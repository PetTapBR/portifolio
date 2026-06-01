import ProjectCard from "../components/ProjectCard";
import { useLanguage } from "../context/LanguageContext";
import { getPortfolioData } from "../data/portfolioData";

function ProjectsPage() {
  const { language } = useLanguage();
  const { projectsPage, projectCards } = getPortfolioData(language);

  return (
    <>
      <section className="case-section page-header">
        <div className="section-head">
          <p>{projectsPage.label}</p>
          <h3>{projectsPage.title}</h3>
        </div>
        <p className="case-text">{projectsPage.description}</p>
      </section>

      <section className="projects">
        <div className="project-grid">
          {projectCards.map((project) => (
            <ProjectCard project={project} key={project.id} />
          ))}
        </div>
      </section>
    </>
  );
}

export default ProjectsPage;
