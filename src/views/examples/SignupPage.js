import React from "react";
// reactstrap components
import Select from "react-select";
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
  const [colorSelect, setColorSelect] = React.useState({ value: "1", label: "General" });
  const [sizeSelect, setSizeSelect] = React.useState(null);
  const { data: autores, isLoading } = useGetAutoresQuery();
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
  console.log(autores);
  return (
    <>
      
      <div className="page-header header-filter" filter-color="black">
        <div
          className="page-header-image"
          style={{
            backgroundImage:
              "url(" + require("assets/img/cuvalles-3.jpg") + ")",
          }}
        ></div>
        <div className="content">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="12" lg="12">
                <Card className="card-signup">
                  <CardBody>
                    <CardTitle className="text-center" tag="h4">
                      Búscar
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
                      <Row>
                        <Col lg="12" md="12" sm="12">
                          <div className="d-flex">
                            <Select
                              className="react-select mr-0"
                              classNamePrefix="react-select"
                              name=""
                              onChange={(value) => setColorSelect(value)}
                              options={[
                                { value: "1", label: "General" },
                                { value: "2", label: "Autor" },
                                { value: "3", label: "Año" },
                                { value: "4", label: "Revista" },
                              ]}
                              placeholder="Select color"
                              value={colorSelect}
                              styles={{
                                control: (provided) => ({
                                  ...provided,
                                  width: "200px !important",
                                  borderTopRightRadius: "0 !important",
                                  borderBottomRightRadius: "0 !important",
                                }),
                              }}
                            />
                            <InputGroup
                              className={lastFocus ? "input-group-focus" : ""}
                            >
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText
                                  style={{
                                    borderTopLeftRadius: 0,
                                    borderBottomLeftRadius: 0,
                                  }}
                                >
                                  <i className="now-ui-icons text_caps-small"></i>
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input
                                autoComplete="name"
                                placeholder="Last Name..."
                                type="text"
                                onFocus={() => setLastFocus(true)}
                                onBlur={() => setLastFocus(false)}
                              />
                            </InputGroup>
                          </div>
                        </Col>
                      </Row>
                      <CardFooter className="text-center">
                        <Button
                          className="btn-round"
                          color="info"
                          href="#pablo"
                          onClick={(e) => (
                            e.preventDefault(),
                            console.log(colorSelect))}
                          size="lg"
                        >
                          Búscar
                        </Button>
                      </CardFooter>
                    </Form>
                  </CardBody>
                </Card>
                
              </Col>

            </Row>
          </Container>
        </div>
        
      </div>
    </>
  );
}

export default SignupPage;
