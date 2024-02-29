import React from "react";
// javascript library that creates a parrallax effect
import Rellax from "rellax";
// reactstrap components

// core components
import ScrollTransparentNavbar from "components/Navbars/ScrollTransparentNavbar.js";
import PresentationHeader from "components/Headers/PresentationHeader.js";
import FooterBlack from "components/Footers/FooterBlack.js";

// sections for this page
import Components from "./presentation-sections/Components.js";
import BasicComponents from "./presentation-sections/BasicComponents.js";
import Cards from "./presentation-sections/Cards.js";
import Content from "./presentation-sections/Content.js";
import Sections from "./presentation-sections/Sections.js";
import Examples from "./presentation-sections/Examples.js";
import FreeDemo from "./presentation-sections/FreeDemo.js";
import Icons from "./presentation-sections/Icons.js";
import Image from "./presentation-sections/Image.js";
import Testimonials from "./presentation-sections/Testimonials.js";
import Pricing from "./presentation-sections/Pricing.js";
import VectorMaps from "./Maps/VectorMap.js";
import country from "../assets/maps/world.geo.json";
import polity from '../assets/maps/jalisco.geo.json'

import {Visualitations} from '../components/visualitations/Visualitations'

function Presentation() {
  React.useEffect(() => {
    document.body.classList.add("presentation-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;

    // initialise Rellax for this page
    if (window.innerWidth >= 991) {
      setTimeout(function () {
        new Rellax(".rellax", {
          center: true,
        });
      }, 5000);
      new Rellax(".rellax-header");
      new Rellax(".rellax-text");
    }

    // we need to add a script for the github buttons
    let script = document.createElement("script");
    script.src = "https://buttons.github.io/buttons.js";
    script.id = "github-buttons-script-id";
    document.body.appendChild(script);

    return function cleanup() {
      document.body.classList.remove("presentation-page");
      document.body.classList.remove("sidebar-collapse");

      // we need to remove the script when we change the page
      script.parentNode.removeChild(script);
    };
  });
  return (
    <>
      <ScrollTransparentNavbar />
      <div className="wrapper">
        <PresentationHeader/>
        <Sections /> 
        {/* <Components /> */}
        {/* <BasicComponents /> */}
        
        <Visualitations title={"Publicaciones por municipio"} endpoint={"countriesAndMunicipios"} mapa={polity}/>
        <Visualitations title={"Publicaciones por país"} endpoint={"countriesDataCount"} mapa={country}/>
        {/* <Visualitations title={"Publicaciones por Campo de Estudio"} endpoint={"countriesAndFieldStudy"} map={country}/> */}
        {/* <Visualitations title={"Publicaciones por Tipo de Documento"} endpoint={"countriesAndDocumentType"} country={country}/> */}
        {/* <Visuxalitations title={"Publicaciones por Editorial"} endpoint={"countriesAndEditorial"} map={country}/> */}
        {/* <BasicComponents /> */}
        {/* <Cards /> */}
        {/* <Visualitations title={"Publicaciones por decadas"} endpoint={"countriesAndDecades"} mapa={country}/> */}
        {/* <Visualitations title={"Publicaciones por Área"} endpoint={"countriesAndAreas"} map={country}/> */}
        {/* <Visualitations title={"Publicaciones por Disciplina"} endpoint={"countriesAndDisciplines"} mapa={country}/> */}
        
         {/* <Examples /> 
         <FreeDemo /> 
         <Icons /> 
         <Image /> 
         <Testimonials />  */}
         <Pricing />
        <FooterBlack />
      </div>
    </>
  );
}

export default Presentation;
