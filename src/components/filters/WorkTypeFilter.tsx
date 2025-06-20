import React, { useState } from "react";

interface IWorkType {
	id: string;
	label: string;
	checked: boolean;
}

interface WorkTypeFilterProps {
	onSelectionChange?: (selectedTypes: string[]) => void;
	className?: string;
	defaultOpen?: boolean;
}

const DropdownIcon: React.FC<{ isOpen: boolean }> = ({ isOpen }) => (
	<svg
		width="16"
		height="9"
		viewBox="0 0 16 9"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		className={`w-4 h-2 flex-shrink-0 transition-transform duration-200 ${isOpen ? "" : "rotate-180"}`}
	>
		<path
			d="M8.34617 0.292376L16 7.94617L14.9462 9L8.34617 2.4L1.74617 9L0.692349 7.94618L8.34617 0.292376Z"
			fill="white"
		/>
	</svg>
);

const SearchIcon: React.FC = () => (
	<svg
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		className="w-6 h-6 absolute left-3 top-1/2 transform -translate-y-1/2"
	>
		<circle
			cx="11"
			cy="11"
			r="8"
			stroke="white"
			strokeWidth="1.5"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			d="m21 21-4.35-4.35"
			stroke="white"
			strokeWidth="1.5"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);

const CheckboxChecked: React.FC = () => (
	<div className="w-6 h-6 relative">
		<div className="w-4 h-4 flex-shrink-0 bg-[#E9BF99] absolute left-1 top-1 flex items-center justify-center">
			<svg
				width="12"
				height="8"
				viewBox="0 0 12 8"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				className="w-3 h-2"
			>
				<path
					d="M4.59998 7.8538L11.323 1.13075L10.2692 0.0769262L4.59998 5.74615L1.74998 2.89615L0.69615 3.94998L4.59998 7.8538Z"
					fill="#0E0E0E"
				/>
			</svg>
		</div>
	</div>
);

const CheckboxUnchecked: React.FC = () => (
	<div className="w-6 h-6 relative">
		<svg
			width="18"
			height="18"
			viewBox="0 0 18 18"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className="w-4 h-4 flex-shrink-0 absolute left-1 top-1"
		>
			<path
				d="M0.5 17.5V0.5H17.5V17.5H0.5ZM1.99997 16H16V1.99998H1.99997V16Z"
				fill="#555555"
			/>
		</svg>
	</div>
);

const WorkType: React.FC<WorkTypeFilterProps> = ({
	onSelectionChange,
	className = "",
	defaultOpen = false,
}) => {
	const [searchTerm, setSearchTerm] = useState("");
	const [isOpen, setIsOpen] = useState(defaultOpen);
	const [workTypes, setWorkTypes] = useState<IWorkType[]>([
		{ id: "all", label: "All", checked: false },
		{ id: "branding", label: "Branding", checked: true },
		{ id: "packaging", label: "Packaging", checked: false },
		{ id: "graphic-design", label: "Graphic Design", checked: false },
		{ id: "animation", label: "Animation", checked: false },
		{ id: "photography", label: "Photography", checked: false },
		{ id: "production", label: "Production", checked: false },
		{ id: "post-production", label: "Post Production", checked: false },
		{ id: "social-media", label: "Social Media", checked: false },
		{ id: "marketing", label: "Marketing", checked: false },
	]);

	const handleCheckboxChange = (id: string) => {
		let updatedWorkTypes: IWorkType[];

		if (id === "all") {
			// Check if all items (excluding "All") are currently selected
			const nonAllWorkTypes = workTypes.filter((type) => type.id !== "all");
			const allSelected = nonAllWorkTypes.every((type) => type.checked);

			if (allSelected) {
				// If all are selected, deselect everything including "All"
				updatedWorkTypes = workTypes.map((type) => ({
					...type,
					checked: false,
				}));
			} else {
				// If not all are selected, select everything including "All"
				updatedWorkTypes = workTypes.map((type) => ({
					...type,
					checked: true,
				}));
			}
		} else {
			// If any other option is clicked, uncheck "All" and toggle the clicked option
			updatedWorkTypes = workTypes.map((type) => {
				if (type.id === "all") {
					return { ...type, checked: false };
				}
				if (type.id === id) {
					return { ...type, checked: !type.checked };
				}
				return type;
			});
		}

		setWorkTypes(updatedWorkTypes);

		// Call the callback with selected types
		const selectedTypes = updatedWorkTypes
			.filter((type) => type.checked)
			.map((type) => type.id);

		onSelectionChange?.(selectedTypes);
	};

	const handleClearSearch = () => {
		setSearchTerm("");
	};

	const handleToggle = () => {
		setIsOpen(!isOpen);
	};

	const filteredWorkTypes = workTypes.filter((type) =>
		type.label.toLowerCase().includes(searchTerm.toLowerCase()),
	);

	return (
		<>
			<link
				rel="stylesheet"
				href="https://fonts.googleapis.com/css2?family=Figtree:wght@400&display=swap"
			/>
			<div
				className={`w-[390px] ${isOpen ? "max-h-[415px]" : "h-[54px]"} relative font-['Figtree',-apple-system,Roboto,Helvetica,sans-serif] transition-all duration-300 ease-in-out overflow-hidden ${className}`}
				role="region"
				aria-label="Work type filter"
			>
				{/* Header */}
				<button
					onClick={handleToggle}
					className="flex px-4 py-[15px] justify-between items-center border-[0.5px] border-[#555] bg-[#0E0E0E] w-[390px] h-[54px] box-border hover:bg-[#1a1a1a] transition-colors duration-200 cursor-pointer"
					aria-expanded={isOpen}
					aria-controls="work-type-content"
				>
					<div className="text-[#E9BF99] font-['Figtree',-apple-system,Roboto,Helvetica,sans-serif] text-sm font-normal leading-[22px]">
						Type of work
					</div>
					<div className="flex items-center gap-4">
						<DropdownIcon isOpen={isOpen} />
					</div>
				</button>

				{/* Content */}
				<div
					id="work-type-content"
					className={`flex w-[390px] max-h-[360px] overflow-y-auto pt-4 flex-col justify-start items-start gap-4 flex-shrink-0 box-content border-[0.5px] border-[#555] bg-[#0E0E0E] transition-all duration-300 ease-in-out ${isOpen
						? "opacity-100 transform translate-y-0"
						: "opacity-0 transform -translate-y-4 pointer-events-none"
						}`}
					aria-hidden={!isOpen}
				>
					{/* Search */}
					<div className="flex px-4 items-center gap-4 w-[390px] h-12 box-border">
						<div className="flex flex-1 relative">
							<div className="relative w-full">
								<SearchIcon />
								<input
									type="text"
									placeholder="Search type of work"
									value={searchTerm}
									onChange={(e) => setSearchTerm(e.target.value)}
									className="w-full h-12 pl-12 pr-4 bg-black border-[0.5px] border-[#555] text-white text-sm placeholder-white/50 font-['Figtree',-apple-system,Roboto,Helvetica,sans-serif] focus:outline-none focus:ring-1 focus:ring-[#E9BF99]"
									aria-label="Search work types"
									tabIndex={isOpen ? 0 : -1}
								/>
							</div>
						</div>
						{searchTerm && (
							<button
								onClick={handleClearSearch}
								className="text-[#E9BF99] font-['Figtree',-apple-system,Roboto,Helvetica,sans-serif] text-sm font-normal leading-[22px] underline opacity-80 hover:opacity-100 transition-opacity"
								aria-label="Clear search"
								tabIndex={isOpen ? 0 : -1}
							>
								Clear
							</button>
						)}
					</div>

					{/* Checkbox Grid */}
					<div className="flex max-h-[320px] overflow-y-auto mb-4 justify-center items-center flex-shrink-0 border-t-[0.5px] border-b-[0.5px] border-[#555] w-[390px]">
						<div className="flex w-[390px] px-4 flex-col items-start box-border">
							{/* Create rows of 2 items each */}
							{Array.from({
								length: Math.ceil(filteredWorkTypes.length / 2),
							}).map((_, rowIndex) => (
								<div key={rowIndex} className="flex w-[358px] items-start">
									{filteredWorkTypes
										.slice(rowIndex * 2, rowIndex * 2 + 2)
										.map((workType) => (
											<label
												key={workType.id}
												className="flex w-[179px] p-3 items-center gap-2.5 flex-shrink-0 border-[0.5px] border-[#555] box-border cursor-pointer hover:bg-[#555]/10 transition-colors"
												htmlFor={`checkbox-${workType.id}`}
											>
												<div className="flex justify-center items-center gap-2">
													<input
														type="checkbox"
														id={`checkbox-${workType.id}`}
														checked={workType.checked}
														onChange={() => handleCheckboxChange(workType.id)}
														className="sr-only"
														aria-describedby={`label-${workType.id}`}
														tabIndex={isOpen ? 0 : -1}
													/>
													{workType.checked ? (
														<CheckboxChecked />
													) : (
														<CheckboxUnchecked />
													)}
													<span
														id={`label-${workType.id}`}
														className="text-white font-['Figtree',-apple-system,Roboto,Helvetica,sans-serif] text-sm font-normal leading-[22px] opacity-80"
													>
														{workType.label}
													</span>
												</div>
											</label>
										))}
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

const WorkTypeFilter: React.FC = () => {
	const handleOriginalSelectionChange = (types: string[]) => {
		console.log("Original component selected types:", types);
	};

	return (
		<WorkType
			onSelectionChange={handleOriginalSelectionChange}
		/>
	);
};

export default WorkTypeFilter;

