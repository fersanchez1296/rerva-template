//react
import React,{useRef} from "react";
// reactstrap components
import { Row, Col } from "reactstrap";
function ContactUsHeader() {
  return (
    <>
      <div className="page-header page-header-medium">
        <img
          loading="lazy"
          className="page-header-image"
          style={{
            backgroundImage:
              "url(" + require("assets/img/cuvalles/cuvalles-6_HD.jpg") + ")",
          }}
        ></img>
        <div className="content-center">
          <Row>
            <Col className="ml-auto mr-auto" md="8">
              <h1 className="title">Contacto</h1>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

export default ContactUsHeader;
