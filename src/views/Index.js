//React
import React from "react";
// javascript library that creates a parrallax effect
import Rellax from "rellax";
//API
import { useGetBusquedaInfoSelectQuery } from "../api/api.slice.js";
//self components
import { Spiner } from "../components/spiner/Spiner";
//error page
import { ServerError } from "../components/errors/ServerError.errors"
//zustand store
import { useApiRequestStore } from "../context/apiRequest.store"
// core components
import ScrollTransparentNavbar from "components/Navbars/ScrollTransparentNavbar.js";
import PresentationHeader from "components/Headers/PresentationHeader.js";
import FooterBlack from "components/Footers/FooterBlack.js";
// sections for this page
import SearchBoxSection from "./SearchBox/SearchBoxSection.js";
import Credits from "./Credits/Credits.js";
//self components
import { Visualitations } from "../components/visualitations/Visualitations";

export const Presentation =  React.memo(() => {
  const {data, isError, isLoading, isSuccess} = useGetBusquedaInfoSelectQuery();
  const setData = useApiRequestStore((state) => state.setData);
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

  if(isLoading) return <Spiner showSpiner />
  if(isSuccess){
    setData(data);}
  if(isError) return <ServerError />
  return (
    <>
      <ScrollTransparentNavbar />
      <div className="wrapper">
        <PresentationHeader />
        <SearchBoxSection />
        <Visualitations/>
        <Credits />
        <FooterBlack />
      </div>
    </>
  );
});

export default Presentation;
