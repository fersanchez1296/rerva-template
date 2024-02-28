import React from "react";
import { NavLink,Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  Nav,
  Container,
  UncontrolledTooltip,
  InputGroup,
  Input, // Agregar Input de reactstrap
} from "reactstrap";

function ScrollTransparentNavbarSections() {
  const url = "Publicaciones-por-municipio";
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [navbarColor, setNavbarColor] = React.useState(
    document.documentElement.scrollTop > 499 || document.body.scrollTop > 499
      ? ""
      : " navbar-transparent"
  );
  const [buyButtonColor, setBuyButtonColor] = React.useState(
    document.documentElement.scrollTop > 499 || document.body.scrollTop > 499
      ? "info"
      : "neutral"
  );
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 499 ||
        document.body.scrollTop > 499
      ) {
        setNavbarColor("");
        setBuyButtonColor("info");
      } else {
        setNavbarColor(" navbar-transparent");
        setBuyButtonColor("neutral");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  }, []);
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top" + navbarColor} color="white" expand="lg">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand to="/" tag={Link} id="navbar-brand"></NavbarBrand>
            <UncontrolledTooltip target="navbar-brand"></UncontrolledTooltip>
            <button
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              className="navbar-toggler"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse isOpen={collapseOpen} navbar>
          
            <Nav className="ml-auto" id="ceva" navbar>
            {/* <UncontrolledDropdown nav>
            <DropdownToggle
                  color="default"
                  data-toggle="dropdown"
                  href="#pablo"
                  id="navbarDropdownMenuLink"
                  nav
                  tag={Link}
                  to="/busquedas"
                >
                  <i
                    aria-hidden={true}
                    className="now-ui-icons files_single-copy-04"
                  ></i>
                  <p>Buscar</p>
                </DropdownToggle>
              </UncontrolledDropdown> */}
              <UncontrolledDropdown nav>
                <DropdownToggle
                  color="default"
                  data-toggle="dropdown"
                  href="#pablo"
                  id="navbarDropdownMenuLink"
                  nav
                  tag={Link}
                  to="/"
                >
                  <i
                    aria-hidden={true}
                    className="now-ui-icons business_bank"
                  ></i>
                  <p>Inicio</p>
                </DropdownToggle>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav>
                <DropdownToggle
                  color="default"
                  data-toggle="dropdown"
                  href="#pablo"
                  id="navbarDropdownMenuLink"
                  nav
                  tag={Link}
                  to="/contribuir"
                >
                  <i
                    aria-hidden={true}
                    className="now-ui-icons files_paper"
                  ></i>
                  <p>Autodepósito</p>
                </DropdownToggle>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav>
                <DropdownToggle
                  color="default"
                  data-toggle="dropdown"
                  href="#pablo"
                  id="navbarDropdownMenuLink"
                  nav
                  tag={Link}
                  to="/nosotros"
                >
                  <i
                    aria-hidden={true}
                    className="now-ui-icons business_badge"
                  ></i>
                  <p>Acerca de...</p>
                </DropdownToggle>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav>
                <DropdownToggle
                  color="default"
                  data-toggle="dropdown"
                  href="#pablo"
                  id="navbarDropdownMenuLink"
                  nav
                  tag={Link}
                  to="/contacto"
                >
                  <i
                    aria-hidden={true}
                    className="now-ui-icons ui-1_email-85"
                  ></i>
                  <p>Contacto</p>
                </DropdownToggle>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default ScrollTransparentNavbarSections;
