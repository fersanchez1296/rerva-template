/*eslint-disable*/
import React from "react";

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
        </div>
        <div className="rellax-text-container rellax-text">
          {/* <h1 className="h1-seo" data-rellax-speed="-1">
            RERVA
          </h1> */}
          
        </div>
        <h3 className="h3-description rellax-text" data-rellax-speed="-1">
          Repositorio de Estudios sobre la Región Valles
        </h3>
        <h6
          className="category category-absolute rellax-text"
          data-rellax-speed="-1"
        >
          Universidad de Guadalajara{" "}
          <a href="http://invisionapp.com/?ref=creativetim" target="_blank">
            <img
              alt="..."
              className="invision-logo"
              src={require("assets/img/invision-white-slim.png")}
            ></img>
          </a>
        </h6>
      </div>
    </>
  );
}

export default PresentationHeader;
