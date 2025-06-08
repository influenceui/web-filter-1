import React, { useState } from "react";
import { Link } from "react-router-dom";

interface ScopeItem {
  id: number;
  service: string;
  deliverables: string;
  quantity: string;
  rate: string;
  total: string;
}

interface FormData {
  counterFinalPrice: string;
  comments: string;
  needFullPayment: "yes" | "no";
  advanceAmount: string;
  gstApplicable: "yes" | "no";
  termsConditions: string;
  importantNote: string;
}

const CounterPage = () => {
  const [scopeOfWork] = useState<ScopeItem[]>([
    {
      id: 1,
      service: "Instagram Static Posts",
      deliverables:
        "Design visually energetic posts for product and lifestyle promotion",
      quantity: "5 Posts",
      rate: "₹5,000",
      total: "₹25,000",
    },
    {
      id: 2,
      service: "Instagram Reels (Motion Design)",
      deliverables: "Animated reels with sleek transitions and typography",
      quantity: "3 Reels",
      rate: "₹8,000",
      total: "₹24,000",
    },
    {
      id: 3,
      service: "Concept Development",
      deliverables: "Moodboards, references, and visual style alignment",
      quantity: "1 Time",
      rate: "₹6,000",
      total: "₹6,000",
    },
    {
      id: 4,
      service: "Brand Adaptation",
      deliverables:
        "Following brand guidelines, adapting design elements accordingly",
      quantity: "Included",
      rate: "-",
      total: "-",
    },
  ]);

  const [formData, setFormData] = useState<FormData>({
    counterFinalPrice: "₹ 53,000",
    comments: "You can add note or mention changes here",
    needFullPayment: "no",
    advanceAmount: "₹ 10,000",
    gstApplicable: "yes",
    termsConditions: "T&C.pdf",
    importantNote: "Request you to pay in the form of cheque.",
  });

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleRadioChange = (
    field: "needFullPayment" | "gstApplicable",
    value: "yes" | "no",
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("Counter submitted:", formData);
  };

  const handleAddRow = () => {
    console.log("Add row clicked");
  };

  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Cabinet+Grotesk:wght@300;400;700&family=Figtree:wght@400;600;700&display=swap"
      />
      <div className="min-h-screen bg-black flex items-center justify-center p-4">
        <div
          style={{
            display: "flex",
            width: "804px",
            padding: "24px",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-end",
            gap: "40px",
            background: "#1C1A1F",
            position: "relative",
            fontFamily: "'Figtree',sans-serif",
          }}
        >
          {/* Close Icon */}
          <Link
            to="/"
            style={{
              position: "absolute",
              top: "24px",
              right: "24px",
              width: "24px",
              height: "24px",
              cursor: "pointer",
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ width: "24px", height: "24px" }}
            >
              <mask
                id="mask0_1127_84766"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="24"
                height="24"
              >
                <rect width="24" height="24" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_1127_84766)">
                <path
                  d="M12.0015 13.0612L7.93568 17.1271L6.87502 16.0664L10.9409 12.0006L12.0015 10.9399L16.0674 6.87404L17.1281 7.9347L13.0622 12.0006L12.0015 13.0612Z"
                  fill="#E9BF99"
                />
                <path
                  d="M10.9427 11.9996L6.87682 7.93372L7.93748 6.87306L12.0033 10.9389L13.064 11.9996L17.1299 16.0655L16.0692 17.1261L12.0033 13.0602L10.9427 11.9996Z"
                  fill="#E9BF99"
                />
              </g>
            </svg>
          </Link>

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
            }}
          >
            Counter
          </div>

          {/* Scope of Work Section */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "8px",
              alignSelf: "stretch",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                alignSelf: "stretch",
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
                }}
              >
                <span>Scope of Work</span>
                <span style={{ color: "#F65F5F" }}>*</span>
              </div>
              <div
                onClick={handleAddRow}
                style={{
                  color: "#E9BF99",
                  textAlign: "right",
                  fontFamily: "'Figtree',sans-serif",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "18px",
                  textDecorationLine: "underline",
                  opacity: "0.8",
                  cursor: "pointer",
                }}
              >
                Add row
              </div>
            </div>

            {/* Table */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                alignSelf: "stretch",
              }}
            >
              {/* Header Row */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  alignSelf: "stretch",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    padding: "17px 16px",
                    alignItems: "center",
                    gap: "10px",
                    border: "0.5px solid #555",
                    background: "#000",
                    color: "#E9BF99",
                    fontFamily: "'Figtree',sans-serif",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "22px",
                    width: "157px",
                  }}
                >
                  Service
                </div>
                <div
                  style={{
                    display: "flex",
                    padding: "17px 16px",
                    alignItems: "center",
                    gap: "10px",
                    border: "0.5px solid #555",
                    background: "#000",
                    color: "#E9BF99",
                    fontFamily: "'Figtree',sans-serif",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "22px",
                    width: "278px",
                  }}
                >
                  Deliverables
                </div>
                <div
                  style={{
                    display: "flex",
                    padding: "17px 16px",
                    alignItems: "center",
                    gap: "10px",
                    border: "0.5px solid #555",
                    background: "#000",
                    color: "#E9BF99",
                    fontFamily: "'Figtree',sans-serif",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "22px",
                    flex: "1 0 0",
                  }}
                >
                  Quantity
                </div>
                <div
                  style={{
                    display: "flex",
                    padding: "17px 16px",
                    alignItems: "center",
                    gap: "10px",
                    border: "0.5px solid #555",
                    background: "#000",
                    color: "#E9BF99",
                    fontFamily: "'Figtree',sans-serif",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "22px",
                    flex: "1 0 0",
                  }}
                >
                  Rate (INR)
                </div>
                <div
                  style={{
                    display: "flex",
                    padding: "17px 16px",
                    alignItems: "center",
                    gap: "10px",
                    border: "0.5px solid #555",
                    background: "#000",
                    color: "#E9BF99",
                    fontFamily: "'Figtree',sans-serif",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "22px",
                    flex: "1 0 0",
                  }}
                >
                  Total (INR)
                </div>
              </div>

              {/* Data Rows */}
              {scopeOfWork.map((item) => (
                <div
                  key={item.id}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    alignSelf: "stretch",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      padding: "17px 16px",
                      alignItems: "flex-start",
                      gap: "10px",
                      border: "0.5px solid #555",
                      background: "#000",
                      color: "#FFF",
                      fontFamily: "'Figtree',sans-serif",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight: "22px",
                      width: "157px",
                    }}
                  >
                    {item.service}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      padding: "17px 16px",
                      alignItems: "flex-start",
                      gap: "10px",
                      border: "0.5px solid #555",
                      background: "#000",
                      color: "#FFF",
                      fontFamily: "'Figtree',sans-serif",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight: "22px",
                      width: "278px",
                    }}
                  >
                    {item.deliverables}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      padding: "17px 16px",
                      alignItems: "center",
                      gap: "10px",
                      border: "0.5px solid #555",
                      background: "#000",
                      color: "#FFF",
                      fontFamily: "'Figtree',sans-serif",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight: "22px",
                      flex: "1 0 0",
                      justifyContent: "center",
                    }}
                  >
                    {item.quantity}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      padding: "17px 16px",
                      alignItems: "center",
                      gap: "10px",
                      border: "0.5px solid #555",
                      background: "#000",
                      color: "#FFF",
                      fontFamily: "'Figtree',sans-serif",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight: "22px",
                      flex: "1 0 0",
                      justifyContent: "center",
                    }}
                  >
                    {item.rate}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      padding: "17px 16px",
                      alignItems: "center",
                      gap: "10px",
                      border: "0.5px solid #555",
                      background: "#000",
                      color: "#FFF",
                      fontFamily: "'Figtree',sans-serif",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight: "22px",
                      flex: "1 0 0",
                      justifyContent: "center",
                    }}
                  >
                    {item.total}
                  </div>
                </div>
              ))}

              {/* Total Row */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  alignSelf: "stretch",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    width: "157px",
                    padding: "16px",
                    alignItems: "center",
                    gap: "10px",
                    border: "0.5px solid #555",
                    color: "#FFF",
                    fontFamily: "'Figtree',sans-serif",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "22px",
                  }}
                >
                  Total
                </div>
                <div
                  style={{
                    display: "flex",
                    padding: "16px",
                    alignItems: "center",
                    flex: "1 0 0",
                    border: "0.5px solid #555",
                    color: "#FFF",
                    textAlign: "right",
                    fontFamily: "'Figtree',sans-serif",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "22px",
                    justifyContent: "flex-end",
                  }}
                >
                  ₹ 55,000
                </div>
              </div>

              {/* Revised Total Row */}
              <div
                style={{
                  display: "flex",
                  height: "78px",
                  alignItems: "flex-start",
                  alignSelf: "stretch",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    width: "157px",
                    padding: "16px",
                    alignItems: "center",
                    gap: "10px",
                    alignSelf: "stretch",
                    border: "0.5px solid #555",
                    color: "#83C778",
                    fontFamily: "'Figtree',sans-serif",
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: "600",
                    lineHeight: "18px",
                  }}
                >
                  Revised Total
                </div>
                <div
                  style={{
                    display: "flex",
                    padding: "0px 16px 0px 401px",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    flex: "1 0 0",
                    alignSelf: "stretch",
                    border: "0.5px solid #555",
                    color: "#83C778",
                    textAlign: "right",
                    fontFamily: "'Figtree',sans-serif",
                  }}
                >
                  <span>₹</span>
                  <span
                    style={{
                      fontSize: "18px",
                      fontWeight: "700",
                    }}
                  >
                    52,000
                  </span>
                  <span
                    style={{
                      fontSize: "12px",
                      fontWeight: "400",
                      opacity: "0.5",
                    }}
                  >
                    (GST Excl.)
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Form Fields Section */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "40px",
              alignSelf: "stretch",
            }}
          >
            {/* Counter Final Price and Comments */}
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "flex-end",
                gap: "40px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "8px",
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
                  }}
                >
                  Counter Final Price
                </div>
                <input
                  type="text"
                  value={formData.counterFinalPrice}
                  onChange={(e) =>
                    handleInputChange("counterFinalPrice", e.target.value)
                  }
                  style={{
                    display: "flex",
                    width: "358px",
                    padding: "17px 16px",
                    alignItems: "center",
                    gap: "10px",
                    border: "0.5px solid #555",
                    background: "#000",
                    color: "#FFF",
                    fontFamily: "'Figtree',sans-serif",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "22px",
                    outline: "none",
                  }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "8px",
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
                  }}
                >
                  Comments
                </div>
                <input
                  type="text"
                  value={formData.comments}
                  onChange={(e) =>
                    handleInputChange("comments", e.target.value)
                  }
                  placeholder="You can add note or mention changes here"
                  style={{
                    display: "flex",
                    width: "358px",
                    padding: "17px 16px",
                    alignItems: "center",
                    gap: "10px",
                    border: "0.5px solid #555",
                    background: "#000",
                    color: "#555",
                    fontFamily: "'Figtree',sans-serif",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "22px",
                    outline: "none",
                  }}
                />
              </div>
            </div>

            {/* Need full payment and Advance Amount */}
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "flex-end",
                gap: "40px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "8px",
                  flex: "1 0 0",
                  alignSelf: "stretch",
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
                  }}
                >
                  <span>Need full payment in Advance ?</span>
                  <span style={{ color: "#F65F5F" }}>*</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flex: "1 0 0",
                    alignSelf: "stretch",
                  }}
                >
                  <div
                    onClick={() => handleRadioChange("needFullPayment", "yes")}
                    style={{
                      display: "flex",
                      padding: "0px 16px",
                      alignItems: "center",
                      gap: "8px",
                      flex: "1 0 0",
                      alignSelf: "stretch",
                      border: "0.5px solid #555",
                      background: "#000",
                      cursor: "pointer",
                    }}
                  >
                    <div
                      style={{
                        width: "24px",
                        height: "24px",
                        position: "relative",
                      }}
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
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
                          fill={
                            formData.needFullPayment === "yes"
                              ? "#E9BF99"
                              : "#555555"
                          }
                        />
                      </svg>
                    </div>
                    <div
                      style={{
                        color: "#FFF",
                        fontFamily: "'Figtree',sans-serif",
                        fontSize: "14px",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight: "22px",
                        opacity: "0.8",
                      }}
                    >
                      Yes
                    </div>
                  </div>
                  <div
                    onClick={() => handleRadioChange("needFullPayment", "no")}
                    style={{
                      display: "flex",
                      padding: "0px 16px",
                      alignItems: "center",
                      gap: "8px",
                      flex: "1 0 0",
                      alignSelf: "stretch",
                      border: "0.5px solid #555",
                      background: "#000",
                      cursor: "pointer",
                    }}
                  >
                    <div
                      style={{
                        width: "24px",
                        height: "24px",
                        position: "relative",
                      }}
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{
                          width: "19px",
                          height: "19px",
                          position: "absolute",
                          left: "2.5px",
                          top: "2.5px",
                        }}
                      >
                        {formData.needFullPayment === "no" ? (
                          <path
                            d="M9.99998 14.5C11.2487 14.5 12.3109 14.0621 13.1865 13.1865C14.0621 12.3109 14.5 11.2487 14.5 9.99998C14.5 8.75128 14.0621 7.6891 13.1865 6.81345C12.3109 5.93782 11.2487 5.5 9.99998 5.5C8.75128 5.5 7.6891 5.93782 6.81345 6.81345C5.93782 7.6891 5.5 8.75128 5.5 9.99998C5.5 11.2487 5.93782 12.3109 6.81345 13.1865C7.6891 14.0621 8.75128 14.5 9.99998 14.5ZM10.0016 19.5C8.68772 19.5 7.45268 19.2506 6.29655 18.752C5.1404 18.2533 4.13472 17.5765 3.2795 16.7217C2.42427 15.8669 1.74721 14.8616 1.24833 13.706C0.749442 12.5504 0.5 11.3156 0.5 10.0017C0.5 8.68772 0.749334 7.45268 1.248 6.29655C1.74667 5.1404 2.42342 4.13472 3.27825 3.2795C4.1331 2.42427 5.13834 1.74721 6.29398 1.24833C7.44959 0.749443 8.68437 0.5 9.9983 0.5C11.3122 0.5 12.5473 0.749334 13.7034 1.248C14.8596 1.74667 15.8652 2.42342 16.7205 3.27825C17.5757 4.1331 18.2527 5.13834 18.7516 6.29398C19.2505 7.44959 19.5 8.68437 19.5 9.9983C19.5 11.3122 19.2506 12.5473 18.752 13.7034C18.2533 14.8596 17.5765 15.8652 16.7217 16.7205C15.8669 17.5757 14.8616 18.2527 13.706 18.7516C12.5504 19.2505 11.3156 19.5 10.0016 19.5ZM9.99998 18C12.2333 18 14.125 17.225 15.675 15.675C17.225 14.125 18 12.2333 18 9.99998C18 7.76664 17.225 5.87498 15.675 4.32498C14.125 2.77498 12.2333 1.99998 9.99998 1.99998C7.76664 1.99998 5.87498 2.77498 4.32498 4.32498C2.77498 5.87498 1.99998 7.76664 1.99998 9.99998C1.99998 12.2333 2.77498 14.125 4.32498 15.675C5.87498 17.225 7.76664 18 9.99998 18Z"
                            fill="#E9BF99"
                          />
                        ) : (
                          <path
                            d="M10.0016 19.5C8.68772 19.5 7.45268 19.2506 6.29655 18.752C5.1404 18.2533 4.13472 17.5765 3.2795 16.7217C2.42427 15.8669 1.74721 14.8616 1.24833 13.706C0.749442 12.5504 0.5 11.3156 0.5 10.0017C0.5 8.68772 0.749334 7.45268 1.248 6.29655C1.74667 5.1404 2.42342 4.13472 3.27825 3.2795C4.1331 2.42427 5.13834 1.74721 6.29398 1.24833C7.44959 0.749443 8.68437 0.5 9.9983 0.5C11.3122 0.5 12.5473 0.749334 13.7034 1.248C14.8596 1.74667 15.8652 2.42342 16.7205 3.27825C17.5757 4.1331 18.2527 5.13834 18.7516 6.29398C19.2505 7.44959 19.5 8.68437 19.5 9.9983C19.5 11.3122 19.2506 12.5473 18.752 13.7034C18.2533 14.8596 17.5765 15.8652 16.7217 16.7205C15.8669 17.5757 14.8616 18.2527 13.706 18.7516C12.5504 19.2505 11.3156 19.5 10.0016 19.5ZM9.99998 18C12.2333 18 14.125 17.225 15.675 15.675C17.225 14.125 18 12.2333 18 9.99998C18 7.76664 17.225 5.87498 15.675 4.32498C14.125 2.77498 12.2333 1.99998 9.99998 1.99998C7.76664 1.99998 5.87498 2.77498 4.32498 4.32498C2.77498 5.87498 1.99998 7.76664 1.99998 9.99998C1.99998 12.2333 2.77498 14.125 4.32498 15.675C5.87498 17.225 7.76664 18 9.99998 18Z"
                            fill="#555555"
                          />
                        )}
                      </svg>
                    </div>
                    <div
                      style={{
                        color: "#FFF",
                        fontFamily: "'Figtree',sans-serif",
                        fontSize: "14px",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight: "22px",
                        opacity: "0.8",
                      }}
                    >
                      No
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "8px",
                  width: "358px",
                  flexShrink: "0",
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
                  }}
                >
                  <span>Advance Amount</span>
                  <span style={{ color: "#F65F5F" }}>*</span>
                </div>
                <input
                  type="text"
                  value={formData.advanceAmount}
                  onChange={(e) =>
                    handleInputChange("advanceAmount", e.target.value)
                  }
                  style={{
                    display: "flex",
                    width: "358px",
                    padding: "17px 16px",
                    alignItems: "center",
                    gap: "10px",
                    border: "0.5px solid #555",
                    background: "#000",
                    color: "#FFF",
                    fontFamily: "'Figtree',sans-serif",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "22px",
                    outline: "none",
                  }}
                />
              </div>
            </div>

            {/* GST Applicable and Terms & Conditions */}
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "flex-end",
                gap: "40px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "8px",
                  flex: "1 0 0",
                  alignSelf: "stretch",
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
                  }}
                >
                  <span>GST Applicable</span>
                  <span style={{ color: "#F65F5F" }}>*</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flex: "1 0 0",
                    alignSelf: "stretch",
                  }}
                >
                  <div
                    onClick={() => handleRadioChange("gstApplicable", "yes")}
                    style={{
                      display: "flex",
                      padding: "0px 16px",
                      alignItems: "center",
                      gap: "8px",
                      flex: "1 0 0",
                      alignSelf: "stretch",
                      border: "0.5px solid #555",
                      background: "#000",
                      cursor: "pointer",
                    }}
                  >
                    <div
                      style={{
                        width: "24px",
                        height: "24px",
                        position: "relative",
                      }}
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{
                          width: "19px",
                          height: "19px",
                          position: "absolute",
                          left: "2.5px",
                          top: "2.5px",
                        }}
                      >
                        {formData.gstApplicable === "yes" ? (
                          <path
                            d="M9.99998 14.5C11.2487 14.5 12.3109 14.0621 13.1865 13.1865C14.0621 12.3109 14.5 11.2487 14.5 9.99998C14.5 8.75128 14.0621 7.6891 13.1865 6.81345C12.3109 5.93782 11.2487 5.5 9.99998 5.5C8.75128 5.5 7.6891 5.93782 6.81345 6.81345C5.93782 7.6891 5.5 8.75128 5.5 9.99998C5.5 11.2487 5.93782 12.3109 6.81345 13.1865C7.6891 14.0621 8.75128 14.5 9.99998 14.5ZM10.0016 19.5C8.68772 19.5 7.45268 19.2506 6.29655 18.752C5.1404 18.2533 4.13472 17.5765 3.2795 16.7217C2.42427 15.8669 1.74721 14.8616 1.24833 13.706C0.749442 12.5504 0.5 11.3156 0.5 10.0017C0.5 8.68772 0.749334 7.45268 1.248 6.29655C1.74667 5.1404 2.42342 4.13472 3.27825 3.2795C4.1331 2.42427 5.13834 1.74721 6.29398 1.24833C7.44959 0.749443 8.68437 0.5 9.9983 0.5C11.3122 0.5 12.5473 0.749334 13.7034 1.248C14.8596 1.74667 15.8652 2.42342 16.7205 3.27825C17.5757 4.1331 18.2527 5.13834 18.7516 6.29398C19.2505 7.44959 19.5 8.68437 19.5 9.9983C19.5 11.3122 19.2506 12.5473 18.752 13.7034C18.2533 14.8596 17.5765 15.8652 16.7217 16.7205C15.8669 17.5757 14.8616 18.2527 13.706 18.7516C12.5504 19.2505 11.3156 19.5 10.0016 19.5ZM9.99998 18C12.2333 18 14.125 17.225 15.675 15.675C17.225 14.125 18 12.2333 18 9.99998C18 7.76664 17.225 5.87498 15.675 4.32498C14.125 2.77498 12.2333 1.99998 9.99998 1.99998C7.76664 1.99998 5.87498 2.77498 4.32498 4.32498C2.77498 5.87498 1.99998 7.76664 1.99998 9.99998C1.99998 12.2333 2.77498 14.125 4.32498 15.675C5.87498 17.225 7.76664 18 9.99998 18Z"
                            fill="#E9BF99"
                          />
                        ) : (
                          <path
                            d="M10.0016 19.5C8.68772 19.5 7.45268 19.2506 6.29655 18.752C5.1404 18.2533 4.13472 17.5765 3.2795 16.7217C2.42427 15.8669 1.74721 14.8616 1.24833 13.706C0.749442 12.5504 0.5 11.3156 0.5 10.0017C0.5 8.68772 0.749334 7.45268 1.248 6.29655C1.74667 5.1404 2.42342 4.13472 3.27825 3.2795C4.1331 2.42427 5.13834 1.74721 6.29398 1.24833C7.44959 0.749443 8.68437 0.5 9.9983 0.5C11.3122 0.5 12.5473 0.749334 13.7034 1.248C14.8596 1.74667 15.8652 2.42342 16.7205 3.27825C17.5757 4.1331 18.2527 5.13834 18.7516 6.29398C19.2505 7.44959 19.5 8.68437 19.5 9.9983C19.5 11.3122 19.2506 12.5473 18.752 13.7034C18.2533 14.8596 17.5765 15.8652 16.7217 16.7205C15.8669 17.5757 14.8616 18.2527 13.706 18.7516C12.5504 19.2505 11.3156 19.5 10.0016 19.5ZM9.99998 18C12.2333 18 14.125 17.225 15.675 15.675C17.225 14.125 18 12.2333 18 9.99998C18 7.76664 17.225 5.87498 15.675 4.32498C14.125 2.77498 12.2333 1.99998 9.99998 1.99998C7.76664 1.99998 5.87498 2.77498 4.32498 4.32498C2.77498 5.87498 1.99998 7.76664 1.99998 9.99998C1.99998 12.2333 2.77498 14.125 4.32498 15.675C5.87498 17.225 7.76664 18 9.99998 18Z"
                            fill="#555555"
                          />
                        )}
                      </svg>
                    </div>
                    <div
                      style={{
                        color: "#FFF",
                        fontFamily: "'Figtree',sans-serif",
                        fontSize: "14px",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight: "22px",
                        opacity: "0.8",
                      }}
                    >
                      Yes
                    </div>
                  </div>
                  <div
                    onClick={() => handleRadioChange("gstApplicable", "no")}
                    style={{
                      display: "flex",
                      padding: "0px 16px",
                      alignItems: "center",
                      gap: "8px",
                      flex: "1 0 0",
                      alignSelf: "stretch",
                      border: "0.5px solid #555",
                      background: "#000",
                      cursor: "pointer",
                    }}
                  >
                    <div
                      style={{
                        width: "24px",
                        height: "24px",
                        position: "relative",
                      }}
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
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
                          fill={
                            formData.gstApplicable === "no"
                              ? "#E9BF99"
                              : "#555555"
                          }
                        />
                      </svg>
                    </div>
                    <div
                      style={{
                        color: "#FFF",
                        fontFamily: "'Figtree',sans-serif",
                        fontSize: "14px",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight: "22px",
                        opacity: "0.8",
                      }}
                    >
                      No
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "8px",
                  width: "358px",
                  flexShrink: "0",
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
                  }}
                >
                  <span>Terms & Conditions</span>
                  <span style={{ color: "#F65F5F" }}>*</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    width: "358px",
                    padding: "16px",
                    alignItems: "center",
                    gap: "10px",
                    border: "0.5px solid #555",
                    background: "#000",
                    justifyContent: "space-between",
                  }}
                >
                  <input
                    type="text"
                    value={formData.termsConditions}
                    onChange={(e) =>
                      handleInputChange("termsConditions", e.target.value)
                    }
                    style={{
                      color: "#FFF",
                      fontFamily: "'Figtree',sans-serif",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight: "22px",
                      background: "transparent",
                      border: "none",
                      outline: "none",
                      flex: "1",
                    }}
                  />
                  <div
                    style={{
                      width: "24px",
                      height: "24px",
                    }}
                  >
                    <svg
                      width="20"
                      height="16"
                      viewBox="0 0 20 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ width: "19px", height: "15px" }}
                    >
                      <path
                        d="M9.25 12.6153H10.75V8.16533L12.6096 10.025L13.6634 8.97113L9.99998 5.3077L6.35578 8.9519L7.4096 10.0057L9.25 8.16533V12.6153ZM2.3077 15.5C1.80257 15.5 1.375 15.325 1.025 14.975C0.675 14.625 0.5 14.1974 0.5 13.6923V2.3077C0.5 1.80257 0.675 1.375 1.025 1.025C1.375 0.675 1.80257 0.5 2.3077 0.5H7.79803L9.79803 2.5H17.6923C18.1974 2.5 18.625 2.675 18.975 3.025C19.325 3.375 19.5 3.80257 19.5 4.3077V13.6923C19.5 14.1974 19.325 14.625 18.975 14.975C18.625 15.325 18.1974 15.5 17.6923 15.5H2.3077ZM2.3077 14H17.6923C17.782 14 17.8557 13.9711 17.9134 13.9134C17.9711 13.8557 18 13.782 18 13.6923V4.3077C18 4.21795 17.9711 4.14422 17.9134 4.08652C17.8557 4.02883 17.782 3.99998 17.6923 3.99998H9.1846L7.1846 1.99998H2.3077C2.21795 1.99998 2.14423 2.02882 2.08653 2.08652C2.02883 2.14423 1.99998 2.21795 1.99998 2.3077V13.6923C1.99998 13.782 2.02883 13.8557 2.08653 13.9134C2.14423 13.9711 2.21795 14 2.3077 14Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Important Note and Send Counter Button */}
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "flex-end",
                gap: "40px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "8px",
                  width: "358px",
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
                  }}
                >
                  Important Note
                </div>
                <input
                  type="text"
                  value={formData.importantNote}
                  onChange={(e) =>
                    handleInputChange("importantNote", e.target.value)
                  }
                  style={{
                    display: "flex",
                    width: "358px",
                    padding: "17px 16px",
                    alignItems: "center",
                    gap: "10px",
                    border: "0.5px solid #555",
                    background: "#000",
                    color: "#FFF",
                    fontFamily: "'Figtree',sans-serif",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "22px",
                    outline: "none",
                  }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "flex-end",
                  gap: "40px",
                }}
              >
                <button
                  onClick={handleSubmit}
                  style={{
                    display: "flex",
                    width: "358px",
                    height: "56px",
                    padding: "16px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "9.326px",
                    border: "0.5px solid #555",
                    background: "#E9BF99",
                    color: "#0E0E0E",
                    textAlign: "center",
                    fontFamily: "'Cabinet Grotesk',sans-serif",
                    fontSize: "24px",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight: "24px",
                    cursor: "pointer",
                  }}
                >
                  Send Counter
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CounterPage;
