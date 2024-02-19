import Grid from "@mui/material/Unstable_Grid2";
import { WorldMap } from "../../components/worldMap/WorldMap";
import { InfoGraphicsViewer } from "components/infoGraphics/InfoGraphicsViewer";
import { ServerError } from "../../components/serverError/ServerError";
import { useGetVisualitationsDataQuery } from "../../api/api.slice.js";
import { Spiner } from "../../components/spiner/Spiner";
import { SnackBar } from "../../components/snackBar/SnackBar";
import { Charts } from "components/charts/Charts";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

interface Props {
  title: string;
  endpoint: string;
  mapa: any;
}

export const Visualitations = ({ title, endpoint,mapa }: Props) => {
  console.log(endpoint)
  const {
    data: dt,
    isError,
    isLoading,
    error,
  } = useGetVisualitationsDataQuery(endpoint);

  if (isLoading) {
    return (
      <>
        <Spiner showSpiner />
      </>
    );
  }
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

  const url = title.replace(/\s+/g, '-')
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
          {title}
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
        <Charts YLabels={dt[2]} XLabels={dt[3]}/>
      </Grid>
      <Grid item xs={12}>
        <Divider />
      </Grid>
      <Grid item xs={12} md={6}>
        <div className="wrapper">
          <WorldMap data={mapa} countriesData={dt[0]} url={url}/>
        </div>
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <InfoGraphicsViewer url={url} countriesDataCount={dt[1]} />
      </Grid>

      {/* <Grid item xs={12} md={12}>
        <Graphics YLabels={dt[2]} XLabels={dt[3]} />
      </Grid>
      <Grid item xs={12} md={12}>
        <DoughnutGraphic YLabels={dt[2]} XLabels={dt[3]} />
      </Grid> */}
    </Grid>
  );
};
