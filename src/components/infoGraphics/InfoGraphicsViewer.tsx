import Grid from "@mui/material/Unstable_Grid2";
interface Props {
  cuntriesDataCount: any;
}

export const InfoGraphicsViewer = ({ countriesDataCount }: Props) => {
  
  return (
    <Grid container spacing={2}>
      {countriesDataCount?.map((data) => {
        return (
          <Grid item xs={4} sx={{ fontSize: { xs: "10px", md : "unset" } }}>
            <p>
              {data.name_es} - (<b>{data.count}</b>)
            </p>
          </Grid>
        );
      })}
    </Grid>
  );
};
