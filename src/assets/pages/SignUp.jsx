import "../stylesheets/SignUp.css";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div className="signup">
      <div className="title">
        <h1>Registro de nuevo usuario</h1>
      </div>
      <div className="sign">
        <div className="sign-box">
          <form>
            <input type="text" placeholder="Nombre de usuario" />
            <input type="password" placeholder="Contraseña" />
            <input type="email" placeholder="Correo electrónico" />
            <button type="submit">Registrarse</button>
          </form>
           <p>
        ¿Tienes cuenta? <Link to="/login">Ingresar</Link>
      </p>
        </div>
      </div>
     
    </div>
  );
}

export default SignUp;
