import { useState, useEffect } from "react";
import menu from "../../data/menu";
import Tabs from "../../components/menu/Tabs";
import SubTabs from "../../components/menu/SubTabs";
import CategorySection from "../../components/menu/CategorySection";
import "./cardapio.css";

const Cardapio = () => {
  const [categoria, setCategoria] = useState("Comidas");

  const subcategorias = Object.keys(menu[categoria]);

  const [sub, setSub] = useState(subcategorias[0]);

  useEffect(() => {
    setSub(subcategorias[0]);
  }, [categoria]);

  const activeSub = subcategorias.length === 1 ? subcategorias[0] : sub;

  const itens = menu[categoria][activeSub] || [];

  return (
    <div className="cardapio-page">

      <Tabs active={categoria} setActive={setCategoria} />

      {subcategorias.length > 1 && (
        <SubTabs
          categorias={subcategorias}
          active={sub}
          setActive={setSub}
        />
      )}

      <div className="cardapio-content">
        <CategorySection titulo={activeSub} itens={itens} />
      </div>
    </div>
  );
};

export default Cardapio;