import React, { useState } from "react";
import WorkTypeFilter from "../components/WorkTypeFilter";
import { WorkTypeFilterInput } from "../components/ui/work-type-filter-input";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";

const WorkTypeFilterDemo: React.FC = () => {
  const [selectedTypesOriginal, setSelectedTypesOriginal] = useState<string[]>(
    [],
  );
  const [selectedTypesInput, setSelectedTypesInput] = useState<string[]>([]);

  // Form state
  const [formData, setFormData] = useState({
    projectName: "",
    description: "",
    workTypes: [] as string[],
    budget: "",
  });

  const handleOriginalSelectionChange = (types: string[]) => {
    setSelectedTypesOriginal(types);
    console.log("Original component selected types:", types);
  };

  const handleInputSelectionChange = (types: string[]) => {
    setSelectedTypesInput(types);
    setFormData((prev) => ({ ...prev, workTypes: types }));
    console.log("Input component selected types:", types);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Form submitted! Check console for details.");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-2 text-center">
            Work Type Filter Components
          </h1>
          <p className="text-gray-600 text-center mb-12">
            Demonstration of both the original design and the form-integrated
            version
          </p>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Original Component */}
            <Card>
              <CardHeader>
                <CardTitle>Collapsible Accordion Component</CardTitle>
                <CardDescription>
                  Interactive accordion with collapsible content. Click the
                  header to expand/collapse.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col items-center space-y-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-2">
                      Default (Collapsed):
                    </h4>
                    <WorkTypeFilter
                      onSelectionChange={handleOriginalSelectionChange}
                    />
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-2">
                      Default Open:
                    </h4>
                    <WorkTypeFilter
                      onSelectionChange={handleOriginalSelectionChange}
                      defaultOpen={true}
                    />
                  </div>
                </div>

                <div className="w-full">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Selected Types:
                  </h4>
                  {selectedTypesOriginal.length > 0 ? (
                    <div className="flex flex-wrap gap-2">
                      {selectedTypesOriginal.map((type) => (
                        <span
                          key={type}
                          className="px-2 py-1 bg-gray-800 text-white rounded text-sm"
                        >
                          {type}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-500 italic text-sm">
                      No types selected
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>
            {/* Form Integration */}
            <Card>
              <CardHeader>
                <CardTitle>Form Integration Example</CardTitle>
                <CardDescription>
                  Reusable component designed for form integration with theme
                  consistency
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="projectName">Project Name</Label>
                    <Input
                      id="projectName"
                      value={formData.projectName}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          projectName: e.target.value,
                        }))
                      }
                      placeholder="Enter project name"
                    />
                  </div>

                  <div>
                    <Label htmlFor="workTypes">Work Types</Label>
                    <WorkTypeFilterInput
                      value={formData.workTypes}
                      onChange={handleInputSelectionChange}
                      placeholder="Select work types for this project..."
                    />
                  </div>

                  <div>
                    <Label htmlFor="budget">Budget Range</Label>
                    <Input
                      id="budget"
                      value={formData.budget}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          budget: e.target.value,
                        }))
                      }
                      placeholder="e.g., $1,000 - $5,000"
                    />
                  </div>

                  <div>
                    <Label htmlFor="description">Project Description</Label>
                    <Textarea
                      id="description"
                      value={formData.description}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          description: e.target.value,
                        }))
                      }
                      placeholder="Describe your project requirements..."
                      rows={3}
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    Submit Project Request
                  </Button>
                </form>

                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <h4 className="font-semibold text-gray-800 text-sm mb-2">
                    Form Data:
                  </h4>
                  <pre className="text-xs text-gray-600 whitespace-pre-wrap">
                    {JSON.stringify(formData, null, 2)}
                  </pre>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Features Overview */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Component Features</CardTitle>
              <CardDescription>
                Both components share these production-ready features
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Technical Features
                  </h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• TypeScript with full type safety</li>
                    <li>• React hooks for state management</li>
                    <li>• TailwindCSS for styling</li>
                    <li>• Custom SVG icon components</li>
                    <li>• Proper event handling</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">
                    User Experience
                  </h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Real-time search filtering</li>
                    <li>• Intuitive checkbox interactions</li>
                    <li>• Visual feedback and animations</li>
                    <li>• Responsive design</li>
                    <li>• Clear visual hierarchy</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Accessibility
                  </h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• ARIA labels and roles</li>
                    <li>• Keyboard navigation support</li>
                    <li>• Screen reader compatibility</li>
                    <li>• Semantic HTML structure</li>
                    <li>• Focus management</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Usage Examples */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Usage Examples</CardTitle>
              <CardDescription>
                How to integrate these components in your application
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Original Component
                  </h4>
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <code className="text-sm">
                      {`<WorkTypeFilter onSelectionChange={(types) => console.log(types)} />`}
                    </code>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Form Input Component
                  </h4>
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <code className="text-sm">
                      {`<WorkTypeFilterInput
  value={selectedTypes}
  onChange={setSelectedTypes}
  placeholder="Select work types..."
/>`}
                    </code>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default WorkTypeFilterDemo;
