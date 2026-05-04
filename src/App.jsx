// App.jsx
import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Historia from './pages/Historia';
import Contato from './pages/Contact';
import Delivery from './pages/Delivery';
import ScrollToTopButton from './components/ScrollToTopButton';
import WhatsAppButton from './components/WhatsAppButton';
import Cardapio from './pages/Cardapio';
import Galeria from './pages/Galeria';
// Componente que monitora mudanças de rota e rola para o topo
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]); // Executa toda vez que a rota muda

  return null;
}

function App() {
  return (
    <div className="app">
      <ScrollToTop />

      <Header />

      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/historia" element={<Historia />} />
          <Route path="/cardapio" element={<Cardapio />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/delivery" element={<Delivery />} />
        </Routes>
      </main>

      <Footer />

      <ScrollToTopButton />
      <WhatsAppButton />
    </div>
  );
}

export default App;