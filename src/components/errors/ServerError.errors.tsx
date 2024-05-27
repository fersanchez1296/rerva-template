import Lottie from "lottie-react";
import serverNotWork from "assets/animations/error/serverError-animations.json";
import { Container, Row, Col } from "reactstrap";
export const ServerError = () => {
  return (
    <Container>
      <Row>
        <Col className="ml-auto mr-auto" md="5">
          <Lottie
            animationData={serverNotWork}
            className="animation server-error"
          />
        </Col>
        <Col className="ml-auto mr-auto text-center" md="8">
          <h2 className="title">
            Lo sentimos, el servidor está fuera de servicio. <br></br>
           <span  className={"text-warning"}>Sorry, the server doesn't work.</span>
          </h2>
        </Col>
      </Row>
    </Container>
  );
};
