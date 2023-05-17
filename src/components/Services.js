import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Services = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="services" id="services">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="services-bx wow zoomIn">
                        <h2>Servicios</h2>
                        <p><br></br>Como diseñadora con experiencia le puedo ofrecer varios servicios entre los cuales están los siguientes</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme services-slider">
                            <div className="item">
                                <img src={meter1} alt="Diseñador" />
                                <h5>Portada de Libros</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Diseñadora" />
                                <h5>Branding y Logos</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Diseño de Logo" />
                                <h5>Banner Publicitario</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-right" src={colorSharp} alt="Fondo" />
    </section>
  )
}
