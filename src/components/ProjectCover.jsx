import { useState } from "react";

function ProjectCover({ src, label, tone }) {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="project-cover">
      {hasError ? (
        <div className={`project-cover-fallback ${tone}`}>{label}</div>
      ) : (
        <img src={src} alt={label} onError={() => setHasError(true)} />
      )}
    </div>
  );
}

export default ProjectCover;
