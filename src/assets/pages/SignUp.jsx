import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/SignUp.css"
import Footer from "../components/Footer";

function SignUp() {
  function enviarDatos (){
    alert("Algo salio mal intentalo mas tarde")
  }
  return (
    <div className="signup">
      <div className="title">
        <h1>Registro de nuevo usuario</h1>
      </div>
      <div className="sign">
        <div className="sign-box">
          <p className="form-intro">
            Regístrate para acceder a nuestra aplicación de chat cifrado. Con tus datos, podrás iniciar sesión en la app móvil.
          </p>
          <form>
            <div className="input-field">
              <input type="text" placeholder="Nombre de usuario" required />
              <p className="field-explanation">
                Elige un nombre para identificarte en la aplicación. Este será tu <strong>usuario de inicio de sesión</strong>.
              </p>
            </div>
            <div className="input-field">
              <input type="password" placeholder="Contraseña" required />
              <p className="field-explanation">
                Crea una <strong>contraseña segura</strong> para proteger tu cuenta y acceder a tu chat.
              </p>
            </div>
            <div className="input-field">
              <input type="email" placeholder="Correo electrónico" required />
              <p className="field-explanation">
                Usa un <strong>correo real</strong>. Te ayudará a <strong>recuperar tu cuenta</strong> si olvidas tu contraseña.
              </p>
            </div>
            <button type="submit" onClick={enviarDatos}>Registrarse</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SignUp;