//React
import React from "react";
// javascript library that creates a parrallax effect
import Rellax from "rellax";
// core components
import ScrollTransparentNavbar from "components/Navbars/ScrollTransparentNavbar.js";
import PresentationHeader from "components/Headers/PresentationHeader.js";
import FooterBlack from "components/Footers/FooterBlack.js";
// sections for this page
import SearchBoxSection from "./presentation-sections/SearchBoxSection.js";
import Credits from "./presentation-sections/Credits.js";
import country from "../assets/maps/world.geo.json";
import polity from "../assets/maps/jalisco.geo.json";
//self components
import { Visualitations } from "../components/visualitations/Visualitations";

export const Presentation =  React.memo(() => {
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
        <PresentationHeader />
        <SearchBoxSection />
        <Visualitations
          title={"Municipio"}
          redirectTo={"Publicaciones por municipio"}
          endpoint={"countriesAndMunicipios"}
          mapa={polity}
        />
        <Visualitations
          title={"Pais"}
          redirectTo={"Publicaciones por país"}
          endpoint={"countriesDataCount"}
          mapa={country}
        />
        <Credits />
        <FooterBlack />
      </div>
    </>
  );
});

export default Presentation;
