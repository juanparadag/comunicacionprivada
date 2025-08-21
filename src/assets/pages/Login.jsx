import { useState, useRef } from "react";
import { Link } from "react-router-dom";

import "../stylesheets/Login.css";

function Login() {
  const [texto, setTexto] = useState("");
  const usuario = {
    usuario: "",
    contraseña: "",
  };
  const usuario1 = {
    usuario: "User",
    contraseña: "1234",
  };
  const inputUsuario = useRef(null);
  const inputPassword = useRef(null);
  const limpiarCampos = () => {
    inputUsuario.current.value = "";
    inputPassword.current.value = "";
    setTexto("");
  };

  const manejarCambio = (evento) => {
    setTexto(evento.target.value);
  };
  const validarInformacion = () => {
    usuario.usuario = inputUsuario.current.value;
    usuario.contraseña = inputPassword.current.value;
    inputUsuario.current.value = "";
    inputPassword.current.value = "";

    if (usuario.usuario == "User" && usuario.contraseña == 1234) {
      alert("Acceso permitido");
    } else {
      alert("Acceso denegado");
    }
  };
  return (
    <>
      <div className="title">
        <h1>Inicio de sesion</h1>
      </div>
      <div className="login">
        <div className="login-box">
          <input
            type="text"
            placeholder="Usuario"
            ref={inputUsuario}
            onChange={manejarCambio}
          />
          <input
            type="text"
            placeholder="Contraseña"
            ref={inputPassword}
            onChange={manejarCambio}
          />
          <button onClick={validarInformacion}>Enviar</button>
          <p>
            ¿No tienes cuenta? <Link to="/signup">Registrarse</Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;
