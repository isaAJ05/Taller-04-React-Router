import { Link } from 'react-router-dom'
import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <h1 className="hero-title">
        Aprende <span className="hero-title-accent">React</span> desde cero
      </h1>
      <p className="hero-description">
        Domina la librería más popular del frontend con proyectos prácticos y reales.
      </p>
      <Link className="hero-button" to="/cursos">
        Ver Cursos
      </Link>
    </section>
  )
}

export default Hero
