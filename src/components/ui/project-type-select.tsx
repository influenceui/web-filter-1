import React, { useState } from "react";
import { cn } from "@/lib/utils";

// Types
interface ProjectTypeSelectProps {
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
  disabled?: boolean;
}

// Project types matching the design
const PROJECT_TYPES = [
  "Branding",
  "Packaging",
  "Graphic Design",
  "Animation",
  "Photography",
  "Production",
];

// Icon component for the dropdown arrow
const DropdownArrowIcon: React.FC = () => (
  <svg
    width="16"
    height="9"
    viewBox="0 0 16 9"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-4 h-2 flex-shrink-0"
  >
    <path
      d="M7.65383 8.70762L0 1.05383L1.05383 0L7.65383 6.6L14.2538 0L15.3077 1.05383L7.65383 8.70762Z"
      fill="white"
    />
  </svg>
);

export const ProjectTypeSelect = React.forwardRef<
  HTMLDivElement,
  ProjectTypeSelectProps
>(({ value, onChange, className, disabled = false, ...props }, ref) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  const handleSelect = (projectType: string) => {
    onChange?.(projectType);
    setIsOpen(false);
  };

  const handleBackdropClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Figtree:wght@400&display=swap"
        rel="stylesheet"
      />
      <div
        ref={ref}
        className={cn("relative", className)}
        style={{ width: "358px", height: "358px" }}
        {...props}
      >
        {/* Input Field Container */}
        <div
          className="flex flex-col items-start gap-2 absolute left-0 top-0"
          style={{ width: "358px", height: "82px" }}
        >
          {/* Label */}
          <div className="flex items-start gap-2.5">
            <div
              className="text-white opacity-80"
              style={{
                fontFamily:
                  "Figtree, -apple-system, Roboto, Helvetica, sans-serif",
                fontSize: "14px",
                fontWeight: "400",
                lineHeight: "18px",
              }}
            >
              <span>Type of Work</span>
              <span className="text-[#F65F5F]">*</span>
            </div>
          </div>

          {/* Dropdown Trigger */}
          <div className="flex flex-col items-start gap-3 w-full">
            <button
              type="button"
              onClick={handleToggle}
              disabled={disabled}
              className={cn(
                "flex items-center gap-2.5 w-full px-4 py-4 border-[0.5px] border-[#555] bg-black",
                disabled && "opacity-50 cursor-not-allowed",
              )}
              style={{ padding: "16px" }}
            >
              <div className="flex justify-between items-center flex-1">
                <div
                  className={cn(
                    "text-left",
                    value ? "text-white" : "text-[#555]",
                  )}
                  style={{
                    fontFamily:
                      "Figtree, -apple-system, Roboto, Helvetica, sans-serif",
                    fontSize: "14px",
                    fontWeight: "400",
                    lineHeight: "22px",
                  }}
                >
                  {value || "Select your project type"}
                </div>
                <div className="w-6 h-6 relative">
                  <div className="absolute right-0 top-2">
                    <DropdownArrowIcon />
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* Dropdown Content */}
        {isOpen && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 z-40"
              onClick={handleBackdropClick}
              aria-hidden="true"
            />

            {/* Dropdown Panel */}
            <div
              className="absolute left-0 z-50 flex flex-col items-start bg-[#0E0E0E] border-b-[0.5px] border-[#555]"
              style={{
                top: "82px",
                width: "358px",
                height: "276px",
              }}
            >
              {PROJECT_TYPES.map((projectType, index) => (
                <button
                  key={projectType}
                  type="button"
                  onClick={() => handleSelect(projectType)}
                  className="flex items-center w-full px-4 py-3 border-r-[0.5px] border-b-[0.5px] border-l-[0.5px] border-[#555] hover:bg-[#1a1a1a] transition-colors"
                  style={{
                    padding: "12px 16px",
                    gap: "173px", // This creates the spacing as shown in design
                  }}
                >
                  <div
                    className="text-white text-left"
                    style={{
                      fontFamily:
                        "Figtree, -apple-system, Roboto, Helvetica, sans-serif",
                      fontSize: "14px",
                      fontWeight: "400",
                      lineHeight: "22px",
                    }}
                  >
                    {projectType}
                  </div>
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
});

ProjectTypeSelect.displayName = "ProjectTypeSelect";
