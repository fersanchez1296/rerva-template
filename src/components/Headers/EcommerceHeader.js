import React from "react";

// reactstrap components
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

export const data = {
  labels: [],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
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
      borderWidth: 1,
    },
  ],
};
const options = {
  plugins: {
    title: {
      display: true,
      text: "Distribución Porcentual",
      position: "bottom",
      font: {
        size: 9,
      },
    },
    legend: {
      display: true,
      position: "bottom",
      align : "center",
      labels: {
        font: {
          size: 9,
        },
      },
    },
  },
  animation: {
    duration: 2000, // Duración de la animación en milisegundos
    easing: "easeInOutCubic", // Tipo de animación
  },
};

function EcommerceHeader({ title, subtitle, cantidad }) {
  // core components
  const items = [
    {
      src: "url(" + require("assets/img/cuvalles.jpg") + ")",
      content: (
        <Row>
          <Col className="ml-auto mr-auto" md="8">
            <h1 className="title">{subtitle}</h1>
            <h2 className="description">{cantidad} documentos relacionados</h2>
            <Col className="ml-5  d-flex" md="3">
              <Doughnut data={data} options={options}/>
              <Doughnut data={data} options={options}/>
              <Doughnut data={data} options={options}/>
              <Doughnut data={data} options={options}/>
            </Col>
          </Col>
        </Row>
      ),
      altText: "",
      caption: "",
    },
  ];
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  const onExiting = () => {
    setAnimating(true);
  };
  const onExited = () => {
    setAnimating(false);
  };
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  return (
    <>
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {items.map((item) => {
          return (
            <CarouselItem
              onExiting={onExiting}
              onExited={onExited}
              key={item.src}
            >
              <div className="page-header header-filter">
                <div
                  className="page-header-image"
                  style={{
                    backgroundImage: item.src,
                  }}
                ></div>
                <div className="content-center text-center">{item.content}</div>
              </div>
            </CarouselItem>
          );
        })}
        <a
          className="left carousel-control carousel-control-prev"
          data-slide="prev"
          href="#pablo"
          onClick={(e) => {
            e.preventDefault();
            previous();
          }}
          role="button"
        >
          <span className="now-ui-icons arrows-1_minimal-left" />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="right carousel-control carousel-control-next"
          data-slide="next"
          href="#pablo"
          onClick={(e) => {
            e.preventDefault();
            next();
          }}
          role="button"
        >
          <span className="now-ui-icons arrows-1_minimal-right" />
          <span className="sr-only">Next</span>
        </a>
      </Carousel>
    </>
  );
}

export default EcommerceHeader;
