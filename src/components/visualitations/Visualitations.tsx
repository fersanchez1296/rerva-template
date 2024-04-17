//React
import React from "react";
//Mui
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
//translations
import { useTranslation } from "react-i18next";
//API
import { useGetVisualitationsDataQuery } from "../../api/api.slice.js";
//self components
import { WorldMap } from "../../components/worldMap/WorldMap";
import { ServerError } from "../../components/serverError/ServerError";
import { Spiner } from "../../components/spiner/Spiner";
import { SnackBar } from "../../components/snackBar/SnackBar";
import { Charts } from "components/charts/Charts";
import { Pagination } from "components/pagination/Pagination";

interface Props {
  title: string;
  endpoint: string;
  redirectTo: string;
  mapa: any;
}

export const Visualitations = ({
  title,
  redirectTo,
  endpoint,
  mapa,
}: Props) => {
  const { t } = useTranslation("global");
  const {
    data: dt,
    isError,
    isLoading,
    error,
  } = useGetVisualitationsDataQuery(endpoint);
  if (isLoading)
    return (
      <>
        <Spiner showSpiner />
      </>
    );

  if (isError)
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
  return (
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
          {title === "Municipio"
            ? t("indexMapsLanguage.mapTitleMunicipality")
            : t("indexMapsLanguage.mapTitleCountry")}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Divider />
      </Grid>
      <Grid
        item
        xs={12}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Charts YLabels={dt.labels.YLabels} XLabels={dt.labels.XLabels} />
      </Grid>
      <Grid item xs={12}>
        <Divider />
      </Grid>
      <Grid item xs={12} md={6}>
        <div className="wrapper">
          <WorldMap data={mapa} countriesData={dt.finalResult} url={redirectTo} />
        </div>
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Pagination url={redirectTo} data={dt.finalResult} />
      </Grid>
    </Grid>
  );
};
