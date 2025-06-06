import {
  Input,
  CircularProgress,
  Pagination,
  Progress,
} from "@nextui-org/react";
import { VacancyList } from "./components/vacancy-list";
import { useVacancyQuery } from "../../store/services/api";
import { useState } from "react";
import { useDebounce } from "../../hooks/use-debounce";
import { QueryStatus } from "@reduxjs/toolkit/dist/query";

const LIMIT_PER_PAGE = 10;

export function VacanciesScreen() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const debouncedSearch = useDebounce(search, 500, () => setPage(1));

  const { data, error, status, isLoading } = useVacancyQuery({
    search: debouncedSearch,
    page,
    limit: LIMIT_PER_PAGE,
  });

  if (status === QueryStatus.rejected) {
    return (
      <div className="text-center">
        Cервак здох походу 😂😂😂👍
        <pre>{JSON.stringify(error)}</pre>
      </div>
    );
  }

  if (isLoading) {
    return (
      <Progress
        size="sm"
        isIndeterminate
        aria-label="Loading..."
        className="w-full"
      />
    );
  }

  return (
    <>
      <div>
        <Input
          className="mb-3"
          value={search}
          onChange={(e) => setSearch(e.currentTarget.value)}
          size="lg"
          label={`Search of ${data?.count || 0} vacancies`}
        />
        {status === QueryStatus.pending && (
          <div className="flex justify-center mb-2">
            <CircularProgress size="sm" />
          </div>
        )}
      </div>
      {data!.vacancies.length < 1 && !isLoading ? (
        <div className="text-red-500 text-center">
          <p>Nothing found</p>
        </div>
      ) : (
        <VacancyList vacancies={data!.vacancies} />
      )}
      {data?.count ? (
        <div className="flex items-center justify-center pt-5">
          <Pagination
            total={Math.ceil(data.count / LIMIT_PER_PAGE)}
            page={page}
            onChange={(p) => setPage(p)}
          />
        </div>
      ) : null}
    </>
  );
}
