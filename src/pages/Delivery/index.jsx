// pages/Delivery/index.jsx
import { useTranslation } from "react-i18next";
import ScrollToTopButton from "../../components/ScrollToTopButton";
import "./Delivery.css";

function Delivery() {
  const { t } = useTranslation("delivery");

  const ifoodLink = "https://www.ifood.com.br/delivery/uberaba-mg/geremia-bar-centro/2268aea6-4c36-4b76-86c4-ce4b816627d0";

  return (
    <main className="delivery-container">
      {/* Título */}
      <h1 className="delivery-title">{t("titulo")}</h1>

      {/* Imagem do banner */}
      <div className="delivery-icon">
        <img
          src="/delivery.webp"
          alt={t("altBanner")}
          className="delivery-icon-image"
        />
      </div>

      {/* Texto principal */}
      <p className="delivery-description">{t("descricao")}</p>

      {/* Botão iFood */}
      <a
        href={ifoodLink}
        target="_blank"
        rel="noopener noreferrer"
        className="delivery-ifood-link"
      >
        <div className="delivery-ifood-icon">
          <img
            src="/ifood-botao.webp"
            alt={t("botaoAlt")}
            className="delivery-ifood-image"
          />
        </div>
      </a>

      <ScrollToTopButton />
    </main>
  );
}

export default Delivery;