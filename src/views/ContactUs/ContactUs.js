//react
import React from "react";
//API
import { useContactoMutation } from "../../api/api.slice";
//spiner
import{ Spiner } from "../../components/spiner/Spiner"
//Snackbar
import { SnackBar } from "../../components/snackBar/SnackBar";
//translations
import { useTranslation } from "react-i18next";
// reactstrap components
import {
  Button,
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
import ContactUsHeader from "components/Headers/ContactUsHeader.js";
import FooterBlackSections from "components/Footers/FooterBlackSections.js";

function ContactUs() {
  const [contaco,{isLoading}] = useContactoMutation();
  const { t } = useTranslation("global");
  const [emailFocus, setEmailFocus] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [snackBarState, setSnackBarState] = React.useState({
    show: false,
    variant: "success",
    message: "",
  });
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

  const handleChangeInputsForm = (inputToUpdate, value) => {
    inputToUpdate === "email" ? setEmail(value) : setSubject(value);
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    const body = {};
    body.email = email;
    body.subject = subject;
    try {
      const result = await contaco({ body });
      console.log("ESTE ES EL RESULTADO---->", result);
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
          message: result.error.error,
        });
      }
    } catch (error) {
      console.log(error);
      setSnackBarState({
        show: true,
        variant: "error",
        message: "Hay un problema en el servidor. Intenta mas tarde.",
      });
    } finally {
      setSubject("");
      setEmail("");
      setTimeout(() => {
        setSnackBarState({
          show: false,
          variant: "success",
          message: "",
        });
      }, 3000);
      clearTimeout();
    }
  };

  if(isLoading) return <Spiner showSpiner/>
  return (
    <>
      <ScrollTransparentNavbarSections />
      <div className="wrapper">
        <ContactUsHeader />
        <div className="main">
          <div className="contact-content">
            <Container>
              <Row>
                <Col className="ml-auto mr-auto" md="5">
                  <h2 className="title">{t("Contact.TitleContact")}</h2>
                  <p className="text-justify">
                    {t("Contact.ContactDescription")}
                    <br></br>
                    <br></br>
                  </p>
                  <Form id="contact-form" method="post" role="form">
                    <label>{t("Contact.Input.InputEmail")}</label>
                    <InputGroup
                      className={emailFocus ? "input-group-focus" : ""}
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons ui-1_email-85"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        aria-label="Correo"
                        autoComplete="correo"
                        placeholder={t("Contact.Input.InputEmailPlaceholder")}
                        type="email"
                        value={email}
                        onFocus={() => setEmailFocus(true)}
                        onBlur={() => setEmailFocus(false)}
                        onChange={(e) => {
                          handleChangeInputsForm("email", e.target.value);
                        }}
                      ></Input>
                    </InputGroup>
                    <FormGroup>
                      <label>{t("Contact.Input.InputSubject")}</label>
                      <Input
                        id="message"
                        name="message"
                        rows="6"
                        type="textarea"
                        value={subject}
                        onChange={(e) => {
                          handleChangeInputsForm("subject", e.target.value);
                        }}
                      ></Input>
                    </FormGroup>
                    <div className="submit text-center">
                      <Button
                        className="btn-raised btn-round"
                        color="info"
                        onClick={sendMessage}
                        type="submit"
                      >
                        {t("Contact.Input.Button")}
                      </Button>
                    </div>
                  </Form>
                </Col>
                <Col className="ml-auto mr-auto" md="5">
                  <div className="info info-horizontal mt-5">
                    <div className="icon icon-info">
                      <i className="now-ui-icons location_pin"></i>
                    </div>
                    <div className="description">
                      <h4 className="info-title">{t("Contact.Location")}</h4>
                      <p>
                        Centro Universitario de los Valles<br></br>
                        Carretera Guadalajara - Ameca Km. 45.5, C.P. 46600
                        <br></br>
                        Ameca, Jalisco, México.
                      </p>
                    </div>
                  </div>
                  <div className="info info-horizontal">
                    <div className="icon icon-info">
                      <i className="now-ui-icons tech_mobile"></i>
                    </div>
                    <div className="description">
                      <h4 className="info-title">{t("Contact.Call")}</h4>
                      <p>
                        Dr. Alvaro Mora Maciel<br></br>Dra. Karla Viridiana
                        Rosales Valenzuela <br></br>
                        +52 375 758 0500 Ext. 47455 <br></br>
                        Lun - Vie, 8:00-18:00
                      </p>
                    </div>
                  </div>
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

export default ContactUs;
