import React from "react";
// react plugin used to create DropdownMenu for selecting items
import { Formik, Form } from "formik";
import { autoDepositoSchema } from "../../schemas/autoDeposito.schemas";
import { autoDepositoInitialValues } from "../../models/autoDeposito.model";
import { Grid } from "@mui/material";
// reactstrap components
import {
  Button,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import ScrollTransparentNavbar from "components/Navbars/ScrollTransparentNavbar.js";
import ContactUsHeader from "components/Headers/ContactUsHeader.js";
import Footer from "components/Footers/Footer.js";

function ContactUs() {
  const [nameFocus, setNameFocus] = React.useState(false);
  const [titleFocus, setTitleFocus] = React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false);
  const [linkFocus, setLinkFocus] = React.useState(false);
  React.useEffect(() => {
    document.body.classList.add("contact-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("contact-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  return (
    <>
      <ScrollTransparentNavbar />
      <div className="wrapper">
        <ContactUsHeader />
        <div className="main">
          <div className="contact-content">
            <Container>
              <Row>
                <Col className="ml-auto mr-auto" md="12">
                  <h2 className="title">Colabora con nosotros</h2>
                  <p className="text-justify">
                    El autodepósito es una iniciativa diseñada para
                    servir como un espacio de vinculación y exhibición para
                    el público en general que posea trabajos o producción
                    académica relacionados con la región de los valles o con el
                    Centro Universitario de los Valles (CUValles). Este concepto
                    fusiona la idea de un depósito tradicional con la promoción
                    de la cultura local y la investigación académica. En su
                    forma más básica, el autodepósito proporcionara un lugar
                    físico donde las personas puedan depositar y exhibir sus
                    trabajos relacionados con la región, ya sea en forma de
                    libros, artículos, capítulos de libros, proyectos de
                    investigación, entre otros.
                    <br></br>
                  </p>

                  <h2 className="title">¿Cómo funciona?</h2>
                  <p className="text-justify">
                    Mediante un formulario, la persona interesada en dar visibilidad
                    a su trabajo en esta plataforma deberá ingresar una serie de 
                    datos, como el nombre del interesado, el título del documento,
                    el link dónde está alojado el documento y el correo electrónico
                    de contacto. Cuando el equipo de trabajo recibe la solicitud 
                    para agregar un nuevo documento, mediante el link porporcionado
                    la persona encargada de la administración revisará una serie de
                    aspectos, y tras la revisión se determinará si el documento cumple
                    o no con los criterios para ser añadido al Repositorio. Independientemente
                    de si la solicitud es aceptada o rechazada, el interesado recibirá 
                    un correo electrónico donde se informa que su solicitud fue aceptada
                    o en dado caso y explicando las razones del por qué su solicitud fue
                    rechazada.
                    <br></br>
                  </p>

                  <Formik
                    validationSchema={autoDepositoSchema}
                    enableReinitialize={true}
                    initialValues={autoDepositoInitialValues}
                    onSubmit={async (values, { setSubmitting, resetForm }) => {
                      try {
                        // setSubmitting(true);
                        // userId === 0
                        //   ? await newQuery(values)
                        //   : await updateQuery(values);
                      } catch (error) {
                        console.log(error);
                      } finally {
                        setSubmitting(false);
                        resetForm();
                      }
                    }}
                  >
                    {({ handleSubmit, handleChange, values, isSubmitting }) => (
                      <Form onSubmit={handleSubmit}>
                        <h4 className="title">Datos del documento:</h4>
                        <Grid container spacing={1}>
                          <label>Nombre del Autor:</label>
                          <InputGroup
                            className={nameFocus ? "input-group-focus" : ""}
                          >
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="now-ui-icons text_caps-small"></i>
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              aria-label="Nombre..."
                              autoComplete="name"
                              placeholder="¿Cuál es tu nombre?"
                              type="text"
                              onFocus={() => setNameFocus(true)}
                              onBlur={() => setNameFocus(false)}
                            ></Input>
                          </InputGroup>

                          <label>Correo electrónico de contacto:</label>
                          <InputGroup
                            className={emailFocus ? "input-group-focus" : ""}
                          >
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="now-ui-icons ui-1_email-85"></i>
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              aria-label="Email..."
                              autoComplete="email"
                              placeholder="¿Cuál es tu correo electrónico?"
                              type="text"
                              onFocus={() => setEmailFocus(true)}
                              onBlur={() => setEmailFocus(false)}
                            ></Input>
                          </InputGroup>

                          <label>Título del Documento:</label>
                          <InputGroup
                            className={titleFocus ? "input-group-focus" : ""}
                          >
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="now-ui-icons education_paper"></i>
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              aria-label="Título..."
                              autoComplete="titulo"
                              placeholder="¿Cuál es el título del documento?"
                              type="text"
                              onFocus={() => setTitleFocus(true)}
                              onBlur={() => setTitleFocus(false)}
                            ></Input>
                          </InputGroup>

                          <label>Link del documento:</label>
                          <InputGroup
                            className={linkFocus ? "input-group-focus" : ""}
                          >
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="now-ui-icons shopping_tag-content"></i>
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              aria-label="Link"
                              autoComplete="link"
                              placeholder="¿En dónde está alojado el documento?"
                              type="text"
                              onFocus={() => setLinkFocus(true)}
                              onBlur={() => setLinkFocus(false)}
                            ></Input>
                          </InputGroup>

                          <Button
                            className="btn-raised btn-round"
                            color="info"
                            defaultValue="Contact Us"
                            type="submit"
                          >
                            Colaborar
                          </Button>
                        </Grid>
                      </Form>
                    )}
                  </Formik>
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

export default ContactUs;
