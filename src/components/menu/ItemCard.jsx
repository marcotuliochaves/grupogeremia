import "./style.css";
import { useTranslation } from "react-i18next";

const ItemCard = ({ item }) => {
  const { t, i18n } = useTranslation("menu");

  const formatPrice = (preco) => {
    // 🔹 preço único
    if (typeof preco === "number") {
      return preco.toLocaleString(
        i18n.language === "en" ? "en-US" : "pt-BR",
        {
          style: "currency",
          currency: "BRL",
        }
      );
    }

    // 🔹 múltiplos preços (qualquer quantidade)
    if (typeof preco === "object" && preco !== null) {
      const labels = {
        pt: {
          inteira: "Inteira",
          meia: "Meia",
        },
        en: {
          inteira: "Full",
          meia: "Half",
        },
      };

      return Object.entries(preco).map(([tipo, valor]) => {
        // fallback inteligente
        const label =
          labels[i18n.language]?.[tipo] ||
          tipo.replaceAll("_", " ");

        return (
          <div key={tipo} className="price-option">
            <strong>{label}:</strong>{" "}
            {valor.toLocaleString(
              i18n.language === "en" ? "en-US" : "pt-BR",
              {
                style: "currency",
                currency: "BRL",
              }
            )}
          </div>
        );
      });
    }

    return "—";
  };

  return (
    <article className="item-card">
      <div className="item-image">
        <img src={item.imagem} alt={t(`${item.id}.titulo`)} />
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
  );
};

export default ItemCard;