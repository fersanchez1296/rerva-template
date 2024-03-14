import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
//translations
import { useTranslation } from "react-i18next";
import {
  tableTitlesV1,
  tableTitlesV2,
  tableTitlesV3,
  tableTitlesV4,
} from "../../utilities/tableTitles/tableTitles";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Collapse,
  Label,
  FormGroup,
  Input,
  Container,
  Row,
  Col,
} from "reactstrap";
import ScrollTransparentNavbarSections from "components/Navbars/ScrollTransparentNavbarSections.js";
import EcommerceHeader from "components/Headers/EcommerceHeader.js";
import { PaginationAlternative } from "../../components/pagination/PaginationAlternative";
import FooterBlackSections from "components/Footers/FooterBlackSections.js";
import { ServerError } from "../../components/serverError/ServerError";
import { Spiner } from "../../components/spiner/Spiner";
import { useGetBusquedaQuery } from "../../api/api.slice";

function Ecommerce() {
  const { t, i18n } = useTranslation("global");
  let { url, request, busqueda } = useParams();
  url = `${url}/${busqueda}`;
  request = request.replace(/-/g, "/");
  const title = url.replace(/-/g, " ");
  const subtitle = request.replace(/\+/g, " ");
  const [selectedArea, setSelectedArea] = useState("");
  const [selectedDisciplina, setSelectedDisciplina] = useState("");
  const [selectedCampo, setSelectedCampo] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedIdiomas, setSelectedIdiomas] = useState([]);
  const [selectedPais, setSelectedPais] = useState("");
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

  const handleCheckboxChangeYear = (year) => {
    setSelectedYear(selectedYear === year ? null : year);
    setFilters((prevFilters) => ({
      ...prevFilters,
      year: prevFilters.year === year ? "" : year,
    }));
  };

  const handleCheckboxChangeIdioma = (idioma) => {
    const updatedIdiomas = [...selectedIdiomas];
    const index = updatedIdiomas.indexOf(idioma);
    if (index === -1) {
      updatedIdiomas.push(idioma);
    } else {
      updatedIdiomas.splice(index, 1);
    }
    setSelectedIdiomas(updatedIdiomas);

    setFilters((prevFilters) => ({
      ...prevFilters,
      idioma: updatedIdiomas.join(","),
    }));
  };

  const handleCheckboxChangePais = (pais) => {
    setSelectedPais(selectedPais === pais ? null : pais);
    setFilters((prevFilters) => ({
      ...prevFilters,
      pais: prevFilters.pais === pais ? "" : pais,
    }));
  };

  const handleResetFilters = () => {
      setSelectedArea("");
      setSelectedDisciplina("");
      setSelectedCampo("");
      setSelectedYear("");
      setSelectedIdiomas([]);
      setSelectedPais("");
    
      setFilters({
        areaEstudio: "",
        disciplina: "",
        campo: "",
        clasificacion: "",
        anio: "",
        idioma: "",
        pais: "",
        tipo: "",
      });
  };

  const {
    data: dt,
    isError,
    isLoading,
    error,
  } = useGetBusquedaQuery({ url, request });

  useEffect(() => {
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
        <ServerError />
      </>
    );
  }
  const filterOptionsArea = Array.from(
    new Set(dt.resultados.map((el) => el["Área"]))
  )
    .filter((area) => area !== undefined && area !== null)
    .map((area) => ({ key: area.trim(), label: area }));

  const filterOptionsDisciplina = Array.from(
    new Set(dt.resultados.map((el) => el["Disciplina"]))
  )
    .filter((disciplina) => disciplina !== undefined && disciplina !== null)
    .map((disciplina) => ({ key: disciplina.trim(), label: disciplina }));

  const filterOptionsCampo = Array.from(
    new Set(dt.resultados.map((el) => el["Campo"]))
  )
    .filter((campo) => campo !== undefined && campo !== null)
    .map((campo) => ({ key: campo.trim(), label: campo }));

  const filterOptionsYear = Array.from(
    new Set(dt.resultados.map((el) => el["Año"]))
  )
    .filter((year) => year !== undefined && year !== null)
    .map((year) => ({ key: year, label: year }))
    .sort((a, b) => b.key - a.key);

  const filterOptionsIdioma = Array.from(
    new Set(dt.resultados.map((el) => (el["Idioma"] ? el["Idioma"][0] : null)))
  )
    .filter((idioma) => idioma !== undefined && idioma !== null)
    .map((idioma) => ({ key: idioma.trim(), label: idioma }));

  const filterOptionsPais = Array.from(
    new Set(dt.resultados.map((el) => el["País de la Publicación"]))
  )
    .filter((pais) => pais !== undefined && pais !== null)
    .map((pais) => ({ key: pais.trim(), label: pais }));

  const filteredData = dt.resultados.filter((item) => {
    return (
      (!selectedArea || item["Área"] === selectedArea) &&
      (!filters.disciplina || item["Disciplina"] === filters.disciplina) &&
      (!filters.campo || item["Campo"] === filters.campo) &&
      (!filters.clasificacion ||
        item["Clasificación"] === filters.clasificacion) &&
      (!filters.pais || item["País de la Publicación"] === filters.pais) &&
      (!filters.tipo || item["Tipo de documento"] === filters.tipo) &&
      (!filters.idioma || filters.idioma.includes(item["Idioma"])) && // Modificación aquí
      (!filters.pClave || item["Palabras Clave"] === filters.pClave) &&
      (!filters.year || item["Año"] === filters.year)
    );
  });

  const cantidadTotal = dt.resultados.length;
  const cantidadFiltrada = filteredData.length;
  return (
    <>
      <ScrollTransparentNavbarSections />
      <div className="wrapper">
        <EcommerceHeader
          title={title}
          subtitle={subtitle}
          cantidad={cantidadTotal}
          data={dt.dt}
        />
        <div className="main">
          <div className="section">
            <Container>
              <h2 className="section-title">
                Coincidencias : {cantidadFiltrada}
              </h2>
              <Row>
                <Col md="2">
                  <h2>FILTROS</h2>
                  <hr></hr>
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
                                    checked={selectedIdiomas.includes(
                                      option.key
                                    )}
                                    onChange={() =>
                                      handleCheckboxChangeIdioma(option.key)
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
                                    checked={selectedYear === option.key}
                                    onChange={() =>
                                      handleCheckboxChangeYear(option.key)
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
                  <hr></hr>
                  <Button
                    className="btn-raised btn-round"
                    color="info"
                    defaultValue="Contact Us"
                    type="submit"
                    onClick={() => handleResetFilters()}
                  >
                    Eliminar filtros
                  </Button>
                </Col>
                <Col md="10">
                  <PaginationAlternative
                    data={filteredData}
                    tableTitles={
                      busqueda === "Revista"
                        ? tableTitlesV4
                        : busqueda === "Autor"
                        ? tableTitlesV2
                        : busqueda === "General" || "Area-de-conocimiento"
                        ? tableTitlesV1
                        : tableTitlesV3
                    }
                  />
                </Col>
              </Row>
              <Row></Row>
            </Container>
          </div>
        </div>
        <FooterBlackSections />
      </div>
    </>
  );
}

export default Ecommerce;
