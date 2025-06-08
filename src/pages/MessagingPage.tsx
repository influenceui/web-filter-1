import React from "react";
import { Download } from "lucide-react";

export default function MessagingPage() {
  return (
    <>
      {/* External Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Figtree:wght@400;700&family=Cabinet+Grotesk:wght@400;500&display=swap"
        rel="stylesheet"
      />

      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div
          style={{
            display: "flex",
            width: "358px",
            flexDirection: "column",
            justifyContent: "flex-end",
            alignItems: "flex-start",
            gap: "-0.5px",
            height: "350px",
            fontFamily:
              "'Figtree', -apple-system, Roboto, Helvetica, sans-serif",
          }}
        >
          {/* Header Section */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              alignItems: "flex-end",
              alignSelf: "stretch",
              position: "relative",
            }}
          >
            <div
              style={{
                display: "flex",
                padding: "12px",
                alignItems: "center",
                gap: "10px",
                alignSelf: "stretch",
                border: "0.5px solid #555",
                background: "#1C1A1F",
                position: "relative",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flex: "1 0 0",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    alignSelf: "stretch",
                    color: "#FFF",
                    fontFamily: "Figtree",
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "24px",
                    position: "relative",
                  }}
                >
                  Speed Runner
                </div>
                <div
                  style={{
                    color: "rgba(255, 255, 255, 0.40)",
                    fontFamily: "Figtree",
                    fontSize: "12px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "20px",
                    position: "relative",
                    marginLeft: "8px",
                  }}
                >
                  (Social Media)
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Section */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              alignSelf: "stretch",
              position: "relative",
            }}
          >
            {/* Final Amount (Revised) */}
            <div
              style={{
                display: "flex",
                padding: "12px",
                flexDirection: "column",
                alignItems: "flex-start",
                alignSelf: "stretch",
                borderRight: "0.5px solid #555",
                borderLeft: "0.5px solid #555",
                background: "#1C1A1F",
                position: "relative",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  alignSelf: "stretch",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    color: "#FFF",
                    fontFamily: "Figtree",
                    fontSize: "12px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "20px",
                    opacity: "0.6",
                    position: "relative",
                    flex: "1 0 0",
                  }}
                >
                  Final Amount (Revised)
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  paddingLeft: "8px",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  gap: "10px",
                  flex: "1 0 0",
                  position: "absolute",
                  right: "12px",
                  top: "12px",
                }}
              >
                <div
                  style={{
                    fontFamily: "Figtree",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "22px",
                    position: "relative",
                    color: "#FFF",
                    opacity: "0.6",
                  }}
                >
                  50,000
                </div>
              </div>
            </div>

            {/* GST Amount (18%) */}
            <div
              style={{
                display: "flex",
                padding: "12px",
                flexDirection: "column",
                alignItems: "flex-start",
                alignSelf: "stretch",
                borderRight: "0.5px solid #555",
                borderLeft: "0.5px solid #555",
                background: "#1C1A1F",
                position: "relative",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  alignSelf: "stretch",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    color: "#FFF",
                    fontFamily: "Figtree",
                    fontSize: "12px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "20px",
                    opacity: "0.6",
                    position: "relative",
                    flex: "1 0 0",
                  }}
                >
                  GST Amount (18%)
                </div>
              </div>
              <div
                style={{
                  fontFamily: "Figtree",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "22px",
                  position: "absolute",
                  color: "#83C778",
                  display: "flex",
                  paddingLeft: "8px",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  gap: "10px",
                  flex: "1 0 0",
                  right: "12px",
                  top: "12px",
                }}
              >
                + 9,000
              </div>
            </div>

            {/* Advance Amount */}
            <div
              style={{
                display: "flex",
                padding: "12px",
                flexDirection: "column",
                alignItems: "flex-start",
                alignSelf: "stretch",
                borderRight: "0.5px solid #555",
                borderLeft: "0.5px solid #555",
                background: "#1C1A1F",
                position: "relative",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  alignSelf: "stretch",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    color: "#FFF",
                    fontFamily: "Figtree",
                    fontSize: "12px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "20px",
                    opacity: "0.6",
                    position: "relative",
                    flex: "1 0 0",
                  }}
                >
                  Advance Amount
                </div>
              </div>
              <div
                style={{
                  fontFamily: "Figtree",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "22px",
                  position: "absolute",
                  color: "#DF5252",
                  display: "flex",
                  paddingLeft: "8px",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  gap: "10px",
                  flex: "1 0 0",
                  right: "12px",
                  top: "12px",
                }}
              >
                - 10,000
              </div>
            </div>

            {/* Total Payable Amount */}
            <div
              style={{
                display: "flex",
                padding: "12px",
                justifyContent: "center",
                alignItems: "center",
                gap: "8px",
                alignSelf: "stretch",
                border: "0.5px solid #555",
                background: "#1C1A1F",
                position: "relative",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flex: "1 0 0",
                  alignSelf: "stretch",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    color: "#FFF",
                    fontFamily: "Figtree",
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "24px",
                    position: "relative",
                  }}
                >
                  Total Payable Amount
                </div>
                <div
                  style={{
                    color: "#FFF",
                    fontFamily: "Figtree",
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "24px",
                    position: "relative",
                  }}
                >
                  49,000
                </div>
              </div>
            </div>

            {/* Invoice Number */}
            <div
              style={{
                display: "flex",
                padding: "12px",
                flexDirection: "column",
                alignItems: "flex-start",
                alignSelf: "stretch",
                borderRight: "0.5px solid #555",
                borderBottom: "0.5px solid #555",
                borderLeft: "0.5px solid #555",
                background: "#0E0E0E",
                position: "relative",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  alignSelf: "stretch",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    color: "rgba(255, 255, 255, 0.6)",
                    fontFamily: "Figtree",
                    fontSize: "12px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "20px",
                    position: "relative",
                    flex: "1 0 0",
                  }}
                >
                  <span>Invoice Number </span>
                  <span
                    style={{
                      color: "#FFF",
                      fontWeight: "700",
                    }}
                  >
                    CTO783
                  </span>
                </div>
                <div
                  style={{
                    width: "24px",
                    height: "24px",
                    position: "relative",
                  }}
                >
                  <Download
                    size={16}
                    className="text-white"
                    style={{ width: "24px", height: "24px" }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Button Section */}
          <div
            style={{
              display: "flex",
              height: "48px",
              justifyContent: "center",
              alignItems: "flex-start",
              alignSelf: "stretch",
              border: "0.5px solid #555",
              position: "relative",
            }}
          >
            <div
              style={{
                color: "#FFF",
                fontFamily:
                  "'Cabinet Grotesk', -apple-system, Roboto, Helvetica, sans-serif",
                fontSize: "18px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "24px",
                position: "relative",
                display: "flex",
                height: "48px",
                padding: "12px 146px",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                flex: "1 0 0",
                background: "#0E0E0E",
                cursor: "pointer",
              }}
            >
              Counter
            </div>
            <div
              style={{
                color: "#000",
                fontFamily:
                  "'Cabinet Grotesk', -apple-system, Roboto, Helvetica, sans-serif",
                fontSize: "18px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "24px",
                position: "relative",
                display: "flex",
                height: "48px",
                padding: "12px 146px",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                flex: "1 0 0",
                background: "#E9BF99",
                cursor: "pointer",
              }}
            >
              Pay 49,000/-
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
