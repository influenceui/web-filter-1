import React from "react";
import MessageBox from "../components/MessageBox";

export default function RevisionMessagePage() {
  return (
    <>
      {/* External Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Figtree:wght@400;700&display=swap"
        rel="stylesheet"
      />

      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <MessageBox
          title="You revised"
          amount="₹ 53,000/-"
          message="Hi Adidas,

Thank you for your response. We truly value the opportunity to collaborate. Unfortunately, ₹52,000 falls below our minimum for the scope discussed. We'd like to propose a revised amount and hope this works for both sides.

Looking forward to your confirmation!"
          hasCounterDetails={true}
        />
      </div>
    </>
  );
}
