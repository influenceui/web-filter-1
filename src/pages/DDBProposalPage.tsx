import React from "react";
import ProposalMessageBox from "../components/ProposalMessageBox";

export default function DDBProposalPage() {
  const handleCounter = () => {
    console.log("Counter button clicked");
    // Add counter logic here
  };

  const handleAccept = () => {
    console.log("Accept button clicked");
    // Add accept logic here
  };

  return (
    <>
      {/* External Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Figtree:wght@400;700&family=Cabinet+Grotesk:wght@400;500&display=swap"
        rel="stylesheet"
      />

      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <ProposalMessageBox
          title="DDB proposed"
          amount="₹ 55,000/-"
          message="Hi Adidas, We've reviewed your project brief and crafted a detailed quotation based on your requirements for the Speed Runner campaign. Please find the attached quotation document for your review. We're excited to collaborate!"
          attachmentName="Quotation for Speed Runner.pdf"
          onCounter={handleCounter}
          onAccept={handleAccept}
        />
      </div>
    </>
  );
}
