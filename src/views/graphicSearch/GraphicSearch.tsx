import * as React from "react";
import { useGetCountriesQuery } from "../../api/api.slice.js";
import { Spiner } from "../../components/spiner/Spiner";
import { SnackBar } from "../../components/snackBar/SnackBar";
import { WorldMap } from "../../components/worldMap/WorldMap";
import data from "../../assets/maps/world.geo.json";
import { ServerError } from "../../components/serverError/ServerError";

export const GraphicSearch = () => {
  

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
    
  );
};
