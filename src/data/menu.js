// src/data/menu.js
import { cachacaDose, caips, cervejas600, chopps, destiladosDose, destiladosGarrafa, drinks, growler, longNecks, sucos, vinhos, whiskyDose, whiskyGarrafa, zeroAlcool } from "./bebidas";
import { pratosPorcoes, pratosPrincipais, paraAcompanhar, saladinha, vegetarianos, sanduiche, caldinhos, sobremesas } from "./pratos";
import { souvenir } from "./souvenir";

const menu = {
  Comidas: {
    Porções: pratosPorcoes,
    Pratos: pratosPrincipais,
    "Para Acompanhar": paraAcompanhar,
    Saladinha: saladinha,
    Vegetarianos: vegetarianos,
    Sandubão: sanduiche,
    Caldinhos: caldinhos,
    Sobremesas: sobremesas,
  },

  Bebidas: {
    Chopps: chopps,
    "Cervejas 600ML": cervejas600,
    "Long Necks": longNecks,
    Drinks: drinks,
    Caips: caips,
    Sucos: sucos,
    "Bebidas sem álcool": zeroAlcool,
    "Cachaças (Dose)": cachacaDose,
    Vinhos: vinhos,
    "Destilados (Dose)": destiladosDose,
    "Destilados (Garrafas)": destiladosGarrafa,
    "Whiskys (Dose)": whiskyDose,
    "Whiskys (Garrafas)": whiskyGarrafa,
    Growler: growler,
  },

  Souvenir: {
    Souvenir: souvenir,
  },
};

export default menu;