import { Link } from 'react-router-dom';
import './notFound.css';

function NotFound() {
  return (
    <section className="not-found">
      <span className="not-found-code">404</span>

      <h1>Página não encontrada</h1>

      <p>
        Ops! Parece que essa página não existe
        ou foi movida.
      </p>

      <Link to="/" className="not-found-button">
        Voltar para o início
      </Link>
    </section>
  );
}

export default NotFound;