/*eslint-disable*/
import React from "react";
import { useParams } from "react-router-dom";
// reactstrap components
import {
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import ScrollTransparentNavbar from "components/Navbars/ScrollTransparentNavbar.js";
import EcommerceHeader from "components/Headers/EcommerceHeader.js";
import Footer from "components/Footers/Footer.js";
import { CardWithIcons } from "../components/Card/CardWithIcons";
import { ServerError } from "../components/serverError/ServerError";
import { Spiner } from "../components/spiner/Spiner";
import { SnackBar } from "../components/snackBar/SnackBar";

//api request
import { useGetDataForQuery } from "../api/api.slice";

function PDocuments() {
  //parametros
  const {url,request} = useParams()
  console.log(url)
//   const title = url.replace(/-/g," ");
//   const subtitle = request;

  //api hook
    const {
   data: dt,
    isError,
    isLoading,
       error,
     } = useGetDataForQuery({url,request});
  React.useEffect(() => {
    // document.title = `${subtitle} - ${title}`;

    document.body.classList.add("ecommerce-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("ecommerce-page");
      document.body.classList.remove("sidebar-collapse");
    };

  }, []);
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
        
      </>
    );
    console.log(dt)
    const cantidad = dt.length
  return (
    <>
      <ScrollTransparentNavbar />
      <div className="wrapper">
        <EcommerceHeader title={title} subtitle={subtitle} cantidad={cantidad}/>
        <div className="main">
          <div className="section" >
            <Container >
              <h2 className="section-title">Documentos</h2>
              <Row >
                <Col>
                    <CardWithIcons data={dt}/>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default PDocuments;
