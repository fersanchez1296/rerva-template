import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);

interface Props {
  XLabels: any;
  YLabels: any;
}

export const DoughnutGraphic = ({ XLabels, YLabels }: Props) => {
    const labels = YLabels?.map((label, index) => {
      const percentage = (
        (XLabels[index] / XLabels.reduce((a, b) => a + b, 0)) * 100
      ).toFixed(2);
      return `${label}: ${percentage}%`;
    });
  
    const data = {
      labels: labels,
      datasets: [
        {
          label: "Cantidad",
          data: XLabels,
        backgroundColor: [
            "#1f77b4", // Azul
            "#ff7f0e", // Naranja
            "#2ca02c", // Verde
            "#d62728", // Rojo
            "#9467bd", // Púrpura
            "#8c564b", // Marrón
            "#e377c2", // Rosa
            "#7f7f7f", // Gris
            "#bcbd22", // Amarillo
            "#17becf"  // Turquesa
        ],
        borderColor: [
            "#1f77b4", // Azul
            "#ff7f0e", // Naranja
            "#2ca02c", // Verde
            "#d62728", // Rojo
            "#9467bd", // Púrpura
            "#8c564b", // Marrón
            "#e377c2", // Rosa
            "#7f7f7f", // Gris
            "#bcbd22", // Amarillo
            "#17becf"  // Turquesa            
        ],
        borderWidth: 1,
      },
    ],
  };

  return <Doughnut data={data} />;
};
