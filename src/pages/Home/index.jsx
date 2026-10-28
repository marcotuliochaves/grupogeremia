import "./Home.css";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

function Home() {
  const { t } = useTranslation("home");

  const data = [
    { id: "1", image: "/home/chopp-home.webp" },
    { id: "2", image: "/home/coxinha-crocante.webp" },
    { id: "3", image: "/home/feijoada.webp" },
  ];

  return (
    <>
      {/* Carrossel */}
      <div className="carrossel">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={true}
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <img
                src={item.image}
                alt="Slider"
                className="slide-item"
                loading="lazy"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Happy Hour */}
      <div className="happy-hour-container">
        <div className="happy-hour-content">
          <img
            src="/home/happy-hour.webp"
            alt="logo-happy-hour"
            className="happy-hour-logo"
          />
          <h2 className="happy-hour-title">{t("title")}</h2>
          <div className="happy-hour-description">
            <p>{t("description1")}</p>
            <p>{t("description2")}</p>
            <p>{t("description3")}</p>
          </div>
          <Link to="/historia">
            <button className="history-button">{t("button")}</button>
          </Link>
        </div>
      </div>

      {/* Menu/Cardápio */}
      <div className="split-featured-container menu-featured">
        <Link to="/cardapio" className="split-left">
          <img
            src="/home/cardapio.webp"
            alt="Cardápio do Geremia Bar"
            className="split-image"
          />
        </Link>

        <Link to="/cardapio" className="split-right">
          <div className="split-content">
            <h3 className="split-title">
              {t("menuTitle") || "Nosso Cardápio"}
            </h3>

            <p className="split-description">
              {t("menuDescription") ||
                "Confira nossas opções de comidas, petiscos e bebidas, preparadas para tornar sua experiência no Gerê ainda melhor."}
            </p>

            <span className="split-link">{t("menu") || "Ver Cardápio"}</span>
          </div>
        </Link>
      </div>

      {/* Galeria */}
      <div className="split-featured-container">
        <Link to="/galeria" className="split-left">
          <img
            src="/home/geremia-interna2.webp"
            alt="Galeria"
            className="split-image"
          />
        </Link>

        <Link to="/galeria" className="split-right">
          <div className="split-content">
            <h3 className="split-title">
              {t("galeryTitle") || "Nossa História"}
            </h3>
            <p className="split-description">
              {t("galeryDescription") ||
                "Há mais de 10 anos, o Gerê Bar é referência em comida mineira e os melhores petiscos da região. Um lugar onde tradição, sabor e boas memórias se encontram para criar momentos inesquecíveis."}
            </p>
            <span className="split-link">{t("galery") || "Ver Galeria"}</span>
          </div>
        </Link>
      </div>
    </>
  );
}

export default Home;
