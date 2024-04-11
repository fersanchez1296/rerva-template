import React from "react";
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
//translations
import { useTranslation } from "react-i18next";
import { Line } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
//TODO
//CAMBIAR NOMBRE A ESTE COMPONENTE

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

export const Graphics = ({ XLabels, YLabels }: Props) => {
  const { t } = useTranslation("global");
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
  return <Bar options={options} data={data} />;
};
