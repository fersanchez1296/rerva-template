import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function BasicComponents() {
  return (
    <>
      <div className="section section-basic-components">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" lg="10" md="7">
              <h2 className="title text-center">Áreas de influencia</h2>
              <h6 className="category text-center">Centro Universitario de los Valles</h6>
              <br></br><br></br><br></br>
              <h5 className=" text-justify">
                Sería hasta el año 2000 cuando el Consejo General Universitario
                de la U. de G., aprobaría la creación del Campus Universitario
                de los Valles, planteándole como objetivo el “ofrecer programas
                educativos acordes a las necesidades regionales y contribuir en
                el desarrollo económico y productivo de sus municipios de
                influencia”.
              </h5>
              <h5 className=" text-justify">
                Esta área de influencia abarca las siguientes regiones y
                municipios de Jalisco: 1) Ahualulco de Mercado, Amatitán, Ameca,
                El Arenal, Etzatlán,Hostotipaquillo, Magdalena, San Juanito de
                Escobedo, San Marcos, Tala, Tequila y Teuchitlán, pertenecientes
                a la Región de los Valles. 2) Cocula y San Martín de Hidalgo
                correspondientes a la Región Lagunas; 3) Atenguillo,
                Guachinango, Mascota, Mixtlán y Talpa de Allende, los cuales
                conforman una parte de la Región Costa-Sierra Occidental.
              </h5>
              <br></br><br></br><br></br>
            </Col>
            <Col lg="10" md="12">
              <div className="image-container">
                <img
                  alt="..."
                  className="components-macbook rounded-sm"
                  src={require("assets/img/presentation-page/udg-hero.jpg")}
                ></img>
                <img
                  alt="..."
                  className="table-img rounded-sm"
                  src={require("assets/img/presentation-page/smh.jpg")}
                ></img> 
                <img
                  alt="..."
                  className="coloured-card-btn-img rounded-sm"
                  src={require("assets/img/presentation-page/cocula.jpg")}
                ></img>
                <img
                  alt="..."
                  className="coloured-card-img rounded-sm"
                  src={require("assets/img/presentation-page/ameca.jpg")}
                ></img>
              </div>
              <br></br><br></br><br></br>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default BasicComponents;
