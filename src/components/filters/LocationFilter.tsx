import React, { useState } from "react";

// Types
interface Location {
  id: string;
  name: string;
  checked: boolean;
}

interface LocationFilterProps {
  onSelectionChange?: (selectedLocations: string[]) => void;
  className?: string;
  defaultOpen?: boolean;
  locations?: Location[];
}

// Default locations data
const DEFAULT_LOCATIONS: Location[] = [
  { id: "all", name: "All", checked: false },
  { id: "ahmedabad", name: "Ahmedabad", checked: true },
  { id: "alwar", name: "Alwar", checked: false },
  { id: "amla", name: "Amla", checked: false },
  { id: "amritsar", name: "Amritsar", checked: false },
  { id: "aurangabad", name: "Aurangabad", checked: true },
  { id: "bambora", name: "Bambora", checked: false },
  { id: "bandhavgarh", name: "Bandhavgarh", checked: false },
  { id: "bambora-2", name: "Bambora", checked: false },
  { id: "bandhavgarh-2", name: "Bandhavgarh", checked: false },
];

// Icon Components
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
    style={{
      width: "24px",
      height: "24px",
      flexShrink: 0,
    }}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
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
  <div
    style={{
      width: "24px",
      height: "24px",
      position: "relative",
    }}
  >
    <div
      style={{
        width: "17px",
        height: "17px",
        background: "#E9BF99",
        position: "absolute",
        left: "4px",
        top: "4px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <svg
        width="12"
        height="8"
        viewBox="0 0 12 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          width: "12px",
          height: "8px",
        }}
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
  <div
    style={{
      width: "24px",
      height: "24px",
      position: "relative",
    }}
  >
    <div
      style={{
        width: "17px",
        height: "17px",
        border: "1px solid #555",
        position: "absolute",
        left: "4px",
        top: "4px",
      }}
    />
  </div>
);

const LocationFilter: React.FC<LocationFilterProps> = ({
  onSelectionChange,
  className = "",
  defaultOpen = false,
  locations = DEFAULT_LOCATIONS,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [locationStates, setLocationStates] = useState<Location[]>(locations);

  const handleCheckboxChange = (id: string) => {
    let updatedLocations: Location[];

    if (id === "all") {
      // Check if all items (excluding "All") are currently selected
      const nonAllLocations = locationStates.filter(
        (location) => location.id !== "all",
      );
      const allSelected = nonAllLocations.every((location) => location.checked);

      if (allSelected) {
        // If all are selected, deselect everything including "All"
        updatedLocations = locationStates.map((location) => ({
          ...location,
          checked: false,
        }));
      } else {
        // If not all are selected, select everything including "All"
        updatedLocations = locationStates.map((location) => ({
          ...location,
          checked: true,
        }));
      }
    } else {
      // If any other option is clicked, uncheck "All" and toggle the clicked option
      updatedLocations = locationStates.map((location) => {
        if (location.id === "all") {
          return { ...location, checked: false };
        }
        if (location.id === id) {
          return { ...location, checked: !location.checked };
        }
        return location;
      });
    }

    setLocationStates(updatedLocations);

    // Call the callback with selected locations
    const selectedLocations = updatedLocations
      .filter((location) => location.checked)
      .map((location) => location.id);

    onSelectionChange?.(selectedLocations);
  };

  const handleClearSearch = () => {
    setSearchTerm("");
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const filteredLocations = locationStates.filter((location) =>
    location.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Figtree:wght@400&display=swap"
        rel="stylesheet"
      />
      <div
        style={{
          width: "390px",
          maxHeight: "415px",
          position: "relative",
          fontFamily: "'Figtree', sans-serif",
        }}
        className={className}
        role="region"
        aria-label="Location filter"
      >
        {/* Header */}
        <button
          onClick={handleToggle}
          style={{
            display: "flex",
            padding: "15px 16px",
            justifyContent: "space-between",
            alignItems: "center",
            border: "0.5px solid #555",
            background: "#0E0E0E",
            width: "390px",
            height: "54px",
            boxSizing: "border-box",
            cursor: "pointer",
          }}
          className="hover:bg-[#1a1a1a] transition-colors duration-200"
          aria-expanded={isOpen}
          aria-controls="location-content"
        >
          <div
            style={{
              color: "#E9BF99",
              fontFamily: "Figtree",
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "22px",
            }}
          >
            Location
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <DropdownIcon isOpen={isOpen} />
          </div>
        </button>

        {/* Content */}
        <div
          id="location-content"
          style={{
            display: isOpen ? "flex" : "none",
            padding: "16px 0px",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "16px",
            border: "0.5px solid #555",
            background: "#0E0E0E",
            width: "390px",
            maxHeight: "361px",
            boxSizing: "border-box",
            opacity: isOpen ? 1 : 0,
            transform: isOpen ? "translateY(0)" : "translateY(-16px)",
            pointerEvents: isOpen ? "auto" : "none",
            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
          aria-hidden={!isOpen}
        >
          {/* Search */}
          <div
            style={{
              display: "flex",
              width: "390px",
              padding: "0px 16px",
              alignItems: "center",
              gap: "16px",
              boxSizing: "border-box",
            }}
          >
            <div
              style={{
                display: "flex",
                padding: "12px 16px",
                alignItems: "center",
                gap: "15px",
                flex: "1",
                border: "0.5px solid #555",
                background: "#000",
                position: "relative",
              }}
            >
              <SearchIcon />
              <input
                type="text"
                placeholder="Search type of work"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  color: "white",
                  opacity: searchTerm ? "1" : "0.5",
                  fontFamily: "Figtree",
                  fontSize: "14px",
                  fontWeight: "400",
                  lineHeight: "22px",
                  background: "transparent",
                  border: "none",
                  outline: "none",
                  flex: 1,
                }}
                tabIndex={isOpen ? 0 : -1}
              />
            </div>
            {searchTerm && (
              <button
                onClick={handleClearSearch}
                style={{
                  color: "#E9BF99",
                  fontFamily: "Figtree",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "22px",
                  textDecorationLine: "underline",
                  opacity: "0.8",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                }}
                className="hover:opacity-100 transition-opacity"
                tabIndex={isOpen ? 0 : -1}
              >
                Clear
              </button>
            )}
          </div>

          {/* Checkbox Grid */}
          <div
            style={{
              display: "flex",
              width: "390px",
              justifyContent: "center",
              alignItems: "center",
              borderTop: "0.5px solid #555",
              borderBottom: "0.5px solid #555",
              position: "relative",
            }}
          >
            <div
              style={{
                display: "flex",
                width: "390px",
                padding: "0px 16px",
                flexDirection: "column",
                alignItems: "flex-start",
                flexShrink: "0",
                boxSizing: "border-box",
              }}
            >
              {/* Create rows of 2 items each */}
              {Array.from({
                length: Math.ceil(filteredLocations.length / 2),
              }).map((_, rowIndex) => (
                <div
                  key={rowIndex}
                  style={{
                    display: "flex",
                    width: "100%",
                    alignItems: "flex-start",
                  }}
                >
                  {filteredLocations
                    .slice(rowIndex * 2, rowIndex * 2 + 2)
                    .map((location) => (
                      <label
                        key={location.id}
                        style={{
                          display: "flex",
                          width: "50%",
                          padding: "12px 10px",
                          alignItems: "center",
                          gap: "10px",
                          border: "0.5px solid #555",
                          boxSizing: "border-box",
                          cursor: "pointer",
                        }}
                        className="hover:bg-[#555]/10 transition-colors"
                        htmlFor={`location-checkbox-${location.id}`}
                      >
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "8px",
                          }}
                        >
                          <input
                            type="checkbox"
                            id={`location-checkbox-${location.id}`}
                            checked={location.checked}
                            onChange={() => handleCheckboxChange(location.id)}
                            className="sr-only"
                            tabIndex={isOpen ? 0 : -1}
                          />
                          {location.checked ? (
                            <CheckboxChecked />
                          ) : (
                            <CheckboxUnchecked />
                          )}
                          <div
                            style={{
                              color: "#FFF",
                              fontFamily: "Figtree",
                              fontSize: "14px",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight: "22px",
                              textTransform:
                                location.id === "all" ? "capitalize" : "none",
                              opacity: "0.8",
                            }}
                          >
                            {location.name}
                          </div>
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

export default LocationFilter;

