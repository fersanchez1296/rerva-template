import Grid from "@mui/material/Unstable_Grid2";
import { WorldMap } from "../../components/worldMap/WorldMap";
import { InfoGraphicsViewer } from "components/infoGraphics/InfoGraphicsViewer";
import data from "../../assets/maps/world.geo.json";
import { ServerError } from "../../components/serverError/ServerError";
import { useGetCountriesQuery } from "../../api/api.slice.js";
import { Spiner } from "../../components/spiner/Spiner";
import { SnackBar } from "../../components/snackBar/SnackBar";
import { Graphics } from "components/graphics/Graphics";

export const Visualitations = () => {
  const {
    data: countries,
    isError,
    isLoading,
    error,
  } = useGetCountriesQuery({});

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
       <Grid item xs={12} sx={{display : "flex",justifyContent : "center", margin : "0.5rem"}}>
        <h2>Públicaciones por País</h2>
      </Grid>
      <Grid item xs={12} md={6}>
        <div className="wrapper">
          <WorldMap data={data} countriesData={countries[0]} />
        </div>
      </Grid>
      <Grid item xs={12} md={6}>
        <InfoGraphicsViewer countriesDataCount = {countries[1]}/>
      </Grid>
      <Grid item xs={12} >
        <Graphics countriesData = {countries[0]}/>
      </Grid>
    </Grid>
  );
};
