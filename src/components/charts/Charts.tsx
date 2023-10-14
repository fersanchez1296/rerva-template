import { useState } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import StackedLineChartIcon from "@mui/icons-material/StackedLineChart";
import DataSaverOffIcon from "@mui/icons-material/DataSaverOff";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { ChartDialog } from "components/chartDialog/ChartDialog";

export const Charts = () => {
  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{ display: "flex", alignItems: "center", gap: "1rem" }}
          >
            <QueryStatsIcon />
            Información estadística
          </Typography>
        </Grid>
        <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
          <Stack direction="row" spacing={2}>
            <Button
              startIcon={<StackedLineChartIcon />}
              onClick={handleOpenDialog}
            >
              Análisis Numérico
            </Button>
            <Button startIcon={<DataSaverOffIcon/>}>Análisis Porcentual</Button>
          </Stack>
        </Grid>
      </Grid>
      <ChartDialog open={openDialog} handleCloseDialog={handleCloseDialog} />
    </>
  );
};
