import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./languageselector.css";


const languages = {
  pt: {
    label: "Português",
    flag: "/flags/br.svg",
  },
  en: {
    label: "English",
    flag: "/flags/us.svg",
  },
};

function LanguageSelector() {
  const [open, setOpen] = useState(false);
  const { i18n } = useTranslation();
  const [current, setCurrent] = useState(i18n.language);
  const ref = useRef();

  // Sincroniza o estado local quando o idioma mudar externamente
  useEffect(() => {
    setCurrent(i18n.language);
  }, [i18n.language]);

  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function handleSelect(lang) {
    setCurrent(lang);
    setOpen(false);
    i18n.changeLanguage(lang);
    localStorage.setItem('app-language', lang); // Salva no localStorage
    //console.log(`Idioma alterado para: ${lang}`); // Debug
  }

  return (
    <div className="language-selector" ref={ref}>
      <button className="language-trigger" onClick={() => setOpen(!open)}>
        <img 
          src={languages[current].flag} 
          alt={languages[current].label}
          className="language-flag"
        />
        <span className="language-label">{languages[current].label}</span>
        <svg 
          className={`language-chevron ${open ? 'open' : ''}`}
          width="12" 
          height="12" 
          viewBox="0 0 12 12" 
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {open && (
        <ul className="language-dropdown">
          {Object.entries(languages).map(([code, lang]) => (
            <li 
              key={code} 
              onClick={() => handleSelect(code)}
              className={code === current ? 'active' : ''}
            >
              <img 
                src={lang.flag} 
                alt={lang.label}
                className="language-flag"
              />
              <span>{lang.label}</span>
              {code === current && (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8L6.5 11.5L13 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default LanguageSelector;