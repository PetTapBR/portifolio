import { useLanguage } from "../context/LanguageContext";
import { getPortfolioData } from "../data/portfolioData";
import { getWhatsAppUrlForPath } from "../utils/whatsapp";

function ContactPage() {
  const { language } = useLanguage();
  const { contactPage } = getPortfolioData(language);
  const whatsappUrl = getWhatsAppUrlForPath("/contato", language);

  return (
    <section className="case-section page-header">
      <div className="section-head">
        <p>{contactPage.label}</p>
        <h3>{contactPage.title}</h3>
      </div>
      <p className="case-text">{contactPage.description}</p>
      <div className="contact-page-actions">
        <a className="btn btn-primary" href="mailto:rodrigomramos18@gmail.com">
          rodrigomramos18@gmail.com
        </a>
        <a className="btn btn-ghost" href={whatsappUrl} target="_blank" rel="noreferrer">
          WhatsApp
        </a>
      </div>
    </section>
  );
}

export default ContactPage;
