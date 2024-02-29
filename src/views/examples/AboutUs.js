import React from "react";
// react plugin used to create DropdownMenu for selecting items
import Select from "react-select";
import { NavLink } from "react-router-dom";
import { JaliscoMap } from "../../components/MapaMunicipios/JaliscoMap.tsx";
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
import AboutUsHeader from "components/Headers/AboutUsHeader.js";
import FooterBlackSections from "components/Footers/FooterBlackSections.js";
import { useGetVisualitationsDataQuery } from "../../api/api.slice.js";
import { Spiner } from "components/spiner/Spiner";

function AboutUs() {
  const { data, isLoading } = useGetVisualitationsDataQuery(
    "/countriesAndMunicipios"
  );
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

  if (isLoading) {
    return (
      <>
        <Spiner showBool />
      </>
    );
  }

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
                  <h2 className="title">Antecedentes</h2>
                  <h4 className="text-justify">
                    Este Repositorio surge como un esfuerzo a partir del
                    desarrollo del proyecto de investigación titulado “Estudio
                    exploratorio de los aportes y brechas en el conocimiento de
                    la Región de los Valles en el estado Jalisco”, impulsado por
                    el financiamiento de las convocatorias de Fomento a la
                    Investigación, en sus emisiones 2022 y 2023, de este Centro
                    Universitario
                  </h4>
                  <div className="section-space"></div>
                </Col>
              </Row>
              <Row>
                <Col className="ml-auto mr-auto text-center" md="8">
                  <h2 className="title">Objetivos Principales</h2>
                  <h4 className="text-justify">
                    Los objetivos principales que enmarcan este proyecto de
                    investigación versan, por un lado, en determinar el estado
                    actual y la trayectoria que ha seguido la hechura de la
                    investigación sobre la región y los municipios del área de
                    atención del Centro Universitario de los Valles de la
                    Universidad de Guadalajara (CUValles), la cuál se constituye
                    de los siguiente municipios:
                  </h4>
                  <div className="section-space"></div>
                </Col>
              </Row>
              <Row>
                <Col className="ml-auto mr-auto" md="5">
                  <JaliscoMap data={data[0]} />
                </Col>
                <Col className="ml-auto mr-auto" md="5">
                  <div className="info info-horizontal">
                    <div className="info info-horizontal">
                      <p className="info-title text-justify">
                        Ahualulco de Mercado, Ameca, Amatitán, Cocula, El
                        Arenal, Etzatlán, Hostotipaquillo, Magdalena, San
                        Juanito de Escobedo, San Marcos, San Martín de Hidalgo,
                        Tala, Tequila, Teuchitlán, Atenguillo, Guachinango,
                        Mascota, Mixtlán y Talpa de Allende. A partir de la
                        producción científica orientada a la descripción,
                        explicación y análisis de las diversas temáticas y
                        problemáticas abordadas desde la comunidad académica
                        nacional e internacional en los últimos 50 años; y por
                        el otro, en explorar las brechas entre el conocimiento
                        existente y las demandas sociales de la región.
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
              <hr></hr>
              {/* <Row>
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
              </Row> */}
              <Row>
                <Col className="ml-auto mr-auto text-center" md="8">
                  <h2 className="title">
                    Los objetivos particulares planteados en este trabajo giran
                    en torno a:
                  </h2>
                  <h4 className="text-justify">
                    <ol>
                      <li>
                        Construir el estado del arte de los conocimientos
                        generados sobre la región del CUValles.
                      </li>
                      <br></br>
                      <li>
                        Identificar las temáticas que se han definido como
                        prioritarias en la producción académica de la región a
                        lo largo del tiempo.
                      </li>
                      <br></br>
                      <li>
                        Develar las brechas y potenciales líneas de
                        investigación en distintas disciplinas y campos de
                        conocimiento, acordes a las dinámicas y procesos
                        regionales.
                      </li>
                      <br></br>
                      <li>
                        Mostrar la incidencia del CUValles en la generación del
                        conocimiento científico en su región de atención.
                      </li>
                      <br></br>
                      <li>
                        Impulsar la creación del repositorio de estudios sobre
                        la Región de los Valles.
                      </li>
                      <br></br>
                      <li>
                        Fomentar vínculos Centro Universitario-gobierno-sociedad
                        para la generación y difusión del conocimiento relevante
                        sobre la región.
                      </li>
                    </ol>
                  </h4>
                </Col>
              </Row>
              <Row>
                <Col className="ml-auto mr-auto text-center" md="8">
                  <h4 className="text-justify">
                    En términos metodológicos, entre los pasos que este trabajo
                    siguió, una de sus principales actividades realizadas fue la
                    determinación del conocimiento existente, a partir de la
                    búsqueda, la identificación y la compilación de fuentes de
                    información en diversos idiomas, de libros, capítulos de
                    libro, artículos en revistas arbitradas, tesis, monografías
                    y documentales disponibles tanto en la red como en sitios de
                    internet especializados. Asimismo, se emprendió trabajo de
                    campo en el que se visitaron las principales bibliotecas
                    municipales de la región y las bibliotecas más importantes
                    del estado de Jalisco, aunado entablar entrevistas con
                    actores locales relevantes en la generación de conocimiento,
                    no únicamente desde la academia, sino también con
                    involucrados como los cronistas.
                  </h4>
                  <div className="section-space"></div>
                </Col>
              </Row>
              <Row>
                <Col className="ml-auto mr-auto text-center" md="8">
                  <h2 className="title">Producción Académica</h2>
                  <h4 className="text-justify">
                    Hasta mayo del 2023, se habían identificado un total de
                    1,420 documentos relacionados con el estudio de la región,
                    en alguna de las áreas del conocimiento y desarrollados a
                    través de artículos académicos, libros, capítulos de libro,
                    tesis en sus diferentes niveles, notas científicas,
                    reportes, memorias y otro tipo de documentos.
                  </h4>
                  <div className="section-space"></div>
                </Col>
              </Row>
              <Row>
                <Col className="ml-auto mr-auto text-center" md="8">
                  <h2 className="title">Funcionamiento</h2>
                  <h4 className="text-justify">
                    El repositorio del CUValles vincula a los usuarios con otras
                    plataformas digitales que integran, publican y distribuyen
                    de manera libre y gratuita materiales académicos,
                    científicos, tecnológicos y culturales sobre la región de
                    los Valles.
                  </h4>
                  <h4 className="text-justify">
                    En el mismo sentido, facilita la identificación de que se
                    encuentran disponibles de manera física en las Bibliotecas
                    Públicas.
                  </h4>
                  <h4 className="text-justify">
                    Asimismo, para promover el libre acceso a contenidos
                    generados desde el CUValles, cuenta con una herramienta de
                    depósito directo del personal académico sin perjuicio de las
                    disposiciones en materia de propiedad intelectual,
                    garantizando la protección de los derechos de autor.
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
                <Col md="6">
                  <img
                    alt="..."
                    className="rounded img-raised"
                    src={require("assets/img/cuvalles-3.jpg")}
                  ></img>
                </Col>
                <Col md="6">
                  <img
                    alt="..."
                    className="rounded img-raised"
                    src={require("assets/img/cuvalles-4.jpg")}
                  ></img>
                </Col>
                <Col md="6">
                  <img
                    alt="..."
                    className="rounded img-raised"
                    src={require("assets/img/sanmartin.jpeg")}
                  ></img>
                </Col>
                <Col md="6">
                  <img
                    alt="..."
                    className="rounded img-raised"
                    src={require("assets/img/teuchitlan.jpeg")}
                  ></img>
                </Col>
                <Col md="6">
                  <img
                    alt="..."
                    className="rounded img-raised"
                    src={require("assets/img/guachinango.jpeg")}
                  ></img>
                </Col>
                
                <Col md="6">
                  <img
                    alt="..."
                    className="rounded img-raised"
                    src={require("assets/img/etzatlan.jpeg")}
                  ></img>
                </Col>
                <Col md="6">
                  <img
                    alt="..."
                    className="rounded img-raised"
                    src={require("assets/img/mixtlan.jpeg")}
                  ></img>
                </Col>
                <Col md="6">
                  <img
                    alt="..."
                    className="rounded img-raised"
                    src={require("assets/img/atenguillo.jpeg")}
                  ></img>
                </Col>
                <Col md="6">
                  <img
                    alt="..."
                    className="rounded img-raised"
                    src={require("assets/img/magdalena.jpeg")}
                  ></img>
                </Col>
                <Col md="6">
                  <img
                    alt="..."
                    className="rounded img-raised"
                    src={require("assets/img/talpa.jpeg")}
                  ></img>
                </Col>
                <Col md="6">
                  <img
                    alt="..."
                    className="rounded img-raised"
                    src={require("assets/img/mascota.jpeg")}
                  ></img>
                </Col>
                <Col md="6">
                  <img
                    alt="..."
                    className="rounded img-raised"
                    src={require("assets/img/ameca.jpeg")}
                  ></img>
                </Col>
                <Col md="6">
                  <img
                    alt="..."
                    className="rounded img-raised"
                    src={require("assets/img/sanmarcos.jpeg")}
                  ></img>
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
                    Somos un equipo multidisciplinarios interesados en dar
                    visibilidad a la Región de los Valles en Jalisco. Nuestros
                    colaboradores conforman un equipo que abarca las áreas de
                    Ingeniería, Ciencias Sociales y Humanidades. Esta
                    combinación de disciplinas permite una sinergia que resulta
                    en la realización exitosa del presente proyecto.
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
                              alt="..."
                              className="img img-raised rounded"
                              src={require("assets/img/cuvalles-alvaro.jpeg")}
                            ></img>
                          </NavLink>
                        </div>
                      </Col>
                      <Col md="7">
                        <CardBody>
                          <NavLink to={`/contacto-fernando`} target="blank">
                            <CardTitle tag="h4">
                              Dr. Alvaro Mora Maciel
                            </CardTitle>
                          </NavLink>
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
                          <NavLink to={`/contacto-fernando`} target="blank">
                            <img
                              alt="..."
                              className="img img-raised rounded"
                              src={require("assets/img/cuvalles-karla.jpeg")}
                            ></img>
                          </NavLink>
                        </div>
                      </Col>
                      <Col md="7">
                        <CardBody>
                          <NavLink to={`/contacto-fernando`} target="blank">
                            <CardTitle tag="h4">
                              Dra. Karla Viridiana Rosales Valenzuela
                            </CardTitle>
                          </NavLink>
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
                          <NavLink to={`/contacto-fernando`} target="blank">
                            <img
                              alt="..."
                              className="img img-raised rounded"
                              src={require("assets/img/cuvalles-stefany.jpeg")}
                            ></img>
                          </NavLink>
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
                              src={require("assets/img/cuvalles-fernando.jpeg")}
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
                          <NavLink to={`/contacto-fernando`} target="blank">
                            <img
                              alt="..."
                              className="img img-raised rounded"
                              src={require("assets/img/cuvalles-cesar.jpeg")}
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
                          <NavLink to={`/contacto-fernando`} target="blank">
                            <img
                              alt="..."
                              className="img img-raised rounded"
                              src={require("assets/img/michael.jpg")}
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
                          <h6 className="category">Estudiante</h6>
                          <p className="">enrique.fregoso4189@alumnos.udg.mx</p>
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
                              src={require("assets/img/cuvalles-felix.jpg")}
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
                          <NavLink to={`/contacto-fernando`} target="blank">
                            <img
                              alt="..."
                              className="img img-raised rounded"
                              src={require("assets/img/cuvalles-rectora.jpg")}
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
                          <h6 className="category">Rectora de Centro</h6>
                          <p className="">mluisa.garcia@valles.udg.mx</p>
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
