import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from '@faker-js/faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
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
      text: "Producción por país",
    },
  },
};

interface Props {
    countriesData: any;
  }

export const Graphics = ({countriesData} : Props) => {
const info = countriesData.map((countrie) => countrie.name_es)

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
const data = {
    labels : info,
    datasets: [
      {
        label: 'Dataset 1',
        data: info.map(() => faker.number.int({ min: 0, max: 1500 })),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };
  return <Line options={options} data={data} />
};
