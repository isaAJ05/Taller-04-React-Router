import { Link } from 'react-router-dom'
import './NotFound.css'

function NotFound() {
  return (
    <section className="not-found">
      <h1 className="not-found-code">404</h1>
      <p className="not-found-text">Esta página no existe.</p>
      <Link className="not-found-link" to="/">
        Volver al inicio
      </Link>
    </section>
  )
}

export default NotFound
