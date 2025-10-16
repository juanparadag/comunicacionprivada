import "../stylesheets/Contact.css";
import Footer from "../components/Footer";

function Contact() {
  return (
    <>
      <div className="contact-page">
        <h1>Contáctanos</h1>
        <p className="contact-description">
          Si deseas más información sobre nuestros servicios de ciberseguridad,
          no dudes en comunicarte con nosotros.
        </p>

        <div className="contact-info">
          <h3>Información de Contacto</h3>
          <p><strong>Teléfono:</strong> +57 320 000 0000</p>
          <p><strong>Email:</strong> contacto@ciberseguridad.com</p>
          <p><strong>Dirección:</strong> Bogotá, Colombia</p>
        </div>

        <div className="contact-map">
          <iframe
            title="Ubicación"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.620067644917!2d-74.0733568852377!3d4.654865196657618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9a650d9931b5%3A0x633d455d31518f8!2sBogot%C3%A1%2C%20Colombia!5e0!3m2!1sen!2sco!4v1625442533722!5m2!1sen!2sco"
            width="100%"
            height="320"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
