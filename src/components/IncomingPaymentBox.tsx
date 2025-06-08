import React, { useState } from "react";
import { CheckCircle, Copy } from "lucide-react";

interface IncomingPaymentBoxProps {
  amount: string;
  transactionId: string;
  successMessage?: string;
  className?: string;
}

export default function IncomingPaymentBox({
  amount,
  transactionId,
  successMessage = "Payment successful.",
  className = "",
}: IncomingPaymentBoxProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyTransaction = async () => {
    try {
      await navigator.clipboard.writeText(transactionId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy transaction ID:", err);
    }
  };

  return (
    <div
      className={`flex flex-col items-start gap-2 w-[318px] h-[208px] font-figtree relative ${className}`}
    >
      <div className="flex flex-col justify-end items-start gap-[-0.5px] w-[318px] relative">
        {/* Recipient Header */}
        <div className="flex p-3 flex-col items-start self-stretch border-[0.5px] border-[#555] bg-[#1C1A1F] relative">
          <div className="self-stretch text-white/60 font-normal text-xs leading-normal relative flex items-center gap-2">
            Payment to You
          </div>
        </div>

        {/* Amount Section */}
        <div className="flex-1 self-stretch text-white font-normal text-[32px] leading-normal relative flex p-3 justify-between items-center border-r-[0.5px] border-b-[0.5px] border-l-[0.5px] border-[#555] bg-[#0E0E0E]">
          {amount}
        </div>

        {/* Success Status Section */}
        <div className="flex p-3 flex-col items-start self-stretch border-[0.5px] border-[#555] bg-success-bg relative">
          <div className="flex items-center gap-2 self-stretch relative">
            <CheckCircle size={20} className="text-success-green" />
            <div className="text-white font-normal text-xs leading-5 relative flex items-center gap-[10px]">
              {successMessage}
            </div>
          </div>
        </div>

        {/* Transaction ID Section */}
        <div className="flex p-3 flex-col items-start self-stretch border-[0.5px] border-[#555] bg-[#1C1A1F] relative">
          <div className="flex items-start self-stretch relative">
            <div className="text-white font-semibold text-xs leading-5 relative flex items-center gap-[10px] flex-1">
              Transaction ID {transactionId}
            </div>
            <button
              onClick={handleCopyTransaction}
              className="w-6 h-6 relative cursor-pointer hover:opacity-80 transition-opacity"
              title={copied ? "Copied!" : "Copy transaction ID"}
            >
              <div className="w-6 h-6 bg-black absolute left-0 top-0" />
              <div className="w-[14px] h-[14px] absolute left-[5px] top-[5px]">
                <div className="w-[9px] h-[10px] border border-white absolute left-0 top-1" />
                <Copy
                  size={9}
                  className="text-white absolute left-[5px] top-0"
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Left Corner Decoration */}
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex justify-end items-end gap-[10px] relative w-[14px] h-[14px]"
      >
        <path d="M1 12.5L13 0.5H7H1V12.5Z" fill="#1C1A1F" />
        <path d="M1 12.5L13 0.5H7H1V12.5Z" stroke="#555555" strokeWidth="0.5" />
      </svg>
    </div>
  );
}
