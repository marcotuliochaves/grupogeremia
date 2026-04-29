import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import ptNav from "./locales/pt/nav.json";
import enNav from "./locales/en/nav.json";
import ptFooter from "./locales/pt/footer.json";
import enFooter from "./locales/en/footer.json";
import ptHome from "./locales/pt/home.json";
import enHome from "./locales/en/home.json";
import ptHistoria from "./locales/pt/historia.json";
import enHistoria from "./locales/en/historia.json";
import ptContato from "./locales/pt/contato.json";
import enContato from "./locales/en/contato.json";
import ptDelivery from "./locales/pt/delivery.json";
import enDelivery from "./locales/en/delivery.json";
import ptSouvenir from "./locales/pt/menu/souvenir.json";
import enSouvenir from "./locales/en/menu/souvenir.json";
import ptCategorias from "./locales/pt/menu/categorias.json";
import enCategorias from "./locales/en/menu/categorias.json";
import ptPorcoes from "./locales/pt/menu/porcoes.json";
import enPorcoes from "./locales/en/menu/porcoes.json";
import ptPratos from "./locales/pt/menu/pratos.json"
import enPratos from "./locales/en/menu/pratos.json"
import ptAcompanhamento from "./locales/pt/menu/acompanhamento.json"
import enAcompanhamento from "./locales/en/menu/acompanhamento.json"
import ptSalada from "./locales/pt/menu/salada.json"
import enSalada from "./locales/en/menu/salada.json"
import ptVegetariano from "./locales/pt/menu/vegetariano.json"
import enVegetariano from "./locales/en/menu/vegetariano.json"
import ptSanduiche from "./locales/pt/menu/sanduiche.json"
import enSanduiche from "./locales/en/menu/sanduiche.json"
import ptCaldos from "./locales/pt/menu/caldos.json"
import enCaldos from "./locales/en/menu/caldos.json"
import ptSobremesa from "./locales/pt/menu/sobremesa.json"
import enSobremesa from "./locales/en/menu/sobremesa.json"
import ptChopps from "./locales/pt/menu/chopps.json"
import enChopps from "./locales/en/menu/chopps.json"
import ptCervejas from "./locales/pt/menu/cervejas.json"
import enCervejas from "./locales/en/menu/cervejas.json"
import ptLongNecks from "./locales/pt/menu/longNecks.json"
import enLongNecks from "./locales/en/menu/longNecks.json"
import ptDrinks from "./locales/pt/menu/drinks.json"
import enDrinks from "./locales/en/menu/drinks.json"
import ptCaips from "./locales/pt/menu/caips.json"
import enCaips from "./locales/en/menu/caips.json"
import ptSucos from "./locales/pt/menu/sucos.json"
import enSucos from "./locales/en/menu/sucos.json"
import ptZeroAlcool from "./locales/pt/menu/zeroalcool.json"
import enZeroAlcool from "./locales/en/menu/zeroalcool.json"
import ptCachacas from "./locales/pt/menu/cachacas.json"
import enCachacas from "./locales/en/menu/cachacas.json"
import ptVinhos from "./locales/pt/menu/vinhos.json"
import enVinhos from "./locales/en/menu/vinhos.json"
import ptDestilados from "./locales/pt/menu/destilados.json"
import enDestilados from "./locales/en/menu/destilados.json"
import ptWhisky from "./locales/pt/menu/whisky.json"
import enWhisky from "./locales/en/menu/whisky.json"
import ptGrowler from "./locales/pt/menu/growler.json"
import enGrowler from "./locales/en/menu/growler.json"

const resources = {
  pt: {
    nav: ptNav,
    footer: ptFooter,
    home: ptHome,
    historia: ptHistoria,
    contato: ptContato,
    delivery: ptDelivery,
    categorias: ptCategorias,
    menu: {
      ...ptSouvenir,
      ...ptPorcoes,
      ...ptPratos,
      ...ptAcompanhamento,
      ...ptSalada,
      ...ptVegetariano,
      ...ptSanduiche,
      ...ptCaldos,
      ...ptSobremesa,
      ...ptChopps,
      ...ptCervejas,
      ...ptLongNecks,
      ...ptDrinks,
      ...ptCaips,
      ...ptSucos,
      ...ptZeroAlcool,
      ...ptCachacas,
      ...ptVinhos,
      ...ptDestilados,
      ...ptWhisky,
      ...ptGrowler,
    },
  },

  en: {
    nav: enNav,
    footer: enFooter,
    home: enHome,
    historia: enHistoria,
    contato: enContato,
    delivery: enDelivery,
    categorias: enCategorias,
    menu: {
      ...enSouvenir,
      ...enPorcoes,
      ...enPratos,
      ...enAcompanhamento,
      ...enSalada,
      ...enVegetariano,
      ...enSanduiche,
      ...enCaldos,
      ...enSobremesa,
      ...enChopps,
      ...enCervejas,
      ...enLongNecks,
      ...enDrinks,
      ...enCaips,
      ...enSucos,
      ...enZeroAlcool,
      ...enCachacas,
      ...enVinhos,
      ...enDestilados,
      ...enWhisky,
      ...enGrowler,
    },
  },
};

const savedLanguage = localStorage.getItem("app-language") || "pt";

i18n.use(initReactI18next).init({
  resources,
  debug: true,
  lng: savedLanguage,
  fallbackLng: "pt",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
