import React from "react";
//Api
import { usePostSolicitudMutation } from "../../api/api.slice";
//Snackbar
import { SnackBar } from "../../components/snackBar/SnackBar";
import { Spiner } from "../../components/spiner/Spiner";
// reactstrap components
import {
  Button,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Form,
  Row,
  Col,
} from "reactstrap";

// core components
import ScrollTransparentNavbarSections from "components/Navbars/ScrollTransparentNavbarSections.js";
import AutodepositoHeader from "components/Headers/AutodepositoHeader.js";
import FooterBlackSections from "components/Footers/FooterBlackSections.js";

function Autodeposito() {
  const [snackBarState, setSnackBarState] = React.useState({
    show: false,
    variant: "success",
    message: "",
  });
  const [body, setBody] = React.useState({
    Autor: "",
    Título: "",
    Email: "",
    Link: "",
  });
  const [nameFocus, setNameFocus] = React.useState(false);
  const [titleFocus, setTitleFocus] = React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false);
  const [linkFocus, setLinkFocus] = React.useState(false);
  const [nameValue, setNameValue] = React.useState("");
  const [titleValue, setTitleValue] = React.useState("");
  const [emailValue, setEmailValue] = React.useState("");
  const [linkValue, setLinkValue] = React.useState("");
  const [sendAvailable, setSendAvailable] = React.useState(false);
  const [postSolicitud] = usePostSolicitudMutation();
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

  const handleChangeName = (value) => {
    const regex = /^[a-zA-ZÀ-ÿ\s]*$/;

    if (regex.test(value) || value === "") {
      setNameValue(value);
      setBody((prevBody) => ({
        ...prevBody,
        Autor: value,
      }));
    }
  };

  const handleChangeEmail = (value) => {
    setEmailValue(value);
    setBody((prevBody) => ({
      ...prevBody,
      Email: value,
    }));
  };

  const handleChangeTitle = (value) => {
    setTitleValue(value);
    setBody((prevBody) => ({
      ...prevBody,
      Título: value,
    }));
  };

  const handleChangeLink = (value) => {
    setLinkValue(value);
    setBody((prevBody) => ({
      ...prevBody,
      Link: value,
    }));
  };

  const handlePostSolicitud = async (e) => {
    e.preventDefault();
    try {
      const result = await postSolicitud({ body });
      if (result.data.status === 200) {
        setSnackBarState({
          show: true,
          variant: "success",
          message: result.data.message,
        });
      } else {
        setSnackBarState({
          show: true,
          variant: "error",
          message: result.data.message,
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setNameValue("");
      setTitleValue("");
      setLinkValue("");
      setEmailValue("");
      setTimeout(() => {
        setSnackBarState({
          show: false,
          variant: "success",
          message: "",
        });
      }, 3000);
    }
  };
  return (
    <>
      <ScrollTransparentNavbarSections />
      <div className="wrapper">
        <AutodepositoHeader />
        <div className="main">
          <div className="contact-content">
            <Container>
              <Row>
                <Col className="ml-auto mr-auto" md="12">
                  <h2 className="title">Colabora con nosotros</h2>
                  <p className="text-justify">
                    El autodepósito es una herramienta que permite integrar a
                    través del DOI, URL o dirección web, un artículo, capítulo,
                    libro u otro tipo de documento de contenido académico que se
                    encuentre previamente publicado con el objetivo de que sea
                    consultado por los usuarios a partir de la interoperabilidad
                    de repositorios.
                    <br></br>
                  </p>

                  <h2 className="title">¿Cómo funciona?</h2>
                  <ol>
                    <li>
                      Llena el formulario con los datos correspondientes.
                      Asegúrate de no dejar ningún espacio en blanco.
                    </li>
                    <br></br>
                    <li>
                      Una vez completado el formulario, da click en contribuir.
                    </li>
                    <br></br>
                    <li>
                      Se validará el contenido para determinar la pertinencia de
                      su registro en el Repositorio.
                    </li>
                    <br></br>
                    <li>Recibirás un correo con el estatus de tu solicitud.</li>
                  </ol>
                  <h2 className="title">Requisitos</h2>
                  <p className="text-justify">
                    El contenido académico debe abordar el estudio de la región
                    de los valles.
                    <br></br>
                  </p>
                  <h2 className="title">Derechos de autor</h2>
                  <p className="text-justify">
                    La publicación de los contenidos digitales se realiza
                    principalmente bajo el esquema de acceso abierto, sin
                    prejuicio de las disposiciones en materia de protección de
                    los derechos de autor. Por lo tanto, se direccionará al
                    sitio en el que se encuentre disponible para que los
                    usuarios accedan libremente. En caso de que se trate de un
                    documento de acceso cerrado únicamente se direccionará al
                    sitio web en el que se encuentre para que los usuarios, de
                    ser el caso realicen el pago correspondiente para su
                    consulta si así lo desean.
                    <br></br>
                  </p>
                  <br></br>
                  <Form id="contact-form" method="post" role="form">
                    <label>Nombre</label>
                    <InputGroup
                      className={nameFocus ? "input-group-focus" : ""}
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons users_circle-08"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        aria-label="¿Cuál es tu nombre?"
                        autoComplete="nombre"
                        placeholder="¿Cuál es tu nombre?"
                        type="text"
                        value={nameValue}
                        onChange={(e) =>
                          handleChangeName(e.target.value.toUpperCase())
                        }
                        onFocus={() => setNameFocus(true)}
                        onBlur={() => setNameFocus(false)}
                      ></Input>
                    </InputGroup>
                    <label>Email</label>
                    <InputGroup
                      className={emailFocus ? "input-group-focus" : ""}
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons ui-1_email-85"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        aria-label="¿Cuál es tu email?"
                        autoComplete="email"
                        placeholder="¿Cuál es tu email?"
                        type="email"
                        value={emailValue}
                        onChange={(e) =>
                          handleChangeEmail(e.target.value.toUpperCase())
                        }
                        onFocus={() => setEmailFocus(true)}
                        onBlur={() => setEmailFocus(false)}
                      ></Input>
                    </InputGroup>
                    <label>Título</label>
                    <InputGroup
                      className={titleFocus ? "input-group-focus" : ""}
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons tech_mobile"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        autoComplete="titulo"
                        placeholder="¿Cuál es título del documento?"
                        type="text"
                        value={titleValue}
                        onChange={(e) =>
                          handleChangeTitle(e.target.value.toUpperCase())
                        }
                        onFocus={() => setTitleFocus(true)}
                        onBlur={() => setTitleFocus(false)}
                      ></Input>
                    </InputGroup>
                    <label>Link</label>
                    <InputGroup
                      className={linkFocus ? "input-group-focus" : ""}
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons tech_mobile"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        autoComplete="link"
                        placeholder="¿Cuál es link dónde se encuentra el documento?"
                        type="text"
                        value={linkValue}
                        onChange={(e) =>
                          handleChangeLink(e.target.value.toUpperCase())
                        }
                        onFocus={() => setLinkFocus(true)}
                        onBlur={() => setLinkFocus(false)}
                      ></Input>
                    </InputGroup>
                    <div className="submit text-center">
                      <Button
                        className="btn-raised btn-round"
                        color="info"
                        defaultValue="Contact Us"
                        type="submit"
                        disabled={
                          nameValue === "" ||
                          linkValue === "" ||
                          titleValue === "" ||
                          emailValue === ""
                            ? true
                            : false
                        }
                        onClick={handlePostSolicitud}
                      >
                        Contriubuir
                      </Button>
                    </div>
                  </Form>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
        <FooterBlackSections />
      </div>
      {snackBarState.show && (
        <SnackBar variant={snackBarState.variant} msg={snackBarState.message} />
      )}
    </>
  );
}

export default Autodeposito;