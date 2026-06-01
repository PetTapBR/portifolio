import { useEffect, useState } from "react";

function ClientCaseCard({
  caseItem,
  problemLabel,
  solutionLabel,
  resultLabel,
  screenshotLabel,
  expandLabel,
  closeLabel,
}) {
  const [hasError, setHasError] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

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

  return (
    <article className="client-case-card">
      <h4>{caseItem.name}</h4>

      <p className="client-case-line">
        <strong>{problemLabel}</strong> {caseItem.problem}
      </p>

      <p className="client-case-line">
        <strong>{solutionLabel}</strong> {caseItem.solution}
      </p>

      {caseItem.result ? (
        <p className="client-case-line">
          <strong>{resultLabel}</strong> {caseItem.result}
        </p>
      ) : null}

      <div className="client-case-media-wrap">
        {hasError || !caseItem.image ? (
          <div className="client-case-fallback">{screenshotLabel}</div>
        ) : (
          <>
            <img
              className="client-case-media image-clickable"
              src={caseItem.image}
              alt={`${screenshotLabel} - ${caseItem.name}`}
              loading="lazy"
              role="button"
              tabIndex={0}
              aria-label={expandLabel}
              onClick={() => setIsExpanded(true)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  setIsExpanded(true);
                }
              }}
              onError={() => setHasError(true)}
            />
            {isExpanded ? (
              <div
                className="image-lightbox"
                role="dialog"
                aria-modal="true"
                aria-label={caseItem.name}
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
                  src={caseItem.image}
                  alt={`${screenshotLabel} - ${caseItem.name}`}
                  onClick={(event) => event.stopPropagation()}
                />
              </div>
            ) : null}
          </>
        )}
      </div>
    </article>
  );
}

export default ClientCaseCard;
