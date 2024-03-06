//React
import React from "react";
//Mui
import Grid from "@mui/material/Unstable_Grid2";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import StackedLineChartIcon from "@mui/icons-material/StackedLineChart";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
//Self components
import { ChartLinesDialog } from "components/chartDialog/ChartLinesDialog";
//translations
import { useTranslation } from "react-i18next";

interface Props {
  XLabels : any,
  YLabels : any
}

export const Charts = ({XLabels,YLabels} : Props) => {
  const { t, i18n } = useTranslation("global");
  const [openDialog, setOpenDialog] = React.useState(false);

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
            {t("indexMapsLanguage.mapSubtitle")}
          </Typography>
        </Grid>
        <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
          <Stack direction="row" spacing={2}>
            <Button
              startIcon={<StackedLineChartIcon />}
              onClick={handleOpenDialog}
            >
              {t("indexMapsLanguage.mapChartTitle")}
            </Button>
          </Stack>
        </Grid>
      </Grid>
      <ChartLinesDialog open={openDialog} handleCloseDialog={handleCloseDialog} XLabels={XLabels} YLabels={YLabels}/>
      
    </>
  );
};
