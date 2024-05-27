//React
import React from "react";
//translations
import { useTranslation } from "react-i18next";
//zustand store
import { useApiRequestStore } from "../../context/apiRequest.store"
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

const SearchBoxSection = React.memo(() => {
  const indicadores = useApiRequestStore((state) => state.data);
  //const { data: indicadores, isLoading } = useGetBusquedaInfoSelectQuery();
  const { t } = useTranslation("global");
  const [lastFocus, setLastFocus] = React.useState(false);
  const [busqueda, setBusqueda] = React.useState("");
  const [paisPublicacionSelect, setPaisPublicacionSelect] = React.useState("");
  const [areaSelect, setAreaSelect] = React.useState("");
  const [seccionSelect, setSeccionSelect] = React.useState({
    value: "1",
    label: "General",
  });

  // if (isLoading) {
  //   return <Spiner showSpiner />;
  // }
  // **********Functions**********

  const handleBuscar = () => {
    const seccion = seccionSelect.label
      .replace(/ /g, "-")
      .replace(/[áäà]/gi, "a")
      .replace(/[éëè]/gi, "e")
      .replace(/[íïì]/gi, "i")
      .replace(/[óöò]/gi, "o")
      .replace(/[úüù]/gi, "u");
    window.open(`/busqueda/${seccion}/${busqueda.replace(/ /g, "+")}`, "_self");
    handleResetInputs();
  };

  const keyPressed = (e) => {
    if (e.key === "Enter" && busqueda !== "") {
      handleBuscar();
    }
  };

  const handleChange = (e) => {
    // console.log(e);
    // const regex = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]+$/u;
    // if (regex.test(e) || e === "") {
      setBusqueda(e);
    // }
  };

  const handleResetInputs = () => {
    setBusqueda("");
    setAreaSelect("");
    setPaisPublicacionSelect("");
  };
  console.log(indicadores);
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
            placeholder={t("searchBox.Container.Input.PlaceholderGeneral")}
            type="text"
            value={busqueda}
            onChange={(e) => handleChange(e.target.value.toUpperCase())}
            onFocus={() => setLastFocus(true)}
            onBlur={() => setLastFocus(false)}
            onKeyPress={(e) => keyPressed(e)}
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
            placeholder={t("searchBox.Container.Input.PlaceholderAuthor")}
            type="text"
            value={busqueda}
            onChange={(e) => handleChange(e.target.value.toUpperCase())}
            onFocus={() => setLastFocus(true)}
            onBlur={() => setLastFocus(false)}
            onKeyPress={(e) => keyPressed(e)}
          />
        </InputGroup>
      );
    } else if (seccionSelect.value === "3") {
      return (
        <Select
          onKeyPress={(e) => keyPressed(e)}
          className="react-select mr-0 w-100"
          classNamePrefix="react-select"
          name=""
          onChange={(value) => (setAreaSelect(value), setBusqueda(value.label))}
          options={indicadores.areas.map((a) => {
            return { value: a.value, label: a.label };
          })}
          placeholder={t("searchBox.Container.Input.PlaceholderArea")}
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
            placeholder={t("searchBox.Container.Input.PlaceholderJournal")}
            type="text"
            value={busqueda}
            onChange={(e) => handleChange(e.target.value.toUpperCase())}
            onFocus={() => setLastFocus(true)}
            onBlur={() => setLastFocus(false)}
            onKeyPress={(e) => keyPressed(e)}
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
          onKeyPress={(e) => keyPressed(e)}
          options={indicadores.paises.map((a) => {
            return { value: a.value, label: a.label };
          })}
          placeholder={t("searchBox.Container.Input.PlaceholderCountry")}
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
                              {
                                value: "1",
                                label: t("searchBox.Container.Select.General"),
                              },
                              {
                                value: "2",
                                label: t("searchBox.Container.Select.Author"),
                              },
                              {
                                value: "3",
                                label: t("searchBox.Container.Select.Area"),
                              },
                              {
                                value: "4",
                                label: t("searchBox.Container.Select.Journal"),
                              },
                              {
                                value: "5",
                                label: t("searchBox.Container.Select.Country"),
                              },
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
                        onClick={() => handleBuscar()}
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
});

export default SearchBoxSection;
