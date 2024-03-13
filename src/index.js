//react
import React from "react";
import ReactDOM from "react-dom/client";
//react router dom
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";

// styles
import "assets/css/bootstrap.min.css";
import "assets/css/customStyles.css";
import "assets/scss/now-ui-kit.scss?v=1.5.0";
import "assets/demo/demo.css?v=1.5.0";
import "assets/demo/react-demo.css?v=1.5.0";
import "assets/demo/nucleo-icons-page-styles.css?v=1.5.0";
// pages
import Presentation from "views/Presentation.js";
//api provider
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { apiSlice } from "./api/api.slice";
//snackbar provider
import { SnackbarProvider } from "notistack";
//translations
import index_en from "./translations/en/index_en.json";
import index_es from "./translations/es/index_es.json";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";
//lazy imports
const LazyAbout = React.lazy(() => import("views/examples/AboutUs.js"));
const LazyAutodeposito = React.lazy(() =>
  import("views/examples/Autodeposito.js")
);
const LazyContact = React.lazy(() => import("views/examples/ContactUs.js"));
const LazyBusquedaGrafica = React.lazy(() =>
  import("views/examples/BusquedaGrafica.js")
);
const LazyEcommerce = React.lazy(() => import("views/examples/Ecommerce.js"));
const LazyProfilePage = React.lazy(() =>
  import("views/examples/ProfilePage.js")
);

//i18next initializer
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
    <SnackbarProvider maxSnack={2}>
      <ApiProvider api={apiSlice}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Presentation />} />
            <Route
              path="/nosotros"
              element={
                <React.Suspense fallback="Loading...">
                  <LazyAbout />
                </React.Suspense>
              }
            />
            <Route
              path="/contacto"
              element={
                <React.Suspense fallback="Loading...">
                  <LazyContact />
                </React.Suspense>
              }
            />
            <Route
              path="/contacto-fernando"
              element={
                <React.Suspense fallback="Loading...">
                  <LazyProfilePage />
                </React.Suspense>
              }
            />
            <Route
              path="/contribuir"
              element={
                <React.Suspense fallback="Loading...">
                  <LazyAutodeposito />
                </React.Suspense>
              }
            />
            <Route
              path="/:url/:request"
              element={
                <React.Suspense fallback="Loading...">
                  <LazyBusquedaGrafica />
                </React.Suspense>
              }
            />
            <Route
              path="/:url/:busqueda/:request"
              element={
                <React.Suspense fallback="Loading...">
                  <LazyEcommerce />
                </React.Suspense>
              }
            />
            <Route path="*" element={<Navigate to="/" replace />} />
            <Route
              path="/:busqueda/:documentos/:request"
              element={
                <React.Suspense fallback="Loading...">
                  <LazyEcommerce />
                </React.Suspense>
              }
            />
          </Routes>
        </BrowserRouter>
      </ApiProvider>
    </SnackbarProvider>
  </I18nextProvider>
);
