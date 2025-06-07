import React, { useState } from "react";
import { ProjectTypeSelect } from "@/components/ui/project-type-select";

// Types
interface CreateProjectFormProps {
  onClose?: () => void;
  onSubmit?: (formData: ProjectFormData) => void;
  className?: string;
}

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

// Icon Components
const CloseIcon: React.FC = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      width: "24px",
      height: "24px",
      flexShrink: 0,
    }}
  >
    <mask
      id="mask0_1098_52879"
      style={{ maskType: "alpha" }}
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="24"
      height="24"
    >
      <rect width="24" height="24" fill="#D9D9D9" />
    </mask>
    <g mask="url(#mask0_1098_52879)">
      <path
        d="M12.0015 13.0612L7.93568 17.1271L6.87502 16.0664L10.9409 12.0006L12.0015 10.9399L16.0674 6.87404L17.1281 7.9347L13.0622 12.0006L12.0015 13.0612Z"
        fill="#E9BF99"
      />
      <path
        d="M10.9427 12.0015L6.87682 7.93568L7.93748 6.87502L12.0033 10.9409L13.064 12.0015L17.1299 16.0674L16.0692 17.1281L12.0033 13.0622L10.9427 12.0015Z"
        fill="#E9BF99"
      />
    </g>
  </svg>
);

const DropdownIcon: React.FC = () => (
  <div
    style={{
      width: "24px",
      height: "24px",
      position: "relative",
    }}
  >
    <svg
      width="16"
      height="9"
      viewBox="0 0 16 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        width: "15px",
        height: "9px",
        flexShrink: 0,
      }}
    >
      <path
        d="M7.65383 8.70762L0 1.05383L1.05383 0L7.65383 6.6L14.2538 0L15.3077 1.05383L7.65383 8.70762Z"
        fill="white"
      />
    </svg>
  </div>
);

const UploadIcon: React.FC = () => (
  <div
    style={{
      width: "24px",
      height: "24px",
      position: "relative",
    }}
  >
    <svg
      width="20"
      height="16"
      viewBox="0 0 20 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        width: "19px",
        height: "15px",
        flexShrink: 0,
      }}
    >
      <path
        d="M9.25 12.6153H10.75V8.16533L12.6096 10.025L13.6634 8.97113L9.99998 5.3077L6.35578 8.9519L7.4096 10.0057L9.25 8.16533V12.6153ZM2.3077 15.5C1.80257 15.5 1.375 15.325 1.025 14.975C0.675 14.625 0.5 14.1974 0.5 13.6923V2.3077C0.5 1.80257 0.675 1.375 1.025 1.025C1.375 0.675 1.80257 0.5 2.3077 0.5H7.79803L9.79803 2.5H17.6923C18.1974 2.5 18.625 2.675 18.975 3.025C19.325 3.375 19.5 3.80257 19.5 4.3077V13.6923C19.5 14.1974 19.325 14.625 18.975 14.975C18.625 15.325 18.1974 15.5 17.6923 15.5H2.3077ZM2.3077 14H17.6923C17.782 14 17.8557 13.9711 17.9134 13.9134C17.9711 13.8557 18 13.782 18 13.6923V4.3077C18 4.21795 17.9711 4.14422 17.9134 4.08652C17.8557 4.02883 17.782 3.99998 17.6923 3.99998H9.1846L7.1846 1.99998H2.3077C2.21795 1.99998 2.14423 2.02882 2.08653 2.08652C2.02883 2.14423 1.99998 2.21795 1.99998 2.3077V13.6923C1.99998 13.782 2.02883 13.8557 2.08653 13.9134C2.14423 13.9711 2.21795 14 2.3077 14Z"
        fill="white"
      />
    </svg>
  </div>
);

const CalendarIcon: React.FC = () => (
  <div
    style={{
      width: "24px",
      height: "24px",
      position: "relative",
    }}
  >
    <svg
      width="18"
      height="20"
      viewBox="0 0 18 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        width: "17px",
        height: "19px",
        flexShrink: 0,
      }}
    >
      <path
        d="M0.5 19.5V2.50002H3.69233V0.384644H5.23075V2.50002H12.8077V0.384644H14.3076V2.50002H17.5V19.5H0.5ZM1.99997 18H16V8.30772H1.99997V18ZM1.99997 6.80774H16V3.99999H1.99997V6.80774Z"
        fill="white"
      />
    </svg>
  </div>
);

const ResizeIcon: React.FC = () => (
  <svg
    width="10"
    height="10"
    viewBox="0 0 10 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      width: "8px",
      height: "8px",
      position: "absolute",
      right: "6px",
      bottom: "6px",
    }}
  >
    <path d="M9 1L1 9M9 6L6 9" stroke="white" />
  </svg>
);

const CreateProjectForm: React.FC<CreateProjectFormProps> = ({
  onClose,
  onSubmit,
  className = "",
}) => {
  const [formData, setFormData] = useState<ProjectFormData>({
    projectName: "",
    deliverables: "",
    typeOfWork: [],
    documents: [],
    projectDescription: "",
    inspirationLinks: "",
    budget: "",
    deadline: "",
    importantNote: "",
  });

  const [isTypeOfWorkOpen, setIsTypeOfWorkOpen] = useState(false);

  const workTypes = [
    "Branding",
    "Packaging",
    "Graphic Design",
    "Animation",
    "Photography",
    "Production",
    "Post Production",
    "Social Media",
    "Marketing",
  ];

  const handleInputChange = (
    field: keyof ProjectFormData,
    value: string | string[] | File[],
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleTypeOfWorkToggle = (workType: string) => {
    const currentTypes = formData.typeOfWork;
    const updatedTypes = currentTypes.includes(workType)
      ? currentTypes.filter((type) => type !== workType)
      : [...currentTypes, workType];

    handleInputChange("typeOfWork", updatedTypes);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    handleInputChange("documents", files);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(formData);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose?.();
    }
  };

  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Cabinet+Grotesk:wght@300;400;700&family=Figtree:wght@400&display=swap"
      />

      {/* Modal */}
      <div
        style={{
          display: "flex",
          padding: "24px",
          flexDirection: "column",
          alignItems: "flex-end",
          gap: "40px",
          background: "#1C1A1F",
          width: "804px",
          height: "786px",
          boxSizing: "border-box",
        }}
        className={className}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            width: "100%",
            position: "relative",
          }}
        >
          <div
            style={{
              height: "32px",
              color: "#FFF",
              fontFamily:
                "'Cabinet Grotesk', -apple-system, Roboto, Helvetica, sans-serif",
              fontSize: "24px",
              fontStyle: "normal",
              fontWeight: "300",
              lineHeight: "32px",
            }}
          >
            Create a new project
          </div>
          <button
            onClick={onClose}
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
              padding: "0",
            }}
          >
            <CloseIcon />
          </button>
        </div>

        {/* Form Content */}
        <form onSubmit={handleSubmit} style={{ width: "100%", height: "100%" }}>
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "40px",
              width: "100%",
            }}
          >
            {/* Left Column */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "40px",
                position: "relative",
              }}
            >
              {/* Project Name */}
              <div
                style={{
                  display: "flex",
                  width: "358px",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "8px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "10px",
                  }}
                >
                  <div
                    style={{
                      color: "#FFF",
                      fontFamily:
                        "'Figtree', -apple-system, Roboto, Helvetica, sans-serif",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight: "18px",
                      opacity: "0.8",
                    }}
                  >
                    <span>Project Name</span>
                    <span style={{ color: "#F65F5F" }}>*</span>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    width: "358px",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "12px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      padding: "17px 16px",
                      alignItems: "center",
                      gap: "10px",
                      width: "100%",
                      border: "0.5px solid #555",
                      background: "#000",
                      boxSizing: "border-box",
                    }}
                  >
                    <input
                      type="text"
                      placeholder="Enter your project name"
                      value={formData.projectName}
                      onChange={(e) =>
                        handleInputChange("projectName", e.target.value)
                      }
                      required
                      style={{
                        flex: "1 0 0",
                        color: formData.projectName ? "#FFF" : "#555",
                        fontFamily:
                          "'Figtree', -apple-system, Roboto, Helvetica, sans-serif",
                        fontSize: "14px",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight: "22px",
                        background: "transparent",
                        border: "none",
                        outline: "none",
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Type of Work */}
              <div
                style={{
                  display: "flex",
                  width: "358px",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "8px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "10px",
                  }}
                >
                  <div
                    style={{
                      color: "#FFF",
                      fontFamily:
                        "'Figtree', -apple-system, Roboto, Helvetica, sans-serif",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight: "18px",
                      opacity: "0.8",
                    }}
                  >
                    <span>Type of Work</span>
                    <span style={{ color: "#F65F5F" }}>*</span>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    width: "358px",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "12px",
                    position: "relative",
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setIsTypeOfWorkOpen(!isTypeOfWorkOpen)}
                    style={{
                      display: "flex",
                      padding: "17px 16px",
                      alignItems: "center",
                      gap: "10px",
                      width: "100%",
                      border: "0.5px solid #555",
                      background: "#000",
                      boxSizing: "border-box",
                      cursor: "pointer",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        flex: "1 0 0",
                      }}
                    >
                      <div
                        style={{
                          flex: "1 0 0",
                          color:
                            formData.typeOfWork.length > 0 ? "#FFF" : "#555",
                          fontFamily:
                            "'Figtree', -apple-system, Roboto, Helvetica, sans-serif",
                          fontSize: "14px",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight: "22px",
                          textAlign: "left",
                        }}
                      >
                        {formData.typeOfWork.length > 0
                          ? `${formData.typeOfWork.length} selected`
                          : "Select your type of work"}
                      </div>
                      <DropdownIcon />
                    </div>
                  </button>

                  {isTypeOfWorkOpen && (
                    <div
                      style={{
                        position: "absolute",
                        top: "100%",
                        left: "0",
                        right: "0",
                        background: "#000",
                        border: "0.5px solid #555",
                        zIndex: 10,
                        maxHeight: "200px",
                        overflowY: "auto",
                      }}
                    >
                      {workTypes.map((workType) => (
                        <label
                          key={workType}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            padding: "12px 16px",
                            cursor: "pointer",
                            borderBottom: "0.5px solid #333",
                          }}
                          className="hover:bg-gray-800"
                        >
                          <input
                            type="checkbox"
                            checked={formData.typeOfWork.includes(workType)}
                            onChange={() => handleTypeOfWorkToggle(workType)}
                            style={{ marginRight: "8px" }}
                          />
                          <span
                            style={{
                              color: "#FFF",
                              fontFamily:
                                "'Figtree', -apple-system, Roboto, Helvetica, sans-serif",
                              fontSize: "14px",
                              fontWeight: "400",
                            }}
                          >
                            {workType}
                          </span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Project Description */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "24px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    width: "358px",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "8px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "10px",
                    }}
                  >
                    <div
                      style={{
                        color: "#FFF",
                        fontFamily:
                          "'Figtree', -apple-system, Roboto, Helvetica, sans-serif",
                        fontSize: "14px",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight: "18px",
                        opacity: "0.8",
                      }}
                    >
                      <span>Project Description</span>
                      <span style={{ color: "#F65F5F" }}>*</span>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      width: "358px",
                      height: "178px",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      gap: "12px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        padding: "17px 16px",
                        alignItems: "flex-start",
                        gap: "10px",
                        flex: "1 0 0",
                        width: "100%",
                        border: "0.5px solid #555",
                        background: "#000",
                        boxSizing: "border-box",
                        position: "relative",
                      }}
                    >
                      <textarea
                        placeholder="Describe your creative direction, goals, tone, and expectations"
                        value={formData.projectDescription}
                        onChange={(e) =>
                          handleInputChange(
                            "projectDescription",
                            e.target.value,
                          )
                        }
                        required
                        style={{
                          flex: "1 0 0",
                          color: formData.projectDescription ? "#FFF" : "#555",
                          fontFamily:
                            "'Figtree', -apple-system, Roboto, Helvetica, sans-serif",
                          fontSize: "14px",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight: "22px",
                          background: "transparent",
                          border: "none",
                          outline: "none",
                          resize: "none",
                          width: "100%",
                          height: "100%",
                        }}
                      />
                      <ResizeIcon />
                    </div>
                  </div>
                </div>
              </div>

              {/* Deadline */}
              <div
                style={{
                  display: "flex",
                  width: "358px",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "8px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "10px",
                  }}
                >
                  <div
                    style={{
                      color: "#FFF",
                      fontFamily:
                        "'Figtree', -apple-system, Roboto, Helvetica, sans-serif",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight: "18px",
                      opacity: "0.8",
                    }}
                  >
                    Deadline
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    width: "358px",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "12px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      padding: "17px 16px",
                      alignItems: "center",
                      gap: "10px",
                      width: "100%",
                      border: "0.5px solid #555",
                      background: "#000",
                      boxSizing: "border-box",
                      position: "relative",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        flex: "1 0 0",
                      }}
                    >
                      <input
                        type="date"
                        value={formData.deadline}
                        onChange={(e) =>
                          handleInputChange("deadline", e.target.value)
                        }
                        style={{
                          flex: "1 0 0",
                          color: formData.deadline ? "#FFF" : "#555",
                          fontFamily:
                            "'Figtree', -apple-system, Roboto, Helvetica, sans-serif",
                          fontSize: "14px",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight: "22px",
                          background: "transparent",
                          border: "none",
                          outline: "none",
                        }}
                        placeholder="Select deadline date"
                      />
                      <CalendarIcon />
                    </div>
                  </div>
                </div>
              </div>

              {/* Help Text */}
              <div
                style={{
                  color: "#555",
                  fontFamily:
                    "'Figtree', -apple-system, Roboto, Helvetica, sans-serif",
                  fontSize: "12px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "16px",
                  opacity: "0.8",
                  position: "absolute",
                  top: "208px",
                }}
              >
                (You can choose multiple types of work)
              </div>
            </div>

            {/* Right Column */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "40px",
              }}
            >
              {/* Deliverables */}
              <div
                style={{
                  display: "flex",
                  width: "358px",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "8px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "10px",
                  }}
                >
                  <div
                    style={{
                      color: "#FFF",
                      fontFamily:
                        "'Figtree', -apple-system, Roboto, Helvetica, sans-serif",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight: "18px",
                      opacity: "0.8",
                    }}
                  >
                    <span>Deliverables</span>
                    <span style={{ color: "#F65F5F" }}>*</span>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    width: "358px",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "12px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      padding: "17px 16px",
                      alignItems: "center",
                      gap: "10px",
                      width: "100%",
                      border: "0.5px solid #555",
                      background: "#000",
                      boxSizing: "border-box",
                    }}
                  >
                    <input
                      type="text"
                      placeholder="Enter project deliverables"
                      value={formData.deliverables}
                      onChange={(e) =>
                        handleInputChange("deliverables", e.target.value)
                      }
                      required
                      style={{
                        flex: "1 0 0",
                        color: formData.deliverables ? "#FFF" : "#555",
                        fontFamily:
                          "'Figtree', -apple-system, Roboto, Helvetica, sans-serif",
                        fontSize: "14px",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight: "22px",
                        background: "transparent",
                        border: "none",
                        outline: "none",
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Documents */}
              <div
                style={{
                  display: "flex",
                  width: "358px",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "8px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "10px",
                  }}
                >
                  <div
                    style={{
                      color: "#FFF",
                      fontFamily:
                        "'Figtree', -apple-system, Roboto, Helvetica, sans-serif",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight: "18px",
                      opacity: "0.8",
                    }}
                  >
                    <span>Documents</span>
                    <span style={{ color: "#F65F5F" }}>*</span>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    width: "358px",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "12px",
                  }}
                >
                  <label
                    style={{
                      display: "flex",
                      padding: "17px 16px",
                      alignItems: "center",
                      gap: "10px",
                      width: "100%",
                      border: "0.5px solid #555",
                      background: "#000",
                      boxSizing: "border-box",
                      cursor: "pointer",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        flex: "1 0 0",
                      }}
                    >
                      <span
                        style={{
                          flex: "1 0 0",
                          color:
                            formData.documents.length > 0 ? "#FFF" : "#555",
                          fontFamily:
                            "'Figtree', -apple-system, Roboto, Helvetica, sans-serif",
                          fontSize: "14px",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight: "22px",
                        }}
                      >
                        {formData.documents.length > 0
                          ? `${formData.documents.length} file(s) selected`
                          : "Upload document"}
                      </span>
                      <UploadIcon />
                    </div>
                    <input
                      type="file"
                      multiple
                      onChange={handleFileUpload}
                      style={{ display: "none" }}
                      required
                    />
                  </label>
                </div>
              </div>

              {/* Inspiration Links */}
              <div
                style={{
                  display: "flex",
                  width: "358px",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "8px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "10px",
                  }}
                >
                  <div
                    style={{
                      color: "#FFF",
                      fontFamily:
                        "'Figtree', -apple-system, Roboto, Helvetica, sans-serif",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight: "18px",
                      opacity: "0.8",
                    }}
                  >
                    Inspiration / Reference Links
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    width: "358px",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "12px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      padding: "17px 16px",
                      alignItems: "center",
                      gap: "10px",
                      width: "100%",
                      border: "0.5px solid #555",
                      background: "#000",
                      boxSizing: "border-box",
                    }}
                  >
                    <input
                      type="text"
                      placeholder="Paste inspiration / reference links"
                      value={formData.inspirationLinks}
                      onChange={(e) =>
                        handleInputChange("inspirationLinks", e.target.value)
                      }
                      style={{
                        flex: "1 0 0",
                        color: formData.inspirationLinks ? "#FFF" : "#555",
                        fontFamily:
                          "'Figtree', -apple-system, Roboto, Helvetica, sans-serif",
                        fontSize: "14px",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight: "22px",
                        background: "transparent",
                        border: "none",
                        outline: "none",
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Budget */}
              <div
                style={{
                  display: "flex",
                  width: "358px",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "8px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "10px",
                  }}
                >
                  <div
                    style={{
                      color: "#FFF",
                      fontFamily:
                        "'Figtree', -apple-system, Roboto, Helvetica, sans-serif",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight: "18px",
                      opacity: "0.8",
                    }}
                  >
                    Budget
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    width: "358px",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "12px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      padding: "17px 16px",
                      alignItems: "center",
                      gap: "10px",
                      width: "100%",
                      border: "0.5px solid #555",
                      background: "#000",
                      boxSizing: "border-box",
                    }}
                  >
                    <input
                      type="text"
                      placeholder="enter your budget"
                      value={formData.budget}
                      onChange={(e) =>
                        handleInputChange("budget", e.target.value)
                      }
                      style={{
                        flex: "1 0 0",
                        color: formData.budget ? "#FFF" : "#555",
                        fontFamily:
                          "'Figtree', -apple-system, Roboto, Helvetica, sans-serif",
                        fontSize: "14px",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight: "22px",
                        background: "transparent",
                        border: "none",
                        outline: "none",
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Important Note */}
              <div
                style={{
                  display: "flex",
                  width: "358px",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "8px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "10px",
                  }}
                >
                  <div
                    style={{
                      color: "#FFF",
                      fontFamily:
                        "'Figtree', -apple-system, Roboto, Helvetica, sans-serif",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight: "18px",
                      opacity: "0.8",
                    }}
                  >
                    Important Note
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    width: "358px",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "12px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      padding: "17px 16px",
                      alignItems: "center",
                      gap: "10px",
                      width: "100%",
                      border: "0.5px solid #555",
                      background: "#000",
                      boxSizing: "border-box",
                    }}
                  >
                    <input
                      type="text"
                      placeholder="Enter important note"
                      value={formData.importantNote}
                      onChange={(e) =>
                        handleInputChange("importantNote", e.target.value)
                      }
                      style={{
                        flex: "1 0 0",
                        color: formData.importantNote ? "#FFF" : "#555",
                        fontFamily:
                          "'Figtree', -apple-system, Roboto, Helvetica, sans-serif",
                        fontSize: "14px",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight: "22px",
                        background: "transparent",
                        border: "none",
                        outline: "none",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Create Project Button */}
          <button
            type="submit"
            style={{
              flex: "1 0 0",
              color: "#0E0E0E",
              textAlign: "center",
              fontFamily:
                "'Cabinet Grotesk', -apple-system, Roboto, Helvetica, sans-serif",
              fontSize: "24px",
              fontStyle: "normal",
              fontWeight: "700",
              lineHeight: "24px",
              display: "flex",
              width: "358px",
              height: "56px",
              padding: "16px",
              justifyContent: "center",
              alignItems: "center",
              gap: "9.326px",
              border: "0.5px solid #555",
              background: "#E9BF99",
              cursor: "pointer",
              marginTop: "40px",
              alignSelf: "flex-end",
            }}
            className="hover:bg-[#d4a574] transition-colors"
          >
            Create Project
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateProjectForm;
