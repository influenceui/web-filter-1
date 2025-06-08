import React, { useState } from "react";
import { ProjectTypeSelect } from "@/components/ui/project-type-select";

const ProjectTypeSelectDemo = () => {
  const [selectedType, setSelectedType] = useState<string>("");

  const handleTypeChange = (value: string) => {
    setSelectedType(value);
    console.log("Selected project type:", value);
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-8">
      <div className="flex flex-col items-center gap-8">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-white mb-2">
            Project Type Selection Demo
          </h1>
          <p className="text-gray-400">
            Showcase of the custom project type dropdown component
          </p>
        </div>

        {/* Demo Component */}
        <div className="flex flex-col items-center gap-4">
          <ProjectTypeSelect value={selectedType} onChange={handleTypeChange} />

          {/* Display Selected Value */}
          {selectedType && (
            <div className="mt-4 p-4 bg-gray-900 rounded border border-gray-700">
              <p className="text-white text-sm">
                <span className="text-gray-400">Selected:</span>{" "}
                <span className="font-medium">{selectedType}</span>
              </p>
            </div>
          )}
        </div>

        {/* Back to Home Link */}
        <div className="mt-8">
          <a
            href="/"
            className="inline-flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200"
          >
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectTypeSelectDemo;
