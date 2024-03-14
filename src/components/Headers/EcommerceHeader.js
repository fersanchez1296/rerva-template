import React from "react";
import { useParams } from "react-router-dom";
import {
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators,
} from "reactstrap";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);

function generateChartData(dt) {
  const XLabels = Object.values(dt);
  const YLabels = Object.keys(dt);
  const labels = YLabels?.map((label, index) => {
    const percentage = (
      (XLabels[index] / XLabels.reduce((a, b) => a + b, 0)) *
      100
    ).toFixed(2);
    return `${percentage}% : ${label}`;
  });
  const data = {
    labels: labels,
    datasets: [
      {
        label: `Cantidad`,
        data: XLabels,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 2,
      },
    ],
  };

  return data;
}

function EcommerceHeader({ title, subtitle, cantidad, data }) {
  const dt = data;
  const { url, request, busqueda } = useParams();
  console.log(url, request, busqueda);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);

  const chartData = dt.map((data) => generateChartData(data));

  function chartOptions(text, index) {
    return {
      plugins: {
        title: {
          display: true,
          text: text[index],
          position: "top",
          font: {
            size: 14,
          },
          color: "white",
        },
        legend: {
          display: false,
        },
      },
      animation: {
        duration: 2000,
        easing: "easeInOutCubic",
      },
    };
  }

  const onExiting = () => {
    setAnimating(true);
  };

  const onExited = () => {
    setAnimating(false);
  };

  const next = () => {
    //if (animating) return;
    //const nextIndex = activeIndex === chartData.length - 1 ? 0 : activeIndex + 1;
    //setActiveIndex(nextIndex);
  };

  const previous = () => {
    //if (animating) return;
    //const nextIndex = activeIndex === 0 ? chartData.length - 1 : activeIndex - 1;
    //setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const items = [
    {
      src: "url(" + require("assets/img/cuvalles/cuvalles-8_HD.jpg") + ")",
      content: (
        <Row>
          <Col className="ml-auto mr-auto" md="12">
            <h1 className="title">{subtitle}</h1>
            <h2 className="description">{cantidad} Coincidencias</h2>
            <Col
              className="ml-auto mr-auto d-flex justify-content-center"
              md="4"
            >
              <div className="d-flex flex-md-row flex-column">
                {chartData.map((data, index) => (
                  <div className="chart-container" key={index}>
                    <Doughnut
                      data={data}
                      options={chartOptions(
                        ["País de origen", "Institución de origen", "ADS"],
                        index
                      )}
                      height={200} // Altura de la gráfica
                      width={200} // Ancho de la gráfica
                    />
                  </div>
                ))}
              </div>
            </Col>
          </Col>
        </Row>
      ),
      altText: "",
      caption: "",
    },
  ];

  return (
    <>
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        {items.map((item) => (
          <CarouselItem key={item.src}>
            <div className="page-header header-filter">
              <img
                loading="lazy"
                className="page-header-image"
                style={{
                  backgroundImage: item.src,
                }}
              ></img>
              <div className="content-center text-center">{item.content}</div>
            </div>
          </CarouselItem>
        ))}
      </Carousel>
    </>
  );
}

export default EcommerceHeader;
