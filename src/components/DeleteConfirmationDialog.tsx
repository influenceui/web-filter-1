import React from "react";
import { Trash2 } from "lucide-react";

interface DeleteConfirmationDialogProps {
  title?: string;
  message?: string;
  onCancel?: () => void;
  onDelete?: () => void;
  className?: string;
}

export default function DeleteConfirmationDialog({
  title = "Delete project?",
  message = "Once deleted, this project and its associated data will be permanently removed from your portfolio. Are you sure you want to delete this project?",
  onCancel,
  onDelete,
  className = "",
}: DeleteConfirmationDialogProps) {
  return (
    <div
      className={`flex flex-col items-start gap-10 w-[363px] h-64 pt-6 border-[0.5px] border-[#555] bg-[#1C1A1F] ${className}`}
    >
      <div className="flex flex-col w-full h-full">
        {/* Header and Content Section */}
        <div className="flex px-4 flex-col items-start gap-4 self-stretch relative">
          {/* Title and Icon */}
          <div className="flex items-start gap-2 self-stretch relative">
            <div className="text-white font-cabinet text-2xl font-light leading-8 relative">
              {title}
            </div>
            <div className="w-8 h-8 relative">
              <Trash2
                size={20}
                className="text-[#F65F5F] absolute left-1.5 top-1.5"
              />
            </div>
          </div>

          {/* Warning Message */}
          <div className="self-stretch text-[#9F9F9F] font-cabinet text-lg font-normal leading-6 relative">
            {message}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex h-12 justify-center items-start self-stretch border-[0.5px] border-[#555] relative mt-auto">
          <button
            onClick={onCancel}
            className="text-white font-cabinet text-lg font-medium leading-6 relative flex h-12 px-3 py-3 justify-center items-center gap-[10px] flex-1 bg-[#0E0E0E] hover:bg-[#1a1a1a] transition-colors cursor-pointer"
          >
            Cancel
          </button>
          <button
            onClick={onDelete}
            className="text-black font-cabinet text-lg font-medium leading-6 relative flex h-12 px-3 py-3 justify-center items-center gap-[10px] flex-1 bg-message-accent hover:bg-message-accent/90 transition-colors cursor-pointer"
          >
            Delete Project
          </button>
        </div>
      </div>
    </div>
  );
}
