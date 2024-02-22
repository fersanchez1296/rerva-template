/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
import {NavLink} from "react-router-dom";
// core components

function FooterBlack() {
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
                  Acerca de Nosotros
                </NavLink>
              </li>
              <li>
                <a
                  href="http://blog.creative-tim.com?ref=nuk-pro-react-footer-black"
                  target="_blank"
                >
                  Contacto
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
