import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://rerva-backend-production.up.railway.app/api/'}),
    // baseUrl: 'https://rerva-backend-production.up.railway.app/api/'}),
    
  endpoints: (builder) => ({
    getDocuments: builder.query({
      query: (children) => ({
        url : `/documents?search=${children}`,
        method : "GET"
      })
    }),
    getVisualitationsData: builder.query({
      query: (endpoint) => ({
        url : `${endpoint}`,
        method : "GET"
      })
    }),
    getCountriesData: builder.query({
      query: (country) => ({
        url : `/countriesData?search=${country}`,
        method : "GET"
      })
    }),
  }),
  keepUnusedDataFor: 300, // Tiempo en segundos para mantener los datos en caché sin usar
});


export const { useGetDocumentsQuery,useGetVisualitationsDataQuery,useGetCountriesDataQuery } = apiSlice;
