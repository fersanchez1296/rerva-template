import React from "react";
import { Link } from "react-router-dom";
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

import {useGetBusquedaInfoSelectQuery} from "../../api/api.slice.js"
import { Spiner } from "../../components/spiner/Spiner";
// core components

function Sections() {
  const url = "busqueda";
  const [lastFocus, setLastFocus] = React.useState(false);
  let [busqueda, setBusqueda] = React.useState("");
  const [seccionSelect, setSeccionSelect] = React.useState({
    value: "1",
    label: "General",
  });
  const [areaSelect, setAreaSelect] = React.useState("");
  const [tipoDocumentoSelect, setTipoDocumentoSelect] = React.useState(null);
  const [paisPublicacionSelect, setPaisPublicacionSelect] =
    React.useState(null);
  const [editorialSelect, setEditorialSelect] = React.useState(null);
  const [institucionSelect, setInstitucionSelect] = React.useState(null);

  const {data : indicadores,isLoading} = useGetBusquedaInfoSelectQuery() 
  if (isLoading) {
    return <Spiner showSpiner />;
  }
  console.log(indicadores.areas);

  const handleChange = (e) => {
    setBusqueda(e);
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
            onChange={(e) => handleChange(e.target.value)}
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
          onChange={(value) => (setAreaSelect(value),setBusqueda(value.label))}
          options={indicadores.areas.map((a) => {
            return (
              { value: a.value , label : a.label }
            )
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
            onChange={(e) => handleChange(e.target.value)}
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
          onChange={(value) => (setTipoDocumentoSelect(value),setBusqueda(value.label))}
          options={indicadores.tipos.map((a) => {
            return (
              { value: a.value , label : a.label }
            )
          })}
          placeholder="Selecciona el tipo de documento"
          value={tipoDocumentoSelect}
          styles={{
            control: (provided) => ({
              ...provided,

              borderTopLeftRadius: "0 !important",
              borderBottomLeftRadius: "0 !important",
            }),
          }}
        />
      );
    } else if (seccionSelect.value === "6") {
      return (
        <Select
          className="react-select mr-0 w-100"
          classNamePrefix="react-select"
          name=""
          onChange={(value) => (setPaisPublicacionSelect(value),setBusqueda(value.label))}
          options={indicadores.paises.map((a) => {
            return (
              { value: a.value , label : a.label }
            )
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
    } else if (seccionSelect.value === "7") {
      return (
        <Select
          className="react-select mr-0 w-100"
          classNamePrefix="react-select"
          name=""
          onChange={(value) => (setEditorialSelect(value),setBusqueda(value.label))}
          options={indicadores.editoriales.map((a) => {
            return (
              { value: a.value , label : a.label }
            )
          })}
          placeholder="Selecciona la editorial"
          value={editorialSelect}
          styles={{
            control: (provided) => ({
              ...provided,

              borderTopLeftRadius: "0 !important",
              borderBottomLeftRadius: "0 !important",
            }),
          }}
        />
      );
    } else if (seccionSelect.value === "8") {
      return (
        <Select
          className="react-select mr-0 w-100 "
          classNamePrefix="react-select"
          name=""
          onChange={(value) => (setInstitucionSelect(value),setBusqueda(value.label))}
          options={indicadores.instituciones.map((a) => {
            return (
              { value: a.value , label : a.label }
            )
          })}
          placeholder="Selecciona la institución"
          value={institucionSelect}
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
        <h1 className="text-center"> <span className="text-primary">{indicadores.indicadores[0].documentos}</span> Documentos identificados</h1>
          <hr className="bg-primary"></hr>
          <div className="d-flex justify-content-around align-items-center text-center">
            <h3><span className="text-primary">{indicadores.indicadores[0].autores}</span> Autores</h3>
            <h1>|</h1>
            <h3><span className="text-primary">{indicadores.indicadores[0].paises}</span> Países</h3>
            <h1>|</h1>
            <h3><span className="text-primary">{indicadores.indicadores[0].revistas}</span> Revistas</h3>
          </div>
          <hr className="bg-primary"></hr>
          <Col className="ml-auto mr-auto" md="12">
            <div className="section-description text-center">
              <h1 className="title">Buscar en la Base de Datos de CUValles</h1>
              <Card
                className="card-signup"
                style={{ maxWidth: "90%", margin: "0 auto" }}
              >
                <CardBody>
                  <div className="social text-center">
                    <h3>Ingresa el criterio de búsqueda : </h3>
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
                            onChange={(value) => setSeccionSelect(value)}
                            options={[
                              { value: "1", label: "General" },
                              { value: "2", label: "Autor" },
                              { value: "3", label: "Area de conocimiento" },
                              { value: "4", label: "Revista" },
                              { value: "5", label: "Tipo de documento" },
                              { value: "6", label: "Pais de publicacion" },
                              { value: "7", label: "Editorial" },
                              { value: "8", label: "Institucion" },
                            ]}
                            placeholder="Selecciona la sección"
                            value={seccionSelect}
                            styles={{
                              control: (provided) => ({
                                ...provided,
                                width: "200px !important",
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
                           busqueda = busqueda.replace(/ /g, "+");
                         }
                          const seccion = seccionSelect.label.replace(/ /g, "-");
                         window.open(
                           `/${url}/${seccion}/${busqueda}`,
                           "_blank"
                         );
                         setBusqueda("")
                         setAreaSelect("")
                         setTipoDocumentoSelect("")
                         setPaisPublicacionSelect("")
                         setEditorialSelect("")
                         setInstitucionSelect("")
                        }}
                        size="lg"
                        
                      >
                        Búscar
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

export default Sections;
