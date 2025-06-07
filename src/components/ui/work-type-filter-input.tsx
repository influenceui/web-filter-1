import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

// Types
interface WorkType {
  id: string;
  label: string;
  checked: boolean;
}

interface WorkTypeFilterInputProps {
  value?: string[];
  onChange?: (selectedTypes: string[]) => void;
  disabled?: boolean;
  className?: string;
  placeholder?: string;
  workTypes?: { id: string; label: string }[];
}

// Default work types
const DEFAULT_WORK_TYPES = [
  { id: "all", label: "All" },
  { id: "branding", label: "Branding" },
  { id: "packaging", label: "Packaging" },
  { id: "graphic-design", label: "Graphic Design" },
  { id: "animation", label: "Animation" },
  { id: "photography", label: "Photography" },
  { id: "production", label: "Production" },
  { id: "post-production", label: "Post Production" },
  { id: "social-media", label: "Social Media" },
  { id: "marketing", label: "Marketing" },
];

// Icon Components
const DropdownIcon: React.FC<{ isOpen: boolean }> = ({ isOpen }) => (
  <svg
    width="16"
    height="9"
    viewBox="0 0 16 9"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn(
      "w-4 h-2 flex-shrink-0 transition-transform",
      isOpen && "rotate-180",
    )}
  >
    <path
      d="M8.34617 0.292376L16 7.94617L14.9462 9L8.34617 2.4L1.74617 9L0.692349 7.94618L8.34617 0.292376Z"
      fill="currentColor"
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
    className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
  >
    <circle
      cx="11"
      cy="11"
      r="8"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m21 21-4.35-4.35"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CheckIcon: React.FC = () => (
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
      fill="currentColor"
    />
  </svg>
);

const WorkTypeFilterInput = React.forwardRef<
  HTMLDivElement,
  WorkTypeFilterInputProps
>(
  (
    {
      value = [],
      onChange,
      disabled = false,
      className,
      placeholder = "Select work types...",
      workTypes = DEFAULT_WORK_TYPES,
      ...props
    },
    ref,
  ) => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [internalWorkTypes, setInternalWorkTypes] = useState<WorkType[]>([]);

    // Initialize work types with checked state based on value prop
    useEffect(() => {
      const initialized = workTypes.map((type) => ({
        ...type,
        checked: value.includes(type.id),
      }));
      setInternalWorkTypes(initialized);
    }, [workTypes, value]);

    const handleCheckboxChange = (id: string) => {
      let updatedWorkTypes: WorkType[];

      if (id === "all") {
        // If "All" is clicked, uncheck all others and check "All"
        updatedWorkTypes = internalWorkTypes.map((type) => ({
          ...type,
          checked: type.id === "all",
        }));
      } else {
        // If any other option is clicked, uncheck "All" and toggle the clicked option
        updatedWorkTypes = internalWorkTypes.map((type) => {
          if (type.id === "all") {
            return { ...type, checked: false };
          }
          if (type.id === id) {
            return { ...type, checked: !type.checked };
          }
          return type;
        });
      }

      setInternalWorkTypes(updatedWorkTypes);

      // Call the callback with selected types
      const selectedTypes = updatedWorkTypes
        .filter((type) => type.checked)
        .map((type) => type.id);

      onChange?.(selectedTypes);
    };

    const handleClearSearch = () => {
      setSearchTerm("");
    };

    const filteredWorkTypes = internalWorkTypes.filter((type) =>
      type.label.toLowerCase().includes(searchTerm.toLowerCase()),
    );

    const selectedCount = internalWorkTypes.filter(
      (type) => type.checked,
    ).length;
    const displayText =
      selectedCount === 0
        ? placeholder
        : selectedCount === 1 &&
            internalWorkTypes.find((t) => t.id === "all")?.checked
          ? "All work types"
          : `${selectedCount} work types selected`;

    return (
      <div ref={ref} className={cn("relative", className)} {...props}>
        {/* Trigger */}
        <button
          type="button"
          onClick={() => !disabled && setIsOpen(!isOpen)}
          disabled={disabled}
          className={cn(
            "flex w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background",
            "placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
            disabled && "cursor-not-allowed opacity-50",
            isOpen && "ring-2 ring-ring ring-offset-2",
          )}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          aria-label="Select work types"
        >
          <span className={cn(selectedCount === 0 && "text-muted-foreground")}>
            {displayText}
          </span>
          <DropdownIcon isOpen={isOpen} />
        </button>

        {/* Dropdown */}
        {isOpen && (
          <div className="absolute top-full z-50 mt-1 w-full rounded-md border bg-popover text-popover-foreground shadow-lg">
            {/* Search */}
            <div className="p-3 border-b">
              <div className="relative">
                <SearchIcon />
                <input
                  type="text"
                  placeholder="Search work types..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 text-sm bg-background border rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                  onClick={(e) => e.stopPropagation()}
                />
                {searchTerm && (
                  <button
                    onClick={handleClearSearch}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    ×
                  </button>
                )}
              </div>
            </div>

            {/* Options */}
            <div className="max-h-60 overflow-auto p-1">
              {filteredWorkTypes.map((workType) => (
                <label
                  key={workType.id}
                  className="flex items-center gap-2 px-3 py-2 text-sm cursor-pointer hover:bg-accent hover:text-accent-foreground rounded-sm"
                  htmlFor={`checkbox-${workType.id}`}
                >
                  <div className="relative flex items-center">
                    <input
                      type="checkbox"
                      id={`checkbox-${workType.id}`}
                      checked={workType.checked}
                      onChange={() => handleCheckboxChange(workType.id)}
                      className="sr-only"
                    />
                    <div
                      className={cn(
                        "w-4 h-4 border rounded flex items-center justify-center",
                        workType.checked
                          ? "bg-primary border-primary text-primary-foreground"
                          : "border-input",
                      )}
                    >
                      {workType.checked && <CheckIcon />}
                    </div>
                  </div>
                  <span>{workType.label}</span>
                </label>
              ))}
              {filteredWorkTypes.length === 0 && (
                <div className="px-3 py-2 text-sm text-muted-foreground text-center">
                  No work types found
                </div>
              )}
            </div>
          </div>
        )}

        {/* Backdrop to close dropdown */}
        {isOpen && (
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
        )}
      </div>
    );
  },
);

WorkTypeFilterInput.displayName = "WorkTypeFilterInput";

export { WorkTypeFilterInput };
