import './Card.css'

function Card({ icon, title, description, level }) {
  return (
    <article className="course-card">
      <div className="card-icon">{icon}</div>
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
      <span className="card-badge">{level}</span>
    </article>
  )
}

export default Card