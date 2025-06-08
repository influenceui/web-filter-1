import React, { useState } from "react";
import { cn } from "@/lib/utils";

// Types
interface CalendarDatePickerProps {
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
  disabled?: boolean;
}

// Calendar icon component
const CalendarIcon: React.FC = () => (
  <svg
    width="18"
    height="20"
    viewBox="0 0 18 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-[17px] h-[19px] flex-shrink-0"
  >
    <path
      d="M0.5 19.5001V2.50014H3.69233V0.384766H5.23075V2.50014H12.8077V0.384766H14.3076V2.50014H17.5V19.5001H0.5ZM1.99997 18.0001H16V8.30784H1.99997V18.0001ZM1.99997 6.80787H16V4.00012H1.99997V6.80787Z"
      fill="white"
    />
  </svg>
);

// Left arrow icon
const LeftArrowIcon: React.FC = () => (
  <svg
    viewBox="0 0 9 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="flex-shrink-0"
  >
    <path
      d="M0.292376 7.65383L7.94617 1.25667e-08L9 1.05383L2.4 7.65383L9 14.2538L7.94617 15.3077L0.292376 7.65383Z"
      fill="white"
    />
  </svg>
);

// Right arrow icon
const RightArrowIcon: React.FC = () => (
  <svg
    viewBox="0 0 9 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="flex-shrink-0"
  >
    <path
      d="M8.70762 8.34617L1.05383 16L-4.60642e-08 14.9462L6.6 8.34617L-6.23054e-07 1.74617L1.05382 0.692349L8.70762 8.34617Z"
      fill="white"
    />
  </svg>
);

const DAYS_OF_WEEK = ["S", "M", "T", "W", "T", "F", "S"];
const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const CalendarDatePicker = React.forwardRef<
  HTMLDivElement,
  CalendarDatePickerProps
>(({ value, onChange, className, disabled = false, ...props }, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(
    value ? new Date(value) : null,
  );

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);
  const firstDayWeekday = firstDayOfMonth.getDay();
  const daysInMonth = lastDayOfMonth.getDate();

  const handleToggle = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  const handlePrevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const handleDateSelect = (day: number) => {
    const selected = new Date(year, month, day);
    setSelectedDate(selected);
    onChange?.(selected.toISOString().split("T")[0]);
    setIsOpen(false);
  };

  const formatDisplayDate = (date: Date | null) => {
    if (!date) return "Select deadline date";
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const isDateSelected = (day: number) => {
    if (!selectedDate) return false;
    return (
      selectedDate.getFullYear() === year &&
      selectedDate.getMonth() === month &&
      selectedDate.getDate() === day
    );
  };

  // Generate calendar days
  const calendarDays = [];

  // Add empty cells for days before the first day of the month
  for (let i = 0; i < firstDayWeekday; i++) {
    calendarDays.push(null);
  }

  // Add all days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(day);
  }

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Figtree:wght@400;700&family=Cabinet+Grotesk:wght@400&display=swap"
        rel="stylesheet"
      />
      <div
        ref={ref}
        className={cn("relative", className)}
        style={{ width: "358px" }}
        {...props}
      >
        {/* Input Field */}
        <div className="flex flex-col items-start gap-2">
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
              Deadline
            </div>
          </div>

          {/* Trigger */}
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
                    selectedDate ? "text-white" : "text-[#555]",
                  )}
                  style={{
                    fontFamily:
                      "Figtree, -apple-system, Roboto, Helvetica, sans-serif",
                    fontSize: "14px",
                    fontWeight: "400",
                    lineHeight: "22px",
                  }}
                >
                  {formatDisplayDate(selectedDate)}
                </div>
                <div className="w-6 h-6 relative">
                  <div className="absolute right-0 top-0.5">
                    <CalendarIcon />
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* Calendar Dropdown */}
        {isOpen && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />

            {/* Calendar Panel */}
            <div
              className="absolute top-full z-50 flex flex-col items-start bg-[#0E0E0E] border-[0.5px] border-[#555] shadow-[0px_14px_32px_0px_rgba(0,0,0,0.60)]"
              style={{
                width: "358px",
                maxHeight: "432px",
              }}
            >
              {/* Month Navigation */}
              <div className="flex py-4 items-center justify-between px-6 w-full">
                <button
                  type="button"
                  onClick={handlePrevMonth}
                  className="w-2 h-2 flex justify-center items-center hover:opacity-80 transition-opacity"
                >
                  <LeftArrowIcon />
                </button>

                <div
                  className="text-white text-center"
                  style={{
                    fontFamily:
                      "'Cabinet Grotesk', -apple-system, Roboto, Helvetica, sans-serif",
                    fontSize: "24px",
                    fontWeight: "400",
                    lineHeight: "32px",
                  }}
                >
                  {MONTHS[month]} {year}
                </div>

                <button
                  type="button"
                  onClick={handleNextMonth}
                  className="w-2 h-2 flex justify-center items-center hover:opacity-80 transition-opacity"
                >
                  <RightArrowIcon />
                </button>
              </div>

              {/* Calendar Grid */}
              <div
                className="border-t-[0.5px] border-[#555] relative"
                style={{ width: "358px", height: "286px" }}
              >
                {/* Day Labels */}
                <div
                  className="absolute flex justify-between items-center"
                  style={{
                    left: "26px",
                    top: "8px",
                    width: "309px",
                    height: "18px",
                  }}
                >
                  {DAYS_OF_WEEK.map((day, index) => (
                    <div
                      key={index}
                      className="text-[#939393] text-center"
                      style={{
                        fontFamily:
                          "Figtree, -apple-system, Roboto, Helvetica, sans-serif",
                        fontSize: "13px",
                        fontWeight: "400",
                        lineHeight: "18px",
                        width: "7px",
                      }}
                    >
                      {day}
                    </div>
                  ))}
                </div>

                {/* Vertical Lines */}
                <div className="absolute left-[53px] top-0 w-[252px] h-[286px]">
                  {[0, 1, 2, 3, 4, 5].map((line) => (
                    <div
                      key={line}
                      className="absolute w-[0.5px] h-full bg-[#555555]"
                      style={{ left: `${line * 50.487}px` }}
                    />
                  ))}
                </div>

                {/* Horizontal Lines */}
                {[36, 86, 136, 186, 236, 286].map((top, index) => (
                  <div
                    key={index}
                    className="absolute w-full h-[0.5px] bg-[#555555]"
                    style={{ top: `${top}px` }}
                  />
                ))}

                {/* Calendar Days */}
                <div className="absolute left-[15px] top-[36px] w-[329px]">
                  {[0, 1, 2, 3, 4].map((week) => (
                    <div
                      key={week}
                      className="absolute flex justify-center items-start gap-[4.225px] w-[329px] h-[50px]"
                      style={{ top: `${week * 50}px` }}
                    >
                      {Array.from({ length: 7 }).map((_, dayIndex) => {
                        const dayNumber = calendarDays[week * 7 + dayIndex];
                        const isSelected =
                          dayNumber && isDateSelected(dayNumber);

                        return (
                          <div
                            key={dayIndex}
                            className={`absolute flex flex-col justify-center items-center w-[${49 - week}px] h-[50px]`}
                            style={{ left: `${-10 + dayIndex * 51 - 3}px` }}
                          >
                            {dayNumber && (
                              <>
                                {/* Selected background */}
                                {isSelected && (
                                  <div
                                    className="absolute w-[50px] h-[50px] bg-[#50483B]"
                                    style={{ left: "-2px", top: "0px" }}
                                  />
                                )}

                                {/* Day button */}
                                <button
                                  type="button"
                                  onClick={() => handleDateSelect(dayNumber)}
                                  className="relative flex flex-col justify-center items-center w-[46px] h-[50px] hover:bg-[#555]/20 transition-colors"
                                >
                                  <div
                                    className={cn(
                                      "text-center",
                                      isSelected
                                        ? "text-white font-bold"
                                        : "text-white opacity-60",
                                    )}
                                    style={{
                                      fontFamily:
                                        "Figtree, -apple-system, Roboto, Helvetica, sans-serif",
                                      fontSize: "20px",
                                      fontWeight: isSelected ? "700" : "400",
                                      lineHeight: "normal",
                                    }}
                                  >
                                    {dayNumber}
                                  </div>
                                </button>
                              </>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
});

CalendarDatePicker.displayName = "CalendarDatePicker";
