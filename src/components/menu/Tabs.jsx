import menu from "../../data/menu";
import "./style.css"
import { useTranslation } from "react-i18next";

const Tabs = ({ active, setActive }) => {
  const categorias = Object.keys(menu);
  const { t } = useTranslation();

  return (
    <div className="tabs">
      {categorias.map((cat) => (
        <button
          key={cat}
          onClick={() => setActive(cat)}
          className={active === cat ? "active" : ""}
        >
          {t(cat, { ns: "categorias" })}
        </button>
      ))}
    </div>
  );
};

export default Tabs;