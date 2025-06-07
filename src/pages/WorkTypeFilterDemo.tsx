import AgencySizeFilter from "@/components/filters/AgencySizeFilter";
import AgenciesFilter from "../components/AgenciesFilter";
import WorkTypeFilter from "../components/WorkTypeFilter";
import LocationFilter from "@/components/filters/LocationFilter";

const FilterForm = () => {
	function handleAgencySelect() {
	}

	return (
		<div className="flex flex-col gap-4">
			<WorkTypeFilter />
			<AgenciesFilter />
			<AgencySizeFilter />
			<LocationFilter />
		</div>
	);
};

export default FilterForm;
