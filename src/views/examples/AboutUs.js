import React from "react";
// react plugin used to create DropdownMenu for selecting items
import Select from "react-select";
import { NavLink } from "react-router-dom";
// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import DropdownFixedNavbar from "components/Navbars/DropdownFixedNavbar.js";
import AboutUsHeader from "components/Headers/AboutUsHeader.js";
import Footer from "components/Footers/Footer.js";

function AboutUs() {
  const [specialitySelect, setSpecialitySelect] = React.useState(null);
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false);
  React.useEffect(() => {
    document.body.classList.add("about-us");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("about-us");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  return (
    <>
      <DropdownFixedNavbar />
      <div className="wrapper">
        <AboutUsHeader />
        <div className="section">
          <div className="separator-line bg-info"></div>
          <div className="projects-5">
            <Container>
              <Row>
                <Col className="ml-auto mr-auto text-center" md="8">
                  <h2 className="title">Nuestra Misión</h2>
                  <h4 className="text-justify">
                    Nuestra misión es poder generar un espacio donde se
                    aglomeren todos los documentos, publicaciones y trabajos
                    relacionados con la región de los valles y con el área de
                    atención pertinentes el Centro Universitario de los Valles
                    (CUValles), partiendo de 6 puntos:
                  </h4>
                  <div className="section-space"></div>
                </Col>
              </Row>
              <Row>
                <Col className="ml-auto" md="5">
                  <Card
                    className="card-background card-background-product card-raised"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/cuvalles-3.jpg") + ")",
                      opacity: 0.7,
                    }}
                  >
                    <CardBody>
                      <CardTitle tag="h2">
                        Plataforma de Almacenamiento y Promoción Académica
                      </CardTitle>
                      <p className="card-description text-justify text-white">
                        Plataforma integral para la vinculación, exhibición y
                        promoción de trabajos académicos relacionados con la
                        región y el Centro Universitario de los Valles
                        (CUValles), abarcando una amplia variedad de formatos y
                        disciplinas. Además, facilita la celebración de la
                        diversidad cultural y promueve la interacción
                        comunitaria a través de eventos y talleres.
                      </p>
                    </CardBody>
                  </Card>
                </Col>
                <Col className="mr-auto" md="5">
                  <div className="info info-horizontal">
                    <div className="icon icon-danger">
                      <i className="now-ui-icons education_agenda-bookmark"></i>
                    </div>
                    <div className="description">
                      <h4 className="info-title">Vinculación y exhibición:</h4>
                      <p className="info-title text-justify">
                        Proporcionar un espacio digital para que el público en
                        general pueda depositar y exhibir sus trabajos
                        relacionados con la región de los valles o con el Centro
                        Universitario de los Valles (CUValles).
                      </p>
                    </div>
                  </div>
                  <div className="info info-horizontal">
                    <div className="icon icon-danger">
                      <i className="now-ui-icons design_palette"></i>
                    </div>
                    <div className="description">
                      <h4 className="info-title">
                        Promoción de la cultura local:
                      </h4>
                      <p className="info-title text-justify">
                        Promover la cultura local al facilitar la difusión de
                        obras que resalten la importancia y diversidad de la
                        región de los valles, incluyendo aspectos históricos,
                        antropológicos, científicos y culturales que contribuyan
                        a enriquecer el conocimiento sobre esta área geográfica.
                      </p>
                    </div>
                  </div>
                  <div className="info info-horizontal">
                    <div className="icon icon-danger">
                      <i className="now-ui-icons business_globe"></i>
                    </div>
                    <div className="description">
                      <h4 className="info-title">
                        Fomento de la participación comunitaria:
                      </h4>
                      <p className="info-title text-justify">
                        Promover la participación activa de la comunidad,
                        permitiendo que los creadores interactúen entre sí y
                        compartan ideas y trabajos.
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
              <hr></hr>
              <Row>
                <Col className="ml-auto mt-5" md="5">
                  <div className="info info-horizontal">
                    <div className="icon icon-warning">
                      <i className="now-ui-icons location_world"></i>
                    </div>
                    <div className="description">
                      <h4 className="info-title">
                        Colaboración local, nacional e internacional:
                      </h4>
                      <p className="info-title text-justify">
                        Colaborar con instituciones educativas, bibliotecas y
                        organizaciones locales, nacionales e internacionales
                        para promover el acceso a la información y la
                        investigación sobre la región.
                      </p>
                    </div>
                  </div>
                  <div className="info info-horizontal">
                    <div className="icon icon-warning">
                      <i className="now-ui-icons tech_laptop"></i>
                    </div>
                    <div className="description">
                      <h4 className="info-title">Presencia digital:</h4>
                      <p className="info-title text-justify">
                        Presencia digital a través de una plataforma web donde
                        los creadores puedan cargar sus obras de manera virtual
                        permitiendo que un público más amplio pueda acceder a
                        ellas desde cualquier lugar del mundo, amplificando así
                        su alcance y accesibilidad.
                      </p>
                    </div>
                  </div>
                  <div className="info info-horizontal">
                    <div className="icon icon-warning">
                      <i className="now-ui-icons education_hat"></i>
                    </div>
                    <div className="">
                      <h4 className="info-title">Punto de encuentro :</h4>
                      <p className="info-title text-justify">
                        Punto de encuentro para la comunidad académica y
                        cultural interesada en explorar y celebrar la riqueza y
                        diversidad de esta región.
                      </p>
                    </div>
                  </div>
                </Col>
                <Col className="mr-auto" md="5">
                  <Card
                    className="card-background card-background-product card-raised"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/cuvalles-4.jpg") + ")",
                    }}
                  >
                    <CardBody>
                      <CardTitle tag="h2">
                        Hub de Colaboración Institucional y Difusión Global
                      </CardTitle>
                      <p className="card-description text-white text-justify">
                        Hub dinámico que promueve la colaboración entre
                        instituciones educativas, bibliotecas y organizaciones
                        locales, fortaleciendo el acceso a la información y la
                        investigación sobre los valles. Además, establece una
                        presencia digital global, permitiendo que las obras
                        depositadas sean vistas y compartidas por un público
                        amplio desde cualquier lugar del mundo.
                      </p>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="about-team team-4">
            <Container>
              <Row>
                <Col className="ml-auto mr-auto text-center" md="8">
                  <h2 className="title">Nuestro equipo de Trabajo</h2>
                  <h4 className="text-justify">
                    Nuestros colaboradores conforman un equipo
                    multidisciplinario que abarca las áreas de Ingeniería,
                    Ciencias Sociales y Humanidades. Esta combinación de
                    disciplinas permite una sinergia que resulta en la
                    realización exitosa del presente proyecto.
                  </h4>
                </Col>
              </Row>
              <Row>
                <Col className="ml-auto mr-auto" lg="7" xl="6">
                  <Card className="card-profile card-plain">
                    <Row>
                      <Col md="5">
                        <div className="card-image">
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            <img
                              alt="..."
                              className="img img-raised rounded"
                              src={require("assets/img/olivia.jpg")}
                            ></img>
                          </a>
                        </div>
                      </Col>
                      <Col md="7">
                        <CardBody>
                          <CardTitle tag="h4">Dr. Alvaro Mora Maciel</CardTitle>
                          <h6 className="category">Doctor en Urbanismo</h6>
                          <p className="">alvaro.mora@valles.udg.mx</p>
                          <CardFooter></CardFooter>
                        </CardBody>
                      </Col>
                    </Row>
                  </Card>
                </Col>
                <Col className="ml-auto mr-auto" lg="7" xl="6">
                  <Card className="card-profile card-plain">
                    <Row>
                      <Col md="5">
                        <div className="card-image">
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            <img
                              alt="..."
                              className="img img-raised rounded"
                              src={require("assets/img/cuvalles-felix.jpg")}
                            ></img>
                          </a>
                        </div>
                      </Col>
                      <Col md="7">
                        <CardBody>
                          <CardTitle tag="h4">
                            Mtro. Félix Alberto Barrera Osuna
                          </CardTitle>
                          <h6 className="category">Secretario Técnico</h6>
                          <p className="">felix.barrera@valles.udg.mx</p>
                          <CardFooter></CardFooter>
                        </CardBody>
                      </Col>
                    </Row>
                  </Card>
                </Col>
                <Col className="ml-auto mr-auto" lg="7" xl="6">
                  <Card className="card-profile card-plain">
                    <Row>
                      <Col md="5">
                        <div className="card-image">
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            <img
                              alt="..."
                              className="img img-raised rounded"
                              src={require("assets/img/cuvalles-rectora.jpg")}
                            ></img>
                          </a>
                        </div>
                      </Col>
                      <Col md="7">
                        <CardBody>
                          <CardTitle tag="h4">
                            Dra. María Luisa García Bátiz
                          </CardTitle>
                          <h6 className="category">Rectora de Centro</h6>
                          <p className="">mluisa.garcia@valles.udg.mx</p>
                          <CardFooter></CardFooter>
                        </CardBody>
                      </Col>
                    </Row>
                  </Card>
                </Col>
                <Col className="ml-auto mr-auto" lg="7" xl="6">
                  <Card className="card-profile card-plain">
                    <Row>
                      <Col md="5">
                        <div className="card-image">
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            <img
                              alt="..."
                              className="img img-raised rounded"
                              src={require("assets/img/michael.jpg")}
                            ></img>
                          </a>
                        </div>
                      </Col>
                      <Col md="7">
                        <CardBody>
                          <CardTitle tag="h4">
                            Dra. Karla Viridiana Rosales Valenzuela
                          </CardTitle>
                          <h6 className="category">Doctora en Urbanismo</h6>
                          <p className="">karla.rosales@valles.udg.mx</p>
                          <CardFooter></CardFooter>
                        </CardBody>
                      </Col>
                    </Row>
                  </Card>
                </Col>
                <Col className="ml-auto mr-auto" lg="7" xl="6">
                  <Card className="card-profile card-plain">
                    <Row>
                      <Col md="5">
                        <div className="card-image">
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            <img
                              alt="..."
                              className="img img-raised rounded"
                              src={require("assets/img/olivia.jpg")}
                            ></img>
                          </a>
                        </div>
                      </Col>
                      <Col md="7">
                        <CardBody>
                          <CardTitle tag="h4">
                            Stefany Hernández Sánchez
                          </CardTitle>
                          <h6 className="category">Estudiante</h6>
                          <p className="">
                            stefany.hernandez6508@alumnos.udg.mx
                          </p>
                          <CardFooter></CardFooter>
                        </CardBody>
                      </Col>
                    </Row>
                  </Card>
                </Col>
                <Col className="ml-auto mr-auto" lg="7" xl="6">
                  <Card className="card-profile card-plain">
                    <Row>
                      <Col md="5">
                        <div className="card-image">
                          <NavLink to={`/contacto-fernando`} target="blank">
                            <img
                              alt="..."
                              className="img img-raised rounded"
                              src={require("assets/img/emily.jpg")}
                            ></img>
                          </NavLink>
                        </div>
                      </Col>
                      <Col md="7">
                        <CardBody>
                          <CardTitle tag="h4">
                            Fernando Sánchez Plascencia
                          </CardTitle>
                          <h6 className="category">
                            Ing. Electrónica y Computación
                          </h6>
                          <p className="">
                            fernando.sanchez3411@alumnos.udg.mx
                          </p>
                          <CardFooter></CardFooter>
                        </CardBody>
                      </Col>
                    </Row>
                  </Card>
                </Col>
                <Col className="ml-auto mr-auto" lg="7" xl="6">
                  <Card className="card-profile card-plain">
                    <Row>
                      <Col md="5">
                        <div className="card-image">
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            <img
                              alt="..."
                              className="img img-raised rounded"
                              src={require("assets/img/james.jpg")}
                            ></img>
                          </a>
                        </div>
                      </Col>
                      <Col md="7">
                        <CardBody>
                          <CardTitle tag="h4">
                            César Uriel Torres Vallarta
                          </CardTitle>
                          <h6 className="category">Estudiante</h6>
                          <p className="">cesar.torres5377@alumnos.udg.mx</p>
                          <CardFooter></CardFooter>
                        </CardBody>
                      </Col>
                    </Row>
                  </Card>
                </Col>
                <Col className="ml-auto mr-auto" lg="7" xl="6">
                  <Card className="card-profile card-plain">
                    <Row>
                      <Col md="5">
                        <div className="card-image">
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            <img
                              alt="..."
                              className="img img-raised rounded"
                              src={require("assets/img/michael.jpg")}
                            ></img>
                          </a>
                        </div>
                      </Col>
                      <Col md="7">
                        <CardBody>
                          <CardTitle tag="h4">
                            Enrique Jesús Fregoso Gutiérrez
                          </CardTitle>
                          <h6 className="category">Estudiante</h6>
                          <p className="">enrique.fregoso4189@alumnos.udg.mx</p>
                          <CardFooter></CardFooter>
                        </CardBody>
                      </Col>
                    </Row>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="about-office">
            <Container>
              <Row className="text-center">
                <Col className="ml-auto mr-auto" md="8">
                  <h2 className="title">Nuestra Visión</h2>
                  <h4 className="text-justify">
                    Ser reconocido como un centro de referencia y difusión de
                    conocimiento sobre la región de los valles y el Centro
                    Universitario de los Valles (CUValles), promoviendo la
                    investigación interdisciplinaria, la preservación de la
                    cultura local y la colaboración comunitaria a nivel local y
                    global.
                  </h4>
                </Col>
              </Row>
              <Row>
                <Col md="4">
                  <img
                    alt="..."
                    className="rounded img-raised"
                    src={require("assets/img/cuvalles-3.jpg")}
                  ></img>
                </Col>
                <Col md="4">
                  <img
                    alt="..."
                    className="rounded img-raised"
                    src={require("assets/img/cuvalles-4.jpg")}
                  ></img>
                </Col>
                <Col md="4">
                  <img
                    alt="..."
                    className="rounded img-raised"
                    src={require("assets/img/universidad-de-guadalajara-3.jpg")}
                  ></img>
                </Col>
                <Col md="6">
                  <img
                    alt="..."
                    className="rounded img-raised"
                    src={require("assets/img/region-valles-3.jpeg")}
                  ></img>
                </Col>
                <Col md="6">
                  <img
                    alt="..."
                    className="rounded img-raised"
                    src={require("assets/img/region-valles-2.jpeg")}
                  ></img>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default AboutUs;
