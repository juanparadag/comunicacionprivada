import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./assets/stylesheets/App.css"
import Home from "./assets/pages/Home";
import Login from "./assets/pages/Login";
import SignUp from "./assets/pages/SignUp";
import "./assets/stylesheets/App.css"
function App() {
  return (<>
  
    <BrowserRouter>
      {/* Menú de navegación */}
      <nav className="navbar">
        <Link to="/">Inicio</Link> |{" "}
        <Link to="/login">Login</Link> |{" "}
      </nav>

      {/* Definición de rutas */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  </>);
}

export default App;