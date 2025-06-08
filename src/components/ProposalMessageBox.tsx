import React from "react";
import { Download } from "lucide-react";

interface ProposalMessageBoxProps {
  title: string;
  amount: string;
  message: string;
  attachmentName?: string;
  onCounter?: () => void;
  onAccept?: () => void;
  className?: string;
}

export default function ProposalMessageBox({
  title,
  amount,
  message,
  attachmentName,
  onCounter,
  onAccept,
  className = "",
}: ProposalMessageBoxProps) {
  return (
    <div
      className={`flex flex-col justify-end items-start w-[318px] h-[300px] font-figtree ${className}`}
    >
      <div className="flex flex-col justify-end items-start self-stretch relative">
        {/* Header Section */}
        <div className="flex p-3 justify-between items-center self-stretch border-[0.5px] border-white/40 bg-[#0E0E0E] relative">
          <div className="text-white/60 font-normal text-base leading-6 relative">
            {title}
          </div>
          <div className="text-white font-bold text-base leading-6 relative">
            {amount}
          </div>
        </div>

        {/* Message Body */}
        <div className="flex p-3 justify-center items-center gap-2 self-stretch border-[0.5px] border-white/40 bg-[#1C1A1F] relative flex-1">
          <div className="text-white font-normal text-xs leading-5 relative flex-1">
            {message}
          </div>
        </div>

        {/* File Attachment Section */}
        {attachmentName && (
          <div className="flex p-3 flex-col justify-center items-start self-stretch border-[0.5px] border-[#555] bg-[#0E0E0E] relative">
            <div className="flex items-center self-stretch relative">
              <div className="text-white/60 font-normal text-xs leading-5 relative flex-1 flex items-center gap-[10px]">
                {attachmentName}
              </div>
              <div className="w-6 h-6 relative cursor-pointer hover:opacity-80 transition-opacity">
                <Download
                  size={16}
                  className="text-white absolute left-1 top-1"
                />
              </div>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex h-12 justify-center items-start self-stretch border-[0.5px] border-[#555] relative">
          <button
            onClick={onCounter}
            className="text-white font-cabinet text-lg font-medium leading-6 relative flex h-12 px-3 py-3 justify-center items-center gap-[10px] flex-1 bg-[#0E0E0E] hover:bg-[#1a1a1a] transition-colors cursor-pointer"
          >
            Counter
          </button>
          <button
            onClick={onAccept}
            className="text-black font-cabinet text-lg font-medium leading-6 relative flex h-12 px-3 py-3 justify-center items-center gap-[10px] flex-1 bg-message-accent hover:bg-message-accent/90 transition-colors cursor-pointer"
          >
            Accept
          </button>
        </div>

        {/* Message Tail SVG - Left side for incoming messages */}
        <svg
          width="318"
          height="12"
          viewBox="0 0 318 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex items-end gap-[10px] self-stretch relative"
        >
          <path d="M12 0H0V12L12 0Z" fill="#1C1A1F" />
          <path
            d="M11.3965 0.25L0.25 11.3965V0.25H11.3965Z"
            stroke="white"
            strokeOpacity="0.4"
            strokeWidth="0.5"
          />
        </svg>
      </div>
    </div>
  );
}
