
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

  // Garante que a subcategoria seja válida imediatamente
  const activeSub = subcategorias.includes(sub)
    ? sub
    : subcategorias[0];

  const itens = menu[categoria][activeSub] || [];

  useEffect(() => {
    setSub(subcategorias[0]);
  }, [categoria]);

  // PRÉ-CARREGAMENTO DAS IMAGENS
  useEffect(() => {
    const imagens = [
      ...new Set(
        Object.values(menu)
          .flatMap((categorias) =>
            Object.values(categorias)
          )
          .flatMap((produtos) =>
            produtos.map((produto) => produto.imagem)
          )
          .filter(Boolean)
      ),
    ];

    let index = 0;
    let cancelado = false;

    // Dois downloads simultâneos para não sobrecarregar a conexão
    const carregarImagem = async () => {
      while (index < imagens.length && !cancelado) {
        const src = imagens[index++];

        const img = new Image();
        img.decoding = "async";
        img.fetchPriority = "low";
        img.src = src;

        try {
          if (img.decode) {
            await img.decode();
          } else {
            await new Promise((resolve) => {
              img.onload = resolve;
              img.onerror = resolve;
            });
          }
        } catch {
          // Uma imagem com erro não interrompe as demais
        }
      }
    };

    // Dá prioridade à renderização inicial do cardápio
    const timer = setTimeout(() => {
      Promise.all([
        carregarImagem(),
        carregarImagem(),
      ]);
    }, 1200);

    return () => {
      cancelado = true;
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="cardapio-page">

      <Tabs
        active={categoria}
        setActive={setCategoria}
      />

      {subcategorias.length > 1 && (
        <SubTabs
          categorias={subcategorias}
          active={activeSub}
          setActive={setSub}
        />
      )}

      <div className="cardapio-content">
        <CategorySection
          key={`${categoria}-${activeSub}`}
          titulo={activeSub}
          itens={itens}
        />
      </div>

    </div>
  );
};

export default Cardapio;
