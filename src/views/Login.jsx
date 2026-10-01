import { useState } from 'react'
import './Login.css'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const hasEmptyFields = email.trim() === '' || password.trim() === ''

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="login">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1 className="login-title">Ingresar</h1>
        <p className="login-microcopy">
          Esto es solo una interfaz: no se valida ni se guarda ningún dato.
        </p>

        <label className="login-label" htmlFor="email">
          Correo
        </label>
        <input
          id="email"
          className="login-input"
          type="email"
          placeholder="tu@correo.com"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          disabled={submitted}
        />

        <label className="login-label" htmlFor="password">
          Contraseña
        </label>
        <input
          id="password"
          className="login-input"
          type="password"
          placeholder="Tu contraseña"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          disabled={submitted}
        />

        <button
          className="login-button"
          type="submit"
          disabled={hasEmptyFields || submitted}
        >
          {submitted ? 'Enviado' : 'Ingresar'}
        </button>

        {submitted && (
          <p className="login-status" role="status">
            Formulario enviado (simulación).
          </p>
        )}
      </form>
    </section>
  )
}

export default Login
