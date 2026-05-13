import { useTranslation } from "react-i18next";
import "./languageselector.css";

function LanguageSelector() {
  const { i18n } = useTranslation();

  const current = i18n.language;

  const toggleLanguage = () => {
    const newLang = current === "pt" ? "en" : "pt";

    i18n.changeLanguage(newLang);

    localStorage.setItem("app-language", newLang);
  };

  return (
    <button
      className={`language-switch ${current === "en" ? "active" : ""}`}
      onClick={toggleLanguage}
    >
      <img src="/flags/br.svg" alt="Português" />

      <div className="switch-track">
        <div className="switch-thumb"></div>
      </div>

      <img src="/flags/us.svg" alt="English" />
    </button>
  );
}

export default LanguageSelector;