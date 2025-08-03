import { Button, Input } from "@nextui-org/react";
import { useUrlState } from "state-in-url/react-router";
import { urlState } from "../../../store/services/api";

export function VacancySearch() {
  const { urlState: state, setUrl } = useUrlState(urlState);

  const handleClear = () => {
    setUrl({ search: "", page: 1 });
  };

  return (
    <div className="flex items-center gap-2">
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
      {state.search && (
        <Button onClick={handleClear} color="danger" variant="flat">
          Clear search
        </Button>
      )}
    </div>
  );
}