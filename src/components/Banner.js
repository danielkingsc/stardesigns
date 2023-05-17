import { useEffect, useState } from "react"
import { Container, Row, Col } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import headerImg from "../assets/img/header-img.svg"

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Diseñadora Web", "Diseñadora Grafica", "Diseñadora UI/UX"]
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random()*100);
    const period = 2000;

    useEffect (() =>{
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => { clearInterval (ticker)};
    }, )

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta/2)
        }

        if (!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                    <span className="tagline">Bienvenido a Diseños Star</span>
                    <h1>{`Hola soy Bela Star`}</h1>
                    <h1>Soy <span className="wrap">{text}</span></h1>
                    <p>Lorem Ipsum</p>         
                    <button onClick={() => console.log('connect')}>Contactame<ArrowRightCircle size={25}></ArrowRightCircle></button>          
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Main"/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
