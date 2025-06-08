import React, { useState } from "react";
import { Link } from "react-router-dom";

// Types
interface Project {
  id: string;
  name: string;
  category: string;
}

const EditProjectPage = () => {
  const [activeTab, setActiveTab] = useState<"my" | "agency">("my");
  const [selectedProjectId, setSelectedProjectId] = useState<string>("1");

  // Sample project data
  const myProjects: Project[] = [
    { id: "1", name: "Speed Runer", category: "Social Media" },
    { id: "2", name: "Speed Runer", category: "Social Media" },
    { id: "3", name: "Speed Runer", category: "Social Media" },
    { id: "4", name: "Speed Runer", category: "Social Media" },
    { id: "5", name: "Speed Runer", category: "Social Media" },
    { id: "6", name: "Speed Runer", category: "Social Media" },
  ];

  const agencyProjects: Project[] = [
    { id: "7", name: "Agency Project 1", category: "Branding" },
    { id: "8", name: "Agency Project 2", category: "Web Design" },
  ];

  const currentProjects = activeTab === "my" ? myProjects : agencyProjects;

  // Icon Components
  const CloseIcon: React.FC = () => (
    <svg
      id="1098:54215"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="close-icon"
      style={{ width: "24px", height: "24px", cursor: "pointer" }}
    >
      <mask
        id="mask0_1098_54215"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="24"
        height="24"
      >
        <rect width="24" height="24" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_1098_54215)">
        <path
          d="M11.9996 13.0612L7.93372 17.1271L6.87306 16.0664L10.9389 12.0006L11.9996 10.9399L16.0655 6.87404L17.1261 7.9347L13.0602 12.0006L11.9996 13.0612Z"
          fill="#E9BF99"
        />
        <path
          d="M10.9427 12.0015L6.87682 7.93568L7.93748 6.87502L12.0033 10.9409L13.064 12.0015L17.1299 16.0674L16.0692 17.1281L12.0033 13.0622L10.9427 12.0015Z"
          fill="#E9BF99"
        />
      </g>
    </svg>
  );

  const RadioButtonChecked: React.FC = () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="radio-icon active"
      style={{
        width: "19px",
        height: "19px",
        position: "absolute",
        left: "2.5px",
        top: "2.5px",
      }}
    >
      <path
        d="M9.99998 14.5C11.2487 14.5 12.3109 14.0621 13.1865 13.1865C14.0621 12.3109 14.5 11.2487 14.5 9.99998C14.5 8.75128 14.0621 7.6891 13.1865 6.81345C12.3109 5.93782 11.2487 5.5 9.99998 5.5C8.75128 5.5 7.6891 5.93782 6.81345 6.81345C5.93782 7.6891 5.5 8.75128 5.5 9.99998C5.5 11.2487 5.93782 12.3109 6.81345 13.1865C7.6891 14.0621 8.75128 14.5 9.99998 14.5ZM10.0016 19.5C8.68772 19.5 7.45268 19.2506 6.29655 18.752C5.1404 18.2533 4.13472 17.5765 3.2795 16.7217C2.42427 15.8669 1.74721 14.8616 1.24833 13.706C0.749442 12.5504 0.5 11.3156 0.5 10.0017C0.5 8.68772 0.749334 7.45268 1.248 6.29655C1.74667 5.1404 2.42342 4.13472 3.27825 3.2795C4.1331 2.42427 5.13834 1.74721 6.29398 1.24833C7.44959 0.749443 8.68437 0.5 9.9983 0.5C11.3122 0.5 12.5473 0.749334 13.7034 1.248C14.8596 1.74667 15.8652 2.42342 16.7205 3.27825C17.5757 4.1331 18.2527 5.13834 18.7516 6.29398C19.2505 7.44959 19.5 8.68437 19.5 9.9983C19.5 11.3122 19.2506 12.5473 18.752 13.7034C18.2533 14.8596 17.5765 15.8652 16.7217 16.7205C15.8669 17.5757 14.8616 18.2527 13.706 18.7516C12.5504 19.2505 11.3156 19.5 10.0016 19.5ZM9.99998 18C12.2333 18 14.125 17.225 15.675 15.675C17.225 14.125 18 12.2333 18 9.99998C18 7.76664 17.225 5.87498 15.675 4.32498C14.125 2.77498 12.2333 1.99998 9.99998 1.99998C7.76664 1.99998 5.87498 2.77498 4.32498 4.32498C2.77498 5.87498 1.99998 7.76664 1.99998 9.99998C1.99998 12.2333 2.77498 14.125 4.32498 15.675C5.87498 17.225 7.76664 18 9.99998 18Z"
        fill="#E9BF99"
      />
    </svg>
  );

  const RadioButtonUnchecked: React.FC = () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="radio-icon"
      style={{
        width: "19px",
        height: "19px",
        position: "absolute",
        left: "2.5px",
        top: "2.5px",
      }}
    >
      <path
        d="M10.0016 19.5C8.68772 19.5 7.45268 19.2506 6.29655 18.752C5.1404 18.2533 4.13472 17.5765 3.2795 16.7217C2.42427 15.8669 1.74721 14.8616 1.24833 13.706C0.749442 12.5504 0.5 11.3156 0.5 10.0017C0.5 8.68772 0.749334 7.45268 1.248 6.29655C1.74667 5.1404 2.42342 4.13472 3.27825 3.2795C4.1331 2.42427 5.13834 1.74721 6.29398 1.24833C7.44959 0.749443 8.68437 0.5 9.9983 0.5C11.3122 0.5 12.5473 0.749334 13.7034 1.248C14.8596 1.74667 15.8652 2.42342 16.7205 3.27825C17.5757 4.1331 18.2527 5.13834 18.7516 6.29398C19.2505 7.44959 19.5 8.68437 19.5 9.9983C19.5 11.3122 19.2506 12.5473 18.752 13.7034C18.2533 14.8596 17.5765 15.8652 16.7217 16.7205C15.8669 17.5757 14.8616 18.2527 13.706 18.7516C12.5504 19.2505 11.3156 19.5 10.0016 19.5ZM9.99998 18C12.2333 18 14.125 17.225 15.675 15.675C17.225 14.125 18 12.2333 18 9.99998C18 7.76664 17.225 5.87498 15.675 4.32498C14.125 2.77498 12.2333 1.99998 9.99998 1.99998C7.76664 1.99998 5.87498 2.77498 4.32498 4.32498C2.77498 5.87498 1.99998 7.76664 1.99998 9.99998C1.99998 12.2333 2.77498 14.125 4.32498 15.675C5.87498 17.225 7.76664 18 9.99998 18Z"
        fill="#555555"
      />
    </svg>
  );

  const handleCreateNew = () => {
    console.log("Create new project");
  };

  const handleSendEnquiry = () => {
    console.log("Send enquiry for project:", selectedProjectId);
  };

  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Cabinet+Grotesk:wght@300;400;500;700&family=Figtree:wght@400&display=swap"
      />
      <div className="min-h-screen bg-black flex items-center justify-center p-4">
        <div
          style={{
            display: "flex",
            width: "410px",
            flexDirection: "column",
            alignItems: "flex-start",
            border: "0.5px solid #555",
            background: "#1C1A1F",
            height: "656px",
            fontFamily: "'Cabinet Grotesk',sans-serif",
          }}
        >
          {/* Header */}
          <div
            style={{
              display: "flex",
              height: "80px",
              padding: "24px 16px",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              boxSizing: "border-box",
            }}
          >
            <div
              style={{
                color: "#E9BF99",
                fontFamily: "'Cabinet Grotesk',sans-serif",
                fontSize: "24px",
                fontStyle: "normal",
                fontWeight: "300",
                lineHeight: "32px",
              }}
            >
              Select project for Enquiry
            </div>
            <Link to="/">
              <CloseIcon />
            </Link>
          </div>

          {/* Tab Navigation */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-end",
              width: "100%",
              position: "relative",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                width: "100%",
              }}
            >
              <div
                style={{
                  fontFamily: "'Cabinet Grotesk',sans-serif",
                  fontSize: "18px",
                  fontStyle: "normal",
                  lineHeight: "24px",
                  textAlign: "center",
                  color: "#E9BF99",
                  fontWeight: "500",
                  display: "flex",
                  padding: "16px",
                  justifyContent: "center",
                  alignItems: "center",
                  borderTop: "0.5px solid #555",
                  borderRight: "0.5px solid #555",
                  borderLeft: "0.5px solid #555",
                  flex: "1",
                }}
              >
                My Projects
              </div>
              <div
                style={{
                  fontFamily: "'Cabinet Grotesk',sans-serif",
                  fontSize: "18px",
                  fontStyle: "normal",
                  lineHeight: "24px",
                  textAlign: "center",
                  color: "#FFF",
                  fontWeight: "400",
                  display: "flex",
                  padding: "16px",
                  justifyContent: "center",
                  alignItems: "center",
                  borderTop: "0.5px solid #555",
                  borderRight: "0.5px solid #555",
                  borderLeft: "0.5px solid #555",
                  flex: "1",
                }}
              >
                Agency Projects
              </div>
            </div>
          </div>

          {/* Project List */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              background: "#000",
              flex: "1",
              paddingTop: "40px",
            }}
          >
            {/* Project 1 - Selected */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                border: "0.5px solid #555",
                height: "64px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  padding: "0px 8px",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <div
                  style={{
                    width: "24px",
                    height: "24px",
                    position: "relative",
                  }}
                >
                  <RadioButtonChecked />
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  height: "64px",
                  padding: "0px 16px",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flex: "1",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "2px",
                    width: "276.667px",
                  }}
                >
                  <div
                    style={{
                      color: "#FFF",
                      fontFamily: "'Cabinet Grotesk',sans-serif",
                      fontSize: "16px",
                      fontStyle: "normal",
                      fontWeight: "700",
                      lineHeight: "22px",
                    }}
                  >
                    Speed Runer
                  </div>
                  <div
                    style={{
                      color: "#9F9F9F",
                      fontFamily: "'Figtree',sans-serif",
                      fontSize: "12px",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight: "14px",
                    }}
                  >
                    Social Media
                  </div>
                </div>
              </div>
            </div>

            {/* Project 2-5 - Unselected */}
            {[2, 3, 4, 5].map((index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                  border: "0.5px solid #555",
                  height: "64px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    padding: "0px 8px",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <div
                    style={{
                      width: "24px",
                      height: "24px",
                      position: "relative",
                    }}
                  >
                    <RadioButtonUnchecked />
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    height: "64px",
                    padding: "0px 16px",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flex: "1",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      gap: "2px",
                      width: "276.667px",
                    }}
                  >
                    <div
                      style={{
                        color: "#FFF",
                        fontFamily: "'Cabinet Grotesk',sans-serif",
                        fontSize: "16px",
                        fontStyle: "normal",
                        fontWeight: "700",
                        lineHeight: "22px",
                      }}
                    >
                      Speed Runer
                    </div>
                    <div
                      style={{
                        color: "#9F9F9F",
                        fontFamily: "'Figtree',sans-serif",
                        fontSize: "12px",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight: "14px",
                      }}
                    >
                      Social Media
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Project 6 - No radio button */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                border: "0.5px solid #555",
                height: "64px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  padding: "0px 8px",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <div
                  style={{
                    width: "24px",
                    height: "24px",
                    position: "relative",
                  }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  height: "64px",
                  padding: "0px 16px",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flex: "1",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "2px",
                    width: "276.667px",
                  }}
                >
                  <div
                    style={{
                      color: "#FFF",
                      fontFamily: "'Cabinet Grotesk',sans-serif",
                      fontSize: "16px",
                      fontStyle: "normal",
                      fontWeight: "700",
                      lineHeight: "22px",
                    }}
                  >
                    Speed Runer
                  </div>
                  <div
                    style={{
                      color: "#9F9F9F",
                      fontFamily: "'Figtree',sans-serif",
                      fontSize: "12px",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight: "14px",
                    }}
                  >
                    Social Media
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div
            style={{
              display: "flex",
              padding: "16px",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "8px",
              width: "100%",
              border: "0.5px solid #555",
              background: "#000",
              boxSizing: "border-box",
            }}
          >
            <div
              style={{
                display: "flex",
                height: "48px",
                justifyContent: "center",
                alignItems: "flex-start",
                width: "100%",
                border: "0.5px solid #555",
                position: "relative",
              }}
            >
              <button
                onClick={handleCreateNew}
                style={{
                  fontFamily: "'Cabinet Grotesk',sans-serif",
                  fontSize: "18px",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "24px",
                  color: "#FFF",
                  display: "flex",
                  height: "48px",
                  padding: "12px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                  flex: "1",
                  background: "#0E0E0E",
                  borderRight: "0.5px solid #555",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Create new
              </button>
              <button
                onClick={handleSendEnquiry}
                style={{
                  fontFamily: "'Cabinet Grotesk',sans-serif",
                  fontSize: "18px",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "24px",
                  color: "#000",
                  display: "flex",
                  height: "48px",
                  padding: "12px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                  flex: "1",
                  background: "#E9BF99",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Send Enquiry
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProjectPage;
