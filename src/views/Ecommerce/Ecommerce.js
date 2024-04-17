import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
//zustand store
import { filtersStore } from "../../context/filters.store";
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

function filterAndMapOptions(data, key) {
  return Array.from(new Set(data.map((el) => (el[key] ? el[key] : null))))
    .filter((option) => option !== undefined && option !== null)
    .map((option) =>
      key === "Año"
        ? { key: option, label: option }
        : { key: option.trim(), label: option }
    );
}

function Ecommerce() {
  const { filterFields } = filtersStore();
  const { t } = useTranslation("global");
  let { url, request, busqueda } = useParams();
  const [collapses, setCollapses] = useState([0]);
  const [filters, setFilters] = useState({});
  url = `${url}/${busqueda}`;
  request = request.replace(/-/g, "/");
  const title = url.replace(/-/g, " ");
  const subtitle = request.replace(/\+/g, " ");
  
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
  
  const {
    data: dt,
    isError,
    isLoading,
  } = useGetBusquedaQuery({ url, request });

  const changeCollapse = (collapse) => {
    if (collapses.includes(collapse)) {
      setCollapses(collapses.filter((prop) => prop !== collapse));
    } else {
      setCollapses([...collapses, collapse]);
    }
  };

  const handleCheckboxChange = (value,field,filterKey) => {
    const updatedValue = [...filterFields[field]];
    const index = updatedValue.indexOf(value);
    if (index === -1) {
      updatedValue.push(value);
    } else {
      updatedValue.splice(index, 1);
    }
    filterFields.setField(field, updatedValue);
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterKey]: updatedValue.join(","),
    }));
  };

  const handleResetFilters = () => {
    filterFields.resetValues()
    setFilters({
      area: "",
      disciplina: "",
      campo: "",
      year: "",
      idioma: "",
      pais: "",
    });
  };

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

  const filterOptionsArea = filterAndMapOptions(dt.resultados, "Área");
  const filterOptionsDisciplina = filterAndMapOptions(dt.resultados,"Disciplina");
  const filterOptionsCampo = filterAndMapOptions(dt.resultados, "Campo");
  const filterOptionsYear = filterAndMapOptions(dt.resultados, "Año");
  const filterOptionsIdioma = filterAndMapOptions(dt.resultados, "Idioma");
  const filterOptionsPais = filterAndMapOptions(
    dt.resultados,
    "País de la Publicación"
  );

  const filteredData = dt.resultados.filter((item) => {
    return (
      (!filters.area || filters.area.includes(item["Área"])) &&
      (!filters.disciplina ||
        filters.disciplina.includes(item["Disciplina"])) &&
      (!filters.campo || filters.campo.includes(item["Campo"])) &&
      (!filters.clasificacion ||
        filters.clasificacion.includes(item["Clasificación"])) &&
      (!filters.pais ||
        filters.pais.includes(item["País de la Publicación"])) &&
      (!filters.tipo ||
        filters.disciplina.includes(item["Tipo de Documento"])) &&
      (!filters.idioma || filters.idioma.includes(item["Idioma"])) &&
      (!filters.year || filters.year.includes(item["Año"]))
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
                {t("Coincidences.Coincidences")} : {cantidadFiltrada}
              </h2>
              <Row>
                <Col md="2">
                  <h2>{t("Coincidences.Filters.Filter")}</h2>
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
                              {t("Coincidences.Filters.FilterArea")}{" "}
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
                                    checked={filterFields.selectedArea.includes(
                                      option.key
                                    )}
                                    onChange={() =>
                                      handleCheckboxChange(option.key,"selectedArea","area")
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
                              {t("Coincidences.Filters.FilterDiscipline")}{" "}
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
                                    checked={filterFields.selectedDisciplina.includes(
                                      option.key
                                    )}
                                    onChange={() =>
                                      handleCheckboxChange(option.key, "selectedDisciplina","disciplina")
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
                              {t("Coincidences.Filters.FilterFieldStudy")}{" "}
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
                                    checked={filterFields.selectedCampo.includes(
                                      option.key
                                    )}
                                    onChange={() =>
                                      handleCheckboxChange(option.key, "selectedCampo", "campo")
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
                              {t("Coincidences.Filters.FilterCountry")}{" "}
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
                                    checked={filterFields.selectedPais.includes(
                                      option.key
                                    )}
                                    onChange={() =>
                                      handleCheckboxChange(option.key, "selectedPais","pais")
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
                              {t("Coincidences.Filters.FilterLanguage")}{" "}
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
                                    checked={filterFields.selectedIdiomas.includes(
                                      option.key
                                    )}
                                    onChange={() =>
                                      handleCheckboxChange(option.key,"selectedIdiomas","idioma")
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
                              {t("Coincidences.Filters.FilterYear")}{" "}
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
                                    checked={filterFields[
                                      "selectedAño"
                                    ].includes(option.key)}
                                    onChange={() =>
                                      handleCheckboxChange(option.key,"selectedAño", "year")
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
                    type="submit"
                    onClick={() => handleResetFilters()}
                  >
                    {t("Coincidences.Filters.ClearFilters")}
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
