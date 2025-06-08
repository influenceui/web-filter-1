import React, { useState } from "react";
import { CheckCircle, Copy } from "lucide-react";

interface PaymentSuccessBoxProps {
  recipient: string;
  amount: string;
  transactionId: string;
  successMessage?: string;
  className?: string;
}

export default function PaymentSuccessBox({
  recipient,
  amount,
  transactionId,
  successMessage = "Payment successful.",
  className = "",
}: PaymentSuccessBoxProps) {
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
      className={`flex flex-col justify-end items-end w-[318px] h-[213px] font-figtree ${className}`}
    >
      <div className="flex flex-col justify-end items-end gap-[-0.5px] self-stretch relative">
        {/* Recipient Header */}
        <div className="text-white/60 font-normal text-xs leading-5 flex p-3 flex-col items-start self-stretch border-[0.5px] border-[#555] bg-message-bg-medium relative">
          {recipient}
        </div>

        {/* Amount Section */}
        <div className="flex-1 self-stretch text-white font-normal text-[32px] leading-normal flex p-3 justify-between items-center border-[0.5px] border-white/40 bg-message-bg-dark relative">
          {amount}
        </div>

        {/* Success Status Section */}
        <div className="flex p-3 flex-col items-center self-stretch border-[0.5px] border-[#555] bg-success-bg relative gap-2">
          <CheckCircle size={20} className="text-success-green" />
          <span className="text-white font-normal text-xs leading-5">
            {successMessage}
          </span>
        </div>

        {/* Transaction ID Section */}
        <div className="flex p-3 flex-col items-start self-stretch border-[0.5px] border-white/40 bg-message-bg-medium relative">
          <div className="flex items-center gap-[10px] flex-1 relative">
            <span className="text-white/60 font-normal text-xs leading-5">
              Transaction ID
            </span>
            <span></span>
            <span className="text-white font-bold text-xs leading-5">
              {transactionId}
            </span>
          </div>
          <button
            onClick={handleCopyTransaction}
            className="w-6 h-6 relative cursor-pointer hover:opacity-80 transition-opacity absolute right-3 top-3"
            title={copied ? "Copied!" : "Copy transaction ID"}
          >
            <div className="w-6 h-6 bg-black absolute left-0 top-0" />
            <Copy size={14} className="text-white absolute left-1 top-1" />
          </button>
        </div>
      </div>

      {/* Message Tail SVG - Right side for outgoing payment confirmation */}
      <svg
        width="12"
        height="13"
        viewBox="0 0 12 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex justify-end items-end gap-[10px] relative"
      >
        <path d="M0 0.5H12V12.5L0 0.5Z" fill="#50483B" />
        <path
          d="M0.603516 0.75L11.75 11.8965V0.75H0.603516Z"
          stroke="white"
          strokeOpacity="0.4"
          strokeWidth="0.5"
        />
      </svg>
    </div>
  );
}
