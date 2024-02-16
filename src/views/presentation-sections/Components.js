import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function Components() {
  return (
    <>
      <div
        className="section section-components"
      >
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" md="12">
              <h2 className="text-center title text-dark">
                Creación y difusión del conocimiento <br></br>
                <small className="description">
                  <b>
                    actividades fundamentales en las rutas del<br></br>
                    desarrollo de las regiones.
                  </b>
                </small>
              </h2>
              <h5 className="text-justify description text-dark">
                En un contexto de globalización y decreciente importancia de la
                ciencia y la tecnología, para enfrentar problemas sociales y
                ambientales, innovación y desarrollo científico se han
                convertido en factores explicativos para entender la
                diferenciación entre las rutas de desarrollo regional, la
                formación de polos de innovación, la concentración de clases
                creativas en distintos lugares, y en última instancia, para
                explicar la diferenciación en las rutas de desarrollo que siguen
                los países.
              </h5>
              <h5 className="text-justify description text-dark">          
                En el centro de la discusión sobre lo que se sabe de una región
                y lo que se genera de conocimientos en cada región, está el tema
                del vínculo existente entre ciencia y desarrollo, lo cual
                plantea interrogantes sobre el vínculo existente y sobre las
                formas convencionales de generar investigación y desarrollo.
              </h5>
              <h5 className="text-justify description text-dark">
                Entender la región como objeto de estudio y la región como
                espacio de producción y de condiciones para el desarrollo
                científico y tecnológico son tareas importantes para trazar
                rutas de colaboración entre productores y demandantes de
                conocimientos en los distintos temas de conocimiento científico,
                para explorar rutas independientes de desarrollo científico o de
                manera más específica.
              </h5>
              <div className="space-100"></div>
            </Col>
          </Row>
          <Row>
            <Col md="3">
              <div className="card-container first-card">
                <div className="card-component">
                  <a>
                    <div className="front">
                      <img
                        alt="..."
                        src={require("assets/img/presentation-page/basic_thumb.jpg")}
                      ></img>
                    </div>
                  </a>
                </div>
              </div>
            </Col>
            <Col md="3">
              <div className="card-container second-card">
                <div className="card-component">
                  <a>
                    <div className="front">
                      <img
                        alt="..."
                        src={require("assets/img/presentation-page/cards_thumb.jpg")}
                      ></img>
                    </div>
                  </a>
                </div>
              </div>
            </Col>
            <Col md="3">
              <div className="card-container third-card">
                <div className="card-component">
                  <a>
                    <div className="front">
                      <img
                        alt="..."
                        src={require("assets/img/presentation-page/sections_thumb.jpg")}
                      ></img>
                    </div>
                  </a>
                </div>
              </div>
            </Col>
            <Col md="3">
              <div className="card-container fourth-card">
                <div className="card-component">
                  <a>
                    <div className="front">
                      <img
                        alt="..."
                        src={require("assets/img/presentation-page/pages2_thumb.jpg")}
                      ></img>
                    </div>
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Components;
