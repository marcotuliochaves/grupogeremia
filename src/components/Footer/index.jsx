// components/Footer/index.jsx
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from "../../assets/logo.svg";
import "./Footer.css";

function Footer() {
  const { t } = useTranslation(["footer", "nav"]);
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Coluna 1 - Logo e Descrição */}
        <div className="footer-col">
          <div className="footer-logo">
            <img src={logo} alt="GeremiaBar" />
          </div>
          <p className="footer-slogan">
            {t("slogan") || "Aqui a amizade vem de bandeja!"}
          </p>
          <p className="footer-description">
            {t("description") ||
              "Tradição e sabor em Uberaba. Um lugar especial para momentos inesquecíveis."}
          </p>
          <div className="footer-social">
            <a
              href="https://www.instagram.com/geremiabar/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="Instagram"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/geremiabar"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="Facebook"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="https://www.tripadvisor.com.br/Restaurant_Review-g1959794-d8733589-Reviews-Geremia_Bar-Uberaba_State_of_Minas_Gerais.html"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="Tripadvisor"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" />
                <circle cx="8.5" cy="11.5" r="2.5" />
                <circle cx="15.5" cy="11.5" r="2.5" />
                <path d="M12 15c-1.5 0-2.8-.8-3.5-2h7c-.7 1.2-2 2-3.5 2z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Coluna 2 - Links Rápidos */}
        <div className="footer-col">
          <h3 className="footer-title">{t("quickLinks") || "Links Rápidos"}</h3>
          <ul className="footer-links">
            <li>
              <Link to="/">{t("nav:home") || "Home"}</Link>
            </li>
            <li>
              <Link to="/historia">{t("nav:history") || "História"}</Link>
            </li>
            <li>
              <Link to="/cardapio">{t("nav:menu") || "Cardápio"}</Link>
            </li>
            <li>
              <Link to="/galeria">{t("nav:gallery") || "Galeria"}</Link>
            </li>
            <li>
              <Link to="/delivery">{t("nav:delivery") || "Delivery"}</Link>
            </li>
            <li>
              <Link to="/contato">{t("nav:contact") || "Contato"}</Link>
            </li>
          </ul>
        </div>

        {/* Coluna 3 - Horário de Funcionamento */}
        <div className="footer-col">
          <h3 className="footer-title">
            {t("hours") || "Horário de Funcionamento"}
          </h3>
          <ul className="footer-hours">
            <li>
              <span>{t("mondayToFriday") || "Segunda a Sexta"}</span>
              <span>17:00 - 00:00</span>
            </li>
            <li>
              <span>{t("saturday") || "Sábado"}</span>
              <span>11:00 - 00:00</span>
            </li>
            <li>
              <span>{t("sunday") || "Domingo"}</span>
              <span>{t("sundayClose") || "Fechado"}</span>
            </li>
          </ul>
        </div>

        {/* Coluna 4 - Contato e Localização */}
        <div className="footer-col">
          <h3 className="footer-title">{t("contact") || "Contato"}</h3>
          <ul className="footer-contact">
            <li>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>(34) 3312-1515</span>
            </li>
            <li>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <span>contato@geremiabar.com.br</span>
            </li>
            <li>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>Rua Olegário Maciel, 271 - Uberaba, MG</span>
            </li>
          </ul>
        </div>

        {/* Coluna 5 - Grupo Geremia */}
        <div className="footer-col footer-group-brands">
          <h3 className="footer-title">Grupo Geremia</h3>

          <p className="footer-group-description">
            Conheça nossas marcas e eventos.
          </p>

          <div className="footer-beers">
            <div className="beers-grid group-grid">
              <a
                href="https://www.instagram.com/geremiabar"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Conheça o Geremia Bar"
              >
                <img
                  src="/geremia-bar.webp"
                  alt="Geremia Bar"
                  className="beer-logo"
                />
                <span>Geremia Bar</span>
              </a>

              <a
                href="https://www.instagram.com/geremiafest"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Conheça o Geremia Fest"
              >
                <img
                  src="/geremia-fest.webp"
                  alt="Geremia Fest"
                  className="beer-logo"
                />
                <span>Geremia Fest</span>
              </a>

              <a
                href="https://www.instagram.com/gererunfest"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Conheça o Geremia Run Fest"
              >
                <img
                  src="/geremia-runfest.webp"
                  alt="Geremia Run Fest"
                  className="beer-logo"
                />
                <span>Geremia Run Fest</span>
              </a>

              <a
                href="https://www.instagram.com/geremiasunsetrun"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Conheça o Geremia Sunset Run"
              >
                <img
                  src="/geremia-sunsetrun.webp"
                  alt="Geremia Sunset Run"
                  className="beer-logo"
                />
                <span>Geremia Sunset Run</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>
          &copy; {currentYear} GeremiaBar.{" "}
          {t("allRights") || "Todos os direitos reservados."}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
