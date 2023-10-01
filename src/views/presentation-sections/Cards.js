import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function Cards() {
  return (
    <>
      <div className="section section-cards">
        <Container>
          <Row>
            <Col className="text-center ml-auto mr-auto" md="8">
              <div className="section-description">
                <h2 className="title">Producción académica </h2>
                <h6 className="category">en la región de los valles</h6>
                <h5 className="text-justify">
                  La producción académica encontrada hasta el día de hoy en esta
                  búsqueda preliminar muestra la existencia de 412 trabajos de
                  distintos tipos, que van desde artículos, libros, capítulos de
                  libro, conferencias y tesis de licenciatura y posgrados,
                  desarrollados por 984 autores, algunos escritos de manera
                  individual y muchos otros en coautoría.
                </h5>
                <h5 className="text-justify">
                  Los resultados de esta búsqueda también muestran una
                  diversidad de áreas, campos y temáticas desde las cuales se ha
                  generado investigación y conocimiento sobre cada uno de los
                  municipios que constituyen dicha región de influencia. De
                  manera general, se puede aventurar que en su mayoría han sido
                  desarrolladas desde las ciencias sociales, las ciencias
                  agropecuarias y biotecnologías, la biología y la química.
                </h5>
                <h5 className="text-justify">
                  Asimismo, se observa la ausencia de un espacio que integre y
                  permita la consulta sistematizada de los contenidos académicos
                  especializados sobre la región de análisis, a fin de que, por
                  un lado, los profesores - investigadores y la comunidad
                  estudiantil tengan la posibilidad de abordar las futuras
                  investigaciones desde perspectivas innovadoras, cubriendo así
                  los vacíos existentes.
                </h5>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md="12">
              <div className="images-container">
                <div className="image-container1 mr-1">
                  <img
                    alt="..."
                    src={require("assets/img/presentation-page/bio.png")}
                  ></img>
                </div>
                <div className="image-container2 mr-1">
                  <img
                    alt="..."
                    src={require("assets/img/presentation-page/biologia.png")}
                  ></img>
                </div>
                <div className="image-container3 mr-1">
                  <img
                    alt="..."
                    src={require("assets/img/presentation-page/cs.png")}
                  ></img>
                </div>
                <div className="image-container4 mr-1">
                  <img
                    alt="..."
                    src={require("assets/img/presentation-page/quimica.png")}
                  ></img>
                </div>
                <div className="image-container5">
                  <img
                    alt="..."
                    src={require("assets/img/presentation-page/agro.png")}
                  ></img>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Cards;
