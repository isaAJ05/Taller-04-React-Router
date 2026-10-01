import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'

const links = [
  { to: '/', label: 'Inicio' },
  { to: '/cursos', label: 'Cursos' },
  { to: '/nosotros', label: 'Nosotros' },
  { to: '/login', label: 'Ingresar' },
]

function Navbar() {
  return (
    <header className="site-header">
      <Link to="/" className="brand">
        <span className="brand-accent">ReactAcademy</span>
      </Link>
      <nav>
        <ul className="nav-list">
          {links.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  isActive ? 'nav-link nav-link-active' : 'nav-link'
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
