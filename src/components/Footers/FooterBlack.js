/*eslint-disable*/
import React from "react";
//translations
import { useTranslation } from "react-i18next";
// reactstrap components
import { Container } from "reactstrap";
//react router dom
import {NavLink} from "react-router-dom";

function FooterBlack() {
  const { t, i18n } = useTranslation("global");
  return (
    <>
      <footer className="footer" data-background-color="black">
        <Container>
          <nav>
            <ul>
              <li>
                <NavLink
                  to="/nosotros"
                  target="_blank"
                >
                  {t("IndexFooter.About")}
                </NavLink>
              </li>
              <li>
                <a
                  href="http://blog.creative-tim.com?ref=nuk-pro-react-footer-black"
                  target="_blank"
                >
                  {t("IndexFooter.Contact")}
                </a>
              </li>
            </ul>
          </nav>
          <div className="copyright" id="copyright">
            © {new Date().getFullYear()}, Designed by{" "}
            Universidad de Guadalajara | Invision | Creative Tim | CUValles | Ing. Fernando Sánchez Plascencia
            .
          </div>
        </Container>
      </footer>
    </>
  );
}

export default FooterBlack;
