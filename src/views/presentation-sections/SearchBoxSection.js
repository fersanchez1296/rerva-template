//React
import React from "react";
//translations
import { useTranslation } from "react-i18next";
//react-strap
import Select from "react-select";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";
//api
import { useGetBusquedaInfoSelectQuery } from "../../api/api.slice.js";
//self components
import { Spiner } from "../../components/spiner/Spiner";

function SearchBoxSection() {
  const { data: indicadores, isLoading } = useGetBusquedaInfoSelectQuery();
  const { t, i18n } = useTranslation("global");
  const [lastFocus, setLastFocus] = React.useState(false);
  const [busqueda, setBusqueda] = React.useState("");
  const [inputValue, setInputValue] = React.useState("");
  const [paisPublicacionSelect, setPaisPublicacionSelect] = React.useState("");
  const [areaSelect, setAreaSelect] = React.useState("");
  const [seccionSelect, setSeccionSelect] = React.useState({
    value: "1",
    label: "General",
  });
  const url = "busqueda";

  if (isLoading) {
    return <Spiner showSpiner />;
  }
// **********Functions**********
  const handleChange = (e) => {
    const regex = /^[a-zA-ZÀ-ÿ\s]*$/;

    if (regex.test(e) || e === "") {
      setInputValue(e);
      setBusqueda(e);
    }
  };

  const handleResetInputs = () => {
    setBusqueda("");
    setAreaSelect("");
    setPaisPublicacionSelect("");
    setInputValue("");
  };

  const renderInputGroup = () => {
    if (seccionSelect.value === "1") {
      return (
        <InputGroup className={lastFocus ? "input-group-focus" : ""}>
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
            placeholder="Título, área de conocimiento..."
            type="text"
            value={inputValue}
            onChange={(e) => handleChange(e.target.value.toUpperCase())}
            onFocus={() => setLastFocus(true)}
            onBlur={() => setLastFocus(false)}
          />
        </InputGroup>
      );
    } else if (seccionSelect.value === "2") {
      return (
        <InputGroup className={lastFocus ? "input-group-focus" : ""}>
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
            placeholder="Nombre o Apellido..."
            type="text"
            value={inputValue}
            onChange={(e) => handleChange(e.target.value.toUpperCase())}
            onFocus={() => setLastFocus(true)}
            onBlur={() => setLastFocus(false)}
          />
        </InputGroup>
      );
    } else if (seccionSelect.value === "3") {
      return (
        <Select
          className="react-select mr-0 w-100"
          classNamePrefix="react-select"
          name=""
          onChange={(value) => (setAreaSelect(value), setBusqueda(value.label))}
          options={indicadores.areas.map((a) => {
            return { value: a.value, label: a.label };
          })}
          placeholder="Selecciona el área de conocimiento"
          value={areaSelect}
          styles={{
            control: (provided) => ({
              ...provided,

              borderTopLeftRadius: "0 !important",
              borderBottomLeftRadius: "0 !important",
            }),
          }}
        />
      );
    } else if (seccionSelect.value === "4") {
      return (
        <InputGroup className={lastFocus ? "input-group-focus" : ""}>
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
            placeholder="Nombre de la revista..."
            type="text"
            value={inputValue}
            onChange={(e) => handleChange(e.target.value.toUpperCase())}
            onFocus={() => setLastFocus(true)}
            onBlur={() => setLastFocus(false)}
          />
        </InputGroup>
      );
    } else if (seccionSelect.value === "5") {
      return (
        <Select
          className="react-select mr-0 w-100"
          classNamePrefix="react-select"
          name=""
          onChange={(value) => (
            setPaisPublicacionSelect(value), setBusqueda(value.label)
          )}
          options={indicadores.paises.map((a) => {
            return { value: a.value, label: a.label };
          })}
          placeholder="Selecciona el país de publicación"
          value={paisPublicacionSelect}
          styles={{
            control: (provided) => ({
              ...provided,

              borderTopLeftRadius: "0 !important",
              borderBottomLeftRadius: "0 !important",
            }),
          }}
        />
      );
    }
  };

  return (
    <>
      <div className="section section-sections">
        <Container>
          <h1 className="text-center">
            {" "}
            <span className="text-primary">
              {indicadores.indicadores[0].documentos}
            </span>{" "}
            {t("searchBox.Description.Title")}
          </h1>
          <hr className="bg-primary"></hr>
          <div className="d-flex justify-content-around align-items-center text-center">
            <h3>
              <span className="text-primary">
                {indicadores.indicadores[0].autores}
              </span>{" "}
              {t("searchBox.Description.Authors")}
            </h3>
            <h1>|</h1>
            <h3>
              <span className="text-primary">
                {indicadores.indicadores[0].paises}
              </span>{" "}
              {t("searchBox.Description.Country")}
            </h3>
            <h1>|</h1>
            <h3>
              <span className="text-primary">
                {indicadores.indicadores[0].revistas}
              </span>{" "}
              {t("searchBox.Description.Journal")}
            </h3>
          </div>
          <hr className="bg-primary"></hr>
          <Col className="ml-auto mr-auto" md="12">
            <div className="section-description text-center">
              <h1 className="title">{t("searchBox.Container.Title")}</h1>
              <Card
                className="card-signup"
                style={{ maxWidth: "90%", margin: "0 auto" }}
              >
                <CardBody>
                  <div className="social text-center">
                    <h3>{t("searchBox.Container.Subtitle")} : </h3>
                    <br />
                  </div>
                  <Form action="" className="form" method="">
                    <Row>
                      <Col lg="12" md="12" sm="12">
                        <div className="d-flex">
                          <Select
                            className="react-select mr-0 w-50"
                            classNamePrefix="react-select"
                            name=""
                            onChange={(value) => setSeccionSelect(value)}
                            options={[
                              { value: "1", label: "General" },
                              { value: "2", label: "Autor" },
                              { value: "3", label: "Area de conocimiento" },
                              { value: "4", label: "Revista" },
                              { value: "5", label: "Pais de publicacion" },
                            ]}
                            placeholder="Selecciona la sección"
                            value={seccionSelect}
                            styles={{
                              control: (provided) => ({
                                ...provided,

                                backgroundColor: "#0096FF !important",
                                color: "white !important",
                                textAlign: "center !important",
                                borderTopRightRadius: "0 !important",
                                borderBottomRightRadius: "0 !important",
                                border: "1px solid gray !important",
                              }),
                              singleValue: (provided) => ({
                                ...provided,
                                color: "white !important",
                                textAlign: "center !important",
                              }),
                            }}
                          />
                          {renderInputGroup()}
                        </div>
                      </Col>
                    </Row>
                    <CardFooter className="text-center">
                      <Button
                        disabled={busqueda === "" ? true : false}
                        className="btn-round"
                        color="info"
                        onClick={(e) => {
                          if (busqueda != "") {
                            setBusqueda(busqueda.replace(/ /g, "+"));
                          }
                          const seccion = seccionSelect.label.replace(
                            / /g,
                            "-"
                          );
                          window.open(
                            `/${url}/${seccion}/${busqueda}`,
                            "_blank"
                          );
                          handleResetInputs();
                        }}
                        size="lg"
                      >
                        {t("searchBox.Container.Button")}
                      </Button>
                    </CardFooter>
                  </Form>
                </CardBody>
              </Card>
            </div>
          </Col>
        </Container>
      </div>
    </>
  );
}

export default SearchBoxSection;
