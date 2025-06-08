import React, { useState } from "react";
import { Link } from "react-router-dom";

interface FormData {
  signUpAs: string;
  emailAddress: string;
  keyPersonName: string;
  mobileNumber: string;
  ownerName: string;
  aboutBrand: string;
  brandName: string;
  businessAddress: string;
  socialMediaLink: string;
  gstin: string;
}

const BrandDetailsPage = () => {
  const [formData, setFormData] = useState<FormData>({
    signUpAs: "Brand",
    emailAddress: "adidasbrand@gmail.com",
    keyPersonName: "Deven Patil",
    mobileNumber: "9876543210",
    ownerName: "Adi Dassler",
    aboutBrand: "reate visually stunning and emotionally impactful films.",
    brandName: "Adidas",
    businessAddress: "araj Rd, opp. Sambhaji Park, Pune, Maharashtra 411004",
    socialMediaLink: "adidas.com",
    gstin: "18ABKCGYQUIDk8",
  });

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
  };

  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Cabinet+Grotesk:wght@300;400;700&family=Figtree:wght@400&display=swap"
      />
      <div className="min-h-screen bg-black flex items-center justify-center p-4">
        <div
          style={{
            display: "flex",
            padding: "24px",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "40px",
            background: "#1C1A1F",
            width: "804px",
            height: "786px",
            position: "relative",
            fontFamily: "'Figtree',sans-serif",
          }}
        >
          {/* Header */}
          <div
            style={{
              height: "32px",
              alignSelf: "stretch",
              color: "#FFF",
              fontFamily: "'Cabinet Grotesk',sans-serif",
              fontSize: "24px",
              fontStyle: "normal",
              fontWeight: "300",
              lineHeight: "32px",
              position: "relative",
            }}
          >
            Brand Details
          </div>

          {/* Close Icon */}
          <Link
            to="/"
            style={{
              position: "absolute",
              top: "24px",
              right: "24px",
              color: "#FFF",
              fontSize: "24px",
              cursor: "pointer",
              opacity: "0.8",
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ width: "24px", height: "24px", aspectRatio: "1/1" }}
            >
              <mask
                id="mask0_1098_58604"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="24"
                height="24"
              >
                <rect width="24" height="24" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_1098_58604)">
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
          </Link>

          {/* Form Container */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              gap: "40px",
              position: "relative",
            }}
          >
            {/* Two Column Layout */}
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "40px",
                position: "relative",
              }}
            >
              {/* Left Column */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "40px",
                  alignSelf: "stretch",
                  position: "relative",
                }}
              >
                {/* Sign Up As */}
                <div
                  style={{
                    display: "flex",
                    width: "358px",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "8px",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "10px",
                      position: "relative",
                    }}
                  >
                    <div
                      style={{
                        color: "#FFF",
                        fontFamily: "'Figtree',sans-serif",
                        fontSize: "14px",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight: "18px",
                        opacity: "0.8",
                        position: "relative",
                      }}
                    >
                      <span>Sign Up as</span>
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
                    <div
                      style={{
                        display: "flex",
                        padding: "17px 16px",
                        alignItems: "center",
                        gap: "10px",
                        alignSelf: "stretch",
                        border: "0.5px solid #555",
                        position: "relative",
                      }}
                    >
                      <input
                        type="text"
                        value={formData.signUpAs}
                        onChange={(e) =>
                          handleInputChange("signUpAs", e.target.value)
                        }
                        style={{
                          flex: "1 0 0",
                          color: "#FFF",
                          fontFamily: "'Figtree',sans-serif",
                          fontSize: "14px",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight: "22px",
                          position: "relative",
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                          background: "transparent",
                          border: "none",
                          outline: "none",
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* Email Address */}
                <div
                  style={{
                    display: "flex",
                    width: "358px",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "8px",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "10px",
                      position: "relative",
                    }}
                  >
                    <div
                      style={{
                        color: "#FFF",
                        fontFamily: "'Figtree',sans-serif",
                        fontSize: "14px",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight: "18px",
                        opacity: "0.8",
                        position: "relative",
                      }}
                    >
                      <span>Email Adress</span>
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
                    <div
                      style={{
                        display: "flex",
                        padding: "17px 16px",
                        alignItems: "center",
                        gap: "10px",
                        alignSelf: "stretch",
                        border: "0.5px solid #555",
                        position: "relative",
                        background: "#000",
                      }}
                    >
                      <input
                        type="email"
                        value={formData.emailAddress}
                        onChange={(e) =>
                          handleInputChange("emailAddress", e.target.value)
                        }
                        style={{
                          flex: "1 0 0",
                          color: "#FFF",
                          fontFamily: "'Figtree',sans-serif",
                          fontSize: "14px",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight: "22px",
                          position: "relative",
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                          background: "transparent",
                          border: "none",
                          outline: "none",
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* Mobile Number */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "24px",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      width: "358px",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      gap: "8px",
                      position: "relative",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "10px",
                        alignSelf: "stretch",
                        position: "relative",
                      }}
                    >
                      <div
                        style={{
                          color: "#FFF",
                          fontFamily: "'Figtree',sans-serif",
                          fontSize: "14px",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight: "18px",
                          opacity: "0.8",
                          position: "relative",
                        }}
                      >
                        <span>Mobile Number</span>
                        <span style={{ color: "#F65F5F" }}>*</span>
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        width: "358px",
                        height: "56px",
                        paddingRight: "16px",
                        alignItems: "center",
                        border: "0.5px solid #555",
                        background: "#000",
                        position: "relative",
                      }}
                    >
                      <div
                        style={{
                          color: "#FFF",
                          fontFamily: "'Figtree',sans-serif",
                          fontSize: "14px",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight: "22px",
                          position: "relative",
                          display: "flex",
                          minHeight: "56px",
                          padding: "19px 15px",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          gap: "8px",
                          alignSelf: "stretch",
                          borderRight: "0.5px solid #555",
                        }}
                      >
                        +91
                      </div>
                      <input
                        type="tel"
                        value={formData.mobileNumber}
                        onChange={(e) =>
                          handleInputChange("mobileNumber", e.target.value)
                        }
                        style={{
                          flex: "1 0 0",
                          color: "#FFF",
                          fontFamily: "'Figtree',sans-serif",
                          fontSize: "14px",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight: "22px",
                          position: "relative",
                          display: "flex",
                          width: "302px",
                          minHeight: "56px",
                          padding: "19px 15px",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "flex-start",
                          gap: "8px",
                          flexShrink: "0",
                          alignSelf: "stretch",
                          background: "transparent",
                          border: "none",
                          outline: "none",
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* Key Person Name */}
                <div
                  style={{
                    width: "358px",
                    height: "102px",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      width: "358px",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      gap: "8px",
                      position: "relative",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "10px",
                        position: "relative",
                      }}
                    >
                      <div
                        style={{
                          color: "#FFF",
                          fontFamily: "'Figtree',sans-serif",
                          fontSize: "14px",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight: "18px",
                          opacity: "0.8",
                          position: "relative",
                        }}
                      >
                        <span>Key Person Name</span>
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
                      <div
                        style={{
                          display: "flex",
                          padding: "17px 16px",
                          alignItems: "center",
                          gap: "10px",
                          alignSelf: "stretch",
                          border: "0.5px solid #555",
                          position: "relative",
                          background: "#000",
                        }}
                      >
                        <input
                          type="text"
                          value={formData.keyPersonName}
                          onChange={(e) =>
                            handleInputChange("keyPersonName", e.target.value)
                          }
                          style={{
                            flex: "1 0 0",
                            color: "#FFF",
                            fontFamily: "'Figtree',sans-serif",
                            fontSize: "14px",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight: "22px",
                            position: "relative",
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                            background: "transparent",
                            border: "none",
                            outline: "none",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      color: "#555",
                      fontFamily: "'Figtree',sans-serif",
                      fontSize: "12px",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight: "16px",
                      opacity: "0.8",
                      position: "absolute",
                      left: "0px",
                      top: "86px",
                      width: "256px",
                      height: "16px",
                    }}
                  >
                    (Please separate multiple names with a comma)
                  </div>
                </div>

                {/* Owner Name */}
                <div
                  style={{
                    width: "358px",
                    height: "100px",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      display: "inline-flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      gap: "24px",
                      position: "absolute",
                      left: "0px",
                      top: "0px",
                      width: "358px",
                      height: "82px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        width: "358px",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        gap: "8px",
                        position: "relative",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "10px",
                          alignSelf: "stretch",
                          position: "relative",
                        }}
                      >
                        <div
                          style={{
                            color: "#FFF",
                            fontFamily: "'Figtree',sans-serif",
                            fontSize: "14px",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight: "18px",
                            opacity: "0.8",
                            position: "relative",
                          }}
                        >
                          <span>Owner Name</span>
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
                        <div
                          style={{
                            display: "flex",
                            padding: "17px 16px",
                            alignItems: "center",
                            gap: "10px",
                            alignSelf: "stretch",
                            border: "0.5px solid #555",
                            position: "relative",
                            background: "#000",
                          }}
                        >
                          <input
                            type="text"
                            value={formData.ownerName}
                            onChange={(e) =>
                              handleInputChange("ownerName", e.target.value)
                            }
                            style={{
                              flex: "1 0 0",
                              color: "#FFF",
                              fontFamily: "'Figtree',sans-serif",
                              fontSize: "14px",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight: "22px",
                              position: "relative",
                              display: "flex",
                              alignItems: "center",
                              gap: "10px",
                              background: "transparent",
                              border: "none",
                              outline: "none",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      color: "#555",
                      fontFamily: "'Figtree',sans-serif",
                      fontSize: "12px",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight: "16px",
                      opacity: "0.8",
                      position: "absolute",
                      left: "0px",
                      top: "86px",
                      width: "256px",
                      height: "16px",
                    }}
                  >
                    (Please separate multiple names with a comma)
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "40px",
                  alignSelf: "stretch",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "40px",
                    position: "relative",
                  }}
                >
                  {/* About Brand */}
                  <div
                    style={{
                      display: "flex",
                      width: "358px",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      gap: "8px",
                      position: "relative",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "10px",
                        position: "relative",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          width: "358px",
                          alignItems: "flex-start",
                          gap: "10px",
                          position: "relative",
                        }}
                      >
                        <div
                          style={{
                            color: "#FFF",
                            fontFamily: "'Figtree',sans-serif",
                            fontSize: "14px",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight: "18px",
                            opacity: "0.8",
                            position: "relative",
                          }}
                        >
                          <span>About Brand</span>
                          <span style={{ color: "#F65F5F" }}>*</span>
                        </div>
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
                      <div
                        style={{
                          background: "#000",
                          display: "flex",
                          height: "56px",
                          padding: "17px 16px",
                          alignItems: "flex-end",
                          gap: "10px",
                          alignSelf: "stretch",
                          border: "0.5px solid #555",
                          position: "relative",
                        }}
                      >
                        <input
                          type="text"
                          value={formData.aboutBrand}
                          onChange={(e) =>
                            handleInputChange("aboutBrand", e.target.value)
                          }
                          style={{
                            color: "#FFF",
                            fontFamily: "'Figtree',sans-serif",
                            fontSize: "14px",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight: "22px",
                            position: "relative",
                            display: "flex",
                            justifyContent: "flex-end",
                            alignItems: "center",
                            gap: "10px",
                            flex: "1 0 0",
                            background: "transparent",
                            border: "none",
                            outline: "none",
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Brand Name */}
                  <div
                    style={{
                      display: "flex",
                      width: "358px",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      gap: "8px",
                      position: "relative",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "10px",
                        position: "relative",
                      }}
                    >
                      <div
                        style={{
                          color: "#FFF",
                          fontFamily: "'Figtree',sans-serif",
                          fontSize: "14px",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight: "18px",
                          opacity: "0.8",
                          position: "relative",
                        }}
                      >
                        <span>Brand Name</span>
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
                      <div
                        style={{
                          display: "flex",
                          padding: "17px 16px",
                          alignItems: "center",
                          gap: "10px",
                          alignSelf: "stretch",
                          border: "0.5px solid #555",
                          position: "relative",
                          background: "#000",
                        }}
                      >
                        <input
                          type="text"
                          value={formData.brandName}
                          onChange={(e) =>
                            handleInputChange("brandName", e.target.value)
                          }
                          style={{
                            flex: "1 0 0",
                            color: "#FFF",
                            fontFamily: "'Figtree',sans-serif",
                            fontSize: "14px",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight: "22px",
                            position: "relative",
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                            background: "transparent",
                            border: "none",
                            outline: "none",
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Registered Business Address */}
                  <div
                    style={{
                      display: "flex",
                      width: "358px",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      gap: "8px",
                      position: "relative",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "10px",
                        position: "relative",
                      }}
                    >
                      <div
                        style={{
                          color: "#FFF",
                          fontFamily: "'Figtree',sans-serif",
                          fontSize: "14px",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight: "18px",
                          opacity: "0.8",
                          position: "relative",
                        }}
                      >
                        <span>Registered Business Address</span>
                        <span style={{ color: "#F65F5F" }}>*</span>
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        width: "358px",
                        height: "56px",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        gap: "12px",
                        position: "relative",
                      }}
                    >
                      <div
                        style={{
                          background: "#000",
                          display: "flex",
                          height: "56px",
                          padding: "17px 16px",
                          alignItems: "flex-end",
                          gap: "10px",
                          flexShrink: "0",
                          alignSelf: "stretch",
                          border: "0.5px solid #555",
                          position: "relative",
                        }}
                      >
                        <input
                          type="text"
                          value={formData.businessAddress}
                          onChange={(e) =>
                            handleInputChange("businessAddress", e.target.value)
                          }
                          style={{
                            color: "#FFF",
                            fontFamily: "'Figtree',sans-serif",
                            fontSize: "14px",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight: "22px",
                            position: "relative",
                            display: "flex",
                            justifyContent: "flex-end",
                            alignItems: "center",
                            gap: "10px",
                            flex: "1 0 0",
                            background: "transparent",
                            border: "none",
                            outline: "none",
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Social Media / Website Link */}
                  <div
                    style={{
                      display: "flex",
                      width: "358px",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      gap: "8px",
                      position: "relative",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "10px",
                        position: "relative",
                      }}
                    >
                      <div
                        style={{
                          color: "#FFF",
                          fontFamily: "'Figtree',sans-serif",
                          fontSize: "14px",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight: "18px",
                          opacity: "0.8",
                          position: "relative",
                        }}
                      >
                        Social Media / Website Link
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
                      <div
                        style={{
                          display: "flex",
                          padding: "17px 16px",
                          alignItems: "center",
                          gap: "10px",
                          alignSelf: "stretch",
                          border: "0.5px solid #555",
                          position: "relative",
                          background: "#000",
                        }}
                      >
                        <input
                          type="url"
                          value={formData.socialMediaLink}
                          onChange={(e) =>
                            handleInputChange("socialMediaLink", e.target.value)
                          }
                          style={{
                            flex: "1 0 0",
                            color: "#466EFC",
                            fontFamily: "'Figtree',sans-serif",
                            fontSize: "14px",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight: "22px",
                            position: "relative",
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                            background: "transparent",
                            border: "none",
                            outline: "none",
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* GSTIN */}
                  <div
                    style={{
                      display: "flex",
                      width: "358px",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      gap: "8px",
                      position: "relative",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "10px",
                        position: "relative",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          width: "358px",
                          alignItems: "flex-start",
                          gap: "10px",
                          position: "relative",
                        }}
                      >
                        <div
                          style={{
                            color: "#FFF",
                            fontFamily: "'Figtree',sans-serif",
                            fontSize: "14px",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight: "18px",
                            opacity: "0.8",
                            position: "relative",
                          }}
                        >
                          <span>GSTIN</span>
                          <span style={{ color: "#F65F5F" }}>*</span>
                        </div>
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{
                            width: "24px",
                            height: "24px",
                            flexShrink: 0,
                            opacity: 0.8,
                            position: "absolute",
                            right: "0px",
                            top: "-3px",
                          }}
                        >
                          <path
                            d="M10 5.26927C9.77117 5.26927 9.57935 5.34667 9.42455 5.50147C9.26975 5.65629 9.19235 5.84812 9.19235 6.07695C9.19235 6.3058 9.26975 6.49762 9.42455 6.65242C9.57935 6.80723 9.77117 6.88462 10 6.88462C10.2289 6.88462 10.4207 6.80723 10.5755 6.65242C10.7303 6.49762 10.8077 6.3058 10.8077 6.07695C10.8077 5.84812 10.7303 5.65629 10.5755 5.50147C10.4207 5.34667 10.2289 5.26927 10 5.26927ZM10.75 8.9231L9.25005 8.9231L9.25005 14.9231L10.75 14.9231L10.75 8.9231ZM9.99835 0.500049C11.3123 0.500048 12.5473 0.749383 13.7034 1.24805C14.8596 1.74672 15.8653 2.42346 16.7205 3.2783C17.5757 4.13315 18.2528 5.13839 18.7517 6.29402C19.2506 7.44964 19.5 8.68442 19.5 9.99835C19.5 11.3123 19.2507 12.5473 18.752 13.7034C18.2533 14.8596 17.5766 15.8653 16.7217 16.7205C15.8669 17.5757 14.8617 18.2528 13.706 18.7517C12.5504 19.2506 11.3156 19.5 10.0017 19.5C8.68777 19.5 7.45273 19.2507 6.2966 18.752C5.14045 18.2533 4.13477 17.5766 3.27955 16.7218C2.42431 15.8669 1.74726 14.8617 1.24837 13.706C0.749488 12.5504 0.500047 11.3156 0.500047 10.0017C0.500047 8.68777 0.749381 7.45273 1.24805 6.2966C1.74671 5.14045 2.42346 4.13477 3.2783 3.27955C4.13315 2.42432 5.13839 1.74726 6.29402 1.24837C7.44964 0.74949 8.68442 0.500049 9.99835 0.500049ZM10 2.00002C7.76669 2.00002 5.87502 2.77502 4.32502 4.32502C2.77502 5.87502 2.00002 7.76669 2.00002 10C2.00002 12.2334 2.77502 14.125 4.32502 15.675C5.87502 17.225 7.76669 18 10 18C12.2334 18 14.125 17.225 15.675 15.675C17.225 14.125 18 12.2334 18 10C18 7.76669 17.225 5.87502 15.675 4.32502C14.125 2.77502 12.2334 2.00002 10 2.00002Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "8px",
                        alignSelf: "stretch",
                        position: "relative",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          height: "56px",
                          alignItems: "flex-start",
                          gap: "8px",
                          flex: "1 0 0",
                          position: "relative",
                        }}
                      >
                        <div
                          style={{
                            background: "#000",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            gap: "12px",
                            flex: "1 0 0",
                            alignSelf: "stretch",
                            borderBottom: "0.5px solid #555",
                            position: "relative",
                          }}
                        >
                          <input
                            type="text"
                            value={formData.gstin}
                            onChange={(e) =>
                              handleInputChange("gstin", e.target.value)
                            }
                            style={{
                              flex: "1 0 0",
                              color: "#FFF",
                              fontFamily: "'Figtree',sans-serif",
                              fontSize: "14px",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight: "22px",
                              position: "relative",
                              display: "flex",
                              height: "56px",
                              flexDirection: "column",
                              alignItems: "flex-start",
                              gap: "12px",
                              alignSelf: "stretch",
                              background: "transparent",
                              border: "none",
                              outline: "none",
                              padding: "17px 16px",
                              borderTop: "0.5px solid #555",
                              borderLeft: "0.5px solid #555",
                              borderRight: "0.5px solid #555",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  style={{
                    width: "358px",
                    flexShrink: "0",
                    color: "#0E0E0E",
                    textAlign: "center",
                    fontFamily: "'Cabinet Grotesk',sans-serif",
                    fontSize: "24px",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight: "24px",
                    position: "relative",
                    display: "flex",
                    height: "56px",
                    padding: "16px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "9.326px",
                    border: "0.5px solid #555",
                    background: "#E9BF99",
                    cursor: "pointer",
                  }}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BrandDetailsPage;
