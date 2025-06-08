import React from "react";

export default function MarkProjectCompletedPage() {
  return (
    <>
      {/* External Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Cabinet+Grotesk:wght@300;400;500&display=swap"
        rel="stylesheet"
      />

      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div
          style={{
            display: "flex",
            width: "418px",
            paddingTop: "24px",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "40px",
            border: "0.5px solid #555",
            background: "#1C1A1F",
            height: "232px",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              display: "flex",
              padding: "0px 16px",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "16px",
              alignSelf: "stretch",
            }}
          >
            <div
              style={{
                fontFamily: "'Cabinet Grotesk'",
                fontWeight: "300",
                fontSize: "24px",
                color: "#FFF",
                fontStyle: "normal",
                lineHeight: "32px",
              }}
            >
              Mark Project as Completed?
            </div>
            <div
              style={{
                fontFamily: "'Cabinet Grotesk'",
                fontWeight: "400",
                fontSize: "18px",
                color: "#9F9F9F",
                alignSelf: "stretch",
                fontStyle: "normal",
                lineHeight: "24px",
              }}
            >
              You're about to mark this project as completed. This helps keep
              things organized and signals that all work has been finished.
            </div>
          </div>

          {/* CTA Buttons */}
          <div
            style={{
              display: "flex",
              height: "48px",
              justifyContent: "center",
              alignItems: "flex-start",
              alignSelf: "stretch",
              border: "0.5px solid #555",
            }}
          >
            {/* Cancel Button */}
            <div
              style={{
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
              <div
                style={{
                  fontFamily: "'Cabinet Grotesk'",
                  fontWeight: "500",
                  fontSize: "18px",
                  color: "#FFF",
                  fontStyle: "normal",
                  lineHeight: "24px",
                }}
              >
                Cancel
              </div>
            </div>

            {/* Mark as Completed Button */}
            <div
              style={{
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
              <div
                style={{
                  fontFamily: "'Cabinet Grotesk'",
                  fontWeight: "500",
                  fontSize: "18px",
                  color: "#000",
                  fontStyle: "normal",
                  lineHeight: "24px",
                }}
              >
                Mark as Completed
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
