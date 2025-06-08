import React from "react";
import MessageBox from "../components/MessageBox";

export default function ProposalMessagePage() {
  return (
    <>
      {/* External Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Figtree:wght@400;700&display=swap"
        rel="stylesheet"
      />

      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <MessageBox
          title="You proposed"
          amount="₹ 55,000/-"
          message="Hi Adidas,

We've reviewed your project brief and crafted a detailed quotation based on your requirements for the Speed Runner campaign. Please find the attached quotation document for your review. We're excited to collaborate!"
          hasCounterDetails={true}
          detailsText="Quotation details"
        />
      </div>
    </>
  );
}
