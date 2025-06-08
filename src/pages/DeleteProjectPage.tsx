import React from "react";
import DeleteConfirmationDialog from "../components/DeleteConfirmationDialog";

export default function DeleteProjectPage() {
  const handleCancel = () => {
    console.log("Cancel button clicked");
    // Add cancel logic here - typically would close the dialog
  };

  const handleDelete = () => {
    console.log("Delete button clicked");
    // Add delete logic here - would perform the actual deletion
    alert("Project deletion confirmed! (This is a demo)");
  };

  return (
    <>
      {/* External Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Cabinet+Grotesk:wght@300;400;500&display=swap"
        rel="stylesheet"
      />

      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <DeleteConfirmationDialog
          onCancel={handleCancel}
          onDelete={handleDelete}
        />
      </div>
    </>
  );
}
