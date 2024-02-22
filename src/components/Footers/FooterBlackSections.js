/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
import {NavLink} from "react-router-dom";
// core components

function FooterBlackSections() {
  return (
    <>
      <footer className="footer" data-background-color="black">
        <Container>
          <nav className="float-none">
            <ul>
              <li>
                <NavLink
                  to="/"
                  target="_blank"
                >
                  Inicio
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/nosotros"
                  target="_blank"
                >
                  Acerca de nosotros
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contacto"
                  target="_blank"
                >
                  Contacto
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className="copyright float-none" id="copyright">
            © {new Date().getFullYear()}, Designed by{" "}
            Universidad de Guadalajara | Invision | Creative Tim | CUValles | Ing. Fernando Sánchez Plascencia
            .
          </div>
        </Container>
      </footer>
    </>
  );
}

export default FooterBlackSections;
