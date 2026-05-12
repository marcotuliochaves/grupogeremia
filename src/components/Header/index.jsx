import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Header.css";
import logo from "../../assets/logo.svg";
import LanguageSelector from "../LanguageSelector";

function Header() {
  const { t } = useTranslation("nav");
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const hamburgerRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Detectar clique fora do menu para fechar
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Verifica se o clique foi fora do menu E fora do botão hambúrguer
      if (
        menuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target)
      ) {
        closeMenu();
      }
    };

    // Adiciona eventos para mouse e touch
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [menuOpen]);

  // Prevenir scroll quando menu estiver aberto
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <Link to="/" onClick={closeMenu}>
            <img src={logo} alt="GeremiaBar" />
          </Link>
        </div>

        {/* Botão Hambúrguer */}
        <div
          ref={hamburgerRef}
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Menu de navegação */}
        <ul ref={menuRef} className={`list ${menuOpen ? "active" : ""}`}>
          <li className="item" onClick={closeMenu}>
            <Link to="/">{t("home")}</Link>
          </li>
          <li className="item" onClick={closeMenu}>
            <Link to="/historia">{t("history")}</Link>
          </li>
          <li className="item" onClick={closeMenu}>
            <Link to="/cardapio">{t("menu")}</Link>
          </li>
          <li className="item" onClick={closeMenu}>
            <Link to="/galeria">{t("gallery")}</Link>
          </li>
          <li className="item" onClick={closeMenu}>
            <Link to="/delivery">{t("delivery")}</Link>
          </li>
          <li className="item" onClick={closeMenu}>
            <Link to="/contato">{t("contact")}</Link>
          </li>
          <li className="item mobile-lang">
            <LanguageSelector />
          </li>
        </ul>

        {/* LanguageSelector para desktop */}
        <div className="lang-selector desktop-lang">
          <LanguageSelector />
        </div>
      </div>
    </nav>
  );
}

export default Header;
