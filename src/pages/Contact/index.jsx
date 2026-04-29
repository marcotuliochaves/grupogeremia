// pages/Contato/index.jsx
import { useTranslation } from "react-i18next";
import "./Contact.css";

function Contato() {
  const { t } = useTranslation("contato");

  const whatsappLink = "https://wa.me/553433121515";

  return (
    <main className="contato-container">
      <h1 className="contato-title">{t("titulo")}</h1>

      <div className="contato-delivery-icon">
        <img
          src="/delivery.webp"
          alt={t("bannerAlt")}
          className="contato-delivery-image"
        />
      </div>

      <p className="contato-description">{t("descricao")}</p>

      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="contato-whatsapp-link"
      >
        <div className="contato-whatsapp-icon">
          <img
            src="/whatsapp-button.webp"
            alt={t("botaoAlt")}
            className="contato-whatsapp-image"
          />
        </div>
        <p className="contato-whatsapp-text">{t("paragrafo")}</p>
      </a>
    </main>
  );
}

export default Contato;