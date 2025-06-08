import React, { useState } from "react";
import { X, Upload, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface ScopeItem {
  id: string;
  service: string;
  deliverables: string;
  quantity: string;
  rate: string;
  total: string;
}

export default function QuotationPage() {
  const [scopeItems, setScopeItems] = useState<ScopeItem[]>([
    {
      id: "1",
      service: "",
      deliverables: "",
      quantity: "",
      rate: "",
      total: "",
    },
  ]);
  const [comment, setComment] = useState("");
  const [needFullPayment, setNeedFullPayment] = useState<string>("");
  const [advanceAmount, setAdvanceAmount] = useState("");
  const [gstIncluded, setGstIncluded] = useState<string>("");
  const [importantNote, setImportantNote] = useState("");
  const [termsFile, setTermsFile] = useState<File | null>(null);

  const addRow = () => {
    setScopeItems([
      ...scopeItems,
      {
        id: Date.now().toString(),
        service: "",
        deliverables: "",
        quantity: "",
        rate: "",
        total: "",
      },
    ]);
  };

  const updateScopeItem = (
    id: string,
    field: keyof ScopeItem,
    value: string,
  ) => {
    setScopeItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, [field]: value } : item,
      ),
    );
  };

  const calculateTotal = () => {
    return scopeItems.reduce((sum, item) => {
      const total = parseFloat(item.total) || 0;
      return sum + total;
    }, 0);
  };

  return (
    <>
      {/* External Fonts */}
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Cabinet+Grotesk:wght@300;400;700&family=Figtree:wght@400;600;700&display=swap"
      />

      <div
        className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
        style={{
          fontFamily: "'Figtree', sans-serif",
        }}
      >
        <div
          style={{
            width: "804px",
            height: "798px",
            padding: "24px",
            background: "#1C1A1F",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: "40px",
            justifyContent: "flex-start",
            alignItems: "stretch",
          }}
        >
          {/* Header */}
          <div className="flex justify-between items-start">
            <h1
              style={{
                fontFamily: "'Cabinet Grotesk', sans-serif",
                fontWeight: "300",
                fontSize: "24px",
                color: "#FFF",
                lineHeight: "32px",
              }}
            >
              Generate Quotation
            </h1>

            {/* Close Icon */}
            <button
              className="text-[#E9BF99] hover:text-[#E9BF99]/80"
              style={{
                width: "24px",
                height: "24px",
              }}
            >
              <X size={24} />
            </button>
          </div>

          {/* Scope of Work Section */}
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <label
                style={{
                  fontFamily: "'Figtree', sans-serif",
                  fontSize: "14px",
                  fontWeight: "400",
                  color: "#FFF",
                  opacity: "0.8",
                }}
              >
                Scope of Work <span style={{ color: "#F65F5F" }}>*</span>
              </label>
              <button
                onClick={addRow}
                style={{
                  fontFamily: "'Figtree', sans-serif",
                  fontSize: "14px",
                  color: "#E9BF99",
                  textDecoration: "underline",
                  opacity: "0.8",
                }}
                className="hover:opacity-100"
              >
                Add row
              </button>
            </div>

            {/* Table */}
            <div className="border border-[#555]">
              {/* Table Header */}
              <div className="flex">
                <div
                  className="bg-black border-r border-[#555] flex items-center px-4 py-4"
                  style={{ width: "157px" }}
                >
                  <span
                    style={{
                      color: "#E9BF99",
                      fontFamily: "'Figtree', sans-serif",
                      fontSize: "14px",
                      fontWeight: "400",
                      lineHeight: "22px",
                    }}
                  >
                    Service
                  </span>
                </div>
                <div
                  className="bg-black border-r border-[#555] flex items-center px-4 py-4"
                  style={{ width: "278px" }}
                >
                  <span
                    style={{
                      color: "#E9BF99",
                      fontFamily: "'Figtree', sans-serif",
                      fontSize: "14px",
                      fontWeight: "400",
                      lineHeight: "22px",
                    }}
                  >
                    Deliverables
                  </span>
                </div>
                <div className="bg-black border-r border-[#555] flex items-center px-4 py-4 flex-1">
                  <span
                    style={{
                      color: "#E9BF99",
                      fontFamily: "'Figtree', sans-serif",
                      fontSize: "14px",
                      fontWeight: "400",
                      lineHeight: "22px",
                    }}
                  >
                    Quantity
                  </span>
                </div>
                <div className="bg-black border-r border-[#555] flex items-center px-4 py-4 flex-1">
                  <span
                    style={{
                      color: "#E9BF99",
                      fontFamily: "'Figtree', sans-serif",
                      fontSize: "14px",
                      fontWeight: "400",
                      lineHeight: "22px",
                    }}
                  >
                    Rate (INR)
                  </span>
                </div>
                <div className="bg-black flex items-center px-4 py-4 flex-1">
                  <span
                    style={{
                      color: "#E9BF99",
                      fontFamily: "'Figtree', sans-serif",
                      fontSize: "14px",
                      fontWeight: "400",
                      lineHeight: "22px",
                    }}
                  >
                    Total (INR)
                  </span>
                </div>
              </div>

              {/* Table Rows */}
              {scopeItems.map((item) => (
                <div key={item.id} className="flex border-t border-[#555]">
                  <div
                    className="bg-black border-r border-[#555] flex items-center justify-center px-4 py-4"
                    style={{ width: "157px" }}
                  >
                    <input
                      type="text"
                      value={item.service}
                      onChange={(e) =>
                        updateScopeItem(item.id, "service", e.target.value)
                      }
                      className="w-full bg-transparent text-white text-center border-none outline-none"
                      style={{
                        fontFamily: "'Figtree', sans-serif",
                        fontSize: "14px",
                        lineHeight: "22px",
                      }}
                      placeholder="-"
                    />
                  </div>
                  <div
                    className="bg-black border-r border-[#555] flex items-center justify-center px-4 py-4"
                    style={{ width: "278px" }}
                  >
                    <input
                      type="text"
                      value={item.deliverables}
                      onChange={(e) =>
                        updateScopeItem(item.id, "deliverables", e.target.value)
                      }
                      className="w-full bg-transparent text-white text-center border-none outline-none"
                      style={{
                        fontFamily: "'Figtree', sans-serif",
                        fontSize: "14px",
                        lineHeight: "22px",
                      }}
                      placeholder="-"
                    />
                  </div>
                  <div className="bg-black border-r border-[#555] flex items-center justify-center px-4 py-4 flex-1">
                    <input
                      type="text"
                      value={item.quantity}
                      onChange={(e) =>
                        updateScopeItem(item.id, "quantity", e.target.value)
                      }
                      className="w-full bg-transparent text-white text-center border-none outline-none"
                      style={{
                        fontFamily: "'Figtree', sans-serif",
                        fontSize: "14px",
                        lineHeight: "22px",
                      }}
                      placeholder="-"
                    />
                  </div>
                  <div className="bg-black border-r border-[#555] flex items-center justify-center px-4 py-4 flex-1">
                    <input
                      type="text"
                      value={item.rate}
                      onChange={(e) =>
                        updateScopeItem(item.id, "rate", e.target.value)
                      }
                      className="w-full bg-transparent text-white text-center border-none outline-none"
                      style={{
                        fontFamily: "'Figtree', sans-serif",
                        fontSize: "14px",
                        lineHeight: "22px",
                      }}
                      placeholder="-"
                    />
                  </div>
                  <div className="bg-black flex items-center justify-center px-4 py-4 flex-1">
                    <input
                      type="text"
                      value={item.total}
                      onChange={(e) =>
                        updateScopeItem(item.id, "total", e.target.value)
                      }
                      className="w-full bg-transparent text-white text-center border-none outline-none"
                      style={{
                        fontFamily: "'Figtree', sans-serif",
                        fontSize: "14px",
                        lineHeight: "22px",
                      }}
                      placeholder="-"
                    />
                  </div>
                </div>
              ))}

              {/* Total Row */}
              <div
                className="flex border-t border-[#555]"
                style={{ height: "78px" }}
              >
                <div
                  className="bg-[#0E0E0E] border-r border-[#555] flex items-center px-4"
                  style={{ width: "157px" }}
                >
                  <span
                    style={{
                      color: "#83C778",
                      fontFamily: "'Figtree', sans-serif",
                      fontSize: "16px",
                      fontWeight: "600",
                      lineHeight: "18px",
                    }}
                  >
                    Total
                  </span>
                </div>
                <div className="bg-[#0E0E0E] flex items-center justify-end px-4 flex-1">
                  <span
                    style={{
                      fontFamily: "'Figtree', sans-serif",
                      fontSize: "18px",
                      fontWeight: "400",
                      color: "#83C778",
                    }}
                  >
                    ₹
                  </span>
                  <span
                    style={{
                      fontFamily: "'Figtree', sans-serif",
                      fontSize: "18px",
                      fontWeight: "700",
                      color: "#83C778",
                      marginLeft: "4px",
                    }}
                  >
                    {calculateTotal() || "-"}
                  </span>
                  <span
                    style={{
                      fontFamily: "'Figtree', sans-serif",
                      fontSize: "12px",
                      fontWeight: "400",
                      color: "rgba(131, 199, 120, 0.5)",
                      marginLeft: "8px",
                    }}
                  >
                    (GST Excl.)
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Form Fields Row 1 */}
          <div className="flex gap-10" style={{ width: "756px" }}>
            {/* Comment */}
            <div style={{ width: "358px" }}>
              <label
                style={{
                  fontFamily: "'Figtree', sans-serif",
                  fontSize: "14px",
                  color: "#FFF",
                  opacity: "0.8",
                  marginBottom: "8px",
                  display: "block",
                }}
              >
                Comment
              </label>
              <input
                type="text"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Write your message here"
                className="w-full bg-black border border-[#555] px-4 text-[#555] placeholder-[#555]"
                style={{
                  fontFamily: "'Figtree', sans-serif",
                  fontSize: "14px",
                  lineHeight: "22px",
                  height: "56px",
                }}
              />
            </div>

            {/* Need full payment in Advance */}
            <div style={{ width: "358px" }}>
              <label
                style={{
                  fontFamily: "'Figtree', sans-serif",
                  fontSize: "14px",
                  color: "#FFF",
                  opacity: "0.8",
                  marginBottom: "10px",
                  display: "block",
                }}
              >
                Need full payment in Advance ?{" "}
                <span style={{ color: "#F65F5F" }}>*</span>
              </label>
              <div className="flex" style={{ height: "56px" }}>
                <div className="flex items-center gap-2 bg-black border border-[#555] px-4 flex-1">
                  <div
                    className="w-5 h-5 rounded-full border border-[#555] flex items-center justify-center cursor-pointer"
                    onClick={() => setNeedFullPayment("yes")}
                    style={{
                      backgroundColor:
                        needFullPayment === "yes" ? "#555" : "transparent",
                    }}
                  >
                    {needFullPayment === "yes" && (
                      <div className="w-2 h-2 rounded-full bg-[#555]" />
                    )}
                  </div>
                  <label
                    onClick={() => setNeedFullPayment("yes")}
                    className="cursor-pointer"
                    style={{
                      fontFamily: "'Figtree', sans-serif",
                      fontSize: "14px",
                      color: "#FFF",
                      opacity: "0.8",
                    }}
                  >
                    Yes
                  </label>
                </div>
                <div className="flex items-center gap-2 bg-black border border-[#555] border-l-0 px-4 flex-1">
                  <div
                    className="w-5 h-5 rounded-full border border-[#555] flex items-center justify-center cursor-pointer"
                    onClick={() => setNeedFullPayment("no")}
                    style={{
                      backgroundColor:
                        needFullPayment === "no" ? "#555" : "transparent",
                    }}
                  >
                    {needFullPayment === "no" && (
                      <div className="w-2 h-2 rounded-full bg-[#555]" />
                    )}
                  </div>
                  <label
                    onClick={() => setNeedFullPayment("no")}
                    className="cursor-pointer"
                    style={{
                      fontFamily: "'Figtree', sans-serif",
                      fontSize: "14px",
                      color: "#FFF",
                      opacity: "0.8",
                    }}
                  >
                    No
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Form Fields Row 2 */}
          <div className="flex gap-10" style={{ width: "756px" }}>
            {/* Advance Amount */}
            <div style={{ width: "358px" }}>
              <label
                style={{
                  fontFamily: "'Figtree', sans-serif",
                  fontSize: "14px",
                  color: "#FFF",
                  opacity: "0.8",
                  marginBottom: "8px",
                  display: "block",
                }}
              >
                Advance Amount <span style={{ color: "#F65F5F" }}>*</span>
              </label>
              <input
                type="text"
                value={advanceAmount}
                onChange={(e) => setAdvanceAmount(e.target.value)}
                placeholder="-"
                className="w-full bg-black border border-[#555] px-4 text-white placeholder-white"
                style={{
                  fontFamily: "'Figtree', sans-serif",
                  fontSize: "14px",
                  lineHeight: "22px",
                  height: "56px",
                }}
              />
            </div>

            {/* GST Included */}
            <div style={{ width: "358px" }}>
              <label
                style={{
                  fontFamily: "'Figtree', sans-serif",
                  fontSize: "14px",
                  color: "#FFF",
                  opacity: "0.8",
                  marginBottom: "10px",
                  display: "block",
                }}
              >
                GST Included <span style={{ color: "#F65F5F" }}>*</span>
              </label>
              <div className="flex" style={{ height: "56px" }}>
                <div className="flex items-center gap-2 bg-black border border-[#555] px-4 flex-1">
                  <div
                    className="w-5 h-5 rounded-full border border-[#555] flex items-center justify-center cursor-pointer"
                    onClick={() => setGstIncluded("yes")}
                    style={{
                      backgroundColor:
                        gstIncluded === "yes" ? "#555" : "transparent",
                    }}
                  >
                    {gstIncluded === "yes" && (
                      <div className="w-2 h-2 rounded-full bg-[#555]" />
                    )}
                  </div>
                  <label
                    onClick={() => setGstIncluded("yes")}
                    className="cursor-pointer"
                    style={{
                      fontFamily: "'Figtree', sans-serif",
                      fontSize: "14px",
                      color: "#FFF",
                      opacity: "0.8",
                    }}
                  >
                    Yes
                  </label>
                </div>
                <div className="flex items-center gap-2 bg-black border border-[#555] border-l-0 px-4 flex-1">
                  <div
                    className="w-5 h-5 rounded-full border border-[#555] flex items-center justify-center cursor-pointer"
                    onClick={() => setGstIncluded("no")}
                    style={{
                      backgroundColor:
                        gstIncluded === "no" ? "#555" : "transparent",
                    }}
                  >
                    {gstIncluded === "no" && (
                      <div className="w-2 h-2 rounded-full bg-[#555]" />
                    )}
                  </div>
                  <label
                    onClick={() => setGstIncluded("no")}
                    className="cursor-pointer"
                    style={{
                      fontFamily: "'Figtree', sans-serif",
                      fontSize: "14px",
                      color: "#FFF",
                      opacity: "0.8",
                    }}
                  >
                    No
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Form Fields Row 3 */}
          <div className="flex gap-10" style={{ width: "756px" }}>
            {/* Terms & Conditions */}
            <div style={{ width: "358px" }}>
              <label
                style={{
                  fontFamily: "'Figtree', sans-serif",
                  fontSize: "14px",
                  color: "#FFF",
                  opacity: "0.8",
                  marginBottom: "8px",
                  display: "block",
                }}
              >
                Terms & Conditions <span style={{ color: "#F65F5F" }}>*</span>
              </label>
              <div
                className="bg-black border border-[#555] px-4 flex items-center justify-between cursor-pointer hover:bg-[#111]"
                style={{ height: "56px" }}
              >
                <span
                  style={{
                    fontFamily: "'Figtree', sans-serif",
                    fontSize: "14px",
                    color: "#555",
                    lineHeight: "22px",
                  }}
                >
                  {termsFile ? termsFile.name : "Upload File"}
                </span>
                <Upload size={20} className="text-white" />
              </div>
            </div>

            {/* Important Note */}
            <div style={{ width: "358px" }}>
              <label
                style={{
                  fontFamily: "'Figtree', sans-serif",
                  fontSize: "14px",
                  color: "#FFF",
                  opacity: "0.8",
                  marginBottom: "8px",
                  display: "block",
                }}
              >
                Important Note
              </label>
              <input
                type="text"
                value={importantNote}
                onChange={(e) => setImportantNote(e.target.value)}
                placeholder="Write your note here"
                className="w-full bg-black border border-[#555] px-4 text-[#555] placeholder-[#555]"
                style={{
                  fontFamily: "'Figtree', sans-serif",
                  fontSize: "14px",
                  lineHeight: "22px",
                  height: "56px",
                }}
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end" style={{ width: "756px" }}>
            <button
              className="bg-[#E9BF99] text-[#0E0E0E] px-4 py-4 hover:bg-[#E9BF99]/90 transition-colors"
              style={{
                width: "756px",
                height: "56px",
                fontFamily: "'Cabinet Grotesk', sans-serif",
                fontSize: "24px",
                fontWeight: "700",
                lineHeight: "24px",
                textAlign: "center",
                border: "0.5px solid #555",
              }}
            >
              Send Quotation
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
