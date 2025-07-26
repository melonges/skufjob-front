export type Vacancy = string;

export type VacancyResponse = {
  count: number;
  vacancies: Vacancy[];
};

export type Pagination = {
  page: number;
  limit: number;
};
