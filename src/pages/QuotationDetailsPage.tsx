import React from "react";
import { X, Upload } from "lucide-react";

export default function QuotationDetailsPage() {
  return (
    <>
      {/* External Fonts */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Cabinet+Grotesk:wght@300;400;700&family=Figtree:wght@400;600;700&display=swap"
      />

      <div
        className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
        style={{
          fontFamily: "'Figtree', sans-serif",
        }}
      >
        <div
          style={{
            width: "804px",
            padding: "24px",
            background: "#1C1A1F",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: "40px",
            justifyContent: "flex-start",
            alignItems: "stretch",
            fontFamily: "'Figtree', sans-serif",
          }}
        >
          {/* Close Icon */}
          <button
            className="absolute top-6 right-6 text-[#E9BF99] hover:text-[#E9BF99]/80"
            style={{
              width: "24px",
              height: "24px",
              cursor: "pointer",
            }}
          >
            <X size={24} />
          </button>

          {/* Header */}
          <div
            style={{
              height: "32px",
              color: "#FFF",
              fontFamily: "'Cabinet Grotesk', sans-serif",
              fontSize: "24px",
              fontWeight: "300",
              lineHeight: "32px",
            }}
          >
            Quotation Details
          </div>

          {/* Scope of Work Section */}
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-start">
              <div
                style={{
                  color: "#FFF",
                  fontFamily: "'Figtree', sans-serif",
                  fontSize: "14px",
                  fontWeight: "400",
                  lineHeight: "18px",
                  opacity: "0.8",
                }}
              >
                <span>Scope of Work</span>
                <span style={{ color: "#F65F5F" }}>*</span>
              </div>
              <div
                style={{
                  color: "#E9BF99",
                  textAlign: "right",
                  fontFamily: "'Figtree', sans-serif",
                  fontSize: "14px",
                  fontWeight: "400",
                  lineHeight: "18px",
                  textDecoration: "underline",
                  opacity: "0.8",
                  cursor: "pointer",
                }}
              >
                Add row
              </div>
            </div>

            {/* Table */}
            <div className="flex flex-col">
              {/* Table Header */}
              <div className="flex">
                <div
                  className="bg-black border border-[#555] flex items-center px-4 py-4"
                  style={{
                    width: "157px",
                    color: "#E9BF99",
                    fontFamily: "'Figtree', sans-serif",
                    fontSize: "14px",
                    fontWeight: "400",
                    lineHeight: "22px",
                  }}
                >
                  Service
                </div>
                <div
                  className="bg-black border border-[#555] border-l-0 flex items-center px-4 py-4"
                  style={{
                    width: "278px",
                    color: "#E9BF99",
                    fontFamily: "'Figtree', sans-serif",
                    fontSize: "14px",
                    fontWeight: "400",
                    lineHeight: "22px",
                  }}
                >
                  Deliverables
                </div>
                <div
                  className="bg-black border border-[#555] border-l-0 flex items-center px-4 py-4 flex-1"
                  style={{
                    color: "#E9BF99",
                    fontFamily: "'Figtree', sans-serif",
                    fontSize: "14px",
                    fontWeight: "400",
                    lineHeight: "22px",
                  }}
                >
                  Quantity
                </div>
                <div
                  className="bg-black border border-[#555] border-l-0 flex items-center px-4 py-4 flex-1"
                  style={{
                    color: "#E9BF99",
                    fontFamily: "'Figtree', sans-serif",
                    fontSize: "14px",
                    fontWeight: "400",
                    lineHeight: "22px",
                  }}
                >
                  Rate (INR)
                </div>
                <div
                  className="bg-black border border-[#555] border-l-0 flex items-center px-4 py-4 flex-1"
                  style={{
                    color: "#E9BF99",
                    fontFamily: "'Figtree', sans-serif",
                    fontSize: "14px",
                    fontWeight: "400",
                    lineHeight: "22px",
                  }}
                >
                  Total (INR)
                </div>
              </div>

              {/* Table Row 1 */}
              <div className="flex border-t-0">
                <div
                  className="bg-black border border-[#555] border-t-0 flex items-center px-4 py-4"
                  style={{
                    width: "157px",
                    color: "#FFF",
                    fontFamily: "'Figtree', sans-serif",
                    fontSize: "14px",
                    fontWeight: "400",
                    lineHeight: "22px",
                  }}
                >
                  Instagram Static Posts
                </div>
                <div
                  className="bg-black border border-[#555] border-l-0 border-t-0 flex items-center px-4 py-4"
                  style={{
                    width: "278px",
                    color: "#FFF",
                    fontFamily: "'Figtree', sans-serif",
                    fontSize: "14px",
                    fontWeight: "400",
                    lineHeight: "22px",
                  }}
                >
                  Design visually energetic posts for product and lifestyle
                  promotion
                </div>
                <div
                  className="bg-black border border-[#555] border-l-0 border-t-0 flex items-center px-4 py-4 flex-1"
                  style={{
                    color: "#FFF",
                    fontFamily: "'Figtree', sans-serif",
                    fontSize: "14px",
                    fontWeight: "400",
                    lineHeight: "22px",
                  }}
                >
                  5 Posts
                </div>
                <div
                  className="bg-black border border-[#555] border-l-0 border-t-0 flex items-center px-4 py-4 flex-1"
                  style={{
                    color: "#FFF",
                    fontFamily: "'Figtree', sans-serif",
                    fontSize: "14px",
                    fontWeight: "400",
                    lineHeight: "22px",
                  }}
                >
                  ₹5,000
                </div>
                <div
                  className="bg-black border border-[#555] border-l-0 border-t-0 flex items-center px-4 py-4 flex-1"
                  style={{
                    color: "#FFF",
                    fontFamily: "'Figtree', sans-serif",
                    fontSize: "14px",
                    fontWeight: "400",
                    lineHeight: "22px",
                  }}
                >
                  ₹25,000
                </div>
              </div>

              {/* Table Row 2 */}
              <div className="flex border-t-0">
                <div
                  className="bg-black border border-[#555] border-t-0 flex items-center px-4 py-4"
                  style={{
                    width: "157px",
                    color: "#FFF",
                    fontFamily: "'Figtree', sans-serif",
                    fontSize: "14px",
                    fontWeight: "400",
                    lineHeight: "22px",
                  }}
                >
                  Instagram Reels (Motion Design)
                </div>
                <div
                  className="bg-black border border-[#555] border-l-0 border-t-0 flex items-center px-4 py-4"
                  style={{
                    width: "278px",
                    color: "#FFF",
                    fontFamily: "'Figtree', sans-serif",
                    fontSize: "14px",
                    fontWeight: "400",
                    lineHeight: "22px",
                  }}
                >
                  Animated reels with sleek transitions and typography
                </div>
                <div
                  className="bg-black border border-[#555] border-l-0 border-t-0 flex items-center px-4 py-4 flex-1"
                  style={{
                    color: "#FFF",
                    fontFamily: "'Figtree', sans-serif",
                    fontSize: "14px",
                    fontWeight: "400",
                    lineHeight: "22px",
                  }}
                >
                  3 Reels
                </div>
                <div
                  className="bg-black border border-[#555] border-l-0 border-t-0 flex items-center px-4 py-4 flex-1"
                  style={{
                    color: "#FFF",
                    fontFamily: "'Figtree', sans-serif",
                    fontSize: "14px",
                    fontWeight: "400",
                    lineHeight: "22px",
                  }}
                >
                  ₹8,000
                </div>
                <div
                  className="bg-black border border-[#555] border-l-0 border-t-0 flex items-center px-4 py-4 flex-1"
                  style={{
                    color: "#FFF",
                    fontFamily: "'Figtree', sans-serif",
                    fontSize: "14px",
                    fontWeight: "400",
                    lineHeight: "22px",
                  }}
                >
                  ₹24,000
                </div>
              </div>

              {/* Table Row 3 */}
              <div className="flex border-t-0">
                <div
                  className="bg-black border border-[#555] border-t-0 flex items-center px-4 py-4"
                  style={{
                    width: "157px",
                    color: "#FFF",
                    fontFamily: "'Figtree', sans-serif",
                    fontSize: "14px",
                    fontWeight: "400",
                    lineHeight: "22px",
                  }}
                >
                  Concept Development
                </div>
                <div
                  className="bg-black border border-[#555] border-l-0 border-t-0 flex items-center px-4 py-4"
                  style={{
                    width: "278px",
                    color: "#FFF",
                    fontFamily: "'Figtree', sans-serif",
                    fontSize: "14px",
                    fontWeight: "400",
                    lineHeight: "22px",
                  }}
                >
                  Moodboards, references, and visual style alignment
                </div>
                <div
                  className="bg-black border border-[#555] border-l-0 border-t-0 flex items-center px-4 py-4 flex-1"
                  style={{
                    color: "#FFF",
                    fontFamily: "'Figtree', sans-serif",
                    fontSize: "14px",
                    fontWeight: "400",
                    lineHeight: "22px",
                  }}
                >
                  1 Time
                </div>
                <div
                  className="bg-black border border-[#555] border-l-0 border-t-0 flex items-center px-4 py-4 flex-1"
                  style={{
                    color: "#FFF",
                    fontFamily: "'Figtree', sans-serif",
                    fontSize: "14px",
                    fontWeight: "400",
                    lineHeight: "22px",
                  }}
                >
                  ₹6,000
                </div>
                <div
                  className="bg-black border border-[#555] border-l-0 border-t-0 flex items-center px-4 py-4 flex-1"
                  style={{
                    color: "#FFF",
                    fontFamily: "'Figtree', sans-serif",
                    fontSize: "14px",
                    fontWeight: "400",
                    lineHeight: "22px",
                  }}
                >
                  ₹6,000
                </div>
              </div>

              {/* Table Row 4 */}
              <div className="flex border-t-0">
                <div
                  className="bg-black border border-[#555] border-t-0 flex items-center px-4 py-4"
                  style={{
                    width: "157px",
                    color: "#FFF",
                    fontFamily: "'Figtree', sans-serif",
                    fontSize: "14px",
                    fontWeight: "400",
                    lineHeight: "22px",
                  }}
                >
                  Brand Adaptation
                </div>
                <div
                  className="bg-black border border-[#555] border-l-0 border-t-0 flex items-center px-4 py-4"
                  style={{
                    width: "278px",
                    color: "#FFF",
                    fontFamily: "'Figtree', sans-serif",
                    fontSize: "14px",
                    fontWeight: "400",
                    lineHeight: "22px",
                  }}
                >
                  Following brand guidelines, adapting design elements
                  accordingly
                </div>
                <div
                  className="bg-black border border-[#555] border-l-0 border-t-0 flex items-center px-4 py-4 flex-1"
                  style={{
                    color: "#FFF",
                    fontFamily: "'Figtree', sans-serif",
                    fontSize: "14px",
                    fontWeight: "400",
                    lineHeight: "22px",
                  }}
                >
                  Included
                </div>
                <div
                  className="bg-black border border-[#555] border-l-0 border-t-0 flex items-center px-4 py-4 flex-1"
                  style={{
                    color: "#FFF",
                    fontFamily: "'Figtree', sans-serif",
                    fontSize: "14px",
                    fontWeight: "400",
                    lineHeight: "22px",
                  }}
                >
                  -
                </div>
                <div
                  className="bg-black border border-[#555] border-l-0 border-t-0 flex items-center px-4 py-4 flex-1"
                  style={{
                    color: "#FFF",
                    fontFamily: "'Figtree', sans-serif",
                    fontSize: "14px",
                    fontWeight: "400",
                    lineHeight: "22px",
                  }}
                >
                  -
                </div>
              </div>

              {/* Total Row */}
              <div className="flex border-t-0" style={{ height: "78px" }}>
                <div
                  className="bg-[#0E0E0E] border border-[#555] border-t-0 flex items-center px-4"
                  style={{
                    width: "157px",
                    color: "#83C778",
                    fontFamily: "'Figtree', sans-serif",
                    fontSize: "16px",
                    fontWeight: "600",
                    lineHeight: "18px",
                  }}
                >
                  Total
                </div>
                <div
                  className="bg-[#0E0E0E] border border-[#555] border-l-0 border-t-0 flex items-center justify-end px-4 flex-1"
                  style={{
                    color: "#83C778",
                    fontFamily: "'Figtree', sans-serif",
                  }}
                >
                  <span style={{ fontSize: "18px", fontWeight: "400" }}>₹</span>
                  <span
                    style={{
                      fontSize: "18px",
                      fontWeight: "700",
                      marginLeft: "4px",
                    }}
                  >
                    55,000
                  </span>
                  <span
                    style={{
                      fontSize: "12px",
                      color: "rgba(131, 199, 120, 0.5)",
                      marginLeft: "4px",
                    }}
                  >
                    (GST Excl.)
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Form Fields Row 1 */}
          <div className="flex gap-10" style={{ width: "756px" }}>
            {/* Need full payment in Advance */}
            <div className="flex flex-col items-start gap-2 flex-1">
              <div
                style={{
                  color: "#FFF",
                  fontFamily: "'Figtree', sans-serif",
                  fontSize: "14px",
                  fontWeight: "400",
                  lineHeight: "18px",
                  opacity: "0.8",
                  marginBottom: "8px",
                }}
              >
                <span>Need full payment in Advance ?</span>
                <span style={{ color: "#F65F5F" }}>*</span>
              </div>
              <div className="flex self-stretch" style={{ height: "56px" }}>
                <div className="flex items-center gap-2 bg-black border border-[#555] px-4 flex-1">
                  <div className="w-6 h-6 relative">
                    {/* Unselected Radio Button */}
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      className="absolute left-0.5 top-0.5"
                    >
                      <path
                        d="M10.0016 19.5C8.68772 19.5 7.45268 19.2506 6.29655 18.752C5.1404 18.2533 4.13472 17.5765 3.2795 16.7217C2.42427 15.8669 1.74721 14.8616 1.24833 13.706C0.749442 12.5504 0.5 11.3156 0.5 10.0017C0.5 8.68772 0.749334 7.45268 1.248 6.29655C1.74667 5.1404 2.42342 4.13472 3.27825 3.2795C4.1331 2.42427 5.13834 1.74721 6.29398 1.24833C7.44959 0.749443 8.68437 0.5 9.9983 0.5C11.3122 0.5 12.5473 0.749334 13.7034 1.248C14.8596 1.74667 15.8652 2.42342 16.7205 3.27825C17.5757 4.1331 18.2527 5.13834 18.7516 6.29398C19.2505 7.44959 19.5 8.68437 19.5 9.9983C19.5 11.3122 19.2506 12.5473 18.752 13.7034C18.2533 14.8596 17.5765 15.8652 16.7217 16.7205C15.8669 17.5757 14.8616 18.2527 13.706 18.7516C12.5504 19.2505 11.3156 19.5 10.0016 19.5ZM9.99998 18C12.2333 18 14.125 17.225 15.675 15.675C17.225 14.125 18 12.2333 18 9.99998C18 7.76664 17.225 5.87498 15.675 4.32498C14.125 2.77498 12.2333 1.99998 9.99998 1.99998C7.76664 1.99998 5.87498 2.77498 4.32498 4.32498C2.77498 5.87498 1.99998 7.76664 1.99998 9.99998C1.99998 12.2333 2.77498 14.125 4.32498 15.675C5.87498 17.225 7.76664 18 9.99998 18Z"
                        fill="#555555"
                      />
                    </svg>
                  </div>
                  <div
                    style={{
                      color: "#FFF",
                      fontFamily: "'Figtree', sans-serif",
                      fontSize: "14px",
                      fontWeight: "400",
                      lineHeight: "22px",
                      opacity: "0.8",
                    }}
                  >
                    Yes
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-black border border-[#555] border-l-0 px-4 flex-1">
                  <div className="w-6 h-6 relative">
                    {/* Selected Radio Button */}
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      className="absolute left-0.5 top-0.5"
                    >
                      <path
                        d="M9.99998 14.5C11.2487 14.5 12.3109 14.0621 13.1865 13.1865C14.0621 12.3109 14.5 11.2487 14.5 9.99998C14.5 8.75128 14.0621 7.6891 13.1865 6.81345C12.3109 5.93782 11.2487 5.5 9.99998 5.5C8.75128 5.5 7.6891 5.93782 6.81345 6.81345C5.93782 7.6891 5.5 8.75128 5.5 9.99998C5.5 11.2487 5.93782 12.3109 6.81345 13.1865C7.6891 14.0621 8.75128 14.5 9.99998 14.5ZM10.0016 19.5C8.68772 19.5 7.45268 19.2506 6.29655 18.752C5.1404 18.2533 4.13472 17.5765 3.2795 16.7217C2.42427 15.8669 1.74721 14.8616 1.24833 13.706C0.749442 12.5504 0.5 11.3156 0.5 10.0017C0.5 8.68772 0.749334 7.45268 1.248 6.29655C1.74667 5.1404 2.42342 4.13472 3.27825 3.2795C4.1331 2.42427 5.13834 1.74721 6.29398 1.24833C7.44959 0.749443 8.68437 0.5 9.9983 0.5C11.3122 0.5 12.5473 0.749334 13.7034 1.248C14.8596 1.74667 15.8652 2.42342 16.7205 3.27825C17.5757 4.1331 18.2527 5.13834 18.7516 6.29398C19.2505 7.44959 19.5 8.68437 19.5 9.9983C19.5 11.3122 19.2506 12.5473 18.752 13.7034C18.2533 14.8596 17.5765 15.8652 16.7217 16.7205C15.8669 17.5757 14.8616 18.2527 13.706 18.7516C12.5504 19.2505 11.3156 19.5 10.0016 19.5ZM9.99998 18C12.2333 18 14.125 17.225 15.675 15.675C17.225 14.125 18 12.2333 18 9.99998C18 7.76664 17.225 5.87498 15.675 4.32498C14.125 2.77498 12.2333 1.99998 9.99998 1.99998C7.76664 1.99998 5.87498 2.77498 4.32498 4.32498C2.77498 5.87498 1.99998 7.76664 1.99998 9.99998C1.99998 12.2333 2.77498 14.125 4.32498 15.675C5.87498 17.225 7.76664 18 9.99998 18Z"
                        fill="#E9BF99"
                      />
                    </svg>
                  </div>
                  <div
                    style={{
                      color: "#FFF",
                      fontFamily: "'Figtree', sans-serif",
                      fontSize: "14px",
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

            {/* Advance Amount */}
            <div style={{ width: "358px" }}>
              <div
                style={{
                  color: "#FFF",
                  fontFamily: "'Figtree', sans-serif",
                  fontSize: "14px",
                  fontWeight: "400",
                  lineHeight: "18px",
                  opacity: "0.8",
                  marginBottom: "8px",
                }}
              >
                <span>Advance Amount</span>
                <span style={{ color: "#F65F5F" }}>*</span>
              </div>
              <div
                className="bg-black border border-[#555] px-4 flex items-center"
                style={{
                  color: "#FFF",
                  fontFamily: "'Figtree', sans-serif",
                  fontSize: "14px",
                  fontWeight: "400",
                  lineHeight: "22px",
                  height: "56px",
                }}
              >
                ₹ 10,000
              </div>
            </div>
          </div>

          {/* Form Fields Row 2 */}
          <div className="flex gap-10" style={{ width: "756px" }}>
            {/* GST Applicable */}
            <div className="flex flex-col items-start gap-2 flex-1">
              <div
                style={{
                  color: "#FFF",
                  fontFamily: "'Figtree', sans-serif",
                  fontSize: "14px",
                  fontWeight: "400",
                  lineHeight: "18px",
                  opacity: "0.8",
                  marginBottom: "8px",
                }}
              >
                <span>GST Applicable</span>
                <span style={{ color: "#F65F5F" }}>*</span>
              </div>
              <div className="flex self-stretch" style={{ height: "56px" }}>
                <div className="flex items-center gap-2 bg-black border border-[#555] px-4 flex-1">
                  <div className="w-6 h-6 relative">
                    {/* Selected Radio Button */}
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      className="absolute left-0.5 top-0.5"
                    >
                      <path
                        d="M9.99998 14.5C11.2487 14.5 12.3109 14.0621 13.1865 13.1865C14.0621 12.3109 14.5 11.2487 14.5 9.99998C14.5 8.75128 14.0621 7.6891 13.1865 6.81345C12.3109 5.93782 11.2487 5.5 9.99998 5.5C8.75128 5.5 7.6891 5.93782 6.81345 6.81345C5.93782 7.6891 5.5 8.75128 5.5 9.99998C5.5 11.2487 5.93782 12.3109 6.81345 13.1865C7.6891 14.0621 8.75128 14.5 9.99998 14.5ZM10.0016 19.5C8.68772 19.5 7.45268 19.2506 6.29655 18.752C5.1404 18.2533 4.13472 17.5765 3.2795 16.7217C2.42427 15.8669 1.74721 14.8616 1.24833 13.706C0.749442 12.5504 0.5 11.3156 0.5 10.0017C0.5 8.68772 0.749334 7.45268 1.248 6.29655C1.74667 5.1404 2.42342 4.13472 3.27825 3.2795C4.1331 2.42427 5.13834 1.74721 6.29398 1.24833C7.44959 0.749443 8.68437 0.5 9.9983 0.5C11.3122 0.5 12.5473 0.749334 13.7034 1.248C14.8596 1.74667 15.8652 2.42342 16.7205 3.27825C17.5757 4.1331 18.2527 5.13834 18.7516 6.29398C19.2505 7.44959 19.5 8.68437 19.5 9.9983C19.5 11.3122 19.2506 12.5473 18.752 13.7034C18.2533 14.8596 17.5765 15.8652 16.7217 16.7205C15.8669 17.5757 14.8616 18.2527 13.706 18.7516C12.5504 19.2505 11.3156 19.5 10.0016 19.5ZM9.99998 18C12.2333 18 14.125 17.225 15.675 15.675C17.225 14.125 18 12.2333 18 9.99998C18 7.76664 17.225 5.87498 15.675 4.32498C14.125 2.77498 12.2333 1.99998 9.99998 1.99998C7.76664 1.99998 5.87498 2.77498 4.32498 4.32498C2.77498 5.87498 1.99998 7.76664 1.99998 9.99998C1.99998 12.2333 2.77498 14.125 4.32498 15.675C5.87498 17.225 7.76664 18 9.99998 18Z"
                        fill="#E9BF99"
                      />
                    </svg>
                  </div>
                  <div
                    style={{
                      color: "#FFF",
                      fontFamily: "'Figtree', sans-serif",
                      fontSize: "14px",
                      fontWeight: "400",
                      lineHeight: "22px",
                      opacity: "0.8",
                    }}
                  >
                    Yes
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-black border border-[#555] border-l-0 px-4 flex-1">
                  <div className="w-6 h-6 relative">
                    {/* Unselected Radio Button */}
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      className="absolute left-0.5 top-0.5"
                    >
                      <path
                        d="M10.0016 19.5C8.68772 19.5 7.45268 19.2506 6.29655 18.752C5.1404 18.2533 4.13472 17.5765 3.2795 16.7217C2.42427 15.8669 1.74721 14.8616 1.24833 13.706C0.749442 12.5504 0.5 11.3156 0.5 10.0017C0.5 8.68772 0.749334 7.45268 1.248 6.29655C1.74667 5.1404 2.42342 4.13472 3.27825 3.2795C4.1331 2.42427 5.13834 1.74721 6.29398 1.24833C7.44959 0.749443 8.68437 0.5 9.9983 0.5C11.3122 0.5 12.5473 0.749334 13.7034 1.248C14.8596 1.74667 15.8652 2.42342 16.7205 3.27825C17.5757 4.1331 18.2527 5.13834 18.7516 6.29398C19.2505 7.44959 19.5 8.68437 19.5 9.9983C19.5 11.3122 19.2506 12.5473 18.752 13.7034C18.2533 14.8596 17.5765 15.8652 16.7217 16.7205C15.8669 17.5757 14.8616 18.2527 13.706 18.7516C12.5504 19.2505 11.3156 19.5 10.0016 19.5ZM9.99998 18C12.2333 18 14.125 17.225 15.675 15.675C17.225 14.125 18 12.2333 18 9.99998C18 7.76664 17.225 5.87498 15.675 4.32498C14.125 2.77498 12.2333 1.99998 9.99998 1.99998C7.76664 1.99998 5.87498 2.77498 4.32498 4.32498C2.77498 5.87498 1.99998 7.76664 1.99998 9.99998C1.99998 12.2333 2.77498 14.125 4.32498 15.675C5.87498 17.225 7.76664 18 9.99998 18Z"
                        fill="#555555"
                      />
                    </svg>
                  </div>
                  <div
                    style={{
                      color: "#FFF",
                      fontFamily: "'Figtree', sans-serif",
                      fontSize: "14px",
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

            {/* Terms & Conditions */}
            <div style={{ width: "358px" }}>
              <div
                style={{
                  color: "#FFF",
                  fontFamily: "'Figtree', sans-serif",
                  fontSize: "14px",
                  fontWeight: "400",
                  lineHeight: "18px",
                  opacity: "0.8",
                  marginBottom: "8px",
                }}
              >
                <span>Terms & Conditions</span>
                <span style={{ color: "#F65F5F" }}>*</span>
              </div>
              <div
                className="bg-black border border-[#555] px-4 flex items-center justify-between"
                style={{ height: "56px" }}
              >
                <div
                  style={{
                    color: "#FFF",
                    fontFamily: "'Figtree', sans-serif",
                    fontSize: "14px",
                    fontWeight: "400",
                    lineHeight: "22px",
                  }}
                >
                  T&C.pdf
                </div>
                <Upload size={20} className="text-white" />
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex justify-end items-end gap-10">
            {/* Important Note */}
            <div style={{ width: "358px" }}>
              <div
                style={{
                  color: "#FFF",
                  fontFamily: "'Figtree', sans-serif",
                  fontSize: "14px",
                  fontWeight: "400",
                  lineHeight: "18px",
                  opacity: "0.8",
                  marginBottom: "8px",
                }}
              >
                Important Note
              </div>
              <div
                className="bg-black border border-[#555] px-4 flex items-center"
                style={{
                  color: "#FFF",
                  fontFamily: "'Figtree', sans-serif",
                  fontSize: "14px",
                  fontWeight: "400",
                  lineHeight: "22px",
                  height: "56px",
                }}
              >
                Request you to pay in the form of cheque.
              </div>
            </div>

            {/* Send Quotation Button */}
            <button
              className="bg-[#E9BF99] text-[#0E0E0E] hover:bg-[#E9BF99]/90 transition-colors"
              style={{
                width: "358px",
                height: "56px",
                fontFamily: "'Cabinet Grotesk', sans-serif",
                fontSize: "24px",
                fontWeight: "700",
                lineHeight: "24px",
                textAlign: "center",
                border: "0.5px solid #555",
                cursor: "pointer",
              }}
            >
              Send Quotation
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
