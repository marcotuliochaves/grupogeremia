import { useState } from "react";
import { useTranslation } from "react-i18next";
import "./galeria.css";

const images = [
  "/galeria/post1.webp",
  "/galeria/post2.webp",
  "/galeria/cachaca.webp",
  "/galeria/post3.webp",
  "/galeria/post4.webp",
  "/galeria/post5.webp",
  "/galeria/post6.webp",
  "/galeria/post7.webp",
  "/galeria/post8.webp",
  "/galeria/post9.webp",
  "/galeria/post10.webp",
  "/galeria/post11.webp",
];

const Galeria = () => {
  const { t } = useTranslation("galeria");

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="galeria-page-wrapper">

      {/* HERO */}
      <section className="galeria-hero">
        <div className="galeria-hero-overlay">
          <span className="galeria-badge">
            {t("subtitulo") || "Momentos especiais"}
          </span>

          <h1>{t("titulo")}</h1>

          <p>
            {t("descricao") ||
              "Conheça o ambiente, os sabores e os melhores momentos do Gerê Bar. Um espaço criado para reunir amigos, família e experiências inesquecíveis."}
          </p>
        </div>
      </section>

      {/* ESTATÍSTICAS */}
      <section className="galeria-stats">
        <div className="stat-card">
          <h2>+10</h2>
          <span>{t("anos") || "Anos de tradição"}</span>
        </div>

        <div className="stat-card">
          <h2>1000+</h2>
          <span>{t("clientes") || "Clientes por semana"}</span>
        </div>

        <div className="stat-card">
          <h2>100%</h2>
          <span>{t("experiencia") || "Experiência mineira"}</span>
        </div>
      </section>

      {/* GALERIA */}
      <main className="galeria-container">

        <div className="galeria-grid">
          {images.map((img, index) => (
            <div
              key={index}
              className="galeria-item"
              onClick={() => setSelectedImage(img)}
            >
              <img src={img} alt={`Foto ${index + 1}`} />

              <div className="galeria-overlay">
                <span>{t("verImagem") || "Ver imagem"}</span>
              </div>
            </div>
          ))}
        </div>

        {/* MODAL */}
        {selectedImage && (
          <div
            className="modal"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="modal-close"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>

            <img src={selectedImage} alt="preview" />
          </div>
        )}
      </main>
    </div>
  );
};

export default Galeria;