/*eslint-disable*/
import React from "react";
import cuvalles8 from "../../assets/img/cuvalles8.png";
// reactstrap components

// core components

function PresentationHeader() {
  return (
    <>
      <div className="page-header ">
        <div className="rellax-header" data-rellax-speed="-4">
          <img
            loading="lazy"
            className="page-header-image"
            style={{
              backgroundImage:
                "url(" +
                require("assets/img/presentation-page/udg-hero.jpg") +
                ")",
            }}
          ></img>
        </div>

        <div
          className="rellax-header rellax-header-buildings"
          data-rellax-speed="0"
        >
          <img src={cuvalles8} style={{ maxWidth: "25%", margin: "1rem" }} loading="lazy"/>
        </div>

        <div className="rellax-text-container rellax-text">
          <h1 className="h1-seo" data-rellax-speed="-1">
            RECUV
          </h1>
        </div>
        <h3 className="h3-description rellax-text" data-rellax-speed="-1">
          Repositorio de Estudios de la Región en el Centro Universitario de los
          Valles{" "}
          <hr
            style={{
              border: "1px solid white",
              width: "50%",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          ></hr>
          <span className="font-weight-normal">Universidad de Guadalajara</span>
        </h3>
      </div>
    </>
  );
}

export default PresentationHeader;
