//React
import React from "react";
//zustand store
import { useApiRequestStore } from "../../context/apiRequest.store";
//Mui
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
//translations
import { useTranslation } from "react-i18next";
//self components
import { WorldMap } from "../../components/worldMap/WorldMap";
import { Charts } from "components/charts/Charts";
import { Pagination } from "components/pagination/Pagination";
//json maps
import country from "../../assets/maps/world.geo.json";
import polity from "../../assets/maps/jalisco.geo.json";
interface Props {
  redirectTo: string;
}

export const Visualitations = ({ redirectTo }: Props) => {
  const data = useApiRequestStore((state) => state.data);
  const { t } = useTranslation("global");
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "0.5rem",
          }}
        >
          <Typography
            variant="h3"
            gutterBottom
            sx={{ display: "flex", alignItems: "center", gap: "1rem" }}
          >
            {t("indexMapsLanguage.mapTitleMunicipality")}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Charts
            YLabels={data.graficosMunicipios.labels.YLabels}
            XLabels={data.graficosMunicipios.labels.XLabels}
          />
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <Grid item xs={12} md={6}>
          <div className="wrapper">
            <WorldMap
              data={polity}
              countriesData={data.graficosMunicipios.finalResult}
              url={"busqueda/municipio"}
            />
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Pagination
            url={"busqueda/municipio"}
            data={data.graficosMunicipios.finalResult}
          />
        </Grid>
      </Grid>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "0.5rem",
          }}
        >
          <Typography
            variant="h3"
            gutterBottom
            sx={{ display: "flex", alignItems: "center", gap: "1rem" }}
          >
            {t("indexMapsLanguage.mapTitleCountry")}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Charts
            YLabels={data.graficosPaises.labels.YLabels}
            XLabels={data.graficosPaises.labels.XLabels}
          />
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <Grid item xs={12} md={6}>
          <div className="wrapper">
            <WorldMap
              data={country}
              countriesData={data.graficosPaises.finalResult}
              url={"busqueda/Pais-de-publicacion"}
            />
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Pagination url={"busqueda/Pais-de-publicacion"} data={data.graficosPaises.finalResult} />
        </Grid>
      </Grid>
    </>
  );
};
