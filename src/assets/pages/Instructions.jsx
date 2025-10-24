import React, { useEffect } from "react";
import "../stylesheets/Instructions.css";
import Footer from "../components/Footer";

export default function Instructions() {
  useEffect(() => {
    document.title = "Instructions - SecureCom";
  }, []);

  return (
    <div className="instructions-wrapper">
      <div className="instructions-page">
        <h1>¡Registro exitoso!</h1>
        <p>
          Tu cuenta ha sido creada correctamente.  
          Ahora sigue estos pasos para iniciar sesión en la aplicación móvil <strong>Monocles Chat</strong>:
        </p>

        <ol>
          <li>Abre la aplicación <strong>Monocles</strong> en tu teléfono.</li>
          <li>Selecciona <strong>“Iniciar sesión con servidor personalizado”</strong>.</li>
          <li>Ingresa tu <strong>nombre de usuario</strong> que registraste + <strong>@im.bmstecnology.com</strong></li>
          <li>Usa tu <strong>contraseña</strong>.</li>
          <li>Presiona <strong>Conectar</strong> y espera unos segundos.</li>
        </ol>

        <p>
          Si tienes algún problema de conexión, contacta con el equipo de soporte técnico o revisa la guía avanzada.
        </p>

        <button className="back-button" onClick={() => (window.location.href = "/")}>
          Volver al inicio
        </button>
      </div>

      <Footer />
    </div>
  );
}
