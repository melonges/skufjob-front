export type Vacancy = string;

export type VacancyResponse = {
  count: number;
  vacancies: Vacancy[];
};

export type Pagination = {
};

export type UrlState = {
  search: string;
  page: number;
  limit: number;
}
