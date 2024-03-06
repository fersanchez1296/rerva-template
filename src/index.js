import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";

// styles
import "assets/css/bootstrap.min.css";
import "assets/css/customStyles.css";
import "assets/scss/now-ui-kit.scss?v=1.5.0";
import "assets/demo/demo.css?v=1.5.0";
import "assets/demo/react-demo.css?v=1.5.0";
import "assets/demo/nucleo-icons-page-styles.css?v=1.5.0";
// pages
import AboutUs from "views/examples/AboutUs.js";
import BlogPost from "views/examples/BlogPost.js";
import BlogPosts from "views/examples/BlogPosts.js";
import ContactUs from "views/examples/ContactUs.js";
import Autodeposito from "views/examples/Autodeposito.js";
import Ecommerce from "views/examples/Ecommerce.js";
import BusquedaGrafica from "views/examples/BusquedaGrafica.js";
import DocumentsViewerMap from "./views/examples/DocumentsViewerMap";
import Index from "views/Index.js";
import LandingPage from "views/examples/LandingPage.js";
import LoginPage from "views/examples/LoginPage.js";
import NucleoIcons from "views/NucleoIcons.js";
import Presentation from "views/Presentation.js";
import Pricing from "views/examples/Pricing.js";
import ProductPage from "views/examples/ProductPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import Sections from "views/Sections.js";
import SignupPage from "views/examples/SignupPage.js";
import { Suspense } from "react";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { apiSlice } from "./api/api.slice";
import { SnackbarProvider } from "notistack";
import index_en from "./translations/en/index_en.json";
import index_es from "./translations/es/index_es.json";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";
i18next.init({
  interpolation: { escapeValue: false },
  lng: "es",
  resources: {
    en: {
      global: index_en,
    },
    es: {
      global: index_es,
    },
  },
});
// others

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <I18nextProvider i18n={i18next}>
    <Suspense fallback={<>Cargando...</>}>
      <SnackbarProvider maxSnack={2}>
        <ApiProvider api={apiSlice}>
          <BrowserRouter>
            <Routes>
              {/* <Route path="/Publicaciones-por-municipio" element={<PDocuments />} /> */}
              <Route path="/nosotros" element={<AboutUs />} />
              <Route path="/contacto" element={<ContactUs />} />
              <Route path="/contacto-fernando" element={<ProfilePage />} />
              <Route path="/blog-posts" element={<BlogPosts />} />
              <Route path="/contribuir" element={<Autodeposito />} />
              {/* <Route path="/e-commerce" element={<Ecommerce />} /> */}
              <Route path="/index" element={<Index />} />
              <Route path="/landing-page" element={<LandingPage />} />
              <Route path="/login-page" element={<LoginPage />} />
              <Route path="/nucleo-icons" element={<NucleoIcons />} />
              <Route path="/" element={<Presentation />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/product-page" element={<ProductPage />} />
              <Route path="/profile-page" element={<ProfilePage />} />
              <Route path="/sections" element={<Sections />} />
              <Route path="/busquedas" element={<SignupPage />} />
              <Route path="/:url/:request" element={<BusquedaGrafica />} />
              <Route path="/:url/:busqueda/:request" element={<Ecommerce />} />
              <Route
                path="/:busqueda/:documentos/:request"
                element={<Ecommerce />}
              />
              {/* <Route path="/Publicaciones-por-municipio/all" element={<Ecommerce />} /> */}
              {/* <Route path="/map/:url/:request" element={<BusquedaGrafica/>} /> */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </BrowserRouter>
        </ApiProvider>
      </SnackbarProvider>
    </Suspense>
  </I18nextProvider>
);
