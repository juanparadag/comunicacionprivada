import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./assets/stylesheets/App.css"
import Home from "./assets/pages/Home";
import Contact from "./assets/pages/Contact";
import SignUp from "./assets/pages/SignUp";
import "./assets/stylesheets/App.css"
function App() {
  // Estado del tema, por defecto lo leo de localStorage
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved ? saved === "dark" : false;
  });

  // Aplica la clase y guarda en localStorage cuando cambie
  useEffect(() => {
    document.body.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);
  return (<>
  <div className="contenedor-principal"> 
    <BrowserRouter>
      {/* Menú de navegación */}
      <nav className="navbar">
        <Link to="/">Inicio</Link> |{" "}
        <Link to="/signup">Registrarse</Link> |{" "}
        <Link to="/contact">Contactanos</Link> |{" "}
      </nav>

      {/* Definición de rutas */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home/>} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
    </div>
  </>);
}

export default App;