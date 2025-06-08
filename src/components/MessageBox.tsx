import React from "react";

interface MessageBoxProps {
  title: string;
  amount: string;
  message: string;
  hasCounterDetails?: boolean;
  className?: string;
}

export default function MessageBox({
  title,
  amount,
  message,
  hasCounterDetails = false,
  className = "",
}: MessageBoxProps) {
  return (
    <div
      className={`flex flex-col justify-end items-end w-[318px] h-[291px] font-figtree ${className}`}
    >
      <div className="flex flex-col justify-end items-end self-stretch relative">
        {/* Header Section */}
        <div className="flex p-3 justify-between items-center self-stretch border-[0.5px] border-white/40 bg-message-bg-dark relative">
          <div className="text-white/60 font-normal text-base leading-6 relative">
            {title}
          </div>
          <div className="text-white font-bold text-base leading-6 relative">
            {amount}
          </div>
        </div>

        {/* Message Body */}
        <div className="flex p-3 justify-center items-center gap-2 self-stretch border-[0.5px] border-white/40 bg-message-bg-medium relative">
          <div className="text-white font-normal text-xs leading-5 whitespace-pre-line flex-1 relative">
            {message}
          </div>
        </div>

        {/* Counter Details Section */}
        {hasCounterDetails && (
          <div className="flex py-[14px] px-3 flex-col items-start self-stretch border-[0.5px] border-white/40 bg-message-bg-medium relative">
            <div className="flex items-start self-stretch relative">
              <div className="flex items-center gap-[10px] flex-1 relative">
                <div className="text-white font-normal text-xs leading-5 relative">
                  Counter details
                </div>
              </div>
              <div className="text-message-accent font-normal text-xs leading-[14px] underline relative cursor-pointer hover:text-message-accent/80 transition-colors">
                View
              </div>
            </div>
          </div>
        )}

        {/* Message Tail SVG */}
        <svg
          width="318"
          height="13"
          viewBox="0 0 318 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex justify-end items-end gap-[10px] self-stretch relative w-[318px] h-[13px]"
        >
          <path d="M306 0.5H318V12.5L306 0.5Z" fill="#50483B" />
          <path
            d="M306.604 0.75L317.75 11.8965V0.75H306.604Z"
            stroke="white"
            strokeOpacity="0.4"
            strokeWidth="0.5"
          />
        </svg>
      </div>
    </div>
  );
}
