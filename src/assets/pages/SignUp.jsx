import React, { useState } from "react";
import "../stylesheets/SignUp.css";
import Footer from "../components/Footer";
import { registrarUsuario } from "../../api/register";
import { useNavigate } from "react-router-dom";




function SignUp() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    user: "",
    password: "",
    email: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await registrarUsuario(formData);
      const data = await response.json();

      if (data.status === "ok") {
        alert("✅ Usuario registrado con éxito.\nAhora puedes iniciar sesión desde la app Monocles.");
        navigate("/instructions");
      } else {
        alert("❌ " + (data.message || "Algo salió mal. Inténtalo más tarde."));
        console.error("Error backend:", data);
      }
    } catch (error) {
      alert("❌ Algo salió mal. Inténtalo más tarde.");
      console.error(error);
    }
  };

  return (
    <div className="signup">
      <div className="title">
        <h1>Registro de nuevo usuario</h1>
      </div>

      {/* 🔹 Sección informativa explicativa */}
      <section className="signup-instructions">
        <h2>¿Cómo registrarte correctamente?</h2>
        <ol>
          <li>
            <strong>1️⃣ Nombre de usuario:</strong> Crea un nombre único para tu cuenta.  
            Evita usar espacios o caracteres especiales.
          </li>
          <li>
            <strong>2️⃣ Contraseña segura:</strong> Debe tener al menos 8 caracteres, 
            incluir una letra mayúscula, una minúscula y un número.
          </li>
          <li>
            <strong>3️⃣ Correo electrónico:</strong> Usa un correo válido para recuperación y validación.
          </li>
          <li>
            <strong>4️⃣ Después del registro:</strong> Abre la aplicación <strong>Monocles</strong> en tu móvil.
            Inicia sesión con el mismo usuario + @im.bmstecnology.com (Ej: usuario1@im.bmstecnology.com) y contraseña que registraste aquí.
            </li>
          <li>
            <strong>5️⃣ Seguridad:</strong> Tus datos se cifran de extremo a extremo, 
            garantizando total privacidad.
          </li>
        </ol>
        <p className="note">
          💡 Consejo: guarda tu contraseña en un lugar seguro. Puedes cambiarla a traves de la aplicacion, pero en caso de perdida....
        </p>
      </section>

      {/* 🔹 Formulario de registro */}
      <div className="sign">
        <div className="sign-box">
          <p className="form-intro">
            Completa el formulario para crear tu cuenta en el sistema de comunicaciones seguras.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="input-field">
              <input
                type="text"
                name="user"
                placeholder="Nombre de usuario"
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-field">
              <input
                type="password"
                name="password"
                placeholder="Contraseña"
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-field">
              <input
                type="email"
                name="email"
                placeholder="Correo electrónico"
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit">Registrarse</button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default SignUp;
