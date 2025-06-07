import AgenciesFilter from "../components/AgenciesFilter";
import WorkTypeFilter from "../components/WorkTypeFilter";

const FilterForm = () => {
	function handleAgencySelect() {

	}

	return (
		<div className="flex flex-col gap-4">
			<WorkTypeFilter />
			<AgenciesFilter />
		</div>
	);
};

export default FilterForm;
