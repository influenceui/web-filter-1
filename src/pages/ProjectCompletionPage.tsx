import React from "react";
import { Star } from "lucide-react";

export default function ProjectCompletionPage() {
  return (
    <>
      {/* External Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Figtree:wght@400&display=swap"
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
            height: "132px",
            fontFamily: "'Figtree', sans-serif",
          }}
        >
          {/* Header Section */}
          <div
            style={{
              display: "flex",
              padding: "12px",
              alignItems: "center",
              gap: "8px",
              alignSelf: "stretch",
              border: "0.5px solid #555",
              background: "#0E0E0E",
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
                  color: "#FFF",
                  fontFamily: "Figtree",
                  fontSize: "12px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "20px",
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  flex: "1 0 0",
                }}
              >
                Viola, Project Completed!
              </div>
              <div
                style={{
                  display: "flex",
                  width: "155px",
                  height: "22px",
                  paddingLeft: "8px",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  gap: "10px",
                  position: "relative",
                  right: "24px",
                  top: "1px",
                }}
              />
              <div
                style={{
                  width: "24px",
                  height: "24px",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    width: "24px",
                    height: "24px",
                    flexShrink: "0",
                    background: "#D9D9D9",
                    position: "absolute",
                    left: "0px",
                    top: "0px",
                  }}
                />
                {/* Custom Star Icon */}
                <svg
                  width="18"
                  height="17"
                  viewBox="0 0 18 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    width: "18px",
                    height: "17px",
                    flexShrink: "0",
                    fill: "#466EFC",
                    position: "absolute",
                    left: "3px",
                    top: "3px",
                  }}
                >
                  <path
                    d="M3.57543 16.9618L5.00818 10.7925L0.22168 6.64455L6.53693 6.09655L9.00043 0.279297L11.4639 6.09655L17.7792 6.64455L12.9927 10.7925L14.4254 16.9618L9.00043 13.6888L3.57543 16.9618Z"
                    fill="#466EFC"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Body Section */}
          <div
            style={{
              display: "flex",
              padding: "12px",
              flexDirection: "column",
              alignItems: "flex-start",
              alignSelf: "stretch",
              border: "0.5px solid #555",
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
                  flex: "1 0 0",
                  color: "rgba(255, 255, 255, 0.60)",
                  fontFamily: "Figtree",
                  fontSize: "12px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "20px",
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                The project has been marked as completed by you. Your agreed
                amount on the project Speed Runner is ready to be raised.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
