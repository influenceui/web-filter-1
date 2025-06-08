import React from "react";

export default function CounterProposalPage() {
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
            maxWidth: "none",
            marginLeft: "auto",
            marginRight: "auto",
            display: "flex",
            width: "318px",
            flexDirection: "column",
            justifyContent: "flex-end",
            alignItems: "flex-end",
            gap: "-0.5px",
            height: "231px",
            position: "relative",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              alignSelf: "stretch",
              background: "#1C1A1F",
              position: "relative",
            }}
          >
            {/* Header with Adidas proposal and amount */}
            <div
              style={{
                display: "flex",
                padding: "12px",
                justifyContent: "space-between",
                alignItems: "center",
                alignSelf: "stretch",
                border: "0.5px solid rgba(255,255,255,0.40)",
                background: "#0E0E0E",
                position: "relative",
              }}
            >
              <div
                style={{
                  color: "rgba(255,255,255,0.60)",
                  fontFamily:
                    "Figtree, -apple-system, Roboto, Helvetica, sans-serif",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px",
                  position: "relative",
                }}
              >
                Adidas proposed
              </div>
              <div
                style={{
                  color: "#FFF",
                  fontFamily:
                    "Figtree, -apple-system, Roboto, Helvetica, sans-serif",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight: "24px",
                  position: "relative",
                }}
              >
                ₹ 52,000/-
              </div>
            </div>

            {/* Message body */}
            <div
              style={{
                flex: "1 0 0",
                color: "#FFF",
                fontFamily:
                  "Figtree, -apple-system, Roboto, Helvetica, sans-serif",
                fontSize: "12px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "20px",
                position: "relative",
                display: "flex",
                padding: "12px",
                justifyContent: "center",
                alignItems: "center",
                gap: "8px",
                alignSelf: "stretch",
                border: "0.5px solid rgba(255,255,255,0.40)",
                background: "#1C1A1F",
              }}
            >
              Hi Adidas, We appreciate the detailed quotation. Considering our
              current budget constraints, we'd like to propose a revised total
              of ₹52,000. Looking forward to your understanding and hoping we
              can proceed together.
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
            }}
          >
            {/* Counter Button */}
            <div
              style={{
                color: "#FFF",
                fontFamily:
                  "'Cabinet Grotesk', -apple-system, Roboto, Helvetica, sans-serif",
                fontSize: "18px",
                fontStyle: "normal",
                fontWeight: "500",
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

            {/* Accept Button */}
            <div
              style={{
                color: "#000",
                fontFamily:
                  "'Cabinet Grotesk', -apple-system, Roboto, Helvetica, sans-serif",
                fontSize: "18px",
                fontStyle: "normal",
                fontWeight: "500",
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
              Accept
            </div>
          </div>

          {/* Corner decoration */}
          <svg
            width="318"
            height="12"
            viewBox="0 0 318 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              display: "flex",
              alignItems: "flex-end",
              gap: "10px",
              alignSelf: "stretch",
              position: "relative",
              width: "318px",
              height: "12px",
            }}
          >
            <path d="M12 0H0V12L12 0Z" fill="#1C1A1F" />
            <path
              d="M11.3965 0.25L0.25 11.3965V0.25H11.3965Z"
              stroke="white"
              strokeOpacity="0.4"
              strokeWidth="0.5"
            />
          </svg>
        </div>
      </div>
    </>
  );
}
