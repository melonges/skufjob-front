import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { VacancyResponse } from "./type";

const baseUrl = import.meta.env.DEV ? "/api" : import.meta.env.VITE_BASE_URL;

export const api = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  tagTypes: ["Vacancies"],
  endpoints: (builder) => ({
    vacancy: builder.query<
      VacancyResponse,
      { search: string; page: number; limit?: number }
    >({
      query: ({ search, page, limit }) => ({
        url: "/vacancy",
        params: {
          ...(search && { search }),
          page,
          limit,
        },
      }),
      providesTags: ["Vacancies"],
    }),
    deleteVacancy: builder.mutation({
      query: (id) => ({
        url: `/vacancy/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Vacancies"],
    }),
  }),
});

export const { useVacancyQuery, useDeleteVacancyMutation } = api;
