import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { VacancyResponse } from "./type";

const baseUrl = import.meta.env.VITE_BASE_URL;

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
      query: ({ search, page, limit }) => ({
        url: "/vacancy",
        params: {
          search,
          page,
          limit,
        },
      }),
    }),
  }),
});

export const { useVacancyQuery } = api;
