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
import { Line } from "react-chartjs-2";
import { Bar } from 'react-chartjs-2';
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

export const options = {
  responsive:true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Producción académica",
    },
  },
};

interface Props {
    XLabels: any;
    YLabels: any;
  }
  

export const Graphics = ({XLabels,YLabels} : Props) => {
  console.log(YLabels)
  console.log(XLabels)

const data = {
    labels : YLabels,
    datasets: [
      {
        label: 'Cantidad de publicaciones',
        data: XLabels,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };
  return <Bar options={options} data={data} />;
};
