//react
import React from "react";
// reactstrap components
import { Row, Col } from "reactstrap";
//translations
import { useTranslation } from "react-i18next";
//**********Functions*********


function BibliotecasHeader() {
  const { t, i18n } = useTranslation("global");
  let pageHeader = React.createRef();
  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });
  return (
    <>
      <div className="page-header page-header-medium">
        <img
          loading="lazy"
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/cuvalles/cuvalles-3_HD.jpg") + ")",
            
          }}
          ref={pageHeader}
        ></img>
        <div className="content-center">
          <Row>
            <Col className="ml-auto mr-auto" md="8">
              <h1 className="title">Bibliotecas Municipales</h1>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

export default BibliotecasHeader;
