
import "./style.css";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import ItemModal from "./ItemModal";

const ItemCard = ({ item }) => {
  const { t, i18n } = useTranslation("menu");
  const [open, setOpen] = useState(false);

  const formatCurrency = (valor) => {
    return valor.toLocaleString(
      i18n.language === "en" ? "en-US" : "pt-BR",
      {
        style: "currency",
        currency: "BRL",
      }
    );
  };

  const formatPrice = (preco) => {
    if (typeof preco === "number") {
      return <span>{formatCurrency(preco)}</span>;
    }

    if (typeof preco === "object" && preco !== null) {
      const valores = Object.values(preco);
      const menor = Math.min(...valores);

      return (
        <span>
          {t("a_partir_de", { defaultValue: "A partir de" })}{" "}
          {formatCurrency(menor)}
        </span>
      );
    }

    return <span>—</span>;
  };

  return (
    <>
      <article
        className="item-card"
        onClick={() => setOpen(true)}
        style={{ cursor: "pointer" }}
      >
        <div className="item-image">
          <img
            src={item.imagem}
            alt={t(`${item.id}.titulo`)}
            decoding="async"
          />
        </div>

        <div className="item-content">
          <div className="item-text">
            <h3>{t(`${item.id}.titulo`)}</h3>
            <p>{t(`${item.id}.descricao`)}</p>
          </div>

          <div className="item-price">
            {formatPrice(item.preco)}
          </div>
        </div>
      </article>

      {open && (
        <ItemModal
          item={item}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
};

export default ItemCard;
