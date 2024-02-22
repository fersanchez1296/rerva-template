import React from "react";

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
  const [nameFocus, setNameFocus] = React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false);
  const [numberFocus, setNumberFocus] = React.useState(false);
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
      <ScrollTransparentNavbarSections />
      <div className="wrapper">
        <ContactUsHeader />
        <div className="main">
          <div className="contact-content">
            <Container>
              <Row>
                <Col className="ml-auto mr-auto" md="5">
                  <h2 className="title">Envianos un mensaje</h2>
                  <p className="text-justify">
                    ¿Necesitas ponerte en contacto con nosotros?
                    Introduce tu información y a la brevedad estaremos
                    en contacto contigo.
                    <br></br>
                    <br></br>
                  </p>
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
                        aria-label="nombre"
                        autoComplete="nombre"
                        placeholder="¿Cuál es tu nombre?"
                        type="text"
                        onFocus={() => setNameFocus(true)}
                        onBlur={() => setNameFocus(false)}
                      ></Input>
                    </InputGroup>
                    <label>Correo electrónico</label>
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
                        placeholder="¿Cuál es tu correo?"
                        type="email"
                        onFocus={() => setEmailFocus(true)}
                        onBlur={() => setEmailFocus(false)}
                      ></Input>
                    </InputGroup>
                    <FormGroup>
                      <label>Motivo de contacto</label>
                      <Input
                        id="message"
                        name="message"
                        rows="6"
                        type="textarea"
                      ></Input>
                    </FormGroup>
                    <div className="submit text-center">
                      <Button
                        className="btn-raised btn-round"
                        color="info"
                        defaultValue="Contact Us"
                        type="submit"
                      >
                        Contactar
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
                      <h4 className="info-title">¿Dónde nos ubicamos?</h4>
                      <p>
                        Centro Universitario de los Valles<br></br>
                        Carretera Guadalajara - Ameca Km. 45.5, C.P. 46600<br></br>
                        Ameca, Jalisco, México.
                      </p>
                    </div>
                  </div>
                  <div className="info info-horizontal">
                    <div className="icon icon-info">
                      <i className="now-ui-icons tech_mobile"></i>
                    </div>
                    <div className="description">
                      <h4 className="info-title">Llamanos</h4>
                      <p>
                        Michael Jordan <br></br>
                        +40 762 321 762 <br></br>
                        Mon - Fri, 8:00-22:00
                      </p>
                    </div>
                  </div>
                  <div className="info info-horizontal">
                    <div className="icon icon-info">
                      <i className="business_briefcase-24 now-ui-icons"></i>
                    </div>
                    <div className="description">
                      <h4 className="info-title">Información Legal</h4>
                      <p>
                        Creative Tim Ltd. <br></br>
                        VAT · EN2341241 <br></br>
                        IBAN · EN8732ENGB2300099123 <br></br>
                        Bank · Great Britain Bank
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
    </>
  );
}

export default ContactUs;
