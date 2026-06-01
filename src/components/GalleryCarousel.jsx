import { useEffect, useState } from "react";

function GalleryCarousel({
  images,
  altSuffix,
  previousLabel,
  nextLabel,
  expandLabel,
  closeLabel,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hasError, setHasError] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const totalImages = images?.length ?? 0;
  const hasMultipleImages = totalImages > 1;

  useEffect(() => {
    setCurrentIndex(0);
    setHasError(false);
  }, [images]);

  useEffect(() => {
    setHasError(false);
  }, [currentIndex]);

  useEffect(() => {
    if (!isExpanded) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setIsExpanded(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isExpanded]);

  if (!totalImages) {
    return null;
  }

  const currentImage = images[currentIndex];
  const altText = altSuffix
    ? `${currentImage.label} ${altSuffix}`
    : currentImage.label;

  function showPrevious() {
    if (!hasMultipleImages) {
      return;
    }

    setCurrentIndex((index) => (index === 0 ? totalImages - 1 : index - 1));
  }

  function showNext() {
    if (!hasMultipleImages) {
      return;
    }

    setCurrentIndex((index) => (index === totalImages - 1 ? 0 : index + 1));
  }

  function openExpanded() {
    if (!hasError) {
      setIsExpanded(true);
    }
  }

  return (
    <div className="gallery-carousel">
      <div className="gallery-stage">
        {hasError ? (
          <div className="gallery-fallback">{currentImage.label}</div>
        ) : (
          <img
            className="gallery-media image-clickable"
            src={currentImage.src}
            alt={altText}
            loading="lazy"
            role="button"
            tabIndex={0}
            aria-label={expandLabel}
            onClick={openExpanded}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                openExpanded();
              }
            }}
            onError={() => setHasError(true)}
          />
        )}
      </div>

      <div className="carousel-controls">
        <button
          type="button"
          className="carousel-btn"
          onClick={showPrevious}
          disabled={!hasMultipleImages}
          aria-label={previousLabel}
        >
          {previousLabel}
        </button>
        <p className="carousel-counter">
          {currentIndex + 1} / {totalImages} - {currentImage.label}
        </p>
        <button
          type="button"
          className="carousel-btn"
          onClick={showNext}
          disabled={!hasMultipleImages}
          aria-label={nextLabel}
        >
          {nextLabel}
        </button>
      </div>

      {isExpanded ? (
        <div
          className="image-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={currentImage.label}
          onClick={() => setIsExpanded(false)}
        >
          <button
            type="button"
            className="lightbox-close"
            onClick={() => setIsExpanded(false)}
            aria-label={closeLabel}
          >
            {closeLabel}
          </button>
          <img
            className="lightbox-image"
            src={currentImage.src}
            alt={altText}
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      ) : null}
    </div>
  );
}

export default GalleryCarousel;
