import "./modal.css";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const ItemModal = ({ item, onClose }) => {
  const { t, i18n } = useTranslation("menu");

  const [selected, setSelected] = useState(
    typeof item.preco === "object"
      ? Object.keys(item.preco)[0]
      : null
  );

  const formatCurrency = (valor) => {
    return valor.toLocaleString(
      i18n.language === "en" ? "en-US" : "pt-BR",
      {
        style: "currency",
        currency: "BRL",
      }
    );
  };

  const price =
    typeof item.preco === "number"
      ? item.preco
      : item.preco[selected];

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose}>
          <span className="close-icon"/>
        </button>

        <img
          src={item.imagem}
          alt={t(`${item.id}.titulo`)}
          className="modal-image"
        />

        <h2>{t(`${item.id}.titulo`)}</h2>
        <p>{t(`${item.id}.descricao`)}</p>

        {/* 🔥 opções */}
        {typeof item.preco === "object" && (
          <div className="modal-options">
            {Object.entries(item.preco).map(([key, value]) => {
              const label = t(key, {
                defaultValue: key.replaceAll("_", " "),
              });

              return (
                <button
                  key={key}
                  className={`option-btn ${
                    selected === key ? "active" : ""
                  }`}
                  onClick={() => setSelected(key)}
                >
                  <span>{label}</span>
                  <span>{formatCurrency(value)}</span>
                </button>
              );
            })}
          </div>
        )}

        {/* 🔥 preço final */}
        <div className="modal-footer">
          <strong>{formatCurrency(price)}</strong>
        </div>
      </div>
    </div>
  );
};

export default ItemModal;