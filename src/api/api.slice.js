import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
   // baseUrl: 'http://localhost:4000/api/',
    baseUrl: "https://rerva-backend-104f4d2354cf.herokuapp.com/api/",
  }),
  // baseUrl: 'https://localhost:4000/api/'}),

  endpoints: (builder) => ({
    getDocuments: builder.query({
      query: (children) => ({
        url: `/documents?search=${children}`,
        method: "GET",
      }),
    }),
    getVisualitationsData: builder.query({
      query: (endpoint) => ({
        url: `${endpoint}`,
        method: "GET",
      }),
    }),
    getCountriesData: builder.query({
      query: (country) => ({
        url: `/countriesData?search=${country}`,
        method: "GET",
      }),
    }),
    getDataFor: builder.query({
      query: ({ url, request }) => ({
        url: `/${url}?search=${request}`,
        method: "GET",
      }),
    }),
    mapGetDataFor: builder.query({
      query: ({ url, request }) => ({
        url: `/map/${url}?search=${request}`,
        method: "GET",
      }),
    }),
    chartsDocumentsInfo: builder.query({
      query: ({ url, request }) => ({
        url: `/charts/${url}?search=${request}`,
        method: "GET",
      }),
    }),
  }),
  keepUnusedDataFor: 300, // Tiempo en segundos para mantener los datos en caché sin usar
});

export const {
  useGetDocumentsQuery,
  useGetVisualitationsDataQuery,
  useGetCountriesDataQuery,
  useGetDataForQuery,
  useMapGetDataForQuery,
  useChartsDocumentsInfoQuery
} = apiSlice;
