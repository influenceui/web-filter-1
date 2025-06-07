import React, { useState } from "react";

// Types
interface AgencySizeFilterProps {
  onRangeChange?: (min: number, max: number) => void;
  className?: string;
  defaultOpen?: boolean;
  minValue?: number;
  maxValue?: number;
  defaultMin?: number;
  defaultMax?: number;
}

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

const AgencySizeFilter: React.FC<AgencySizeFilterProps> = ({
  onRangeChange,
  className = "",
  defaultOpen = false,
  minValue = 0,
  maxValue = 10000,
  defaultMin = 0,
  defaultMax = 10000,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [minRange, setMinRange] = useState(defaultMin);
  const [maxRange, setMaxRange] = useState(defaultMax);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 0;
    setMinRange(value);
    onRangeChange?.(value, maxRange);
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 0;
    setMaxRange(value);
    onRangeChange?.(minRange, value);
  };

  const handleClear = () => {
    setMinRange(minValue);
    setMaxRange(maxValue);
    onRangeChange?.(minValue, maxValue);
  };

  // Calculate slider position percentages
  const minPercentage = ((minRange - minValue) / (maxValue - minValue)) * 100;
  const maxPercentage = ((maxRange - minValue) / (maxValue - minValue)) * 100;

  return (
    <>
      <style>
        {`
          .range-slider::-webkit-slider-thumb {
            appearance: none;
            width: 10px;
            height: 10px;
            background: transparent;
            cursor: pointer;
            border: none;
          }

          .range-slider::-moz-range-thumb {
            width: 10px;
            height: 10px;
            background: transparent;
            cursor: pointer;
            border: none;
          }

          .range-slider::-webkit-slider-track {
            background: transparent;
            height: 10px;
          }

          .range-slider::-moz-range-track {
            background: transparent;
            height: 10px;
          }
        `}
      </style>
      <div
        style={{
          width: "390px",
          height: "294px",
          position: "relative",
          fontFamily: "'Figtree', -apple-system, Roboto, Helvetica, sans-serif",
        }}
        className={className}
        role="region"
        aria-label="Agency size filter"
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
          aria-controls="agency-size-content"
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
            Agency size
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
          id="agency-size-content"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            border: "0.5px solid #555",
            background: "#0E0E0E",
            width: "390px",
            height: "208px",
            marginTop: "0px",
            opacity: isOpen ? 1 : 0,
            transform: isOpen ? "translateY(0)" : "translateY(-16px)",
            pointerEvents: isOpen ? "auto" : "none",
            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
          aria-hidden={!isOpen}
        >
          {/* Header Section */}
          <div
            style={{
              display: "flex",
              width: "390px",
              padding: "16px",
              justifyContent: "space-between",
              alignItems: "center",
              boxSizing: "border-box",
            }}
          >
            <div
              style={{
                color: "#FFF",
                fontFamily: "Figtree",
                fontSize: "20px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "28px",
                opacity: "0.8",
              }}
            >
              No. of People
            </div>
            <button
              onClick={handleClear}
              style={{
                color: "#E9BF99",
                fontFamily: "Figtree",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "22px",
                textDecorationLine: "underline",
                opacity: "0.8",
                cursor: "pointer",
                background: "transparent",
                border: "none",
              }}
              className="hover:opacity-100 transition-opacity"
              tabIndex={isOpen ? 0 : -1}
            >
              Clear
            </button>
          </div>

          {/* Slider Section */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "8px",
              width: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
				alignSelf: "center",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "12px",
                width: "326px",
              }}
            >
              {/* Slider Track */}
              <div
                style={{
                  height: "10px",
                  width: "100%",
                  position: "relative",
                }}
              >
                {/* Background Track */}
                <div
                  style={{
                    width: "326px",
                    height: "2px",
                    background: "#555",
                    position: "absolute",
                    left: "0px",
                    top: "4px",
                  }}
                />
                {/* Active Track */}
                <div
                  style={{
                    width: `${maxPercentage - minPercentage}%`,
                    height: "2px",
                    background: "#FFF",
                    position: "absolute",
                    left: `${minPercentage}%`,
                    top: "4px",
                  }}
                />

                {/* Max Range Input (bottom layer) */}
                <input
                  type="range"
                  min={minValue}
                  max={maxValue}
                  value={maxRange}
                  onChange={(e) => {
                    const value = Number(e.target.value);
                    if (value >= minRange) {
                      setMaxRange(value);
                      onRangeChange?.(minRange, value);
                    }
                  }}
                  style={{
                    position: "absolute",
                    width: "326px",
                    height: "10px",
                    top: "0px",
                    left: "0px",
                    background: "transparent",
                    appearance: "none",
                    pointerEvents: "auto",
                    zIndex: 1,
                  }}
                  className="range-slider range-slider-max"
                  tabIndex={isOpen ? 0 : -1}
                />

                {/* Min Range Input (top layer, but allows clicks through when handles overlap) */}
                <input
                  type="range"
                  min={minValue}
                  max={maxValue}
                  value={minRange}
                  onChange={(e) => {
                    const value = Number(e.target.value);
                    if (value <= maxRange) {
                      setMinRange(value);
                      onRangeChange?.(value, maxRange);
                    }
                  }}
                  style={{
                    position: "absolute",
                    width: "326px",
                    height: "10px",
                    top: "0px",
                    left: "0px",
                    background: "transparent",
                    appearance: "none",
                    zIndex: 2,
                    pointerEvents: Math.abs(minRange - maxRange) < (maxValue - minValue) * 0.02 ? 'none' : 'auto',
                  }}
                  className="range-slider range-slider-min"
                  tabIndex={isOpen ? 0 : -1}
                />

                {/* Min Handle Visual */}
                <div
                  style={{
                    width: "10px",
                    height: "10px",
                    background: "#E9BF99",
                    position: "absolute",
                    left: `calc(${minPercentage}% - 5px)`,
                    top: "0px",
                    pointerEvents: "none",
                    zIndex: 1,
                  }}
                />

                {/* Max Handle Visual */}
                <div
                  style={{
                    width: "10px",
                    height: "10px",
                    background: "#E9BF99",
                    position: "absolute",
                    left: `calc(${maxPercentage}% - 5px)`,
                    top: "0px",
                    pointerEvents: "none",
                    zIndex: 1,
                  }}
                />
              </div>

              {/* Slider Labels */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  width: "100%",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      color: "#FFF",
                      fontFamily: "Figtree",
                      fontSize: "12px",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight: "20px",
                      opacity: "0.6",
                    }}
                  >
                    {minValue.toLocaleString()}
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      color: "#FFF",
                      fontFamily: "Figtree",
                      fontSize: "12px",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight: "20px",
                      opacity: "0.6",
                    }}
                  >
                    {maxValue.toLocaleString()}
                  </div>
                </div>
              </div>
            </div>

            {/* Input Fields */}
            <div
              style={{
                display: "flex",
                padding: "0px 16px 16px 16px",
                alignItems: "flex-start",
                gap: "16px",
                width: "326px",
              }}
            >
              {/* Minimum Range Input */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "8px",
                  flex: "1",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "10px",
                  }}
                >
                  <div
                    style={{
                      color: "#FFF",
                      fontFamily: "Figtree",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight: "18px",
                      opacity: "0.8",
                    }}
                  >
                    Minimum Range
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "12px",
                    width: "100%",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      padding: "17px 16px",
                      alignItems: "center",
                      gap: "10px",
                      border: "0.5px solid #555",
                      background: "#000",
                      width: "100%",
                      boxSizing: "border-box",
                    }}
                  >
                    <input
                      type="number"
                      value={minRange}
                      onChange={handleMinChange}
                      style={{
                        flex: "1",
                        color: "#FFF",
                        fontFamily: "Figtree",
                        fontSize: "14px",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight: "22px",
                        background: "transparent",
                        border: "none",
                        outline: "none",
                      }}
                      tabIndex={isOpen ? 0 : -1}
                    />
                  </div>
                </div>
              </div>

              {/* Maximum Range Input */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "8px",
                  flex: "1",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "10px",
                  }}
                >
                  <div
                    style={{
                      color: "#FFF",
                      fontFamily: "Figtree",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight: "18px",
                      opacity: "0.8",
                    }}
                  >
                    Maximum Range
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "12px",
                    width: "100%",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      padding: "17px 16px",
                      alignItems: "center",
                      gap: "10px",
                      border: "0.5px solid #555",
                      background: "#000",
                      width: "100%",
                      boxSizing: "border-box",
                    }}
                  >
                    <input
                      type="number"
                      value={maxRange}
                      onChange={handleMaxChange}
                      style={{
                        flex: "1",
                        color: "#FFF",
                        fontFamily: "Figtree",
                        fontSize: "14px",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight: "22px",
                        background: "transparent",
                        border: "none",
                        outline: "none",
                      }}
                      tabIndex={isOpen ? 0 : -1}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AgencySizeFilter;

