# 🚀 ReactAcademy — Landing con rutas

La misma landing del Taller 03, ahora dividida en vistas con **React Router**, como parte del **Taller 04**.

## 🗺️ Rutas

| Ruta | Vista |
|---|---|
| `/` | `Home` — Hero |
| `/cursos` | `Cursos` — grilla de cursos |
| `/nosotros` | `Nosotros` — contador de estudiantes |
| `/login` | `Login` — formulario (solo interfaz) |
| `*` | `NotFound` — 404 |

El `Navbar` y el `Footer` se muestran en todas las rutas, y cada vista ocupa el espacio entre ambos.

## 📁 Estructura

```
src/
├── components/   Navbar, Hero, Section, Card, Counter, Footer
├── views/        Home, Cursos, Nosotros, Login, NotFound
├── data/         courses.js
├── App.jsx       Routes y Route
└── main.jsx      BrowserRouter
```

## 🔐 Login

- El botón está deshabilitado mientras el correo o la contraseña estén vacíos.
- Al enviar, los campos y el botón se deshabilitan.
- No hay backend ni validación: es solo interfaz.

## 🛠️ Cómo correrlo

```bash
npm install
npm run dev
```

Abre `http://localhost:5173`.
