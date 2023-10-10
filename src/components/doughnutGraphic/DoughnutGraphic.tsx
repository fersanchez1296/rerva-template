import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);

interface Props {
    XLabels: any;
    YLabels: any;
}

export const DoughnutGraphic = ({XLabels,YLabels} : Props) => {
  const data = {
    labels: YLabels?.map((label, index) => {
      const percentage = ((XLabels[index] / XLabels.reduce((a, b) => a + b, 0)) * 100).toFixed(2);
      return `${label}: ${percentage}%`;
    }),
    datasets: [
      {
        label: "Cantidad",
        data: XLabels,
        backgroundColor: [
          "#FF0000",
          "#00FF00",
          "#0000FF",
          "#FFFF00",
          "#FF00FF",
          "#00FFFF",
          "#FFA500",
          "#800080",
          "#008000",
          "#ff98fg",
          "#FFFF3b",
          "#FFD700",
          "#00FF7F",
          "#FF4500",
          "#800000",
          "#008080",
          "#4B0082",
          "#808080",
          "#FF69B4",
          "#B22222",
          "#48D1CC",
          "#ADFF2F",
          "#9932CC",
          "#87CEEB",
          "#FF8C00",
        ],
        borderColor: [
          "#FF0000",
          "#00FF00",
          "#0000FF",
          "#FFFF00",
          "#FF00FF",
          "#00FFFF",
          "#FFA500",
          "#800080",
          "#008000",
          "#ff98fg",
          "#FFFF3b",
          "#FFD700",
          "#00FF7F",
          "#FF4500",
          "#800000",
          "#008080",
          "#4B0082",
          "#808080",
          "#FF69B4",
          "#B22222",
          "#48D1CC",
          "#ADFF2F",
          "#9932CC",
          "#87CEEB",
          "#FF8C00",
        ],
        borderWidth: 1,
      },
    ],
  };

  
  return <Doughnut data={data} />;
};
