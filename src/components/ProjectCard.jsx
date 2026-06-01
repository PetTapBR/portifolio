import { Link } from "react-router-dom";
import ProjectCover from "./ProjectCover";

function ProjectCard({ project }) {
  return (
    <article className={`project-card ${project.featured ? "featured" : ""}`}>
      <ProjectCover src={project.cover} label={project.name} tone={project.tone} />
      <div className="project-body">
        <p className="project-tag">{project.tag}</p>
        <h4>{project.name}</h4>
        <p>{project.problem}</p>
        <ul>
          {project.tech.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <Link to={project.path}>{project.cta}</Link>
      </div>
    </article>
  );
}

export default ProjectCard;
