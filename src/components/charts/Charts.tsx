import { useState } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import StackedLineChartIcon from "@mui/icons-material/StackedLineChart";
import DataSaverOffIcon from "@mui/icons-material/DataSaverOff";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { ChartLinesDialog } from "components/chartDialog/ChartLinesDialog";
import { ChartDoDialog } from "components/chartDoDialog/ChartDoDialog";

interface Props {
  XLabels : any,
  YLabels : any
}

export const Charts = ({XLabels,YLabels} : Props) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [openDoDialog, setOpenDoDialog] = useState(false);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleOpenDoDialog = () => {
    setOpenDoDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleCloseDoDialog = () => {
    setOpenDoDialog(false);
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
              Numeralia
            </Button>
          </Stack>
        </Grid>
      </Grid>
      <ChartLinesDialog open={openDialog} handleCloseDialog={handleCloseDialog} XLabels={XLabels} YLabels={YLabels}/>
      
    </>
  );
};
