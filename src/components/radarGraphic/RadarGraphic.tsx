import React from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

interface Props {
  countriesData: any;
}
export const RadarGraphic = ({ countriesData }: Props) => {
  const info = countriesData.map((countrie) => countrie.name_es);
  const count = countriesData.map((cnt) => cnt.count);
  const data = {
    labels: info,
    datasets: [
      {
        label: "Publicaciones",
        data: count,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };
  return <Radar data={data} />;
};
