//react
import React from "react";
//react router dom
import { Link } from "react-router-dom";
//translations
import { useTranslation } from "react-i18next";
//zustand
import { useLanguageStore } from "../../context/store";
//mui
import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import FormGroupS from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
//icon languages
import mxicon from "assets/img/mx-icon.png";
import usaicon from "assets/img/usa-icon.png";
// reactstrap components
import {
  Collapse,
  DropdownToggle,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  Nav,
  Container,
  UncontrolledTooltip,
} from "reactstrap";

//switch
const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 54,
  height: 32,
  padding:7,
  "& .MuiSwitch-switchBase": {
    margin: 1.7,
    padding: 0,
    transform: "translateX(6px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(22px)",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url(${mxicon})`,
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#fff" : "#aab4be",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#001e3c",
    width: 24,
    height: 24,
    "&::before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url(${usaicon})`,
    },
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: theme.palette.mode === "#fff" ? "#8796A5" : "#aab4be",
    borderRadius: 20 / 2,
  },
}));

function ScrollTransparentNavbarSections() {
  const { t, i18n } = useTranslation("global");
  const { language, changeLanguage } = useLanguageStore();
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

//**********functions**********
  const handleChangeLanguage = () => {
    const newLanguage = language === "es" ? "en" : "es";
    changeLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
  };
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
                  <p>{t("navSections.home")}</p>
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
                  <p>{t("navSections.autodeposito")}</p>
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
                  <p>{t("navSections.aboutUs")}</p>
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
                  <p>{t("navSections.contact")}</p>
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
                  <p>{t("navSections.library")}</p>
                </DropdownToggle>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav>
                <FormGroupS>
                  <FormControlLabel
                    control={
                      <MaterialUISwitch
                        sx={{ m: 1 }}
                        checked={language === "es" ? true : false}
                        onChange={() => handleChangeLanguage()}
                      />
                    }
                    label={t("languagePage.language")}
                  />
                </FormGroupS>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default ScrollTransparentNavbarSections;
