// pages/Historia.jsx
import { useTranslation } from "react-i18next";
import ScrollToTopButton from "../../components/ScrollToTopButton";
import "./Historia.css";

function Historia() {
  const { t } = useTranslation("historia");

  // Array de imagens da galeria
  const galleryImages = [
    "/history/frente.webp",
    "/history/geremia-interna.webp",
    "/history/geremia-entrada.webp",
    "/history/geremia-entrada2.webp",
    "/history/fraldinha.webp",
    "/history/drinks.webp",
    "/history/chopps.webp",
    "/history/geremia-entrada3.webp",
    "/history/geremia-frente.webp",
    "/history/geremia-entrada4.webp",
    "/history/chopp1.webp",
    "/history/geremia-interna2.webp",
  ];

  return (
    <div className="historia-page-wrapper">
      <div className="historia-container">
        {/* Banner */}
        <div className="historia-banner">
          <img
            src="/history/frente.webp"
            alt={t("bannerAlt")}
            className="historia-banner-image"
          />
          <div className="historia-banner-overlay"></div>
          <div className="historia-banner-title">
            {t("bannerTitulo")}
          </div>
        </div>

        {/* Logo central */}
        <div className="historia-logo-container">
          <div className="historia-logo-wrapper">
            <img
              src="/home/gere-mascote.png"
              alt={t("logoAlt")}
              className="historia-logo-image"
            />
          </div>
        </div>

        {/* Conteúdo principal */}
        <section className="historia-content">
          <h1 className="historia-title">{t("titulo")}</h1>
          <h2 className="historia-subtitle">{t("subtitulo")}</h2>
          {[1, 2, 3, 4, 5, 6, 7].map((_, i) => (
            <p key={i} className="historia-paragraph">
              {t(`paragrafo${i + 1}`)}
            </p>
          ))}
        </section>

        {/* Galeria */}
        <section className="historia-gallery">
          <div className="historia-gallery-grid">
            {galleryImages.map((src, i) => (
              <div key={i} className="historia-gallery-item">
                <img
                  src={src}
                  alt={`Foto ${i + 1} do Geremia Bar`}
                  className="historia-gallery-image"
                />
              </div>
            ))}
          </div>
        </section>

        <ScrollToTopButton />
      </div>
    </div>
  );
}

export default Historia;
