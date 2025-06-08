import React from "react";
import PaymentSuccessBox from "../components/PaymentSuccessBox";

export default function PaymentSuccessPage() {
  return (
    <>
      {/* External Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Figtree:wght@400;700&display=swap"
        rel="stylesheet"
      />

      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <PaymentSuccessBox
          recipient="Payment to DDB Mudra Group"
          amount="₹ 10,000"
          transactionId="ACRAF23DB3C4"
          successMessage="Payment successful."
        />
      </div>
    </>
  );
}
