import React from "react";
import IncomingPaymentBox from "../components/IncomingPaymentBox";

export default function IncomingPaymentPage() {
  return (
    <>
      {/* External Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Figtree:wght@400;600;700&display=swap"
        rel="stylesheet"
      />

      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <IncomingPaymentBox
          amount="₹ 10,000"
          transactionId="ACRAF23DB3C4"
          successMessage="Payment successful."
        />
      </div>
    </>
  );
}
