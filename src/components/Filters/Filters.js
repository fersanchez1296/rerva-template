import React from "react";

const Filters = () => {
  const [selectedArea, setSelectedArea] = React.useState([]);
  const [selectedDisciplina, setSelectedDisciplina] = React.useState([]);
  const [selectedCampo, setSelectedCampo] = React.useState([]);
  const [selectedYear, setSelectedYear] = React.useState([]);
  const [selectedIdiomas, setSelectedIdiomas] = React.useState([]);
  const [selectedPais, setSelectedPais] = React.useState([]);
  const [filters, setFilters] = useState({});

  const handleCheckboxChange = (area) => {
    const updatedAreas = [...selectedArea];
    const index = updatedAreas.indexOf(area);
    if (index === -1) {
      updatedAreas.push(area);
    } else {
      updatedAreas.splice(index, 1);
    }
    setSelectedArea(updatedAreas);

    setFilters((prevFilters) => ({
      ...prevFilters,
      area: updatedAreas.join(","),
    }));
  };

  const handleCheckboxChangeDisciplina = (disciplina) => {
    const updatedDisciplinas = [...selectedDisciplina];
    const index = updatedDisciplinas.indexOf(disciplina);
    if (index === -1) {
      updatedDisciplinas.push(disciplina);
    } else {
      updatedDisciplinas.splice(index, 1);
    }
    setSelectedDisciplina(updatedDisciplinas);

    setFilters((prevFilters) => ({
      ...prevFilters,
      disciplina: updatedDisciplinas.join(","),
    }));
  };

  const handleCheckboxChangeCampo = (campo) => {
    const updatedCampo = [...selectedCampo];
    const index = updatedCampo.indexOf(campo);
    if (index === -1) {
      updatedCampo.push(campo);
    } else {
      updatedCampo.splice(index, 1);
    }
    setSelectedCampo(updatedCampo);

    setFilters((prevFilters) => ({
      ...prevFilters,
      campo: updatedCampo.join(","),
    }));
  };

  const handleCheckboxChangeYear = (year) => {
    const updatedYear = [...selectedYear];
    const index = updatedYear.indexOf(year);
    if (index === -1) {
      updatedYear.push(year);
    } else {
      updatedYear.splice(index, 1);
    }
    setSelectedYear(updatedYear);

    setFilters((prevFilters) => ({
      ...prevFilters,
      year: updatedYear.join(","),
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
    const updatedPais = [...selectedPais];
    const index = updatedPais.indexOf(pais);
    if (index === -1) {
      updatedPais.push(pais);
    } else {
      updatedPais.splice(index, 1);
    }
    setSelectedPais(updatedPais);

    setFilters((prevFilters) => ({
      ...prevFilters,
      pais: updatedPais.join(","),
    }));
  };

  const handleResetFilters = () => {
    setSelectedArea([]);
    setSelectedDisciplina([]);
    setSelectedCampo([]);
    setSelectedYear([]);
    setSelectedIdiomas([]);
    setSelectedPais([]);

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

  const filterOptionsArea = Array.from(
    new Set(dt.resultados.map((el) => (el["Área"] ? el["Área"] : null)))
  )
    .filter((area) => area !== undefined && area !== null)
    .map((area) => ({ key: area.trim(), label: area }));

  const filterOptionsDisciplina = Array.from(
    new Set(dt.resultados.map((el) => (el["Disciplina"] ? el["Disciplina"] : null)))
  )
    .filter((disciplina) => disciplina !== undefined && disciplina !== null)
    .map((disciplina) => ({ key: disciplina.trim(), label: disciplina }));

  const filterOptionsCampo = Array.from(
    new Set(dt.resultados.map((el) => (el["Campo"] ? el["Campo"] : null)))
  )
    .filter((campo) => campo !== undefined && campo !== null)
    .map((campo) => ({ key: campo.trim(), label: campo }));

  const filterOptionsYear = Array.from(
  new Set(dt.resultados.map((el) => (el["Año"] ? el["Año"] : null)))
  )
    .filter((year) => year !== undefined && year !== null)
    .map((year) => ({ key: year, label: year }));

  const filterOptionsIdioma = Array.from(
    new Set(dt.resultados.map((el) => (el["Idioma"] ? el["Idioma"] : null)))
  )
    .filter((idioma) => idioma !== undefined && idioma !== null)
    .map((idioma) => ({ key: idioma.trim(), label: idioma }));

  const filterOptionsPais = Array.from(
    new Set(dt.resultados.map((el) => (el["País de la Publicación"] ? el["País de la Publicación"] : null)))
  )
    .filter((pais) => pais !== undefined && pais !== null)
    .map((pais) => ({ key: pais.trim(), label: pais }));

  const filteredData = dt.resultados.filter((item) => {
    return (
      (!filters.area || filters.area.includes(item["Área"])) &&
      (!filters.disciplina || filters.disciplina.includes(item["Disciplina"])) &&
      (!filters.campo || filters.campo.includes(item["Campo"])) &&
      (!filters.clasificacion || filters.clasificacion.includes(item["Clasificación"])) &&
      (!filters.pais || filters.pais.includes(item["País de la Publicación"])) &&
      (!filters.tipo || filters.disciplina.includes(item["Tipo de Documento"])) &&
      (!filters.idioma || filters.idioma.includes(item["Idioma"])) &&
      (!filters.year || filters.year.includes(item["Año"]))
    );
  });
  return <div>Filters</div>;
};

export default Filters;
