//react
import React,{useRef} from "react";
// reactstrap components
import { Row, Col } from "reactstrap";
//translations
import { useTranslation } from "react-i18next";
//**********Functions*********


function BibliotecasHeader() {
  const { t, i18n } = useTranslation("global");
  return (
    <>
      <div className="page-header page-header-medium">
        <img
          loading="lazy"
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/cuvalles/cuvalles-3_HD.jpg") + ")",
            
          }}
          
        ></img>
        <div className="content-center">
          <Row>
            <Col className="ml-auto mr-auto" md="8">
              <h1 className="title">{t("Librarys.Title")}</h1>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

export default BibliotecasHeader;
