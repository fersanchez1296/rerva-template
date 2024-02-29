import { NavLink,useParams } from "react-router-dom";
import Lottie from "lottie-react";
import noDataFound from "assets/animations/NoDataFound/No-data-found.json";
import { Button, Container, Row, Col } from "reactstrap";
export const ServerError = () => {
  const params = useParams();
  const request = params.request.replace(/\+/g, " ");
  return (
    <Container>
      <Row>
        <Col className="ml-auto mr-auto" md="5">
          <Lottie
            animationData={noDataFound}
            className="animation server-error"
          />
        </Col>
        <Col className="ml-auto mr-auto text-center" md="8">
          <h2 className="title">
            Lo sentimos, no encontramos información relacionada en nuestra base
            de datos que coincida con <br></br> <span className={"text-warning"}>{`" ${request} "`}</span>
          </h2>
          <h4 className=" ml-auto mr-auto text-justify">
            <NavLink to={"/"}>
              <Button color="info">Regresar a Inicio</Button>
            </NavLink>
          </h4>
        </Col>
      </Row>
    </Container>
  );
};
