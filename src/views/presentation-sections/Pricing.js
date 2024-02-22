/*eslint-disable*/
import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

// core components

function Pricing() {
  return (
    <>
      <hr></hr>
      <div className="section section-pricing" id="sectionBuy">
        <Container>
          <div>
            <Container>
            <Row className="justify-content-center">
                <div className="our-clients">
                  <Row className="justify-content-center">
                    <Col className="text-center ml-auto mr-auto" md="12">
                      <h3>Powered By:</h3>
                    </Col>
                    <Col className="ml-auto mr-auto" md="3">
                    <i class="fa-brands fa-react fa-3x"></i>
                    </Col>
                    <Col className="ml-auto mr-auto" md="3">
                    <i class="fa-brands fa-node fa-3x"></i>
                    </Col>
                    <Col className="ml-auto mr-auto" md="3">
                    <i class="fa-brands fa-linux fa-3x"></i>
                    </Col>
                    <Col className="ml-auto mr-auto" md="3">
                    <i class="fa-brands fa-invision fa-3x"></i>
                    </Col>
                  </Row>
                </div>
              </Row>
              <Row className="justify-content-center">
                <Col md="8">
                  <img
                    alt="Logo Centro Universitario de los Valles"
                    src={require("assets/img/cuvalles-logo-2.jpeg")}
                    className="img-fluid"
                  />
                </Col>
              </Row>
              
            </Container>
          </div>
          <Row>
            {/* <Col className="text-center ml-auto mr-auto mt-5" md="8">
              <h3>Thank you for supporting us!</h3>
            </Col> */}
            <Col className="text-center ml-auto mr-auto" md="8">
              <Button
                className="btn-round btn-icon bg-dark"
                color="facebook"
                href="https://twitter.com/i/flow/login?redirect_after_login=%2Fcuvallesudg"
                target="_blank"
                id="tooltip477589936"
                size="lg"
              >
                <i class="fab fa-x-twitter"></i>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip477589936">
                Siguenos en X!
              </UncontrolledTooltip>
              <Button
                className="btn-round btn-icon bg-dark"
                color="facebook"
                href="https://www.threads.net/@cuvalles"
                target="_blank"
                id="tooltip129912781"
                size="lg"
              >
                <i class="fab fa-threads"></i>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip129912781">
                Búscanos en threads!
              </UncontrolledTooltip>
              <Button
                className="btn-round btn-icon"
                color="facebook"
                href="https://www.facebook.com/cuvalles/"
                target="_blank"
                id="tooltip156844413"
                size="lg"
              >
                <i class="fab fa-facebook"></i>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip156844413">
                Búscanos en Facebook!
              </UncontrolledTooltip>
              <Button
                className="btn-round btn-icon bg-danger bg-gradient"
                color=""
                href="https://www.instagram.com/cuvalles/"
                target="_blank"
                id="tooltip156844414"
                size="lg"
              >
                <i class="fab fa-instagram"></i>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip156844414">
                Siguenos en Instagram!
              </UncontrolledTooltip>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Pricing;
