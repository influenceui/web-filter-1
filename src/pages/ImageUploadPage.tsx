import React from "react";

export default function ImageUploadPage() {
  return (
    <>
      {/* External Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Cabinet+Grotesk:wght@400;500&display=swap"
        rel="stylesheet"
      />

      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div
          style={{
            width: "378px",
            height: "442px",
            flexShrink: "0",
            position: "relative",
          }}
        >
          {/* Image Display Area */}
          <div
            style={{
              width: "378px",
              height: "378px",
              flexShrink: "0",
              position: "absolute",
              left: "0px",
              top: "0px",
            }}
          >
            <div
              style={{
                width: "378px",
                height: "378px",
                flexShrink: "0",
                aspectRatio: "1/1",
                background: "#FFF",
                position: "absolute",
                left: "0px",
                top: "0px",
              }}
            />
            {/* Adidas Logo Placeholder - Using a div with background for the logo */}
            <div
              style={{
                width: "379px",
                height: "253px",
                flexShrink: "0",
                aspectRatio: "378.98/252.65",
                position: "absolute",
                left: "-1px",
                top: "63px",
                backgroundColor: "#000",
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 400'%3E%3Cg fill='%23000'%3E%3Cpath d='M120 180L180 120L240 180L300 120L360 180H120z'/%3E%3Cpath d='M120 200L240 200L360 200'/%3E%3Cpath d='M120 220L360 220'/%3E%3Ctext x='150' y='280' font-family='Arial, sans-serif' font-size='48' font-weight='bold' fill='%23000'%3Eadidas%3C/text%3E%3C/g%3E%3C/svg%3E")`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* Adidas Logo SVG */}
              <svg
                width="200"
                height="134"
                viewBox="0 0 200 134"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  filter: "invert(1)",
                }}
              >
                {/* Three stripes */}
                <polygon
                  points="40,45 75,20 110,45 145,20 180,45 40,45"
                  fill="black"
                />
                <polygon
                  points="40,55 75,30 110,55 145,30 180,55 40,55"
                  fill="black"
                />
                <polygon
                  points="40,65 75,40 110,65 145,40 180,65 40,65"
                  fill="black"
                />

                {/* Adidas text */}
                <text
                  x="20"
                  y="105"
                  fontFamily="Arial, sans-serif"
                  fontSize="24"
                  fontWeight="bold"
                  fill="black"
                >
                  adidas
                </text>
                <circle cx="185" cy="85" r="3" fill="black" />
                <text
                  x="180"
                  y="90"
                  fontFamily="Arial, sans-serif"
                  fontSize="12"
                  fill="black"
                >
                  ®
                </text>
              </svg>
            </div>
          </div>

          {/* CTA Buttons */}
          <div
            style={{
              display: "flex",
              width: "378px",
              height: "48px",
              justifyContent: "center",
              alignItems: "flex-start",
              flexShrink: "0",
              border: "0.5px solid #555",
              position: "absolute",
              left: "0px",
              top: "394px",
            }}
          >
            {/* Remove Button */}
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
                position: "absolute",
                left: "0px",
                top: "0px",
                width: "189px",
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
                  position: "relative",
                }}
              >
                Remove
              </div>
            </div>

            {/* Upload New Button */}
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
                position: "absolute",
                left: "189px",
                top: "0px",
                width: "189px",
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
                  position: "relative",
                }}
              >
                Upload New
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
