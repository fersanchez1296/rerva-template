import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Row,
  Col,
} from "reactstrap";

interface Props {
  data: any;
}

export const CardWithIcons = ({ data }: Props) => {
  const [activeTabs, setActiveTabs] = React.useState(data.map(() => "1"));

  const gridStyles = {
    display: "flex",
    justifyContent: "flex-start",
    textAlign: "justify",
  };

  const handleTabClick = (index, tab) => {
    const newActiveTabs = [...activeTabs];
    newActiveTabs[index] = tab;
    setActiveTabs(newActiveTabs);
  };
  return (
    <>
      <div className="section section-tabs bg-light">
        <Row>
          {data.map((el, index) => {
            return (
              <Col className="ml-auto mr-auto" md="10" xl="6">
                <Card className="min-vh-100">
                  <CardHeader>
                    <Nav
                      className="nav-tabs-neutral justify-content-center"
                      data-background-color="blue"
                      role="tablist"
                      tabs
                    >
                      <NavItem>
                        <NavLink
                          className={activeTabs[index] === "1" ? "active" : ""}
                          href="#pablo"
                          onClick={(e) => {
                            e.preventDefault();
                            handleTabClick(index, "1");
                          }}
                        >
                          General
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={activeTabs[index] === "2" ? "active" : ""}
                          href="#pablo"
                          onClick={(e) => {
                            e.preventDefault();
                            handleTabClick(index, "2");
                          }}
                        >
                          Autores
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={activeTabs[index] === "3" ? "active" : ""}
                          href="#pablo"
                          onClick={(e) => {
                            e.preventDefault();
                            handleTabClick(index, "3");
                          }}
                        >
                          Temática
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={activeTabs[index] === "4" ? "active" : ""}
                          href="#pablo"
                          onClick={(e) => {
                            e.preventDefault();
                            handleTabClick(index, "4");
                          }}
                        >
                          Palabras Cláve
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        {el["Link de acceso"].includes("https://") ||
                        el["Link de acceso"].includes("http://") ? (
                          <NavLink
                            className={
                              activeTabs[index] === "5" ? "active" : ""
                            }
                            href={el["Link de acceso"]}
                            target="blank"
                          >
                            Ver Documento
                          </NavLink>
                        ) : (
                          <NavLink
                            className={
                              activeTabs[index] === "5" ? "active" : ""
                            }
                            href="#pablo"
                            onClick={(e) => {
                              e.preventDefault();
                              handleTabClick(index, "5");
                            }}
                          >
                            Información
                          </NavLink>
                        )}
                      </NavItem>
                    </Nav>
                  </CardHeader>
                  <CardBody>
                    <TabContent
                      className="text-center"
                      activeTab={"tabs" + activeTabs[index]}
                    >
                      <TabPane tabId="tabs1">
                        <Grid container spacing={2}>
                          <Grid xs={12} sx={gridStyles}>
                            <Typography variant="subtitle2" gutterBottom>
                              <b>Título:</b> {el["Título"]}
                            </Typography>
                          </Grid>
                          <Grid xs={12} sx={gridStyles}>
                            <Typography variant="subtitle2" gutterBottom>
                              <b>Año:</b> {el["Año"]}
                            </Typography>
                          </Grid>
                          <Grid xs={12} sx={gridStyles}>
                            <Typography variant="subtitle2" gutterBottom>
                              <b>Idioma:</b> {el["Idioma"]}
                            </Typography>
                          </Grid>
                          <Grid xs={12} sx={gridStyles}>
                            <Typography variant="subtitle2" gutterBottom>
                              <b>País:</b> {el["País de la Publicación"]}
                            </Typography>
                          </Grid>
                          <Grid xs={12} sx={gridStyles}>
                            <Typography variant="subtitle2" gutterBottom>
                              <b>Município de estudio:</b>{" "}
                              {el["Municipios de estudio"]}
                            </Typography>
                          </Grid>
                          <Grid xs={12} sx={gridStyles}>
                            <Typography variant="subtitle2" gutterBottom>
                              <b>Típo de documento:</b>{" "}
                              {el["Tipo de documento"]}
                            </Typography>
                          </Grid>
                          <Grid xs={12} sx={gridStyles}>
                            <Typography variant="subtitle2" gutterBottom>
                              <b>Revista o libro:</b>{" "}
                              {el["Nombre de la revista/libro"]}
                            </Typography>
                          </Grid>
                          <Grid xs={12} sx={gridStyles}>
                            <Typography variant="subtitle2" gutterBottom>
                              <b>Institución:</b> {el["Tesis/ Institución"]}
                            </Typography>
                          </Grid>
                          <Grid xs={12} sx={gridStyles}>
                            <Typography variant="subtitle2" gutterBottom>
                              <b>Número de páginas:</b>{" "}
                              {el["Número de páginas"]}
                            </Typography>
                          </Grid>
                        </Grid>
                      </TabPane>
                      <TabPane tabId="tabs2">
                        <Grid container spacing={2}>
                          <Grid xs={12}>
                            <Typography variant="subtitle2" gutterBottom>
                              <b>Tipo de autoria:</b> {el["Tipo de autoría"]}
                            </Typography>
                          </Grid>
                          <Grid xs={12}>
                            <Typography variant="subtitle2" gutterBottom>
                              <b>Autor(es):</b> {el["Autores"]}
                            </Typography>
                          </Grid>
                        </Grid>
                      </TabPane>
                      <TabPane tabId="tabs3">
                        <Grid container spacing={2}>
                          <Grid xs={12}>
                            <Typography variant="subtitle2" gutterBottom>
                              <b>Área:</b> {el["Área"]}
                            </Typography>
                          </Grid>
                          <Grid xs={12}>
                            <Typography variant="subtitle2" gutterBottom>
                              <b>Campo:</b> {el["Campo"]}
                            </Typography>
                          </Grid>
                          <Grid xs={12}>
                            <Typography variant="subtitle2" gutterBottom>
                              <b>Disciplina:</b> {el["Disciplina "]}
                            </Typography>
                          </Grid>
                          <Grid xs={12}>
                            <Typography variant="subtitle2" gutterBottom>
                              <b>Temática:</b> {el["Temática"]}
                            </Typography>
                          </Grid>
                          <Grid xs={12}>
                            <Typography variant="subtitle2" gutterBottom>
                              <b>Editorial:</b> {el["Libros/Editorial"]}
                            </Typography>
                          </Grid>
                          <Grid xs={12}>
                            <Typography variant="subtitle2" gutterBottom>
                              <b>Clasificación:</b> {el["Clasificación"]}
                            </Typography>
                          </Grid>
                        </Grid>
                      </TabPane>
                      <TabPane tabId="tabs4">
                        <p>{el["Palabras Clave"]}</p>
                      </TabPane>
                      {el["Link de acceso"].includes("https") ? null : (
                        <TabPane tabId="tabs5">
                          <p>
                            {el["Link de acceso"] === "No aplica"
                              ? "Lo sentimos, no tenemos información de este documento"
                              : el["Link de acceso"]}
                          </p>
                        </TabPane>
                      )}
                    </TabContent>
                  </CardBody>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
    </>
  );
};
