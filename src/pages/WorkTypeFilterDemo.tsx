import React, { useState } from "react";
import WorkTypeFilter from "../components/WorkTypeFilter";

const WorkTypeFilterDemo: React.FC = () => {
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

  const handleSelectionChange = (types: string[]) => {
    setSelectedTypes(types);
    console.log("Selected work types:", types);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Work Type Filter Component Demo
          </h1>

          <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Interactive Filter Component
            </h2>
            <p className="text-gray-600 mb-6">
              This is a dark-themed work type filter component with search
              functionality and checkbox selection. The component maintains its
              own state and provides a callback for selection changes.
            </p>

            <div className="flex justify-center">
              <WorkTypeFilter onSelectionChange={handleSelectionChange} />
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Selected Work Types:
            </h3>
            {selectedTypes.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {selectedTypes.map((type) => (
                  <span
                    key={type}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                  >
                    {type}
                  </span>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 italic">No work types selected</p>
            )}
          </div>

          <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Component Features:
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Dark theme with custom styling</li>
              <li>Search functionality to filter work types</li>
              <li>Checkbox grid with "All" option</li>
              <li>Proper TypeScript typing</li>
              <li>Accessibility features (ARIA labels, semantic HTML)</li>
              <li>Responsive design with TailwindCSS</li>
              <li>Custom SVG icons for visual elements</li>
              <li>State management for selections</li>
              <li>Callback function for parent component integration</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkTypeFilterDemo;
