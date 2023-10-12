import Grid from "@mui/material/Unstable_Grid2";
import { WorldMap } from "../../components/worldMap/WorldMap";
import { InfoGraphicsViewer } from "components/infoGraphics/InfoGraphicsViewer";
import data from "../../assets/maps/world.geo.json";
import { ServerError } from "../../components/serverError/ServerError";
import { useGetVisualitationsDataQuery } from "../../api/api.slice.js";
import { Spiner } from "../../components/spiner/Spiner";
import { SnackBar } from "../../components/snackBar/SnackBar";
import { Graphics } from "components/graphics/Graphics";
import { DoughnutGraphic } from "components/doughnutGraphic/DoughnutGraphic";

interface Props {
  title: string;
  endpoint: string;
}

export const Visualitations = ({ title, endpoint }: Props) => {
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


  return (
    <Grid container spacing={2}>
      <Grid
        item
        xs={12}
        sx={{ display: "flex", justifyContent: "center",alignItems : "center", margin: "0.5rem" }}
      >
        <h2>{title}</h2>
      </Grid>
      <Grid item xs={12} md={6}>
        <div className="wrapper">
          <WorldMap data={data} countriesData={dt[0]} />
        </div>
      </Grid>
      <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "center",alignItems : "center" }}>
        <InfoGraphicsViewer countriesDataCount={dt[1]} />
      </Grid>
      <Grid item xs={12} md={6}>
        <Graphics YLabels={dt[2]} XLabels={dt[3]} />
      </Grid>
      <Grid item xs={12} md={6}>
        <DoughnutGraphic YLabels={dt[2]} XLabels={dt[3]} />
      </Grid>
    </Grid>
  );
};
