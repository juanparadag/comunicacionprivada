import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./assets/stylesheets/App.css";
import Home from "./assets/pages/Home";
import Contact from "./assets/pages/Contact";
import SignUp from "./assets/pages/SignUp";

function App() {
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved ? saved === "dark" : false;
  });

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <div className="contenedor-principal">
      <BrowserRouter>
        {/* NAVBAR */}
        <nav className="navbar">
          <div className="navbar-logo">
            <Link to="/"><h1>SecureCom</h1></Link> 
          </div>

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {menuOpen ? "✖" : "☰"}
          </button>

          <div className={`navbar-links ${menuOpen ? "active" : ""}`}>
            <Link to="/" onClick={() => setMenuOpen(false)}>Inicio</Link>
            <Link to="/signup" onClick={() => setMenuOpen(false)}>Registrarse</Link>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>Contáctanos</Link>

            <button
              className="theme-toggle"
              onClick={() => setDark(!dark)}
            >
              {dark ? "☀️ Claro" : "🌙 Oscuro"}
            </button>
          </div>
        </nav>

        {/* RUTAS */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
