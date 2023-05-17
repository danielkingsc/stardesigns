import 'react-multi-carousel/lib/styles.css';
import {Col, Row, Container} from 'react-bootstrap';
import colorSharp from "../assets/img/color-sharp.png";
import faqImage from "../assets/img/questions.svg";

export const Questions = () => {

  return (
    <section className="services" id="about">
        <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
          <img src={faqImage} alt="Contacto"/>
          </Col>
          <Col size={12} md={6}>
             <div className="services-bx wow zoomIn">
                <h2>Preguntas Frecuentes</h2>
                <p><br></br>Como diseñadora con experiencia le puedo ofrecer varios servicios entre los cuales están los siguientes</p>
                <div className="item">
                    <h5>¿Cómo hacer un pedido?</h5>
                    <p>Muy simple vas a la sección "Contácteme" al final de la pagina, rellenas el formulario y le das en "Enviar".</p>
                </div>
                <div className="item">
                    <h5>¿Cuánto demora completar un pedido?</h5>
                    <p>Normalmente un pedido tarda de 7 a 15 días dependiendo de la complejidad del mismo.</p>
                </div>
                <div className="item">
                    <h5>¿Cómo recibe su pedido?</h5>
                    <p>Una vez completado lo recibirá por medio del correo electrónico.</p>
                </div>
            </div>
          </Col>
        </Row>
      </Container>
        <img className="background-image-left" src={colorSharp} alt="Fondo" />
    </section>
  )
}