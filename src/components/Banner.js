import { Container, Row, Col } from "react-bootstrap"

export const Banner = () => {
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                    <span className="tagline">Bienvenido a Mi Portfolio</span>
                    <h1>{`Hola soy Bela Star `}<span className="wrap">Diseñadora Gráfica</span></h1>
                    <p>Lorem Ipsum</p>         
                    <button onClick={() => console.log('connect')}>Contactame</button>          
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
