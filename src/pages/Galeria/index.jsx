import { useState } from "react";
import { useTranslation } from "react-i18next";
import "./galeria.css";

const Galeria = () => {
  const { t } = useTranslation("galeria");

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="galeria-page-wrapper">
      <main className="galeria-container">
        <h1 className="galeria-title">{t("titulo")}</h1>

        <div className="galeria-grid">
          {images.map((img, index) => (
            <div
              key={index}
              className="galeria-item"
              onClick={() => setSelectedImage(img)}
            >
              <img src={img} alt={`Foto ${index + 1}`} />
              <div className="overlay">
                <span>{t("verImagem")}</span>
              </div>
            </div>
          ))}
        </div>

        {/* MODAL */}
        {selectedImage && (
          <div className="modal" onClick={() => setSelectedImage(null)}>
            <img src={selectedImage} alt="preview" />
          </div>
        )}
      </main>
    </div>
  );
};

export default Galeria;

/* IMAGENS */
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