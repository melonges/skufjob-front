import { Input } from "@nextui-org/react";
import { useUrlState } from "state-in-url/react-router";
import { urlState } from "../../../store/services/api";

export function VacancySearch() {
  const { urlState: state, setUrl } = useUrlState(urlState);

  return (
    <Input
      className="mb-3"
      value={state.search}
      onChange={(e) => setUrl({ search: e.currentTarget.value }, { replace: true })}
      size="lg"
      label="Search vacancies"
      isClearable
      onClear={() => setUrl({ search: "" })}
      description="Use operators for advanced search: & (AND), | (OR), ! (NOT), <-> (FOLLOWED BY)."
    />
  );
}
