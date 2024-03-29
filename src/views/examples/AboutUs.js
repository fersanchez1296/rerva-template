//react
import React from "react";
//translations
import { useTranslation } from "react-i18next";
//react router domr
import { NavLink } from "react-router-dom";
// reactstrap components
import {
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Container,
  Row,
  Col,
} from "reactstrap";
//utilities
import municipios from "../../utilities/json/municipios.utilities.json";

// core components
import ScrollTransparentNavbarSections from "components/Navbars/ScrollTransparentNavbarSections.js";
import AboutUsHeader from "components/Headers/AboutUsHeader.js";
import FooterBlackSections from "components/Footers/FooterBlackSections.js";
//self components
const LazyJaliscoMap = React.lazy(() =>
  import("../../components/MapaMunicipios/JaliscoMap.tsx")
);

function AboutUs() {
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
        <AboutUsHeader />
        <div className="section">
          <div className="separator-line bg-info"></div>
          <div className="projects-5">
            <Container>
              <Row>
                <Col className="ml-auto mr-auto text-center" md="8">
                  <h2 className="title">{t("About.Background")}</h2>
                  <h4 className="text-justify">
                    {t("About.BackgroundDescription")}
                  </h4>
                  <div className="section-space"></div>
                </Col>
              </Row>
              <Row>
                <Col className="ml-auto mr-auto text-center" md="8">
                  <h2 className="title">{t("About.TitleMainObjectives")}</h2>
                  <h4 className="text-justify">{t("About.MainObjectives")}</h4>
                  <div className="section-space"></div>
                </Col>
              </Row>
              <Row>
                <Col className="ml-auto mr-auto" md="5">
                  <React.Suspense fallback="Loading...">
                    <LazyJaliscoMap data={municipios} />
                  </React.Suspense>
                </Col>
                <Col className="ml-auto mr-auto" md="5">
                  <div className="info info-horizontal">
                    <div className="info info-horizontal">
                      <p className="info-title text-justify">
                        {t("About.Municipality")}
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
              <hr></hr>
              <Row>
                <Col className="ml-auto mr-auto text-center" md="8">
                  <h2 className="title">
                    {t("About.TitleParticularObjectives")}
                  </h2>
                  <h4 className="text-justify">
                    <ol>
                      <li>{t("About.ParticularObjectives-1")}</li>
                      <br></br>
                      <li>{t("About.ParticularObjectives-2")}</li>
                      <br></br>
                      <li>{t("About.ParticularObjectives-3")}</li>
                      <br></br>
                      <li>{t("About.ParticularObjectives-4")}</li>
                      <br></br>
                      <li>{t("About.ParticularObjectives-5")}</li>
                      <br></br>
                      <li>{t("About.ParticularObjectives-6")}</li>
                    </ol>
                  </h4>
                </Col>
              </Row>
              <Row>
                <Col className="ml-auto mr-auto text-center" md="8">
                  <h4 className="text-justify">
                    {t("About.ParticularObjectivesDescription")}
                  </h4>
                  <div className="section-space"></div>
                </Col>
              </Row>
              <Row>
                <Col className="ml-auto mr-auto text-center" md="8">
                  <h2 className="title">
                    {t("About.TitleAcademicProduction")}
                  </h2>
                  <h4 className="text-justify">
                    {t("About.AcademicProductionDescription")}
                  </h4>
                  <div className="section-space"></div>
                </Col>
              </Row>
              <Row>
                <Col className="ml-auto mr-auto text-center" md="8">
                  <h2 className="title">{t("About.TitleOperation")}</h2>
                  <h4 className="text-justify">
                    {t("About.OperationDescriptionP-1")}
                  </h4>
                  <h4 className="text-justify">
                    {t("About.OperationDescriptionP-2")}
                  </h4>
                  <h4 className="text-justify">
                    {t("About.OperationDescriptionP-3")}
                  </h4>
                  <div className="section-space"></div>
                </Col>
              </Row>
            </Container>
          </div>
          <hr></hr>
          <div className="about-office">
            <Container>
              <Row className="text-center">
                <Col className="ml-auto mr-auto" md="8">
                  <h2 className="title">{t("About.TitleVision")}</h2>
                  <h4 className="text-justify">
                    {t("About.VisionDescription")}
                  </h4>
                </Col>
              </Row>
              <Row>
                <Col md="6">
                  <img
                    loading="lazy"
                    alt="..."
                    className="rounded img-raised"
                    src={require("assets/img/cuvalles/cuvalles-3.jpg")}
                  ></img>
                </Col>
                <Col md="6">
                  <img
                    alt="..."
                    loading="lazy"
                    className="rounded img-raised"
                    src={require("assets/img/cuvalles/cuvalles-4.jpg")}
                  ></img>
                </Col>
                <Col md="6">
                  <img
                    alt="..."
                    loading="lazy"
                    className="rounded img-raised"
                    src={require("assets/img/municipios/sanmartin.jpeg")}
                  ></img>
                </Col>
                <Col md="6">
                  <img
                    alt="..."
                    loading="lazy"
                    className="rounded img-raised"
                    src={require("assets/img/municipios/teuchitlan.jpeg")}
                  ></img>
                </Col>
                <Col md="6">
                  <img
                    alt="..."
                    loading="lazy"
                    className="rounded img-raised"
                    src={require("assets/img/municipios/guachinango.jpeg")}
                  ></img>
                </Col>

                <Col md="6">
                  <img
                    alt="..."
                    loading="lazy"
                    className="rounded img-raised"
                    src={require("assets/img/municipios/etzatlan.jpeg")}
                  ></img>
                </Col>
                <Col md="6">
                  <img
                    alt="..."
                    loading="lazy"
                    className="rounded img-raised"
                    src={require("assets/img/municipios/mixtlan.jpeg")}
                  ></img>
                </Col>
                <Col md="6">
                  <img
                    alt="..."
                    loading="lazy"
                    className="rounded img-raised"
                    src={require("assets/img/municipios/atenguillo.jpeg")}
                  ></img>
                </Col>
                <Col md="6">
                  <img
                    alt="..."
                    loading="lazy"
                    className="rounded img-raised"
                    src={require("assets/img/municipios/magdalena.jpeg")}
                  ></img>
                </Col>
                <Col md="6">
                  <img
                    alt="..."
                    loading="lazy"
                    className="rounded img-raised"
                    src={require("assets/img/municipios/talpa.jpeg")}
                  ></img>
                </Col>
                <Col md="6">
                  <img
                    alt="..."
                    loading="lazy"
                    className="rounded img-raised"
                    src={require("assets/img/municipios/mascota.jpeg")}
                  ></img>
                </Col>
                <Col md="6">
                  <img
                    alt="..."
                    loading="lazy"
                    className="rounded img-raised"
                    src={require("assets/img/municipios/ameca.jpeg")}
                  ></img>
                </Col>
                <Col md="6">
                  <img
                    alt="..."
                    loading="lazy"
                    className="rounded img-raised"
                    src={require("assets/img/municipios/sanmarcos.jpeg")}
                  ></img>
                </Col>
              </Row>
            </Container>
          </div>
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
                          <NavLink to={`/contacto-fernando`} target="blank">
                            <CardTitle tag="h4">
                              Dra. María Luisa García Bátiz
                            </CardTitle>
                          </NavLink>
                          <h6 className="category">
                            {t("About.GradeRectora")}
                          </h6>
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
                          <NavLink to={`/contacto-fernando`} target="blank">
                            <CardTitle tag="h4">
                              Mtro. Félix Alberto Barrera Osuna
                            </CardTitle>
                          </NavLink>
                          <h6 className="category">{t("About.GradeFelix")}</h6>
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
                          <NavLink to={`/contacto-fernando`} target="blank">
                            <CardTitle tag="h4">
                              Karla Viridiana Rosales Valenzuela
                            </CardTitle>
                          </NavLink>
                          <h6 className="category">{t("About.GradeKarla")}</h6>
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
                          <NavLink to={`/contacto-fernando`} target="blank">
                            <CardTitle tag="h4">Alvaro Mora Maciel</CardTitle>
                          </NavLink>
                          <h6 className="category">{t("About.GradeAlvaro")}</h6>
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
                          <CardTitle tag="h4">
                            Stefany Hernández Sánchez
                          </CardTitle>
                          <h6 className="category">
                            {t("About.GradeStefany")}
                          </h6>
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
                          <NavLink to={`/contacto-fernando`} target="blank">
                            <CardTitle tag="h4">
                              Fernando Sánchez Plascencia
                            </CardTitle>
                          </NavLink>
                          <h6 className="category">
                            {t("About.GradeFernando")}
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
                          <NavLink to={`/contacto-fernando`} target="blank">
                            <CardTitle tag="h4">
                              César Uriel Torres Vallarta
                            </CardTitle>
                          </NavLink>
                          <h6 className="category">{t("About.GradeCesar")}</h6>
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
                          <NavLink to={`/contacto-fernando`} target="blank">
                            <CardTitle tag="h4">
                              Enrique Jesús Fregoso Gutiérrez
                            </CardTitle>
                          </NavLink>
                          <h6 className="category">
                            {t("About.GradeEnrique")}
                          </h6>
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
        </div>
        <FooterBlackSections />
      </div>
    </>
  );
}

export default AboutUs;
