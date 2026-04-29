import ItemCard from "./ItemCard";
import "./style.css";
import { useTranslation } from "react-i18next";

const CategorySection = ({ titulo, itens }) => {
  const { t } = useTranslation();

  return (
    <section>
      <h2>{t(titulo, { ns: "categorias", defaultValue: titulo })}</h2>

      <div className="grid">
        {itens?.map((item, i) => (
          <ItemCard key={i} item={item} />
        ))}
      </div>
    </section>
  );
};

export default CategorySection;