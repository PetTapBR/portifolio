import { useState } from "react";

function GalleryImage({ src, label, altText }) {
  const [hasError, setHasError] = useState(false);

  return (
    <article className="gallery-card">
      {hasError ? (
        <div className="gallery-fallback">{label}</div>
      ) : (
        <img src={src} alt={altText || label} onError={() => setHasError(true)} />
      )}
      <span>{label}</span>
    </article>
  );
}

export default GalleryImage;
