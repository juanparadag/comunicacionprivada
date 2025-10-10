import React, { useState } from "react";
import "../stylesheets/SignUp.css";
import Footer from "../components/Footer";
import { registrarUsuario } from "../../api/register";

function SignUp() {
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
    const data = await response.json(); // Parsear JSON

    if (data.status === "ok") {
      alert("Usuario registrado con éxito");
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
      <div className="sign">
        <div className="sign-box">
          <p className="form-intro">
            Regístrate para acceder a la aplicación de chat cifrado. 
            Con tus datos podrás iniciar sesión en la app móvil.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="input-field">
              <input type="text" name="user" placeholder="Nombre de usuario" onChange={handleChange} required />
            </div>
            <div className="input-field">
              <input type="password" name="password" placeholder="Contraseña" onChange={handleChange} required />
            </div>
            <div className="input-field">
              <input type="email" name="email" placeholder="Correo electrónico" onChange={handleChange} required />
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
