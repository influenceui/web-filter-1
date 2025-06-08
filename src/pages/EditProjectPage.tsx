import React, { useState } from "react";
import { Link } from "react-router-dom";

// Types
interface EditProjectFormData {
  projectName: string;
  typeOfWork: string;
  uploadFile: File | null;
  uploadLink: string;
  description: string;
  coverImage: File | null;
}

// Icon Components
const CloseIcon: React.FC = () => (
  <svg
    width="24"
    height="26"
    viewBox="0 0 24 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <mask
      id="mask0_1098_56485"
      style={{ maskType: "alpha" }}
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="24"
      height="26"
    >
      <rect y="0.416016" width="24" height="25.2493" fill="#D9D9D9" />
    </mask>
    <g mask="url(#mask0_1098_56485)">
      <path
        d="M11.9996 14.1577L7.93372 18.4352L6.87306 17.3194L10.9389 13.0418L11.9996 11.926L16.0655 7.64846L17.1261 8.76433L13.0602 13.0418L11.9996 14.1577Z"
        fill="#E9BF99"
      />
      <path
        d="M10.9427 13.0428L6.87682 8.76531L7.93748 7.64943L12.0033 11.9269L13.064 13.0428L17.1299 17.3203L16.0692 18.4362L12.0033 14.1587L10.9427 13.0428Z"
        fill="#E9BF99"
      />
    </g>
  </svg>
);

const DropdownIcon: React.FC = () => (
  <svg
    width="16"
    height="9"
    viewBox="0 0 16 9"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.65383 8.70762L0 1.05383L1.05383 0L7.65383 6.6L14.2538 0L15.3077 1.05383L7.65383 8.70762Z"
      fill="white"
    />
  </svg>
);

const UploadIcon: React.FC = () => (
  <svg
    width="20"
    height="16"
    viewBox="0 0 20 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.25 12.6153H10.75V8.16533L12.6096 10.025L13.6634 8.97113L9.99998 5.3077L6.35578 8.9519L7.4096 10.0057L9.25 8.16533V12.6153ZM2.3077 15.5C1.80257 15.5 1.375 15.325 1.025 14.975C0.675 14.625 0.5 14.1974 0.5 13.6923V2.3077C0.5 1.80257 0.675 1.375 1.025 1.025C1.375 0.675 1.80257 0.5 2.3077 0.5H7.79803L9.79803 2.5H17.6923C18.1974 2.5 18.625 2.675 18.975 3.025C19.325 3.375 19.5 3.80257 19.5 4.3077V13.6923C19.5 14.1974 19.325 14.625 18.975 14.975C18.625 15.325 18.1974 15.5 17.6923 15.5H2.3077ZM2.3077 14H17.6923C17.782 14 17.8557 13.9711 17.9134 13.9134C17.9711 13.8557 18 13.782 18 13.6923V4.3077C18 4.21795 17.9711 4.14422 17.9134 4.08652C17.8557 4.02883 17.782 3.99998 17.6923 3.99998H9.1846L7.1846 1.99998H2.3077C2.21795 1.99998 2.14423 2.02882 2.08653 2.08652C2.02883 2.14423 1.99998 2.21795 1.99998 2.3077V13.6923C1.99998 13.782 2.02883 13.8557 2.08653 13.9134C2.14423 13.9711 2.21795 14 2.3077 14Z"
      fill="white"
    />
  </svg>
);

const EditProjectPage = () => {
  const [formData, setFormData] = useState<EditProjectFormData>({
    projectName: "",
    typeOfWork: "",
    uploadFile: null,
    uploadLink: "",
    description: "",
    coverImage: null,
  });

  const [isTypeOfWorkOpen, setIsTypeOfWorkOpen] = useState(false);

  const workTypes = [
    "Branding",
    "Packaging",
    "Graphic Design",
    "Animation",
    "Photography",
    "Production",
  ];

  const handleInputChange = (field: keyof EditProjectFormData, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleFileUpload = (
    field: "uploadFile" | "coverImage",
    file: File | null,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: file,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Figtree:wght@400&family=Cabinet+Grotesk:wght@400;500&display=swap"
        rel="stylesheet"
      />
      <div
        style={{
          width: "100%",
          maxWidth: "458px",
          margin: "0 auto",
          background: "#1C1A1F",
          minHeight: "768px",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            padding: "24px",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "32px",
            background: "#1C1A1F",
            position: "relative",
            minHeight: "768px",
          }}
        >
          {/* Header */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <div
              style={{
                color: "#FFF",
                fontFamily:
                  "Figtree, -apple-system, Roboto, Helvetica, sans-serif",
                fontSize: "20px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "normal",
              }}
            >
              Edit Project
            </div>
            <Link to="/">
              <CloseIcon />
            </Link>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} style={{ width: "100%" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "32px",
                width: "100%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "32px",
                  width: "100%",
                }}
              >
                {/* Project Name */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "8px",
                    width: "100%",
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
                          "Figtree, -apple-system, Roboto, Helvetica, sans-serif",
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
                      flexDirection: "column",
                      alignItems: "flex-start",
                      gap: "12px",
                      width: "100%",
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
                            "Figtree, -apple-system, Roboto, Helvetica, sans-serif",
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
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "8px",
                    width: "100%",
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
                          "Figtree, -apple-system, Roboto, Helvetica, sans-serif",
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
                      flexDirection: "column",
                      alignItems: "flex-start",
                      gap: "12px",
                      width: "100%",
                      position: "relative",
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => setIsTypeOfWorkOpen(!isTypeOfWorkOpen)}
                      style={{
                        display: "flex",
                        padding: "16px",
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
                            color: formData.typeOfWork ? "#FFF" : "#555",
                            fontFamily:
                              "Figtree, -apple-system, Roboto, Helvetica, sans-serif",
                            fontSize: "14px",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight: "22px",
                          }}
                        >
                          {formData.typeOfWork || "Select your type of work"}
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
                          <button
                            key={workType}
                            type="button"
                            onClick={() => {
                              handleInputChange("typeOfWork", workType);
                              setIsTypeOfWorkOpen(false);
                            }}
                            style={{
                              display: "flex",
                              alignItems: "center",
                              padding: "12px 16px",
                              cursor: "pointer",
                              borderBottom: "0.5px solid #333",
                              background: "transparent",
                              border: "none",
                              width: "100%",
                              textAlign: "left",
                            }}
                            className="hover:bg-gray-800"
                          >
                            <span
                              style={{
                                color: "#FFF",
                                fontFamily:
                                  "Figtree, -apple-system, Roboto, Helvetica, sans-serif",
                                fontSize: "14px",
                                fontWeight: "400",
                              }}
                            >
                              {workType}
                            </span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Upload Section */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "16px",
                    width: "100%",
                  }}
                >
                  {/* Upload Your Work */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      gap: "8px",
                      flex: "1 0 0",
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
                            "Figtree, -apple-system, Roboto, Helvetica, sans-serif",
                          fontSize: "14px",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight: "18px",
                          opacity: "0.8",
                        }}
                      >
                        <span>Upload Your Work</span>
                        <span style={{ color: "#F65F5F" }}>*</span>
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        gap: "12px",
                        width: "100%",
                      }}
                    >
                      <label
                        style={{
                          display: "flex",
                          padding: "16px",
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
                              color: "#555",
                              fontFamily:
                                "Figtree, -apple-system, Roboto, Helvetica, sans-serif",
                              fontSize: "14px",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight: "22px",
                            }}
                          >
                            Jpg, Png, PDF
                          </div>
                          <UploadIcon />
                        </div>
                        <input
                          type="file"
                          accept=".jpg,.jpeg,.png,.pdf"
                          onChange={(e) =>
                            handleFileUpload(
                              "uploadFile",
                              e.target.files?.[0] || null,
                            )
                          }
                          style={{ display: "none" }}
                        />
                      </label>
                    </div>
                  </div>

                  {/* OR */}
                  <div
                    style={{
                      alignSelf: "stretch",
                      color: "#FFF",
                      fontFamily:
                        "Figtree, -apple-system, Roboto, Helvetica, sans-serif",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight: "22px",
                      textAlign: "center",
                      display: "flex",
                      padding: "17px 0px",
                      flexDirection: "column",
                      justifyContent: "flex-end",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    OR
                  </div>

                  {/* Upload Link */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      gap: "8px",
                      flex: "1 0 0",
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
                            "Figtree, -apple-system, Roboto, Helvetica, sans-serif",
                          fontSize: "14px",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight: "18px",
                          opacity: "0.8",
                        }}
                      >
                        <span>Upload Link</span>
                        <span style={{ color: "#F65F5F" }}>*</span>
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        gap: "12px",
                        width: "100%",
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
                          type="url"
                          placeholder="youtube / Vimeo link"
                          value={formData.uploadLink}
                          onChange={(e) =>
                            handleInputChange("uploadLink", e.target.value)
                          }
                          style={{
                            flex: "1 0 0",
                            color: formData.uploadLink ? "#FFF" : "#555",
                            fontFamily:
                              "Figtree, -apple-system, Roboto, Helvetica, sans-serif",
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

                {/* Add Description */}
                <div
                  style={{
                    display: "flex",
                    height: "120px",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "8px",
                    width: "100%",
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
                          "Figtree, -apple-system, Roboto, Helvetica, sans-serif",
                        fontSize: "14px",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight: "18px",
                        opacity: "0.8",
                      }}
                    >
                      Add description
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      gap: "12px",
                      flex: "1 0 0",
                      width: "100%",
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
                      }}
                    >
                      <textarea
                        placeholder="Enter your project description"
                        value={formData.description}
                        onChange={(e) =>
                          handleInputChange("description", e.target.value)
                        }
                        style={{
                          flex: "1 0 0",
                          color: formData.description ? "#FFF" : "#555",
                          fontFamily:
                            "Figtree, -apple-system, Roboto, Helvetica, sans-serif",
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
                    </div>
                  </div>
                </div>

                {/* Cover Image */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "8px",
                    width: "100%",
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
                          "Figtree, -apple-system, Roboto, Helvetica, sans-serif",
                        fontSize: "14px",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight: "18px",
                        opacity: "0.8",
                      }}
                    >
                      <span>Cover Image</span>
                      <span style={{ color: "#F65F5F" }}>*</span>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      gap: "12px",
                      width: "100%",
                    }}
                  >
                    <label
                      style={{
                        display: "flex",
                        padding: "16px",
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
                            color: "#555",
                            fontFamily:
                              "Figtree, -apple-system, Roboto, Helvetica, sans-serif",
                            fontSize: "14px",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight: "22px",
                          }}
                        >
                          Upload a cover image for your project
                        </div>
                        <UploadIcon />
                      </div>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) =>
                          handleFileUpload(
                            "coverImage",
                            e.target.files?.[0] || null,
                          )
                        }
                        style={{ display: "none" }}
                      />
                    </label>
                  </div>
                  <div
                    style={{
                      color: "#555",
                      fontFamily:
                        "Figtree, -apple-system, Roboto, Helvetica, sans-serif",
                      fontSize: "12px",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight: "16px",
                      opacity: "0.8",
                      marginTop: "4px",
                    }}
                  >
                    (Use 202 x 158 pixel size for cover image)
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                  gap: "8px",
                  width: "100%",
                }}
              >
                <button
                  type="submit"
                  style={{
                    color: "#0E0E0E",
                    textAlign: "center",
                    fontFamily:
                      "Cabinet Grotesk, -apple-system, Roboto, Helvetica, sans-serif",
                    fontSize: "18px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "24px",
                    display: "flex",
                    padding: "16px 24px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "9.326px",
                    border: "0.5px solid #555",
                    background: "#E9BF99",
                    cursor: "pointer",
                  }}
                  className="hover:bg-[#d4a574] transition-colors"
                >
                  Upload Project
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditProjectPage;
