import React from "react";
// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Label,
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
import FixedTransparentNavbar from "components/Navbars/FixedTransparentNavbar.js";
import Footer from "components/Footers/Footer.js";
import { PaginationAlternative } from "../../components/pagination/PaginationAlternative";
import { useGetAutoresQuery } from "../../api/api.slice";
import { Spiner } from "../../components/spiner/Spiner";
function SignupPage() {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false);
  const {data : autores,isLoading,} = useGetAutoresQuery();
  React.useEffect(() => {
    document.body.classList.add("signup-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("signup-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  if (isLoading) {
    return <Spiner showSpiner />;
  }
  console.log(autores)
  return (
    <>
      <FixedTransparentNavbar />
      <div className="page-header header-filter" filter-color="black">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/bg18.jpg") + ")",
          }}
        ></div>
        <div className="content">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="6" lg="4">
                <Card className="card-signup">
                  <CardBody>
                    <CardTitle className="text-center" tag="h4">
                      Búscar por Autor
                    </CardTitle>
                    <div className="social text-center">
                      <Button
                        className="btn-icon btn-round mr-2"
                        color="twitter"
                      >
                        <i className="fab fa-twitter"></i>
                      </Button>
                      <Button
                        className="btn-icon btn-round mr-2"
                        color="dribbble"
                      >
                        <i className="fab fa-dribbble"></i>
                      </Button>
                      <Button className="btn-icon btn-round" color="facebook">
                        <i className="fab fa-facebook"></i>
                      </Button>
                      <br />
                    </div>
                    <Form action="" className="form" method="">
                      <InputGroup
                        className={lastFocus ? "input-group-focus" : ""}
                      >
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="now-ui-icons text_caps-small"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          autoComplete="name"
                          placeholder="Last Name..."
                          type="text"
                          onFocus={() => setLastFocus(true)}
                          onBlur={() => setLastFocus(false)}
                        ></Input>
                      </InputGroup>
                      <CardFooter className="text-center">
                        <Button
                          className="btn-round"
                          color="info"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                          size="lg"
                        >
                          Búscar
                        </Button>
                      </CardFooter>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
              <Col className="mr-auto" md="6" lg="8">
                <Card className="card-signup">
                  <PaginationAlternative data={autores} url="."/>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default SignupPage;
