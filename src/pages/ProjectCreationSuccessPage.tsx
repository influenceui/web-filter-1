import React from "react";
import { CheckCircle } from "lucide-react";

export default function ProjectCreationSuccessPage() {
  return (
    <>
      {/* External Fonts */}
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Cabinet+Grotesk:wght@300;400;500&display=swap"
        rel="stylesheet"
      />

      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div
          style={{
            maxWidth: "none",
            marginLeft: "auto",
            marginRight: "auto",
            display: "inline-flex",
            paddingTop: "24px",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "40px",
            border: "0.5px solid #555",
            background: "#1C1A1F",
            width: "363px",
            height: "208px",
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
              position: "relative",
              width: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "16px",
                width: "100%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "8px",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Cabinet Grotesk', sans-serif",
                    fontWeight: "300",
                    fontSize: "24px",
                    color: "#FFF",
                    fontStyle: "normal",
                    lineHeight: "32px",
                    position: "relative",
                  }}
                >
                  Project created successfully!
                </div>
                <div
                  style={{
                    width: "32px",
                    height: "32px",
                    aspectRatio: "1/1",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      width: "32px",
                      height: "32px",
                      flexShrink: "0",
                      background: "#D9D9D9",
                      position: "absolute",
                      left: "0px",
                      top: "0px",
                    }}
                  />
                  {/* Custom Check Circle SVG */}
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                      width: "27px",
                      height: "27px",
                      flexShrink: "0",
                      fill: "#83C778",
                      position: "absolute",
                      left: "3px",
                      top: "3px",
                    }}
                  >
                    <path
                      d="M12.1346 20.1337L21.5346 10.7337L19.668 8.86699L12.1346 16.4003L8.33463 12.6003L6.46797 14.467L12.1346 20.1337ZM14.0013 27.3337C12.1569 27.3337 10.4235 26.9837 8.8013 26.2837C7.17908 25.5837 5.76797 24.6337 4.56797 23.4337C3.36797 22.2337 2.41797 20.8225 1.71797 19.2003C1.01797 17.5781 0.667969 15.8448 0.667969 14.0003C0.667969 12.1559 1.01797 10.4225 1.71797 8.80032C2.41797 7.1781 3.36797 5.76699 4.56797 4.56699C5.76797 3.36699 7.17908 2.41699 8.8013 1.71699C10.4235 1.01699 12.1569 0.666992 14.0013 0.666992C15.8457 0.666992 17.5791 1.01699 19.2013 1.71699C20.8235 2.41699 22.2346 3.36699 23.4346 4.56699C24.6346 5.76699 25.5846 7.1781 26.2846 8.80032C26.9846 10.4225 27.3346 12.1559 27.3346 14.0003C27.3346 15.8448 26.9846 17.5781 26.2846 19.2003C25.5846 20.8225 24.6346 22.2337 23.4346 23.4337C22.2346 24.6337 20.8235 25.5837 19.2013 26.2837C17.5791 26.9837 15.8457 27.3337 14.0013 27.3337Z"
                      fill="#83C778"
                    />
                  </svg>
                </div>
              </div>
              <div
                style={{
                  fontFamily: "'Cabinet Grotesk', sans-serif",
                  fontWeight: "400",
                  fontSize: "18px",
                  color: "#9F9F9F",
                  alignSelf: "stretch",
                  fontStyle: "normal",
                  lineHeight: "24px",
                  position: "relative",
                }}
              >
                Discover agencies and kick-start your collaboration.
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
                position: "relative",
                width: "100%",
              }}
            >
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
                  width: "50%",
                  cursor: "pointer",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Cabinet Grotesk', sans-serif",
                    fontWeight: "500",
                    fontSize: "18px",
                    color: "#FFF",
                    fontStyle: "normal",
                    lineHeight: "24px",
                    position: "relative",
                  }}
                >
                  Later
                </div>
              </div>
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
                  width: "50%",
                  cursor: "pointer",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Cabinet Grotesk', sans-serif",
                    fontWeight: "500",
                    fontSize: "18px",
                    color: "#000",
                    fontStyle: "normal",
                    lineHeight: "24px",
                    position: "relative",
                  }}
                >
                  Explore Agencies
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
