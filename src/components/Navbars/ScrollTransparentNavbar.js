import React from "react";
import { Link } from "react-router-dom";
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
} from "reactstrap";

function ScrollTransparentNavbar() {
  const url = "Publicaciones-por-municipio"
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [navbarColor, setNavbarColor] = React.useState(
    (document.documentElement.scrollTop > 499 || document.body.scrollTop) > 499
      ? ""
      : " navbar-transparent"
  );
  const [buyButtonColor, setBuyButtonColor] = React.useState(
    (document.documentElement.scrollTop > 499 || document.body.scrollTop) > 499
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
      } else if (
        document.documentElement.scrollTop < 500 ||
        document.body.scrollTop < 500
      ) {
        setNavbarColor(" navbar-transparent");
        setBuyButtonColor("neutral");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
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
            <NavbarBrand to="/" tag={Link} id="navbar-brand">
              
            </NavbarBrand>
            <UncontrolledTooltip target="navbar-brand">
              
            </UncontrolledTooltip>
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
              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  data-toggle="dropdown"
                  href="#pablo"
                  id="navbarDropdownMenuLink"
                  nav
                  onClick={(e) => e.preventDefault()}
                >
                  <i
                    aria-hidden={true}
                    className="now-ui-icons files_paper"
                  ></i>
                  <p>Secciones</p>
                </DropdownToggle>
                <DropdownMenu aria-labelledby="navbarDropdownMenuLink" right>
                  <DropdownItem to="/Publicaciones-por-municipio/all" tag={Link}>
                    <i className="now-ui-icons location_pin"></i>
                    Publicaciones por municipio
                  </DropdownItem>
                  <DropdownItem to="/sections#features" tag={Link}>
                    <i className="now-ui-icons ui-1_calendar-60"></i>
                    Publicaciones por decadas
                  </DropdownItem>
                  <DropdownItem to="/sections#blogs" tag={Link}>
                    <i className="now-ui-icons education_paper"></i>
                    Publicaciones por Área
                  </DropdownItem>
                  <DropdownItem to="/sections#teams" tag={Link}>
                    <i className="now-ui-icons education_glasses"></i>
                    Publicaciones por Disciplina
                  </DropdownItem>
                  <DropdownItem to="/sections#projects" tag={Link}>
                    <i className="now-ui-icons education_atom"></i>
                    Publicaciones por Campo de Estudio
                  </DropdownItem>
                  <DropdownItem to="/sections#pricing" tag={Link}>
                    <i className="now-ui-icons education_agenda-bookmark"></i>
                    Publicaciones por Tipo de Documento
                  </DropdownItem>
                  <DropdownItem to="/sections#testimonials" tag={Link}>
                    <i className="now-ui-icons education_hat"></i>
                    Publicaciones por Editorial
                  </DropdownItem>
                  <DropdownItem to="/sections#contact-us" tag={Link}>
                    <i className="now-ui-icons objects_globe"></i>
                    Publicaciones por País
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  data-toggle="dropdown"
                  href="#pablo"
                  id="navbarDropdownMenuLink"
                  nav
                  onClick={(e) => e.preventDefault()}
                >
                  <i
                    aria-hidden={true}
                    className="now-ui-icons design_image"
                  ></i>
                  <p>Contribuir</p>
                </DropdownToggle>
                <DropdownMenu aria-labelledby="navbarDropdownMenuLink" right>
                  <DropdownItem tag={Link} to="/about-us">
                    <i className="now-ui-icons business_bulb-63"></i>
                    About-us
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/blog-post">
                    <i className="now-ui-icons text_align-left"></i>
                    Blog Post
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/blog-posts">
                    <i className="now-ui-icons design_bullet-list-67"></i>
                    Blog Posts
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/contact-us">
                    <i className="now-ui-icons location_pin"></i>
                    Contact Us
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/landing-page">
                    <i className="now-ui-icons education_paper"></i>
                    Landing Page
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/login-page">
                    <i className="now-ui-icons users_circle-08"></i>
                    Login Page
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/pricing">
                    <i className="now-ui-icons business_money-coins"></i>
                    Pricing
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/e-commerce">
                    <i className="now-ui-icons shopping_shop"></i>
                    Ecommerce Page
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/product-page">
                    <i className="now-ui-icons shopping_bag-16"></i>
                    Product Page
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/profile-page">
                    <i className="now-ui-icons users_single-02"></i>
                    Profile Page
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/sign-up">
                    <i className="now-ui-icons tech_mobile"></i>
                    Signup Page
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default ScrollTransparentNavbar;
