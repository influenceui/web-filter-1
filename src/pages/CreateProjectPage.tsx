import React, { useState } from "react";
import { Link } from "react-router-dom";
import CreateProjectForm from "@/components/create-project/CreateProjectForm";

interface ProjectFormData {
  projectName: string;
  deliverables: string;
  typeOfWork: string;
  documents: File[];
  projectDescription: string;
  inspirationLinks: string;
  budget: string;
  deadline: string;
  importantNote: string;
}

const CreateProjectPage = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [submittedData, setSubmittedData] = useState<ProjectFormData | null>(
    null,
  );

  const handleFormSubmit = (formData: ProjectFormData) => {
    console.log("Form submitted:", formData);
    setSubmittedData(formData);
    setShowSuccess(true);
  };

  const handleClose = () => {
    // For demo purposes, we'll just reset the success state
    setShowSuccess(false);
    setSubmittedData(null);
  };

  if (showSuccess && submittedData) {
    return (
      <div className="min-h-screen bg-[#1C1A1F] flex items-center justify-center p-8">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-6 mb-6">
            <h2 className="text-2xl font-semibold text-green-400 mb-4">
              Project Created Successfully!
            </h2>
            <div className="text-left space-y-2 text-sm text-gray-300">
              <p>
                <strong className="text-white">Project Name:</strong>{" "}
                {submittedData.projectName}
              </p>
              <p>
                <strong className="text-white">Type of Work:</strong>{" "}
                {submittedData.typeOfWork}
              </p>
              <p>
                <strong className="text-white">Deliverables:</strong>{" "}
                {submittedData.deliverables}
              </p>
              <p>
                <strong className="text-white">Budget:</strong>{" "}
                {submittedData.budget || "Not specified"}
              </p>
              <p>
                <strong className="text-white">Deadline:</strong>{" "}
                {submittedData.deadline || "Not specified"}
              </p>
            </div>
          </div>

          <div className="flex gap-4 justify-center">
            <button
              onClick={handleClose}
              className="px-6 py-2 bg-[#E9BF99] text-black rounded hover:bg-[#d4a574] transition-colors"
            >
              Create Another Project
            </button>
            <Link
              to="/"
              className="px-6 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#1C1A1F] flex items-center justify-center p-8">
      <div className="relative">
        {/* Back to Home Link */}
        <div className="absolute -top-16 left-0">
          <Link
            to="/"
            className="inline-flex items-center px-4 py-2 text-sm text-gray-400 hover:text-white transition-colors"
          >
            ← Back to Home
          </Link>
        </div>

        {/* Create Project Form */}
        <CreateProjectForm
          onSubmit={handleFormSubmit}
          onClose={() => window.history.back()}
        />
      </div>
    </div>
  );
};

export default CreateProjectPage;
