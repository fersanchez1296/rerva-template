import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Collapse,
  Label,
  FormGroup,
  Input,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";
import ScrollTransparentNavbar from "components/Navbars/ScrollTransparentNavbar.js";
import EcommerceHeader from "components/Headers/EcommerceHeader.js";
import {PaginationAlternative} from "../../components/pagination/PaginationAlternative"
import Footer from "components/Footers/Footer.js";
import { CardWithIcons } from "../../components/Card/CardWithIcons";
import { ServerError } from "../../components/serverError/ServerError";
import { Spiner } from "../../components/spiner/Spiner";
import { SnackBar } from "../../components/snackBar/SnackBar";
import { useGetDataForQuery } from "../../api/api.slice";

function Ecommerce() {
  let { url, request } = useParams();
  console.log(request)
  request = request.replace(/-/g, "/")
  const title = url.replace(/-/g, " ");
  const subtitle = request;
  const [selectedArea, setSelectedArea] = useState(null);
  const [selectedDisciplina, setSelectedDisciplina] = useState("");
  const [selectedCampo, setSelectedCampo] = useState("");
  const [selectedPClave, setSelectedPClave] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedIdioma, setSelectedIdioma] = useState("");
  const [selectedPais, setSelectedPais] = useState("");
  const [selectedTipoDocumento, setSelectedTipoDocumento] = useState("");

  const [collapses, setCollapses] = useState([1]);
  const changeCollapse = (collapse) => {
    if (collapses.includes(collapse)) {
      setCollapses(collapses.filter((prop) => prop !== collapse));
    } else {
      setCollapses([...collapses, collapse]);
    }
  };

  const [filters, setFilters] = useState({
    areaEstudio: "",
    disciplina: "",
    campo: "",
    clasificacion: "",
    anio: "",
    idioma: "",
    pais: "",
    tipo: "",
  });

  const handleCheckboxChange = (area) => {
    setSelectedArea(selectedArea === area ? null : area);
    setFilters((prevFilters) => ({
      ...prevFilters,
      areaEstudio: selectedArea === area ? "" : area,
    }));
  };

  const handleCheckboxChangeDisciplina = (disciplina) => {
    setSelectedDisciplina(
      selectedDisciplina === disciplina ? null : disciplina
    );
    setFilters((prevFilters) => ({
      ...prevFilters,
      disciplina: prevFilters.disciplina === disciplina ? "" : disciplina,
    }));
  };

  const handleCheckboxChangeCampo = (campo) => {
    setSelectedCampo(selectedCampo === campo ? null : campo);
    setFilters((prevFilters) => ({
      ...prevFilters,
      campo: prevFilters.campo === campo ? "" : campo,
    }));
  };

  const handleCheckboxChangePClave = (pClave) => {
    setSelectedPClave(
      selectedPClave === pClave ? null : pClave
    );
    setFilters((prevFilters) => ({
      ...prevFilters,
      pClave:
        prevFilters.pClave === pClave ? "" : pClave,
    }));
  };

  const handleCheckboxChangeYear = (year) => {
    setSelectedYear(selectedYear === year ? null : year);
    setFilters((prevFilters) => ({
      ...prevFilters,
      year: prevFilters.year === year ? "" : year,
    }));
  };

  const handleCheckboxChangeIdioma = (idioma) => {
    setSelectedIdioma(selectedIdioma === idioma ? null : idioma);
    setFilters((prevFilters) => ({
      ...prevFilters,
      idioma: prevFilters.idioma === idioma ? "" : idioma,
    }));
  };

  const handleCheckboxChangePais = (pais) => {
    setSelectedPais(selectedPais === pais ? null : pais);
    setFilters((prevFilters) => ({
      ...prevFilters,
      pais: prevFilters.pais === pais ? "" : pais,
    }));
  };

  const handleCheckboxChangeTipoDocumento = (tipoDocumento) => {
    setSelectedTipoDocumento(
      selectedTipoDocumento === tipoDocumento ? null : tipoDocumento
    );
    setFilters((prevFilters) => ({
      ...prevFilters,
      tipoDocumento:
        prevFilters.tipoDocumento === tipoDocumento ? "" : tipoDocumento,
    }));
  };

  const {
    data: dt,
    isError,
    isLoading,
    error,
  } = useGetDataForQuery({ url, request });

  useEffect(() => {
    document.title = `${subtitle} - ${title}`;
    document.body.classList.add("ecommerce-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;

    return function cleanup() {
      document.body.classList.remove("ecommerce-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);

  if (isLoading) {
    return <Spiner showSpiner />;
  }

  if (isError) {
    return (
      <>
        <SnackBar
          msg={
            "Ocurrió un error en la petición, error : " + JSON.stringify(error)
          }
          variant={"error"}
        />
        <ServerError />
      </>
    );
  }

  const filterOptionsArea = Array.from(new Set(dt.map((el) => el["Área"])))
    .filter((area) => area !== undefined && area !== null)
    .map((area) => ({ key: area.trim(), label: area }));

  const filterOptionsDisciplina = Array.from(
    new Set(dt.map((el) => el["Disciplina"]))
  )
    .filter((disciplina) => disciplina !== undefined && disciplina !== null)
    .map((disciplina) => ({ key: disciplina.trim(), label: disciplina }));

  const filterOptionsCampo = Array.from(new Set(dt.map((el) => el["Campo"])))
    .filter((campo) => campo !== undefined && campo !== null)
    .map((campo) => ({ key: campo.trim(), label: campo }));

  const filterOptionsPClave = Array.from(
    new Set(dt.map((el) => el["Palabras Clave"]))
  )
    .filter(
      (pClave) => pClave !== undefined && pClave !== null
    )
    .map((pClave) => ({
      key: pClave,
      label: pClave,
    }));

    const filterOptionsYear = Array.from(new Set(dt.map((el) => el["Año"])))
    .filter((year) => year !== undefined && year !== null)
    .map((year) => ({ key: year, label: year }))
    .sort((a, b) => b.key - a.key);
  

    const filterOptionsIdioma = Array.from(
      new Set(
        dt
          .map((el) => el["Idioma"])
          .filter((idioma) => idioma !== undefined && idioma !== null)
      )
    ).map((idioma) => ({ key: idioma, label: idioma }));
    
  

  const filterOptionsPais = Array.from(
    new Set(dt.map((el) => el["País de la Publicación"]))
  )
    .filter((pais) => pais !== undefined && pais !== null)
    .map((pais) => ({ key: pais.trim(), label: pais }));

  const filterOptionsTipoDocumento = Array.from(new Set(dt.map((el) => el["Tipo de documento"])))
  .filter((tipo) => tipo !== undefined && tipo !== null)
  .map((tipo) => ({ key: tipo.trim(), label: tipo }));

  const filteredData = dt.filter((item) => {
    return (
      (!selectedArea || item["Área"] === selectedArea) &&
      (!filters.disciplina || item["Disciplina"] === filters.disciplina) &&
      (!filters.campo || item["Campo"] === filters.campo) &&
      (!filters.clasificacion ||
        item["Clasificación"] === filters.clasificacion) &&
      (!filters.pais || item["País de la Publicación"] === filters.pais) &&
      (!filters.tipo || item["Tipo de documento"] === filters.tipo) &&
      (!filters.idioma || item["Idioma"] === filters.idioma) &&
      (!filters.pClave || item["Palabras Clave"] === filters.pClave) &&
      (!filters.year || item["Año"] === filters.year)
    );
  });

  const cantidadTotal = dt.length;
  const cantidadFiltrada = filteredData.length;

  return (
    <>
      <ScrollTransparentNavbar />
      <div className="wrapper">
        <EcommerceHeader
          title={title}
          subtitle={subtitle}
          cantidad={cantidadTotal}
        />
        <div className="main">
          <div className="section">
            <Container>
              <h2 className="section-title">Documentos : {cantidadFiltrada}</h2>
              <Row>
                <Col md="3">
                  <div className="collapse-panel">
                    <CardBody>
                      {/* Collapse para Área */}
                      <Card className="card-refine card-plain">
                        <CardHeader id="headingOne" role="tab">
                          <h6 className="mb-0">
                            <a
                              className="text-info"
                              aria-expanded={collapses.includes(1)}
                              data-toggle="collapse"
                              href="#collapseArea"
                              onClick={(e) => {
                                e.preventDefault();
                                changeCollapse(1);
                              }}
                            >
                              Área{" "}
                              <i className="now-ui-icons arrows-1_minimal-down"></i>
                            </a>
                          </h6>
                        </CardHeader>
                        <Collapse
                          isOpen={collapses.includes(1)}
                          id="collapseArea"
                        >
                          <CardBody>
                            {filterOptionsArea.map((option) => (
                              <FormGroup key={option.key} check>
                                <Label check>
                                  <Input
                                    type="checkbox"
                                    checked={selectedArea === option.key}
                                    onChange={() =>
                                      handleCheckboxChange(option.key)
                                    }
                                  />
                                  <span className="form-check-sign"></span>
                                  {option.label}
                                </Label>
                              </FormGroup>
                            ))}
                          </CardBody>
                        </Collapse>
                      </Card>

                      {/* Collapse para Disciplina */}
                      <Card className="card-refine card-plain">
                        <CardHeader id="headingOne" role="tab">
                          <h6 className="mb-0">
                            <a
                              className="text-info"
                              aria-expanded={collapses.includes(2)}
                              data-toggle="collapse"
                              href="#collapseDisciplina"
                              onClick={(e) => {
                                e.preventDefault();
                                changeCollapse(2);
                              }}
                            >
                              Disciplina{" "}
                              <i className="now-ui-icons arrows-1_minimal-down"></i>
                            </a>
                          </h6>
                        </CardHeader>
                        <Collapse
                          isOpen={collapses.includes(2)}
                          id="collapseDisciplina"
                        >
                          <CardBody>
                            {filterOptionsDisciplina.map((option) => (
                              <FormGroup key={option.key} check>
                                <Label check>
                                  <Input
                                    type="checkbox"
                                    checked={selectedDisciplina === option.key}
                                    onChange={() =>
                                      handleCheckboxChangeDisciplina(option.key)
                                    }
                                  />
                                  <span className="form-check-sign"></span>
                                  {option.label}
                                </Label>
                              </FormGroup>
                            ))}
                          </CardBody>
                        </Collapse>
                      </Card>

                      {/* Collapse para Campo */}
                      <Card className="card-refine card-plain">
                        <CardHeader id="headingOne" role="tab">
                          <h6 className="mb-0">
                            <a
                              className="text-info"
                              aria-expanded={collapses.includes(3)}
                              data-toggle="collapse"
                              href="#collapseCampo"
                              onClick={(e) => {
                                e.preventDefault();
                                changeCollapse(3);
                              }}
                            >
                              Campo{" "}
                              <i className="now-ui-icons arrows-1_minimal-down"></i>
                            </a>
                          </h6>
                        </CardHeader>
                        <Collapse
                          isOpen={collapses.includes(3)}
                          id="collapseCampo"
                        >
                          <CardBody>
                            {filterOptionsCampo.map((option) => (
                              <FormGroup key={option.key} check>
                                <Label check>
                                  <Input
                                    type="checkbox"
                                    checked={selectedCampo === option.key}
                                    onChange={() =>
                                      handleCheckboxChangeCampo(option.key)
                                    }
                                  />
                                  <span className="form-check-sign"></span>
                                  {option.label}
                                </Label>
                              </FormGroup>
                            ))}
                          </CardBody>
                        </Collapse>
                      </Card>

                      {/* Collapse para Palabras Clave */}
                      <Card className="card-refine card-plain">
                        <CardHeader id="headingOne" role="tab">
                          <h6 className="mb-0">
                            <a
                              className="text-info"
                              aria-expanded={collapses.includes(4)}
                              data-toggle="collapse"
                              href="#collapsePClave"
                              onClick={(e) => {
                                e.preventDefault();
                                changeCollapse(4);
                              }}
                            >
                              Palabras Clave{" "}
                              <i className="now-ui-icons arrows-1_minimal-down"></i>
                            </a>
                          </h6>
                        </CardHeader>
                        <Collapse
                          isOpen={collapses.includes(4)}
                          id="collapsePClave"
                        >
                          <CardBody>
                            {filterOptionsPClave.map((option) => (
                              <FormGroup key={option.key} check>
                                <Label check>
                                  <Input
                                    type="checkbox"
                                    checked={
                                      selectedPClave === option.key
                                    }
                                    onChange={() =>
                                      handleCheckboxChangePClave(
                                        option.key
                                      )
                                    }
                                  />
                                  <span className="form-check-sign"></span>
                                  {option.label}
                                </Label>
                              </FormGroup>
                            ))}
                          </CardBody>
                        </Collapse>
                      </Card>

                      {/* Collapse para País */}
                      <Card className="card-refine card-plain">
                        <CardHeader id="headingOne" role="tab">
                          <h6 className="mb-0">
                            <a
                              className="text-info"
                              aria-expanded={collapses.includes(5)}
                              data-toggle="collapse"
                              href="#collapsePais"
                              onClick={(e) => {
                                e.preventDefault();
                                changeCollapse(5);
                              }}
                            >
                              País{" "}
                              <i className="now-ui-icons arrows-1_minimal-down"></i>
                            </a>
                          </h6>
                        </CardHeader>
                        <Collapse
                          isOpen={collapses.includes(5)}
                          id="collapsePaís"
                        >
                          <CardBody>
                            {filterOptionsPais.map((option) => (
                              <FormGroup key={option.key} check>
                                <Label check>
                                  <Input
                                    type="checkbox"
                                    checked={selectedPais === option.key}
                                    onChange={() =>
                                      handleCheckboxChangePais(option.key)
                                    }
                                  />
                                  <span className="form-check-sign"></span>
                                  {option.label}
                                </Label>
                              </FormGroup>
                            ))}
                          </CardBody>
                        </Collapse>
                      </Card>

                      {/* Collapse para tipo de documento */}
                      {/* <Card className="card-refine card-plain">
                        <CardHeader id="headingOne" role="tab">
                          <h6 className="mb-0">
                            <a
                              className="text-info"
                              aria-expanded={collapses.includes(6)}
                              data-toggle="collapse"
                              href="#collapseTipoDocumento"
                              onClick={(e) => {
                                e.preventDefault();
                                changeCollapse(6);
                              }}
                            >
                              Tipo de documento{" "}
                              <i className="now-ui-icons arrows-1_minimal-down"></i>
                            </a>
                          </h6>
                        </CardHeader>
                        <Collapse
                          isOpen={collapses.includes(6)}
                          id="collapseTipoDocumento"
                        >
                          <CardBody>
                            {filterOptionsTipoDocumento.map((option) => (
                              <FormGroup key={option.key} check>
                                <Label check>
                                  <Input
                                    type="checkbox"
                                    checked={
                                      selectedTipoDocumento === option.key
                                    }
                                    onChange={() =>
                                      handleCheckboxChangeTipoDocumento(
                                        option.key
                                      )
                                    }
                                  />
                                  <span className="form-check-sign"></span>
                                  {option.label}
                                </Label>
                              </FormGroup>
                            ))}
                          </CardBody>
                        </Collapse>
                      </Card> */}

                      {/* Collapse para Idioma */}
                      <Card className="card-refine card-plain">
                        <CardHeader id="headingOne" role="tab">
                          <h6 className="mb-0">
                            <a
                              className="text-info"
                              aria-expanded={collapses.includes(7)}
                              data-toggle="collapse"
                              href="#collapseIdioma"
                              onClick={(e) => {
                                e.preventDefault();
                                changeCollapse(7);
                              }}
                            >
                              Idioma{" "}
                              <i className="now-ui-icons arrows-1_minimal-down"></i>
                            </a>
                          </h6>
                        </CardHeader>
                        <Collapse
                          isOpen={collapses.includes(7)}
                          id="collapseIdioma"
                        >
                          <CardBody>
                            {filterOptionsIdioma.map((option) => (
                              <FormGroup key={option.key} check>
                                <Label check>
                                  <Input
                                    type="checkbox"
                                    checked={
                                      selectedIdioma === option.key
                                    }
                                    onChange={() =>
                                      handleCheckboxChangeIdioma(
                                        option.key
                                      )
                                    }
                                  />
                                  <span className="form-check-sign"></span>
                                  {option.label}
                                </Label>
                              </FormGroup>
                            ))}
                          </CardBody>
                        </Collapse>
                      </Card>

                      {/* Collapse para Año */}
                      <Card className="card-refine card-plain">
                        <CardHeader id="headingOne" role="tab">
                          <h6 className="mb-0">
                            <a
                              className="text-info"
                              aria-expanded={collapses.includes(8)}
                              data-toggle="collapse"
                              href="#collapseYear"
                              onClick={(e) => {
                                e.preventDefault();
                                changeCollapse(8);
                              }}
                            >
                              Año{" "}
                              <i className="now-ui-icons arrows-1_minimal-down"></i>
                            </a>
                          </h6>
                        </CardHeader>
                        <Collapse
                          isOpen={collapses.includes(8)}
                          id="collapseYear"
                        >
                          <CardBody>
                            {filterOptionsYear.map((option) => (
                              <FormGroup key={option.key} check>
                                <Label check>
                                  <Input
                                    type="checkbox"
                                    checked={
                                      selectedYear === option.key
                                    }
                                    onChange={() =>
                                      handleCheckboxChangeYear(
                                        option.key
                                      )
                                    }
                                  />
                                  <span className="form-check-sign"></span>
                                  {option.label}
                                </Label>
                              </FormGroup>
                            ))}
                          </CardBody>
                        </Collapse>
                      </Card>
                    </CardBody>
                  </div>
                </Col>
                <Col md="9">
                  <PaginationAlternative data={filteredData} />
                </Col>
              </Row>
              <Row>
                
              </Row>
            </Container>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Ecommerce;
