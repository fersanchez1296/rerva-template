//React
import React from "react";
//Mui
import Grid from "@mui/material/Unstable_Grid2";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import StackedLineChartIcon from "@mui/icons-material/StackedLineChart";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import Container from "@mui/material/Container";
//translations
import { useTranslation } from "react-i18next";
//chartjs
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface Props {
  XLabels: any;
  YLabels: any;
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="left" ref={ref} {...props} />;
});

export const Charts = ({ XLabels, YLabels }: Props) => {
  const { t } = useTranslation("global");
  const [openDialog, setOpenDialog] = React.useState(false);
  const porcentaje = YLabels?.map((label, index) => {
    const percentage = (
      (XLabels[index] / XLabels.reduce((a, b) => a + b, 0)) *
      100
    ).toFixed(2);
    return percentage;
  });

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: t("Graphics.BarGraphic.GraphicTitle"),
      },
    },
  };

  const data = {
    labels: YLabels,
    datasets: [
      {
        label: t("Graphics.BarGraphic.NumberPublications"),
        data: XLabels,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: t("Graphics.BarGraphic.PercentagePublications"),
        data: porcentaje,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };
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
      <Dialog
        fullScreen
        open={openDialog}
        onClose={handleCloseDialog}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleCloseDialog}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              {t("Graphics.BarGraphic.Close")}
            </Typography>
          </Toolbar>
        </AppBar>
        <Container fixed>
          <Bar options={options} data={data} />;
        </Container>
      </Dialog>
    </>
  );
};
