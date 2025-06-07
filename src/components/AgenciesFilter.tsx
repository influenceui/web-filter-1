import React, { useState } from "react";

// Types
interface Agency {
  id: string;
  name: string;
  location: string;
  logo: string;
  logoAlt: string;
  logoBackground?: string;
}

interface AgenciesFilterProps {
  onAgencySelect?: (agency: Agency) => void;
  className?: string;
  defaultOpen?: boolean;
  agencies?: Agency[];
}

// Default agencies data
const DEFAULT_AGENCIES: Agency[] = [
  {
    id: "omd-worldwide",
    name: "OMD Worldwide",
    location: "Gandhinagar, Adalaj",
    logo: "https://cdn.builder.io/api/v1/image/assets%2F4f7b2b90d5bb4f64a97f71e3a8b1a3f1%2Ff1f6e2d9c4a84e2e9b8a1f3c2d5e6f7a",
    logoAlt: "OMD Worldwide logo",
    logoBackground: "#FFF",
  },
  {
    id: "dentsu",
    name: "Dentsu",
    location: "Pune, Wakad",
    logo: "https://cdn.builder.io/api/v1/image/assets%2F4f7b2b90d5bb4f64a97f71e3a8b1a3f1%2Fa2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7",
    logoAlt: "Dentsu logo",
    logoBackground: "#000",
  },
  {
    id: "ddb-mudra",
    name: "DDB Mudra Group",
    location: "Pune, Wakad",
    logo: "https://cdn.builder.io/api/v1/image/assets%2F4f7b2b90d5bb4f64a97f71e3a8b1a3f1%2Fb3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8",
    logoAlt: "DDB Mudra Group logo",
    logoBackground: "#FFF",
  },
  {
    id: "mccann-erickson",
    name: "McCann Erickson (India)...",
    location: "Mumbai, Dadar",
    logo: "https://cdn.builder.io/api/v1/image/assets%2F4f7b2b90d5bb4f64a97f71e3a8b1a3f1%2Fc4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9",
    logoAlt: "McCann Erickson logo",
    logoBackground: "#FFF",
  },
];

// Icon Components
const DropdownIcon: React.FC<{ isOpen: boolean }> = ({ isOpen }) => (
  <svg
    width="16"
    height="9"
    viewBox="0 0 16 9"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`w-6 h-6 flex-shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
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

const AgencyLogo: React.FC<{ agency: Agency }> = ({ agency }) => (
  <div className="w-16 h-16 relative flex-shrink-0">
    <div
      className="w-16 h-16 absolute left-0 top-0 flex items-center justify-center"
      style={{ backgroundColor: agency.logoBackground || "#FFF" }}
    >
      <img
        src={agency.logo}
        alt={agency.logoAlt}
        className="max-w-[60px] max-h-[38px] object-contain"
        onError={(e) => {
          // Fallback to colored placeholder if image fails to load
          const target = e.target as HTMLImageElement;
          target.style.display = "none";
          const parent = target.parentElement;
          if (parent) {
            parent.innerHTML = `<div class="w-12 h-8 bg-gray-300 rounded flex items-center justify-center text-xs font-medium text-gray-600">${agency.name.substring(0, 3)}</div>`;
          }
        }}
      />
    </div>
  </div>
);

const AgenciesFilter: React.FC<AgenciesFilterProps> = ({
  onAgencySelect,
  className = "",
  defaultOpen = false,
  agencies = DEFAULT_AGENCIES,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [selectedAgencyId, setSelectedAgencyId] = useState<string | null>(null);

  const handleClearSearch = () => {
    setSearchTerm("");
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleAgencyClick = (agency: Agency) => {
    onAgencySelect?.(agency);
  };

  const filteredAgencies = agencies.filter(
    (agency) =>
      agency.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      agency.location.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Figtree:wght@400&family=Cabinet+Grotesk:wght@700&display=swap"
      />
      <div
        className={`w-[390px] ${isOpen ? "h-[415px]" : "h-[54px]"} relative bg-[#0E0E0E] border-[0.5px] border-[#555] transition-all duration-300 ease-in-out overflow-hidden ${className}`}
        role="region"
        aria-label="Agencies filter"
      >
        {/* Header */}
        <button
          onClick={handleToggle}
          className="flex px-4 py-[15px] justify-between items-center border-b-[0.5px] border-[#555] bg-[#0E0E0E] w-full h-[54px] box-border hover:bg-[#1a1a1a] transition-colors duration-200 cursor-pointer"
          aria-expanded={isOpen}
          aria-controls="agencies-content"
        >
          <span className="text-[#E9BF99] font-['Figtree',sans-serif] text-sm font-normal leading-[22px]">
            Agencies
          </span>
          <div className="flex items-center gap-4">
            <DropdownIcon isOpen={isOpen} />
          </div>
        </button>

        {/* Content */}
        <div
          id="agencies-content"
          className={`flex w-full py-4 flex-col justify-start items-start gap-4 border-[0.5px] border-[#555] bg-[#0E0E0E] box-border transition-all duration-300 ease-in-out ${
            isOpen
              ? "opacity-100 transform translate-y-0"
              : "opacity-0 transform -translate-y-4 pointer-events-none"
          }`}
          aria-hidden={!isOpen}
        >
          {/* Search */}
          <div className="flex w-full px-4 items-center gap-4 box-border">
            <div className="flex items-center gap-4 w-full">
              <div className="relative flex-1">
                <SearchIcon />
                <input
                  type="text"
                  placeholder="Search type of work"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full h-12 pl-12 pr-4 bg-black border-[0.5px] border-[#555] text-white text-sm placeholder-white/50 font-['Figtree',sans-serif] focus:outline-none focus:ring-1 focus:ring-[#E9BF99]"
                  aria-label="Search agencies"
                  tabIndex={isOpen ? 0 : -1}
                />
              </div>
              {searchTerm && (
                <button
                  onClick={handleClearSearch}
                  className="text-[#E9BF99] font-['Figtree',sans-serif] text-sm font-normal leading-[22px] underline opacity-80 hover:opacity-100 transition-opacity"
                  aria-label="Clear search"
                  tabIndex={isOpen ? 0 : -1}
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Agencies List */}
          <div className="flex w-full justify-center items-start border-[0.5px] border-[#555] flex-col h-[320px] overflow-y-auto">
            {filteredAgencies.length > 0 ? (
              filteredAgencies.map((agency) => (
                <button
                  key={agency.id}
                  onClick={() => handleAgencyClick(agency)}
                  className="flex px-4 py-0 justify-between items-center w-full border-b-[0.5px] border-[#555] box-border hover:bg-[#555]/10 transition-colors cursor-pointer group"
                  tabIndex={isOpen ? 0 : -1}
                  aria-label={`Select ${agency.name} in ${agency.location}`}
                >
                  <div className="flex items-center gap-4 flex-1 border-[0.5px] border-[#555] py-3">
                    <AgencyLogo agency={agency} />
                    <div className="flex flex-col items-start gap-0.5">
                      <div className="flex items-center gap-2">
                        <span className="text-white font-['Cabinet_Grotesk',sans-serif] text-base font-bold leading-[22px] opacity-80 group-hover:opacity-100 transition-opacity">
                          {agency.name}
                        </span>
                      </div>
                      <span className="text-white font-['Figtree',sans-serif] text-xs font-normal leading-[14px] opacity-80 group-hover:opacity-100 transition-opacity">
                        {agency.location}
                      </span>
                    </div>
                  </div>
                </button>
              ))
            ) : (
              <div className="flex items-center justify-center w-full h-full">
                <span className="text-white/50 font-['Figtree',sans-serif] text-sm">
                  No agencies found
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AgenciesFilter;
