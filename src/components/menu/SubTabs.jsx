import "./style.css";
import { useTranslation } from "react-i18next";

const SubTabs = ({ categorias, active, setActive }) => {
  const { t } = useTranslation();

  return (
    <div className="subtabs">
      {categorias.map((sub) => (
        <button
          key={sub}
          onClick={() => setActive(sub)}
          className={active === sub ? "active" : ""}
        >
          {t(sub, { ns: "categorias", defaultValue: sub })}
        </button>
      ))}
    </div>
  );
};

export default SubTabs;