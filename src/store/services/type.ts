export type Vacancy = {
  id: number;
  link: string;
  text: string;
};

export type VacancyResponse = {
  count: number;
  vacancies: Vacancy[];
};
