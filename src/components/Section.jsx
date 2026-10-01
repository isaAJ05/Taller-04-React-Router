import courses from '../data/courses.js'
import Card from './Card.jsx'
import './Section.css'

function Section() {
  return (
    <section className="courses">
      <h2 className="courses-title">Nuestros Cursos</h2>
      <p className="courses-subtitle">Elige el camino que mejor se adapte a ti</p>

      <div className="courses-grid">
        {courses.map((course) => (
          <Card
            key={course.id}
            icon={course.icon}
            title={course.title}
            description={course.description}
            level={course.level}
          />
        ))}
      </div>
    </section>
  )
}

export default Section