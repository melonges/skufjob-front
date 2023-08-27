import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { VacancyResponse } from "./type";

const baseUrl = "http://localhost:5002/";

export const api = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  tagTypes: [],
  endpoints: (builder) => ({
    vacancy: builder.query<
      VacancyResponse,
      { search: string; page: number; limit?: number }
    >({
      query: ({ search }) => ({
        url: "/vacancy",
        params: {
          search,
        },
      }),
    }),
  }),
});

export const { useVacancyQuery } = api;
