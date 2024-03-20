import React from "react";
// react plugin used to create DropdownMenu for selecting items
import Select from "react-select";
//translations
import { useTranslation } from "react-i18next";
//react router domr
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
import ScrollTransparentNavbarSections from "components/Navbars/ScrollTransparentNavbarSections.js";
import BibliotecasHeader from "components/Headers/BibliotecasHeader.js";
import FooterBlackSections from "components/Footers/FooterBlackSections.js";

function Bibliotecas() {
  const { t, i18n } = useTranslation("global");
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
      <ScrollTransparentNavbarSections />
      <div className="wrapper">
        <BibliotecasHeader />
        <div className="section">
          <div className="about-description text-center">
            <div className="features-3">
              <Container>
                <Row>
                  <Col className="mr-auto ml-auto" md="8">
                    <h2 className="title">Simpler. Smarter. Faster.</h2>
                    <h4 className="description">
                      The CloudCheckr Cloud Management Platform (CMP) provides
                      full visibility and control to reduce costs, improve
                      cybersecurity posture, and automate critical tasks.
                    </h4>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
          <div className="separator-line bg-info"></div>
          <div className="projects-5">
            <div className="about-team team-4">
              <Container>
                <Row>
                  <Col className="ml-auto mr-auto text-center" md="8">
                    <h2 className="title">{t("About.TitleWorkingTeam")}</h2>
                    <h4 className="text-justify">
                      {t("About.WorkingTeamDescription")}
                    </h4>
                  </Col>
                </Row>
                <Row>
                  <Col className="ml-auto mr-auto" lg="7" xl="6">
                    <Card className="card-profile card-plain">
                      <Row>
                        <Col md="5">
                          <div className="card-image">
                            <NavLink to={`/contacto-fernando`} target="blank">
                              <img
                                loading="lazy"
                                alt="..."
                                className="img img-raised rounded"
                                src={require("assets/img/equipo/garcia_batiz_maria_luisa_350x450.jpg")}
                              ></img>
                            </NavLink>
                          </div>
                        </Col>
                        <Col md="7">
                          <CardBody>
                            <div className="info info-horizontal">
                              <div className="icon icon-danger">
                                <i className="now-ui-icons travel_istanbul"></i>
                              </div>
                              <div className="description">
                                <h4 className="info-title">CUValles</h4>
                              </div>
                            </div>
                            <div className="info info-horizontal">
                              <div className="icon icon-danger">
                                <i className="now-ui-icons text_bold"></i>
                              </div>
                              <div className="description">
                                <h4 className="info-title">
                                  Biblioteca CUValles
                                </h4>
                              </div>
                            </div>
                            <div className="info info-horizontal">
                              <div className="icon icon-danger">
                                <i className="now-ui-icons location_pin"></i>
                              </div>
                              <div className="description">
                                <h4 className="info-title">Ubicación</h4>
                                <p className="description">
                                  Universidad de Guadalajara
                                </p>
                                <p className="description">
                                  Centro Universitario de los Valles
                                </p>
                                <p className="description">
                                  Carretera Guadalajara - Ameca Km. 45.5, C.P.
                                  46600 Ameca, Jalisco, México.
                                </p>
                              </div>
                            </div>
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
                                loading="lazy"
                                alt="..."
                                className="img img-raised rounded"
                                src={require("assets/img/equipo/barrera_osuna_felix_alberto_350x450.jpg")}
                              ></img>
                            </NavLink>
                          </div>
                        </Col>
                        <Col md="7">
                          <CardBody>
                            <div className="info info-horizontal">
                              <div className="icon icon-danger">
                                <i className="now-ui-icons travel_istanbul"></i>
                              </div>
                              <div className="description">
                                <h4 className="info-title">Ameca</h4>
                              </div>
                            </div>
                            <div className="info info-horizontal">
                              <div className="icon icon-danger">
                                <i className="now-ui-icons text_bold"></i>
                              </div>
                              <div className="description">
                                <h4 className="info-title">
                                  {" "}
                                  Hilarión Romero Gil
                                </h4>
                              </div>
                            </div>
                            <div className="info info-horizontal">
                              <div className="icon icon-danger">
                                <i className="now-ui-icons location_pin"></i>
                              </div>
                              <div className="description">
                                <h4 className="info-title">Ubicación</h4>
                                <p className="description">Ameca</p>
                                <p className="description">
                                  Fray Antonio de Cuellar s/n (Casa de la
                                  Cultura), Col. Centro CP 46600, Ameca, Jalisco
                                </p>
                              </div>
                            </div>
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
                                loading="lazy"
                                alt="..."
                                className="img img-raised rounded"
                                src={require("assets/img/equipo/gonzalez_valensuela_karla_viridaina_350x450.jpg")}
                              ></img>
                            </NavLink>
                          </div>
                        </Col>
                        <Col md="7">
                          <CardBody>
                            <div className="info info-horizontal">
                              <div className="icon icon-danger">
                                <i className="now-ui-icons travel_istanbul"></i>
                              </div>
                              <div className="description">
                                <h4 className="info-title">
                                  San Juanito Escobedo
                                </h4>
                              </div>
                            </div>
                            <div className="info info-horizontal">
                              <div className="icon icon-danger">
                                <i className="now-ui-icons text_bold"></i>
                              </div>
                              <div className="description">
                                <h4 className="info-title">
                                  Lic. Agustín López Arciniega
                                </h4>
                              </div>
                            </div>
                            <div className="info info-horizontal">
                              <div className="icon icon-danger">
                                <i className="now-ui-icons location_pin"></i>
                              </div>
                              <div className="description">
                                <h4 className="info-title">Ubicación</h4>
                                <p className="description">
                                  San Juanito Escobedo
                                </p>
                                <p className="description">
                                  Juárez No. 13 (Casa de la Cultura), Col.
                                  Centro CP 46560, San Juanito de Escobedo,
                                  Jalisco Tels.: (386) 754 0901
                                </p>
                              </div>
                            </div>
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
                                loading="lazy"
                                alt="..."
                                className="img img-raised rounded"
                                src={require("assets/img/equipo/mora_maciel_alvaro_350x450.jpg")}
                              ></img>
                            </NavLink>
                          </div>
                        </Col>
                        <Col md="7">
                          <CardBody>
                            <div className="info info-horizontal">
                              <div className="icon icon-danger">
                                <i className="now-ui-icons travel_istanbul"></i>
                              </div>
                              <div className="description">
                                <h4 className="info-title">Magdalena</h4>
                              </div>
                            </div>
                            <div className="info info-horizontal">
                              <div className="icon icon-danger">
                                <i className="now-ui-icons text_bold"></i>
                              </div>
                              <div className="description">
                                <h4 className="info-title">José Dau</h4>
                              </div>
                            </div>
                            <div className="info info-horizontal">
                              <div className="icon icon-danger">
                                <i className="now-ui-icons location_pin"></i>
                              </div>
                              <div className="description">
                                <h4 className="info-title">Ubicación</h4>
                                <p className="description">Magdalena</p>
                                <p className="description">
                                  Independencia No. 16, Col. Centro CP 46470,
                                  Magdalena, Jalisco Tels.: (386) 744 2225
                                </p>
                              </div>
                            </div>
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
                                loading="lazy"
                                alt="..."
                                className="img img-raised rounded"
                                src={require("assets/img/equipo/cuvalles-stefany.jpeg")}
                              ></img>
                            </NavLink>
                          </div>
                        </Col>
                        <Col md="7">
                          <CardBody>
                            <div className="info info-horizontal">
                              <div className="icon icon-danger">
                                <i className="now-ui-icons travel_istanbul"></i>
                              </div>
                              <div className="description">
                                <h4 className="info-title">Mascota</h4>
                              </div>
                            </div>
                            <div className="info info-horizontal">
                              <div className="icon icon-danger">
                                <i className="now-ui-icons text_bold"></i>
                              </div>
                              <div className="description">
                                <h4 className="info-title">
                                  Hilarión Romero Gil
                                </h4>
                              </div>
                            </div>
                            <div className="info info-horizontal">
                              <div className="icon icon-danger">
                                <i className="now-ui-icons location_pin"></i>
                              </div>
                              <div className="description">
                                <h4 className="info-title">Ubicación</h4>
                                <p className="description">Mascota</p>
                                <p className="description">
                                  Ramón Corona No. 7, Col. Centro CP 46900,
                                  Mascota, Jalisco Tels.: (388) 386 0325
                                </p>
                              </div>
                            </div>
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
                                loading="lazy"
                                alt="..."
                                className="img img-raised rounded"
                                src={require("assets/img/equipo/cuvalles-fernando.jpeg")}
                              ></img>
                            </NavLink>
                          </div>
                        </Col>
                        <Col md="7">
                          <CardBody>
                            <div className="info info-horizontal">
                              <div className="icon icon-danger">
                                <i className="now-ui-icons travel_istanbul"></i>
                              </div>
                              <div className="description">
                                <h4 className="info-title">Tequila</h4>
                              </div>
                            </div>
                            <div className="info info-horizontal">
                              <div className="icon icon-danger">
                                <i className="now-ui-icons text_bold"></i>
                              </div>
                              <div className="description">
                                <h4 className="info-title">
                                  Mercedes Hernández de Orendain
                                </h4>
                              </div>
                            </div>
                            <div className="info info-horizontal">
                              <div className="icon icon-danger">
                                <i className="now-ui-icons location_pin"></i>
                              </div>
                              <div className="description">
                                <h4 className="info-title">Ubicación</h4>
                                <p className="description">Tequila</p>
                                <p className="description">
                                  Lerdo de Tejeda No. 20 (Casa de la Cultura),
                                  Col. Centro CP 46400, Tequila, Jalisco Tels.:
                                  (374) 742 2410
                                </p>
                              </div>
                            </div>
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
                                loading="lazy"
                                alt="..."
                                className="img img-raised rounded"
                                src={require("assets/img/equipo/cuvalles-cesar.jpeg")}
                              ></img>
                            </NavLink>
                          </div>
                        </Col>
                        <Col md="7">
                          <CardBody>
                            <div className="info info-horizontal">
                              <div className="icon icon-danger">
                                <i className="now-ui-icons travel_istanbul"></i>
                              </div>
                              <div className="description">
                                <h4 className="info-title">Amatitán</h4>
                              </div>
                            </div>
                            <div className="info info-horizontal">
                              <div className="icon icon-danger">
                                <i className="now-ui-icons text_bold"></i>
                              </div>
                              <div className="description">
                                <h4 className="info-title">
                                  Lic. Enrique Álvarez del Castillo
                                </h4>
                              </div>
                            </div>
                            <div className="info info-horizontal">
                              <div className="icon icon-danger">
                                <i className="now-ui-icons location_pin"></i>
                              </div>
                              <div className="description">
                                <h4 className="info-title">Ubicación</h4>
                                <p className="description">Amatitan</p>
                                <p className="description">
                                  Brígido Ramírez No. 1, Col. Centro CP 45380,
                                  Amatitán, Jalisco Tels.: (374) 745 0310
                                </p>
                              </div>
                            </div>
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
                                loading="lazy"
                                alt="..."
                                className="img img-raised rounded"
                                src={require("assets/img/equipo/michael.jpg")}
                              ></img>
                            </NavLink>
                          </div>
                        </Col>
                        <Col md="7">
                          <CardBody>
                            <div className="info info-horizontal">
                              <div className="icon icon-danger">
                                <i className="now-ui-icons travel_istanbul"></i>
                              </div>
                              <div className="description">
                                <h4 className="info-title">Guachinango</h4>
                              </div>
                            </div>
                            <div className="info info-horizontal">
                              <div className="icon icon-danger">
                                <i className="now-ui-icons text_bold"></i>
                              </div>
                              <div className="description">
                                <h4 className="info-title">
                                  Lic. Enrique Álvarez del Castillo
                                </h4>
                              </div>
                            </div>
                            <div className="info info-horizontal">
                              <div className="icon icon-danger">
                                <i className="now-ui-icons location_pin"></i>
                              </div>
                              <div className="description">
                                <h4 className="info-title">Ubicación</h4>
                                <p className="description">Guachinango</p>
                                <p className="description">
                                  Reforma No. 7-A, Col. Centro CP 46800,
                                  Guachinango, Jalisco Tels.: (388) 736 0073
                                </p>
                              </div>
                            </div>
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
                                loading="lazy"
                                alt="..."
                                className="img img-raised rounded"
                                src={require("assets/img/equipo/michael.jpg")}
                              ></img>
                            </NavLink>
                          </div>
                        </Col>
                        <Col md="7">
                          <CardBody>
                            <div className="info info-horizontal">
                              <div className="icon icon-danger">
                                <i className="now-ui-icons travel_istanbul"></i>
                              </div>
                              <div className="description">
                                <h4 className="info-title">Mixtlan</h4>
                              </div>
                            </div>
                            <div className="info info-horizontal">
                              <div className="icon icon-danger">
                                <i className="now-ui-icons text_bold"></i>
                              </div>
                              <div className="description">
                                <h4 className="info-title">Miguel Hidalgo</h4>
                              </div>
                            </div>
                            <div className="info info-horizontal">
                              <div className="icon icon-danger">
                                <i className="now-ui-icons location_pin"></i>
                              </div>
                              <div className="description">
                                <h4 className="info-title">Ubicación</h4>
                                <p className="description">Mixtlan</p>
                                <p className="description">
                                  Librada González nro. 1, Col. Fraccionamiento
                                  los Zapotes Casa de la Cultura CP 46850,
                                  Mixtlán, Jalisco Tels.: 388 736 5084
                                </p>
                              </div>
                            </div>
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
                                loading="lazy"
                                alt="..."
                                className="img img-raised rounded"
                                src={require("assets/img/equipo/michael.jpg")}
                              ></img>
                            </NavLink>
                          </div>
                        </Col>
                        <Col md="7">
                          <CardBody>
                            <div className="info info-horizontal">
                              <div className="icon icon-danger">
                                <i className="now-ui-icons travel_istanbul"></i>
                              </div>
                              <div className="description">
                                <h4 className="info-title">
                                  San Martín Hidalgo
                                </h4>
                              </div>
                            </div>
                            <div className="info info-horizontal">
                              <div className="icon icon-danger">
                                <i className="now-ui-icons text_bold"></i>
                              </div>
                              <div className="description">
                                <h4 className="info-title">
                                  Prof. José Galarza Zavalza
                                </h4>
                              </div>
                            </div>
                            <div className="info info-horizontal">
                              <div className="icon icon-danger">
                                <i className="now-ui-icons location_pin"></i>
                              </div>
                              <div className="description">
                                <h4 className="info-title">Ubicación</h4>
                                <p className="description">
                                  San Martín de Hidalgo
                                </p>
                                <p className="description">
                                  Nicolás Bravo No. 2, Col. Centro CP 46790, San
                                  Martín Hidalgo, Jalisco Tels.: (385) 755 9128
                                </p>
                              </div>
                            </div>
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
                                loading="lazy"
                                alt="..."
                                className="img img-raised rounded"
                                src={require("assets/img/equipo/michael.jpg")}
                              ></img>
                            </NavLink>
                          </div>
                        </Col>
                        <Col md="7">
                          <CardBody>
                            <div className="info info-horizontal">
                              <div className="icon icon-danger">
                                <i className="now-ui-icons travel_istanbul"></i>
                              </div>
                              <div className="description">
                                <h4 className="info-title">Tala</h4>
                              </div>
                            </div>
                            <div className="info info-horizontal">
                              <div className="icon icon-danger">
                                <i className="now-ui-icons text_bold"></i>
                              </div>
                              <div className="description">
                                <h4 className="info-title">
                                  Valentín Gómez Farías
                                </h4>
                              </div>
                            </div>
                            <div className="info info-horizontal">
                              <div className="icon icon-danger">
                                <i className="now-ui-icons location_pin"></i>
                              </div>
                              <div className="description">
                                <h4 className="info-title">Ubicación</h4>
                                <p className="description">Tala</p>
                                <p className="description">
                                  Nicolás Bravo No. 91 (Casa de la Cultura),
                                  Col. Centro CP 45300, Tala, Jalisco Tels.:
                                  (384) 738 3466
                                </p>
                              </div>
                            </div>
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
                                loading="lazy"
                                alt="..."
                                className="img img-raised rounded"
                                src={require("assets/img/equipo/michael.jpg")}
                              ></img>
                            </NavLink>
                          </div>
                        </Col>
                        <Col md="7">
                          <CardBody>
                            <div className="info info-horizontal">
                              <div className="icon icon-danger">
                                <i className="now-ui-icons travel_istanbul"></i>
                              </div>
                              <div className="description">
                                <h4 className="info-title">Teuchitlán</h4>
                              </div>
                            </div>
                            <div className="info info-horizontal">
                              <div className="icon icon-danger">
                                <i className="now-ui-icons text_bold"></i>
                              </div>
                              <div className="description">
                                <h4 className="info-title">
                                  Petronilo González Estrada
                                </h4>
                              </div>
                            </div>
                            <div className="info info-horizontal">
                              <div className="icon icon-danger">
                                <i className="now-ui-icons location_pin"></i>
                              </div>
                              <div className="description">
                                <h4 className="info-title">Ubicación</h4>
                                <p className="description">Teuchitlan</p>
                                <p className="description">
                                  Hilarión Romero Gil No. 14, Col. Centro CP
                                  46760, Teuchitlán, Jalisco Tels.: (384) 733
                                  0037
                                </p>
                              </div>
                            </div>
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
                                loading="lazy"
                                alt="..."
                                className="img img-raised rounded"
                                src={require("assets/img/equipo/michael.jpg")}
                              ></img>
                            </NavLink>
                          </div>
                        </Col>
                        <Col md="7">
                          <CardBody>
                            <div className="info info-horizontal">
                              <div className="icon icon-danger">
                                <i className="now-ui-icons travel_istanbul"></i>
                              </div>
                              <div className="description">
                                <h4 className="info-title">
                                  Ahualulco del Mercado
                                </h4>
                              </div>
                            </div>
                            <div className="info info-horizontal">
                              <div className="icon icon-danger">
                                <i className="now-ui-icons text_bold"></i>
                              </div>
                              <div className="description">
                                <h4 className="info-title">
                                  Dr. Uribe Casillas
                                </h4>
                              </div>
                            </div>
                            <div className="info info-horizontal">
                              <div className="icon icon-danger">
                                <i className="now-ui-icons location_pin"></i>
                              </div>
                              <div className="description">
                                <h4 className="info-title">Ubicación</h4>
                                <p className="description">
                                  Ahualulco de Mercado
                                </p>
                                <p className="description">
                                  José María Mercado No. 15, Col. Centro (Casa
                                  de la Cultura) CP 46730, Ahualulco de Mercado,
                                  Jalisco Tels.: (386) 752 2445
                                </p>
                              </div>
                            </div>
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
                                loading="lazy"
                                alt="..."
                                className="img img-raised rounded"
                                src={require("assets/img/equipo/michael.jpg")}
                              ></img>
                            </NavLink>
                          </div>
                        </Col>
                        <Col md="7">
                          <CardBody>
                            <div className="info info-horizontal">
                              <div className="icon icon-danger">
                                <i className="now-ui-icons travel_istanbul"></i>
                              </div>
                              <div className="description">
                                <h4 className="info-title">El Arenal</h4>
                              </div>
                            </div>
                            <div className="info info-horizontal">
                              <div className="icon icon-danger">
                                <i className="now-ui-icons text_bold"></i>
                              </div>
                              <div className="description">
                                <h4 className="info-title">
                                  Luis Orozco Corona
                                </h4>
                                <p className="description"></p>
                              </div>
                            </div>
                            <div className="info info-horizontal">
                              <div className="icon icon-danger">
                                <i className="now-ui-icons location_pin"></i>
                              </div>
                              <div className="description">
                                <h4 className="info-title">Ubicación</h4>
                                <p className="description">El Arenal</p>
                                <p className="description">
                                  Av. del Ferrocarril No. 130-A, Col. Centro CP
                                  45350, El Arenal, Jalisco Tels.: (374) 748
                                  0266
                                </p>
                              </div>
                            </div>
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
                                loading="lazy"
                                alt="..."
                                className="img img-raised rounded"
                                src={require("assets/img/equipo/michael.jpg")}
                              ></img>
                            </NavLink>
                          </div>
                        </Col>
                        <Col md="7">
                          <CardBody>
                            <div className="info info-horizontal">
                              <div className="icon icon-danger">
                                <i className="now-ui-icons travel_istanbul"></i>
                              </div>
                              <div className="description">
                                <h4 className="info-title">Atenguillo</h4>
                              </div>
                            </div>
                            <div className="info info-horizontal">
                              <div className="icon icon-danger">
                                <i className="now-ui-icons text_bold"></i>
                              </div>
                              <div className="description">
                                <h4 className="info-title">Atenguillo</h4>
                              </div>
                            </div>
                            <div className="info info-horizontal">
                              <div className="icon icon-danger">
                                <i className="now-ui-icons location_pin"></i>
                              </div>
                              <div className="description">
                                <h4 className="info-title">Ubicación</h4>
                                <p className="description">Atenguillo</p>
                                <p className="description">
                                  Javier Mina No. 8, Col. Centro (PA de la
                                  Pdcia. Mpal.) CP 48100, Atenguillo, Jalisco
                                  Tels.: (388) 736 8878
                                </p>
                              </div>
                            </div>
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
                                loading="lazy"
                                alt="..."
                                className="img img-raised rounded"
                                src={require("assets/img/equipo/michael.jpg")}
                              ></img>
                            </NavLink>
                          </div>
                        </Col>
                        <Col md="7">
                          <CardBody>
                            <div className="info info-horizontal">
                              <div className="icon icon-danger">
                                <i className="now-ui-icons travel_istanbul"></i>
                              </div>
                              <div className="description">
                                <h4 className="info-title">Cocula</h4>
                              </div>
                            </div>
                            <div className="info info-horizontal">
                              <div className="icon icon-danger">
                                <i className="now-ui-icons text_bold"></i>
                              </div>
                              <div className="description">
                                <h4 className="info-title">
                                  Elías Nandino Vallarta
                                </h4>
                              </div>
                            </div>
                            <div className="info info-horizontal">
                              <div className="icon icon-danger">
                                <i className="now-ui-icons location_pin"></i>
                              </div>
                              <div className="description">
                                <h4 className="info-title">Ubicación</h4>
                                <p className="description">Cocula</p>
                                <p className="description">
                                  Independencia No. 61, Col. Centro CP 48500,
                                  Cocula, Jalisco Tels.: (377) 773 2016
                                </p>
                              </div>
                            </div>
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
                                loading="lazy"
                                alt="..."
                                className="img img-raised rounded"
                                src={require("assets/img/equipo/michael.jpg")}
                              ></img>
                            </NavLink>
                          </div>
                        </Col>
                        <Col md="7">
                          <CardBody>
                            <div className="info info-horizontal">
                              <div className="icon icon-danger">
                                <i className="now-ui-icons travel_istanbul"></i>
                              </div>
                              <div className="description">
                                <h4 className="info-title">Etzatlan</h4>
                              </div>
                            </div>
                            <div className="info info-horizontal">
                              <div className="icon icon-danger">
                                <i className="now-ui-icons text_bold"></i>
                              </div>
                              <div className="description">
                                <h4 className="info-title">
                                  Lic. Agustín Yáñez
                                </h4>
                              </div>
                            </div>
                            <div className="info info-horizontal">
                              <div className="icon icon-danger">
                                <i className="now-ui-icons location_pin"></i>
                              </div>
                              <div className="description">
                                <h4 className="info-title">Ubicación</h4>
                                <p className="description">Etzatlán</p>
                                <p className="description">
                                  Escobedo No. 359, Col. Centro CP 46500,
                                  Etzatlán, Jalisco Tels.: (386) 753 5031
                                </p>
                              </div>
                            </div>
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
                                loading="lazy"
                                alt="..."
                                className="img img-raised rounded"
                                src={require("assets/img/equipo/michael.jpg")}
                              ></img>
                            </NavLink>
                          </div>
                        </Col>
                        <Col md="7">
                          <CardBody>
                            <div className="info info-horizontal">
                              <div className="icon icon-danger">
                                <i className="now-ui-icons travel_istanbul"></i>
                              </div>
                              <div className="description">
                                <h4 className="info-title">San Marcos</h4>
                              </div>
                            </div>
                            <div className="info info-horizontal">
                              <div className="icon icon-danger">
                                <i className="now-ui-icons text_bold"></i>
                              </div>
                              <div className="description">
                                <h4 className="info-title">
                                  Capitán Manuel Mata Camarena
                                </h4>
                              </div>
                            </div>
                            <div className="info info-horizontal">
                              <div className="icon icon-danger">
                                <i className="now-ui-icons location_pin"></i>
                              </div>
                              <div className="description">
                                <h4 className="info-title">Ubicación</h4>
                                <p className="description">San Marcos</p>
                                <p className="description">
                                  Independencia No. 4 (Casa de la Cultura) CP
                                  46540, San Marcos, Jalisco Tels.: (386) 757
                                  0650
                                </p>
                              </div>
                            </div>
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
                                loading="lazy"
                                alt="..."
                                className="img img-raised rounded"
                                src={require("assets/img/equipo/michael.jpg")}
                              ></img>
                            </NavLink>
                          </div>
                        </Col>
                        <Col md="7">
                          <CardBody>
                            <div className="info info-horizontal">
                              <div className="icon icon-danger">
                                <i className="now-ui-icons travel_istanbul"></i>
                              </div>
                              <div className="description">
                                <h4 className="info-title">Talpa de Allende</h4>
                              </div>
                            </div>
                            <div className="info info-horizontal">
                              <div className="icon icon-danger">
                                <i className="now-ui-icons text_bold"></i>
                              </div>
                              <div className="description">
                                <h4 className="info-title">
                                  Profa. Herlinda Martínez Quiñones
                                </h4>
                              </div>
                            </div>
                            <div className="info info-horizontal">
                              <div className="icon icon-danger">
                                <i className="now-ui-icons location_pin"></i>
                              </div>
                              <div className="description">
                                <h4 className="info-title">Ubicación</h4>
                                <p className="description">Talpa de Allende</p>
                                <p className="description">
                                  Paseo de las Orquídeas s/n, Col. San Francisco
                                  CP 48200, Talpa de Allende, Jalisco Tels.:
                                  (388) 385 1027
                                </p>
                              </div>
                            </div>
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
                                loading="lazy"
                                alt="..."
                                className="img img-raised rounded"
                                src={require("assets/img/equipo/michael.jpg")}
                              ></img>
                            </NavLink>
                          </div>
                        </Col>
                        <Col md="7">
                          <CardBody>
                            <div className="info info-horizontal">
                              <div className="icon icon-danger">
                                <i className="now-ui-icons travel_istanbul"></i>
                              </div>
                              <div className="description">
                                <h4 className="info-title">Hostotipaquillo</h4>
                              </div>
                            </div>
                            <div className="info info-horizontal">
                              <div className="icon icon-danger">
                                <i className="now-ui-icons text_bold"></i>
                              </div>
                              <div className="description">
                                <h4 className="info-title">
                                  Profa. Blanca Godina Camarena
                                </h4>
                              </div>
                            </div>
                            <div className="info info-horizontal">
                              <div className="icon icon-danger">
                                <i className="now-ui-icons location_pin"></i>
                              </div>
                              <div className="description">
                                <h4 className="info-title">Ubicación</h4>
                                <p className="description">Hostotipaquillo</p>
                                <p className="description">
                                  Independencia No. 2, Col. Centro CP 46440,
                                  Hostotipaquillo, Jalisco Tels.: (386) 744 5073
                                </p>
                              </div>
                            </div>
                            <CardFooter></CardFooter>
                          </CardBody>
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </div>
        <FooterBlackSections />
      </div>
    </>
  );
}

export default Bibliotecas;
