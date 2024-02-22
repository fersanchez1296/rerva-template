/*eslint-disable*/
import React from "react";
import udegLogoBlanco from "../../assets/img/udgLogoBlanco.png"
// reactstrap components

// core components

function PresentationHeader() {
  return (
    <>
      <div className="page-header clear-filter">
        <div className="rellax-header" data-rellax-speed="-4">
          <div
            className="page-header-image"
            style={{
              backgroundImage:
                "url(" +
                require("assets/img/presentation-page/udg-hero.jpg") +
                ")"
            }}
          ></div>
        </div>
        
        <div
          className="rellax-header rellax-header-buildings"
          data-rellax-speed="0"
        >   
        <img src={udegLogoBlanco} style={{ maxWidth: "10%", margin: "1rem" }} />
        </div>
        
        <div className="rellax-text-container rellax-text">
        
          <h1 className="h1-seo" data-rellax-speed="-1">
            CUValles
          </h1>
          
        </div>
        <h3 className="h3-description rellax-text" data-rellax-speed="-1">
          Repositorio de Estudios sobre la Región Valles
        </h3>
        <h4 className="h3-description rellax-text" data-rellax-speed="-1">
          Universidad de Guadalajara
        </h4>
      </div>
    </>
  );
}

export default PresentationHeader;
