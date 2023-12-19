import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define the base query
const baseQuery = fetchBaseQuery({ baseUrl: 'backend/' });

// Create an API slice
export const appApi = createApi({
  reducerPath: 'appApi',
  baseQuery,
  endpoints: (builder) => ({
    getHelloV1: builder.query<any, void>({
      query: () => 'v1', 
      
    }),
    getHelloV2: builder.query<any, void>({
      query: () => 'v2', 
      
    }),
  }),
});

// Export hooks for usage in functional components
export const { useGetHelloV1Query, useGetHelloV2Query } = appApi;
