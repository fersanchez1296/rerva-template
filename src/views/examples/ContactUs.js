import React from "react";
// react plugin used to create DropdownMenu for selecting items
import Select from "react-select";
import {selectPaises} from '../../utilities/selectPaises.utilities'
import {selectMunicipio} from '../../utilities/selectMunicipios.utilities'
import {tipoDocumento} from '../../utilities/selectTipoDocumento.utilities'
import {selectArea} from '../../utilities/selectAreas.utilities'
import {selectCampo} from '../../utilities/selectCampos.utilities'
import {selectDisciplina} from '../../utilities/selectDisciplina.utilities'
import {selectClasificacion} from '../../utilities/selectClasificacion.utilities'
import generateYearList from '../../utilities/selectYears.utilities'
// reactstrap components
import {
  Button,
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
import ScrollTransparentNavbar from "components/Navbars/ScrollTransparentNavbar.js";
import ContactUsHeader from "components/Headers/ContactUsHeader.js";
import Footer from "components/Footers/Footer.js";


function ContactUs() {
  const [nameFocus, setNameFocus] = React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false);
  const [numberFocus, setNumberFocus] = React.useState(false);
  const [autoriaSelect, setAutoriaSelect] = React.useState(null);
  const [paisSelect, setPaisSelect] = React.useState(null);
  const [paisAutorSelect, setPaisAutorSelect] = React.useState(null);
  const [municipioSelect, setMunicipioSelect] = React.useState(null);
  const [tipoDocumentoSelect, setTipoDocumentoSelect] = React.useState(null);
  const [areaSelect, setAreaSelect] = React.useState(null);
  const [campoSelect, setCampoSelect] = React.useState(null);
  const [disciplinaSelect, setDisciplinaSelect] = React.useState(null);
  const [clasificacionSelect, setClasificacionSelect] = React.useState(null);
  const [yearSelect, setYearSelect] = React.useState(null);
  const years = generateYearList();
  React.useEffect(() => {
    document.body.classList.add("contact-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("contact-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  return (
    <>
      <ScrollTransparentNavbar />
      <div className="wrapper">
        <ContactUsHeader />
        <div className="main">
          <div className="contact-content">
            <Container>
              <Row>
                <Col className="ml-auto mr-auto" md="12">
                  <h2 className="title">Colabora con nosotros</h2>
                  <p className="">
                    Por medio de los siguiente campos puedes hacer que 
                    tu trabajo referente a la región de los valles
                    sea visible en esta plataforma. <br></br>
                    <br></br>
                  </p>
                  <Form id="contact-form" method="post" role="form">
                  <h4 className="title">Datos del autor o  autores:</h4>
                  <label>Aportación:</label>
                    <Select
                      className="react-select"
                      classNamePrefix="react-select"
                      name=""
                      onChange={(value) => setAutoriaSelect(value)}
                      options={[
                        { value: "1", label: "Individual" },
                        { value: "2", label: "Coautoria" },
                      ]}
                      placeholder="Selecciona el tipo de autoria"
                      value={autoriaSelect}
                    ></Select>
                    <h6 className="title">Si el documento está escrito en cooautoria, 
                    en el campo nombre, separe cada autor mediante una coma.</h6>
                    <label>Nombre :</label>
                    <InputGroup
                      className={nameFocus ? "input-group-focus" : ""}
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons users_circle-08"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        aria-label="Nombre..."
                        autoComplete="name"
                        placeholder="Nombre..."
                        type="text"
                        onFocus={() => setNameFocus(true)}
                        onBlur={() => setNameFocus(false)}
                      ></Input>
                    </InputGroup>
                    <label>Institución :</label>
                    <InputGroup
                      className={emailFocus ? "input-group-focus" : ""}
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons travel_istanbul"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        aria-label="institucion"
                        autoComplete="institucion"
                        placeholder="Institución"
                        type="email"
                        onFocus={() => setEmailFocus(true)}
                        onBlur={() => setEmailFocus(false)}
                      ></Input>
                    </InputGroup>
                    <label>País de origen :</label>
                    <Select
                      className="react-select"
                      classNamePrefix="react-select"
                      name="pais de origen autor"
                      onChange={(value) => setPaisAutorSelect(value)}
                      options={selectPaises.map(pais => ({
                        label: pais.label,
                        value: pais.value
                      }))}
                      placeholder="Selecciona el país de origen del autor"
                      value={paisAutorSelect}
                    ></Select>

                    <h4 className="title">Datos del documento:</h4>
                    <label>Título:</label>
                    <InputGroup
                      className={nameFocus ? "input-group-focus" : ""}
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons text_caps-small"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        aria-label="Nombre..."
                        autoComplete="name"
                        placeholder="Nombre..."
                        type="text"
                        onFocus={() => setNameFocus(true)}
                        onBlur={() => setNameFocus(false)}
                      ></Input>
                    </InputGroup>
                    <label>Link del documento:</label>
                    <InputGroup
                      className={nameFocus ? "input-group-focus" : ""}
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons shopping_tag-content"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        aria-label="Link"
                        autoComplete="link"
                        placeholder="Link del documento"
                        type="text"
                        onFocus={() => setNameFocus(true)}
                        onBlur={() => setNameFocus(false)}
                      ></Input>
                    </InputGroup>
                    <label>Año de publicación:</label>
                    <Select
                      className="react-select"
                      classNamePrefix="react-select"
                      name="año"
                      onChange={(value) => setYearSelect(value)}
                      options={years.map(year => ({
                        label: year.label,
                        value: year.value
                      }))}
                      placeholder="Selecciona el año de publicación"
                      value={yearSelect}
                    ></Select>
                    <label>Idioma:</label>
                    <InputGroup
                      className={numberFocus ? "input-group-focus" : ""}
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons location_world"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        autoComplete="idioma"
                        placeholder="Idioma"
                        type="text"
                        
                      ></Input>
                    </InputGroup>
                    <label>País de publicación:</label>
                    <Select
                      className="react-select"
                      classNamePrefix="react-select"
                      name="pais"
                      onChange={(value) => setPaisSelect(value)}
                      options={selectPaises.map(pais => ({
                        label: pais.label,
                        value: pais.value
                      }))}
                      placeholder="Selecciona el país de publicación"
                      value={paisSelect}
                    ></Select>
                    <label>Municipio de Estudio:</label>
                    <Select
                      className="react-select"
                      classNamePrefix="react-select"
                      name="municipio"
                      onChange={(value) => setMunicipioSelect(value)}
                      options={selectMunicipio.map(municipio => ({
                        label: municipio.label,
                        value: municipio.value
                      }))}
                      placeholder="Selecciona el muncipio de estudio"
                      value={municipioSelect}
                    ></Select>
                    <label>Tipo de documento:</label>
                    <Select
                      className="react-select"
                      classNamePrefix="react-select"
                      name="tipo de documento"
                      onChange={(value) => setTipoDocumentoSelect(value)}
                      options={tipoDocumento.map(tipo => ({
                        label: tipo.label,
                        value: tipo.value
                      }))}
                      placeholder="Selecciona el tipo de documento"
                      value={tipoDocumentoSelect}
                    ></Select>
                    <label>Revista o libro:</label>
                    <InputGroup
                      className={numberFocus ? "input-group-focus" : ""}
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons education_agenda-bookmark"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        autoComplete="revista"
                        placeholder="Revista o libro"
                        type="text"
                        onFocus={() => setNumberFocus(true)}
                        onBlur={() => setNumberFocus(false)}
                      ></Input>
                    </InputGroup>
                    <label>Compilador,editor,coordinador o libro:</label>
                    <InputGroup
                      className={numberFocus ? "input-group-focus" : ""}
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons travel_info"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        autoComplete="compilador"
                        placeholder="Compilador/editor/coordinador/libro"
                        type="text"
                        onFocus={() => setNumberFocus(true)}
                        onBlur={() => setNumberFocus(false)}
                      ></Input>
                    </InputGroup>
                    <label>Institución:</label>
                    <InputGroup
                      className={numberFocus ? "input-group-focus" : ""}
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons travel_istanbul"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        autoComplete="institucion"
                        placeholder="Institución"
                        type="text"
                        onFocus={() => setNumberFocus(true)}
                        onBlur={() => setNumberFocus(false)}
                      ></Input>
                    </InputGroup>
                    <label>Número de páginas:</label>
                    <InputGroup
                      className={numberFocus ? "input-group-focus" : ""}
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons files_single-copy-04"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        autoComplete="numero paginas"
                        placeholder="Número de páginas (100-130)"
                        type="text"
                        onFocus={() => setNumberFocus(true)}
                        onBlur={() => setNumberFocus(false)}
                      ></Input>
                    </InputGroup>
                    <label>Palabras cláve:</label>
                    <InputGroup
                      className={numberFocus ? "input-group-focus" : ""}
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons text_bold"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        autoComplete="palabras clave"
                        placeholder="Palabras clave (desarrollo,cultura)"
                        type="text"
                        onFocus={() => setNumberFocus(true)}
                        onBlur={() => setNumberFocus(false)}
                      ></Input>
                    </InputGroup>

                  <h4 className="title">Temática:</h4>
                  <label>Área:</label>
                    <Select
                      className="react-select"
                      classNamePrefix="react-select"
                      name="area"
                      onChange={(value) => setAreaSelect(value)}
                      options={selectArea.map(area => ({
                        label: area.label,
                        value: area.value
                      }))}
                      placeholder="Selecciona el área de estudio"
                      value={areaSelect}
                    ></Select>
                    <label>Campo:</label>
                    <Select
                      className="react-select"
                      classNamePrefix="react-select"
                      name=""
                      onChange={(value) => setCampoSelect(value)}
                      options={selectCampo.map(campo => ({
                        label: campo.label,
                        value: campo.value
                      }))}
                      placeholder="Selecciona el campo de estudio"
                      value={campoSelect}
                    ></Select>
                    <label>Disciplina:</label>
                    <Select
                      className="react-select"
                      classNamePrefix="react-select"
                      name="disciplina"
                      onChange={(value) => setDisciplinaSelect(value)}
                      options={selectDisciplina.map(disciplina => ({
                        label: disciplina.label,
                        value: disciplina.value
                      }))}
                      placeholder="Selecciona la disciplina de estudio"
                      value={disciplinaSelect}
                    ></Select>
                    <label>Temática:</label>
                    <InputGroup
                      className={numberFocus ? "input-group-focus" : ""}
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons education_paper"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        autoComplete="tematica"
                        placeholder="Ingresa la temática del documento"
                        type="text"
                        onFocus={() => setNumberFocus(true)}
                        onBlur={() => setNumberFocus(false)}
                      ></Input>
                    </InputGroup>
                    <label>Editorial:</label>
                    <InputGroup
                      className={numberFocus ? "input-group-focus" : ""}
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons business_bulb-63"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        autoComplete="number"
                        placeholder="Ingresa la editorial"
                        type="text"
                        onFocus={() => setNumberFocus(true)}
                        onBlur={() => setNumberFocus(false)}
                      ></Input>
                    </InputGroup>
                    <label>Clasificación:</label>
                    <Select
                      className="react-select"
                      classNamePrefix="react-select"
                      name=""
                      onChange={(value) => setClasificacionSelect(value)}
                      options={selectClasificacion.map(clasificacion => ({
                        label: clasificacion.label,
                        value: clasificacion.value
                      }))}
                      placeholder="Selecciona la clasificación"
                      value={clasificacionSelect}
                    ></Select>

                    <div className="submit text-center">
                      <Button
                        className="btn-raised btn-round"
                        color="info"
                        defaultValue="Contact Us"
                        type="submit"
                      >
                        Colaborar
                      </Button>
                    </div>
                  </Form>
                </Col>
                
              </Row>
            </Container>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default ContactUs;
