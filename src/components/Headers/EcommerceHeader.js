import React from "react";
import { useChartsDocumentsInfoQuery } from "../../api/api.slice";
import { ServerError } from "../../components/serverError/ServerError";
import { Spiner } from "../../components/spiner/Spiner";
import { SnackBar } from "../../components/snackBar/SnackBar";
import { useParams } from "react-router-dom";
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




function EcommerceHeader({ title, subtitle, cantidad }) {
  const { url, request } = useParams();
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  //api hook
  const {
    data: dt,
    isError,
    isLoading,
    error,
  } = useChartsDocumentsInfoQuery({ url, request });
  if (isLoading) {
    return (
      <>
        <Spiner showSpiner />
      </>
    );
  }
  if (isError)
    return (
      <>
        <SnackBar
          msg={
            "Ocurrió un error en la petición, error : " + JSON.stringify(error)
          }
          variant={"error"}
        />
        <ServerError />
      </>
    );
    console.log(Object.keys(dt))
    const XLabels = Object.values(dt)
    const YLabels = Object.keys(dt)
    const labels = YLabels?.map((label, index) => {
      const percentage = (
        (XLabels[index] / XLabels.reduce((a, b) => a + b, 0)) *
        100
      ).toFixed(2);
      return `${percentage}%:${label}`;
    });

    let legendPosition = "right"
  if(XLabels.length >= 30 ) {
    legendPosition = "right"
  }
    const data = {
      labels: labels,
      datasets: [
        {
          label: "Número de públicaciones",
          data: Object.values(dt),
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
    const options = {
      plugins: {
        title: {
          display: true,
          text: "Aŕeas de Estudio",
          position: "top",
          font: {
            size: 14,
          },
          color : "white"
        },
        legend: {
          display: true,
          position: legendPosition,
          align: "center",
          labels: {
            font: {
              size: 12,
            },
            color : "white"
          },
        },
      },
      animation: {
        duration: 2000, // Duración de la animación en milisegundos
        easing: "easeInOutCubic", // Tipo de animación
      },
    };
    
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
  // core components
  const items = [
    {
      src: "url(" + require("assets/img/cuvalles.jpg") + ")",
      content: (
        <Row>
          <Col className="ml-auto mr-auto" md="12">
            <h1 className="title">{subtitle}</h1>
            <h2 className="description">{cantidad} documentos relacionados</h2>
            <Col className="ml-auto mr-auto" md="8">
              <Doughnut data={data} options={options} />
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
