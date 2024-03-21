import React from "react";
//translations
import { useTranslation } from "react-i18next";
//react router domr
import { NavLink } from "react-router-dom";
// reactstrap components
import {
  Badge,
  Card,
  CardBody,
  CardFooter,
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
          <div className="projects-5">
            <div className="about-team team-4">
              <Container>
                <Row>
                  <Col className="ml-auto mr-auto text-center" md="8">
                    <h2 className="title">{t("Librarys.LibrarysTitle")}</h2>
                    <h4 className="text-justify">
                    {t("Librarys.LibrarysDescription")}
                    </h4>
                    <div className="separator-line bg-info"></div>
                    <div className="badge-container">
                      <a href="#Ameca">
                        <Badge color="success" pill className="m-1">
                          Ameca
                        </Badge>
                      </a>
                      <a href="#Ahualulco-del-Mercado">
                        <Badge color="success" pill className="m-1">
                          Ahualulco del Mercado
                        </Badge>
                      </a>
                      <a href="#Amatitan">
                        <Badge color="success" pill className="m-1">
                          Amatitán
                        </Badge>
                      </a>
                      <a href="#Atenguillo">
                        <Badge color="success" pill className="m-1">
                          Atenguillo
                        </Badge>
                      </a>
                      <a href="#Cocula">
                        <Badge color="success" pill className="m-1">
                          Cocula
                        </Badge>
                      </a>
                      <a href="#CUValles">
                        <Badge color="success" pill className="m-1">
                          CUValles
                        </Badge>
                      </a>
                      <a href="#El-Arenal">
                        <Badge color="success" pill className="m-1">
                          El Arenal
                        </Badge>
                      </a>
                      <a href="#Etzatlan">
                        <Badge color="success" pill className="m-1">
                          Etzatlán
                        </Badge>
                      </a>
                      <a href="#Guachinango">
                        <Badge color="success" pill className="m-1">
                          Guachinango
                        </Badge>
                      </a>
                      <a href="#Hostotipaquillo">
                        <Badge color="success" pill className="m-1">
                          Hostotipaquillo
                        </Badge>
                      </a>
                      <a href="#Magdalena">
                        <Badge color="success" pill className="m-1">
                          Magdalena
                        </Badge>
                      </a>
                      <a href="#Mascota">
                        <Badge color="success" pill className="m-1">
                          Mascota
                        </Badge>
                      </a>
                      <a href="#Mixtlan">
                        <Badge color="success" pill className="m-1">
                          Mixtlan
                        </Badge>
                      </a>
                      <a href="#San-Martin-de-Hidalgo">
                        <Badge color="success" pill className="m-1">
                          San Martín de Hidalgo
                        </Badge>
                      </a>
                      <a href="#San-Juanito-Escobedo">
                        <Badge color="success" pill className="m-1">
                          San Juanito Escobedo
                        </Badge>
                      </a>
                      <a href="#San Marcos">
                        <Badge color="success" pill className="m-1">
                          San Marcos
                        </Badge>
                      </a>
                      <a href="#Tala">
                        <Badge color="success" pill className="m-1">
                          Tala
                        </Badge>
                      </a>
                      <a href="#Talpa-de-Allende">
                        <Badge color="success" pill className="m-1">
                          Talpa de Allende
                        </Badge>
                      </a>
                      <a href="#Tequila">
                        <Badge color="success" pill className="m-1">
                          Tequila
                        </Badge>
                      </a>
                      <a href="#Teuchitlan">
                        <Badge color="success" pill className="m-1">
                          Teuchitlán
                        </Badge>
                      </a>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col className="ml-auto mr-auto" lg="7" xl="6" id="Ameca">
                    <Card className="card-profile card-plain">
                      <Row>
                        <Col
                          md="12"
                          className="d-flex justify-content-center align-items-center"
                        >
                          <div
                            className="card-image"
                            style={{ width: "400px", height: "400px" }}
                          >
                            <NavLink to="https://maps.app.goo.gl/4UAtMsKADV3uWRh7A" target="blank">
                              <img
                                loading="lazy"
                                alt="..."
                                className="img img-raised rounded"
                                src={require("assets/img/bibliotecas/biblioteca-cuvalles.jpg")}
                              ></img>
                            </NavLink>
                          </div>
                        </Col>
                        <Col md="12">
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
                                <h4 className="info-title font-italic">
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
                                <a
                                  href="https://maps.app.goo.gl/4UAtMsKADV3uWRh7A"
                                  target={"_blank"}
                                >
                                  <p className="description">
                                    Fray Antonio de Cuellar s/n (Casa de la
                                    Cultura), Col. Centro CP 46600, Ameca,
                                    Jalisco
                                  </p>
                                </a>
                              </div>
                            </div>
                            <CardFooter></CardFooter>
                          </CardBody>
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                  <Col
                    className="ml-auto mr-auto"
                    lg="7"
                    xl="6"
                    id="Ahualulco-del-Mercado"
                  >
                    <Card className="card-profile card-plain">
                      <Row>
                        <Col
                          md="12"
                          className="d-flex justify-content-center align-items-center"
                        >
                          <div
                            className="card-image"
                            style={{ width: "400px", height: "400px" }}
                          >
                            <NavLink to="https://maps.app.goo.gl/ntCpmx2FJPrfTeYr5" target="blank">
                              <img
                                loading="lazy"
                                alt="..."
                                className="img img-raised rounded"
                                src={require("assets/img/bibliotecas/biblioteca-cuvalles.jpg")}
                              ></img>
                            </NavLink>
                          </div>
                        </Col>
                        <Col md="12">
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
                                <h4 className="info-title font-italic">
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
                                <a
                                  href="https://maps.app.goo.gl/ntCpmx2FJPrfTeYr5"
                                  target={"_blank"}
                                >
                                  <p className="description">
                                    José María Mercado No. 15, Col. Centro (Casa
                                    de la Cultura) CP 46730, Ahualulco de
                                    Mercado, Jalisco Tels.: (386) 752 2445
                                  </p>
                                </a>
                              </div>
                            </div>
                            <CardFooter></CardFooter>
                          </CardBody>
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                  <Col className="ml-auto mr-auto" lg="7" xl="6" id="Amatitan">
                    <Card className="card-profile card-plain">
                      <Row>
                        <Col
                          md="12"
                          className="d-flex justify-content-center align-items-center"
                        >
                          <div
                            className="card-image"
                            style={{ width: "400px", height: "400px" }}
                          >
                            <NavLink to="https://maps.app.goo.gl/U83hnEjRXvk27vtaA" target="blank">
                              <img
                                loading="lazy"
                                alt="..."
                                className="img img-raised rounded"
                                src={require("assets/img/bibliotecas/biblioteca-cuvalles.jpg")}
                              ></img>
                            </NavLink>
                          </div>
                        </Col>
                        <Col md="12">
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
                                <h4 className="info-title font-italic">
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
                                <a
                                  href="https://maps.app.goo.gl/U83hnEjRXvk27vtaA"
                                  target={"_blank"}
                                >
                                  <p className="description">
                                    Brígido Ramírez No. 1, Col. Centro CP 45380,
                                    Amatitán, Jalisco Tels.: (374) 745 0310
                                  </p>
                                </a>
                              </div>
                            </div>
                            <CardFooter></CardFooter>
                          </CardBody>
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                  <Col
                    className="ml-auto mr-auto"
                    lg="7"
                    xl="6"
                    id="Atenguillo"
                  >
                    <Card className="card-profile card-plain">
                      <Row>
                        <Col
                          md="12"
                          className="d-flex justify-content-center align-items-center"
                        >
                          <div
                            className="card-image"
                            style={{ width: "400px", height: "400px" }}
                          >
                            <NavLink to="https://maps.app.goo.gl/QfvFWimvh1RAXBGr6" target="blank">
                              <img
                                loading="lazy"
                                alt="..."
                                className="img img-raised rounded"
                                src={require("assets/img/bibliotecas/biblioteca-cuvalles.jpg")}
                              ></img>
                            </NavLink>
                          </div>
                        </Col>
                        <Col md="12">
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
                                <h4 className="info-title font-italic">
                                  Atenguillo
                                </h4>
                              </div>
                            </div>
                            <div className="info info-horizontal">
                              <div className="icon icon-danger">
                                <i className="now-ui-icons location_pin"></i>
                              </div>
                              <div className="description">
                                <h4 className="info-title">Ubicación</h4>
                                <p className="description">Atenguillo</p>
                                <a
                                  href="https://maps.app.goo.gl/QfvFWimvh1RAXBGr6"
                                  target={"_blank"}
                                >
                                  <p className="description">
                                    Javier Mina No. 8, Col. Centro (PA de la
                                    Pdcia. Mpal.) CP 48100, Atenguillo, Jalisco
                                    Tels.: (388) 736 8878
                                  </p>
                                </a>
                              </div>
                            </div>
                            <CardFooter></CardFooter>
                          </CardBody>
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                  <Col className="ml-auto mr-auto" lg="7" xl="6" id="Cocula">
                    <Card className="card-profile card-plain">
                      <Row>
                        <Col
                          md="12"
                          className="d-flex justify-content-center align-items-center"
                        >
                          <div
                            className="card-image"
                            style={{ width: "400px", height: "400px" }}
                          >
                            <NavLink to="https://maps.app.goo.gl/HhT6SVbwnCbukVfV9" target="blank">
                              <img
                                loading="lazy"
                                alt="..."
                                className="img img-raised rounded"
                                src={require("assets/img/bibliotecas/biblioteca-cuvalles.jpg")}
                              ></img>
                            </NavLink>
                          </div>
                        </Col>
                        <Col md="12">
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
                                <h4 className="info-title font-italic">
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
                                <a
                                  href="https://maps.app.goo.gl/HhT6SVbwnCbukVfV9"
                                  target={"_blank"}
                                >
                                  <p className="description">
                                    Independencia No. 61, Col. Centro CP 48500,
                                    Cocula, Jalisco Tels.: (377) 773 2016
                                  </p>
                                </a>
                              </div>
                            </div>
                            <CardFooter></CardFooter>
                          </CardBody>
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                  <Col className="ml-auto mr-auto" lg="7" xl="6" id="CUValles">
                    <Card className="card-profile card-plain">
                      <Row>
                        <Col
                          md="12"
                          className="d-flex justify-content-center align-items-center"
                        >
                          <div
                            className="card-image"
                            style={{ width: "400px", height: "400px" }}
                          >
                            <NavLink to="https://maps.app.goo.gl/fF1Pc4TTwP5BPFaD9" target="blank">
                              <img
                                loading="lazy"
                                alt="..."
                                className="img img-raised rounded"
                                src={require("assets/img/bibliotecas/biblioteca-cuvalles.jpg")}
                              ></img>
                            </NavLink>
                          </div>
                        </Col>
                        <Col md="12">
                          <CardBody>
                            <div className="info info-horizontal d-flex">
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
                                <h4 className="info-title font-italic">
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
                                <a
                                  href="https://maps.app.goo.gl/fF1Pc4TTwP5BPFaD9"
                                  target={"_blank"}
                                >
                                  <p className="description">
                                    Carretera Guadalajara - Ameca Km. 45.5, C.P.
                                    46600 Ameca, Jalisco, México.
                                  </p>
                                </a>
                              </div>
                            </div>
                            <CardFooter></CardFooter>
                          </CardBody>
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                  <Col className="ml-auto mr-auto" lg="7" xl="6" id="El-Arenal">
                    <Card className="card-profile card-plain">
                      <Row>
                        <Col
                          md="12"
                          className="d-flex justify-content-center align-items-center"
                        >
                          <div
                            className="card-image"
                            style={{ width: "400px", height: "400px" }}
                          >
                            <NavLink to="https://maps.app.goo.gl/UdZkceuvA4zmK2hb6" target="blank">
                              <img
                                loading="lazy"
                                alt="..."
                                className="img img-raised rounded"
                                src={require("assets/img/bibliotecas/biblioteca-cuvalles.jpg")}
                              ></img>
                            </NavLink>
                          </div>
                        </Col>
                        <Col md="12">
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
                                <h4 className="info-title font-italic">
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
                                <a
                                  href="https://maps.app.goo.gl/UdZkceuvA4zmK2hb6"
                                  target={"_blank"}
                                >
                                  <p className="description">
                                    Av. del Ferrocarril No. 130-A, Col. Centro
                                    CP 45350, El Arenal, Jalisco Tels.: (374)
                                    748 0266
                                  </p>
                                </a>
                              </div>
                            </div>
                            <CardFooter></CardFooter>
                          </CardBody>
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                  <Col className="ml-auto mr-auto" lg="7" xl="6" id="Etzatlan">
                    <Card className="card-profile card-plain">
                      <Row>
                        <Col
                          md="12"
                          className="d-flex justify-content-center align-items-center"
                        >
                          <div
                            className="card-image"
                            style={{ width: "400px", height: "400px" }}
                          >
                            <NavLink to="https://maps.app.goo.gl/zfcgRKUnXeQUgyg9A" target="blank">
                              <img
                                loading="lazy"
                                alt="..."
                                className="img img-raised rounded"
                                src={require("assets/img/bibliotecas/biblioteca-cuvalles.jpg")}
                              ></img>
                            </NavLink>
                          </div>
                        </Col>
                        <Col md="12">
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
                                <h4 className="info-title font-italic">
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
                                <a
                                  href="https://maps.app.goo.gl/zfcgRKUnXeQUgyg9A"
                                  target={"_blank"}
                                >
                                  <p className="description">
                                    Escobedo No. 359, Col. Centro CP 46500,
                                    Etzatlán, Jalisco Tels.: (386) 753 5031
                                  </p>
                                </a>
                              </div>
                            </div>
                            <CardFooter></CardFooter>
                          </CardBody>
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                  <Col
                    className="ml-auto mr-auto"
                    lg="7"
                    xl="6"
                    id="Guachinango"
                  >
                    <Card className="card-profile card-plain">
                      <Row>
                        <Col
                          md="12"
                          className="d-flex justify-content-center align-items-center"
                        >
                          <div
                            className="card-image"
                            style={{ width: "400px", height: "400px" }}
                          >
                            <NavLink to="https://maps.app.goo.gl/7btUB5jZZG3nrsQ66" target="blank">
                              <img
                                loading="lazy"
                                alt="..."
                                className="img img-raised rounded"
                                src={require("assets/img/bibliotecas/biblioteca-cuvalles.jpg")}
                              ></img>
                            </NavLink>
                          </div>
                        </Col>
                        <Col md="12">
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
                                <h4 className="info-title font-italic">
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
                                <a
                                  href="https://maps.app.goo.gl/7btUB5jZZG3nrsQ66"
                                  target={"_blank"}
                                >
                                  <p className="description">
                                    Reforma No. 7-A, Col. Centro CP 46800,
                                    Guachinango, Jalisco Tels.: (388) 736 0073
                                  </p>
                                </a>
                              </div>
                            </div>
                            <CardFooter></CardFooter>
                          </CardBody>
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                  <Col
                    className="ml-auto mr-auto"
                    lg="7"
                    xl="6"
                    id="Hostotipaquillo"
                  >
                    <Card className="card-profile card-plain">
                      <Row>
                        <Col
                          md="12"
                          className="d-flex justify-content-center align-items-center"
                        >
                          <div
                            className="card-image"
                            style={{ width: "400px", height: "400px" }}
                          >
                            <NavLink to="https://maps.app.goo.gl/xj9YZJMZNPRbT7Mi7" target="blank">
                              <img
                                loading="lazy"
                                alt="..."
                                className="img img-raised rounded"
                                src={require("assets/img/bibliotecas/biblioteca-cuvalles.jpg")}
                              ></img>
                            </NavLink>
                          </div>
                        </Col>
                        <Col md="12">
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
                                <h4 className="info-title font-italic">
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
                                <a
                                  href="https://maps.app.goo.gl/xj9YZJMZNPRbT7Mi7"
                                  target={"_blank"}
                                >
                                  <p className="description">
                                    Independencia No. 2, Col. Centro CP 46440,
                                    Hostotipaquillo, Jalisco Tels.: (386) 744
                                    5073
                                  </p>
                                </a>
                              </div>
                            </div>
                            <CardFooter></CardFooter>
                          </CardBody>
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                  <Col className="ml-auto mr-auto" lg="7" xl="6" id="Magdalena">
                    <Card className="card-profile card-plain">
                      <Row>
                        <Col
                          md="12"
                          className="d-flex justify-content-center align-items-center"
                        >
                          <div
                            className="card-image"
                            style={{ width: "400px", height: "400px" }}
                          >
                            <NavLink to="https://maps.app.goo.gl/MQZgZziMGmpFmPXa8" target="blank">
                              <img
                                loading="lazy"
                                alt="..."
                                className="img img-raised rounded"
                                src={require("assets/img/bibliotecas/biblioteca-cuvalles.jpg")}
                              ></img>
                            </NavLink>
                          </div>
                        </Col>
                        <Col md="12">
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
                                <h4 className="info-title font-italic">
                                  José Dau
                                </h4>
                              </div>
                            </div>
                            <div className="info info-horizontal">
                              <div className="icon icon-danger">
                                <i className="now-ui-icons location_pin"></i>
                              </div>
                              <div className="description">
                                <h4 className="info-title">Ubicación</h4>
                                <p className="description">Magdalena</p>
                                <a
                                  href="https://maps.app.goo.gl/MQZgZziMGmpFmPXa8"
                                  target={"_blank"}
                                >
                                  <p className="description">
                                    Independencia No. 16, Col. Centro CP 46470,
                                    Magdalena, Jalisco Tels.: (386) 744 2225
                                  </p>
                                </a>
                              </div>
                            </div>
                            <CardFooter></CardFooter>
                          </CardBody>
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                  <Col className="ml-auto mr-auto" lg="7" xl="6" id="Mascota">
                    <Card className="card-profile card-plain">
                      <Row>
                        <Col
                          md="12"
                          className="d-flex justify-content-center align-items-center"
                        >
                          <div
                            className="card-image"
                            style={{ width: "400px", height: "400px" }}
                          >
                            <NavLink to="https://maps.app.goo.gl/q1Bije9zcMt8FKiD6" target="blank">
                              <img
                                loading="lazy"
                                alt="..."
                                className="img img-raised rounded"
                                src={require("assets/img/bibliotecas/biblioteca-cuvalles.jpg")}
                              ></img>
                            </NavLink>
                          </div>
                        </Col>
                        <Col md="12">
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
                                <h4 className="info-title font-italic">
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
                                <a
                                  href="https://maps.app.goo.gl/q1Bije9zcMt8FKiD6"
                                  target={"_blank"}
                                >
                                  <p className="description">
                                    Ramón Corona No. 7, Col. Centro CP 46900,
                                    Mascota, Jalisco Tels.: (388) 386 0325
                                  </p>
                                </a>
                              </div>
                            </div>
                            <CardFooter></CardFooter>
                          </CardBody>
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                  <Col className="ml-auto mr-auto" lg="7" xl="6" id="Mixtlan">
                    <Card className="card-profile card-plain">
                      <Row>
                        <Col
                          md="12"
                          className="d-flex justify-content-center align-items-center"
                        >
                          <div
                            className="card-image"
                            style={{ width: "400px", height: "400px" }}
                          >
                            <NavLink to="https://maps.app.goo.gl/aTs2fsfyDHVPEPXL8" target="blank">
                              <img
                                loading="lazy"
                                alt="..."
                                className="img img-raised rounded"
                                src={require("assets/img/bibliotecas/biblioteca-cuvalles.jpg")}
                              ></img>
                            </NavLink>
                          </div>
                        </Col>
                        <Col md="12">
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
                                <h4 className="info-title font-italic">
                                  Miguel Hidalgo
                                </h4>
                              </div>
                            </div>
                            <div className="info info-horizontal">
                              <div className="icon icon-danger">
                                <i className="now-ui-icons location_pin"></i>
                              </div>
                              <div className="description">
                                <h4 className="info-title">Ubicación</h4>
                                <p className="description">Mixtlan</p>
                                <a
                                  href="https://maps.app.goo.gl/aTs2fsfyDHVPEPXL8"
                                  target={"_blank"}
                                >
                                  <p className="description">
                                    Librada González nro. 1, Col.
                                    Fraccionamiento los Zapotes Casa de la
                                    Cultura CP 46850, Mixtlán, Jalisco Tels.:
                                    388 736 5084
                                  </p>
                                </a>
                              </div>
                            </div>
                            <CardFooter></CardFooter>
                          </CardBody>
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                  <Col
                    className="ml-auto mr-auto"
                    lg="7"
                    xl="6"
                    id="San-Martin-de-Hidalgo"
                  >
                    <Card className="card-profile card-plain">
                      <Row>
                        <Col
                          md="12"
                          className="d-flex justify-content-center align-items-center"
                        >
                          <div
                            className="card-image"
                            style={{ width: "400px", height: "400px" }}
                          >
                            <NavLink to="https://maps.app.goo.gl/QwcTUekWi1qHyLkRA" target="blank">
                              <img
                                loading="lazy"
                                alt="..."
                                className="img img-raised rounded"
                                src={require("assets/img/bibliotecas/biblioteca-cuvalles.jpg")}
                              ></img>
                            </NavLink>
                          </div>
                        </Col>
                        <Col md="12">
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
                                <h4 className="info-title font-italic">
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
                                <a
                                  href="https://maps.app.goo.gl/QwcTUekWi1qHyLkRA"
                                  target={"_blank"}
                                >
                                  <p className="description">
                                    Nicolás Bravo No. 2, Col. Centro CP 46790,
                                    San Martín Hidalgo, Jalisco Tels.: (385) 755
                                    9128
                                  </p>
                                </a>
                              </div>
                            </div>
                            <CardFooter></CardFooter>
                          </CardBody>
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                  <Col
                    className="ml-auto mr-auto"
                    lg="7"
                    xl="6"
                    id="San-Juanito-Escobedo"
                  >
                    <Card className="card-profile card-plain">
                      <Row>
                        <Col
                          md="12"
                          className="d-flex justify-content-center align-items-center"
                        >
                          <div
                            className="card-image"
                            style={{ width: "400px", height: "400px" }}
                          >
                            <NavLink to="https://maps.app.goo.gl/5wL6eXZbnJMeg2VB6" target="blank">
                              <img
                                loading="lazy"
                                alt="..."
                                className="img img-raised rounded"
                                src={require("assets/img/bibliotecas/biblioteca-cuvalles.jpg")}
                              ></img>
                            </NavLink>
                          </div>
                        </Col>
                        <Col md="12">
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
                                <h4 className="info-title font-italic">
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
                                <a
                                  href="https://maps.app.goo.gl/5wL6eXZbnJMeg2VB6"
                                  target={"_blank"}
                                >
                                  <p className="description">
                                    Juárez No. 13 (Casa de la Cultura), Col.
                                    Centro CP 46560, San Juanito de Escobedo,
                                    Jalisco Tels.: (386) 754 0901
                                  </p>
                                </a>
                              </div>
                            </div>
                            <CardFooter></CardFooter>
                          </CardBody>
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                  <Col
                    className="ml-auto mr-auto"
                    lg="7"
                    xl="6"
                    id="San Marcos"
                  >
                    <Card className="card-profile card-plain">
                      <Row>
                        <Col
                          md="12"
                          className="d-flex justify-content-center align-items-center"
                        >
                          <div
                            className="card-image"
                            style={{ width: "400px", height: "400px" }}
                          >
                            <NavLink to="https://maps.app.goo.gl/hFKpxvgk1sL37e2ZA" target="blank">
                              <img
                                loading="lazy"
                                alt="..."
                                className="img img-raised rounded"
                                src={require("assets/img/bibliotecas/biblioteca-cuvalles.jpg")}
                              ></img>
                            </NavLink>
                          </div>
                        </Col>
                        <Col md="12">
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
                                <h4 className="info-title font-italic">
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
                                <a
                                  href="https://maps.app.goo.gl/hFKpxvgk1sL37e2ZA"
                                  target={"_blank"}
                                >
                                  <p className="description">
                                    Independencia No. 4 (Casa de la Cultura) CP
                                    46540, San Marcos, Jalisco Tels.: (386) 757
                                    0650
                                  </p>
                                </a>
                              </div>
                            </div>
                            <CardFooter></CardFooter>
                          </CardBody>
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                  <Col className="ml-auto mr-auto" lg="7" xl="6" id="Tala">
                    <Card className="card-profile card-plain">
                      <Row>
                        <Col
                          md="12"
                          className="d-flex justify-content-center align-items-center"
                        >
                          <div
                            className="card-image"
                            style={{ width: "400px", height: "400px" }}
                          >
                            <NavLink to="https://maps.app.goo.gl/nXKw4mb4cFra5HvF6" target="blank">
                              <img
                                loading="lazy"
                                alt="..."
                                className="img img-raised rounded"
                                src={require("assets/img/bibliotecas/biblioteca-cuvalles.jpg")}
                              ></img>
                            </NavLink>
                          </div>
                        </Col>
                        <Col md="12">
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
                                <h4 className="info-title font-italic">
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
                                <a
                                  href="https://maps.app.goo.gl/nXKw4mb4cFra5HvF6"
                                  target={"_blank"}
                                >
                                  <p className="description">
                                    Nicolás Bravo No. 91 (Casa de la Cultura),
                                    Col. Centro CP 45300, Tala, Jalisco Tels.:
                                    (384) 738 3466
                                  </p>
                                </a>
                              </div>
                            </div>
                            <CardFooter></CardFooter>
                          </CardBody>
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                  <Col
                    className="ml-auto mr-auto"
                    lg="7"
                    xl="6"
                    id="Talpa-de-Allende"
                  >
                    <Card className="card-profile card-plain">
                      <Row>
                        <Col
                          md="12"
                          className="d-flex justify-content-center align-items-center"
                        >
                          <div
                            className="card-image"
                            style={{ width: "400px", height: "400px" }}
                          >
                            <NavLink to="https://maps.app.goo.gl/Ns9UPfrXkafdsKEw9" target="blank">
                              <img
                                loading="lazy"
                                alt="..."
                                className="img img-raised rounded"
                                src={require("assets/img/bibliotecas/biblioteca-cuvalles.jpg")}
                              ></img>
                            </NavLink>
                          </div>
                        </Col>
                        <Col md="12">
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
                                <h4 className="info-title font-italic">
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
                                <a
                                  href="https://maps.app.goo.gl/Ns9UPfrXkafdsKEw9"
                                  target={"_blank"}
                                >
                                  <p className="description">
                                    Paseo de las Orquídeas s/n, Col. San
                                    Francisco CP 48200, Talpa de Allende,
                                    Jalisco Tels.: (388) 385 1027
                                  </p>
                                </a>
                              </div>
                            </div>
                            <CardFooter></CardFooter>
                          </CardBody>
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                  <Col className="ml-auto mr-auto" lg="7" xl="6" id="Tequila">
                    <Card className="card-profile card-plain">
                      <Row>
                        <Col
                          md="12"
                          className="d-flex justify-content-center align-items-center"
                        >
                          <div
                            className="card-image"
                            style={{ width: "400px", height: "400px" }}
                          >
                            <NavLink to="https://maps.app.goo.gl/4iztYPUFsS6Pp4aR7" target="blank">
                              <img
                                loading="lazy"
                                alt="..."
                                className="img img-raised rounded"
                                src={require("assets/img/bibliotecas/biblioteca-cuvalles.jpg")}
                              ></img>
                            </NavLink>
                          </div>
                        </Col>
                        <Col md="12">
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
                                <h4 className="info-title font-italic">
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
                                <a
                                  href="https://maps.app.goo.gl/4iztYPUFsS6Pp4aR7"
                                  target={"_blank"}
                                >
                                  <p className="description">
                                    Lerdo de Tejeda No. 20 (Casa de la Cultura),
                                    Col. Centro CP 46400, Tequila, Jalisco
                                    Tels.: (374) 742 2410
                                  </p>
                                </a>
                              </div>
                            </div>
                            <CardFooter></CardFooter>
                          </CardBody>
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                  <Col
                    className="ml-auto mr-auto"
                    lg="7"
                    xl="6"
                    id="Teuchitlan"
                  >
                    <Card className="card-profile card-plain">
                      <Row>
                        <Col
                          md="12"
                          className="d-flex justify-content-center align-items-center"
                        >
                          <div
                            className="card-image"
                            style={{ width: "400px", height: "400px" }}
                          >
                            <a href="https://maps.app.goo.gl/HqXsfNR9xT7gQBJs8" target="blank">
                              <img
                                loading="lazy"
                                alt="..."
                                className="img img-raised rounded"
                                src={require("assets/img/bibliotecas/biblioteca-cuvalles.jpg")}
                              ></img>
                            </a>
                          </div>
                        </Col>
                        <Col md="12">
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
                                <h4 className="info-title font-italic">
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
                                <a
                                  href="https://maps.app.goo.gl/HqXsfNR9xT7gQBJs8"
                                  target={"_blank"}
                                >
                                  <p className="description">
                                    Hilarión Romero Gil No. 14, Col. Centro CP
                                    46760, Teuchitlán, Jalisco Tels.: (384) 733
                                    0037
                                  </p>
                                </a>
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
