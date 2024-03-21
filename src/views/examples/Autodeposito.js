//react
import React from "react";
//translations
import { useTranslation } from "react-i18next";
//Api
import { usePostSolicitudMutation } from "../../api/api.slice";
//Snackbar
import { SnackBar } from "../../components/snackBar/SnackBar";
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
  const { t, i18n } = useTranslation("global");
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
    DOI : "",
  });
  const [nameFocus, setNameFocus] = React.useState(false);
  const [titleFocus, setTitleFocus] = React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false);
  const [linkFocus, setLinkFocus] = React.useState(false);
  const [doiFocus, setDoiFocus] = React.useState(false);
  const [nameValue, setNameValue] = React.useState("");
  const [titleValue, setTitleValue] = React.useState("");
  const [emailValue, setEmailValue] = React.useState("");
  const [linkValue, setLinkValue] = React.useState("");
  const [doiValue, setDoiValue] = React.useState("");
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

  const handleChangeDoi = (value) => {
    setDoiValue(value);
    setBody((prevBody) => ({
      ...prevBody,
      DOI: value,
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
      setDoiValue("");
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
                  <h2 className="title">{t("Autodeposito.Title")}</h2>
                  <p className="text-justify">
                    {t("Autodeposito.TitleDescription")}
                    <br></br>
                  </p>

                  <h2 className="title">{t("Autodeposito.TitleHowWorks")}</h2>
                  <ol>
                    <li>{t("Autodeposito.DescriptionHowWorks-1")}</li>
                    <br></br>
                    <li>{t("Autodeposito.DescriptionHowWorks-2")}</li>
                    <br></br>
                    <li>{t("Autodeposito.DescriptionHowWorks-3")}</li>
                    <br></br>
                    <li>{t("Autodeposito.DescriptionHowWorks-4")}</li>
                  </ol>
                  <h2 className="title">
                    {t("Autodeposito.TitleRequirements")}
                  </h2>
                  <p className="text-justify">
                    {t("Autodeposito.TitleRequirementsDescription")}
                    <br></br>
                  </p>
                  <h2 className="title">{t("Autodeposito.Copyright")}</h2>
                  <p className="text-justify">
                    {t("Autodeposito.CopyrightDescription")}
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
                          <i className="now-ui-icons text_caps-small"></i>
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
                          <i className="now-ui-icons files_paper"></i>
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
                    <label>DOI</label>
                    <InputGroup
                      className={doiFocus ? "input-group-focus" : ""}
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons objects_key-25"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        autoComplete="doi"
                        placeholder="¿Cuál es el DOI documento?"
                        type="text"
                        value={doiValue}
                        onChange={(e) =>
                          handleChangeDoi(e.target.value.toUpperCase())
                        }
                        onFocus={() => setDoiFocus(true)}
                        onBlur={() => setDoiFocus(false)}
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
                          titleValue === "" ||
                          emailValue === "" ||
                          (linkValue === "" &&
                          doiValue === "")
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
