import { useState } from 'react'
import './Counter.css'

function Counter() {
  const [count, setCount] = useState(0)

  const decrement = () => setCount((current) => Math.max(0, current - 1))
  const increment = () => setCount((current) => current + 1)

  return (
    <section className="enrollment">
    <h2 className="enrollment-title">¿Cuántos estudiantes van a inscribirse?</h2>
    <p className="enrollment-subtitle">Usa los botones para ajustar el número</p>

    <div className="counter-box">
        <button className="counter-button decrement-button" type="button" onClick={decrement}>
            −
        </button>
        <span className="counter-value">{count}</span>
        <button className="counter-button increment-button" type="button" onClick={increment}>
            +
        </button>
    </div>

    <p className="enrollment-label">estudiantes inscritos</p>
    </section>
)
}

export default Counter