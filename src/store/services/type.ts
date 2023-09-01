export type Vacancy = {
  id: number;
  link: string;
};

export type VacancyResponse = {
  count: number;
  vacancies: Vacancy[];
};
