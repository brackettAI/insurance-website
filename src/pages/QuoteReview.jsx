// src/pages/QuoteReview.jsx
import React from "react";
import { loadFromLocalStorage } from "../localStorageHelper";
import jsPDF from "jspdf";

const QuoteReview = ({ prevPage }) => {
  const businessType = loadFromLocalStorage("businessType");
  const businessStructure = loadFromLocalStorage("businessStructure");
  const businessAddress = loadFromLocalStorage("businessAddress");
  const businessDetails = loadFromLocalStorage("businessDetails");
  const coverageSelection = loadFromLocalStorage("selectedCoverage");

  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text("Insurance Quote Review", 10, 10);
    doc.setFontSize(12);

    doc.text(`Business Type: ${businessType}`, 10, 30);
    doc.text(`Structure: ${businessStructure}`, 10, 40);
    doc.text(
      `Address: ${businessAddress?.address}, ${businessAddress?.city}, ${businessAddress?.state} ${businessAddress?.zip}`,
      10,
      50
    );
    doc.text(`Legal Business Name: ${businessDetails?.legalName || "N/A"}`, 10, 60);
    doc.text(`Annual Revenue: ${businessDetails?.annualRevenue || "N/A"}`, 10, 70);
    doc.text(`Annual Payroll: ${businessDetails?.annualPayroll || "N/A"}`, 10, 80);
    doc.text(`Employee Count: ${businessDetails?.employeeCount || "N/A"}`, 10, 90);
    doc.text(`Coverage: ${coverageSelection?.name}`, 10, 100);
    doc.text(`Price: ${coverageSelection?.price}`, 10, 110);

    doc.save("InsuranceQuote.pdf");
  };

  return (
      <div className="p-4 max-w-2xl mx-auto bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold mb-6">Review Your Quote</h2>

        <div className="mb-4 border border-gray-200 rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-2">Business Information</h3>
          <p>Type: {businessType}</p>
          <p>Structure: {businessStructure}</p>
          <p>
            Address: {businessAddress?.address}, {businessAddress?.city}, {businessAddress?.state} {businessAddress?.zip}
          </p>
        </div>

        <div className="mb-4 border border-gray-200 rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-2">Business Details</h3>
          <p>
            Legal Name: {businessDetails?.legalName}
            <br/>
            Annual Revenue: {businessDetails?.annualRevenue}
            <br/>
            Annual Payroll: {businessDetails?.annualPayroll}
            <br/>
            Employee Count: {businessDetails?.employeeCount}
          </p>
        </div>
        <div className="mb-4 border border-gray-200 rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-2">Coverage Details</h3>
          <p>Package: {coverageSelection?.name}</p>
          <p>Price: {coverageSelection?.price}</p>
          <p>{coverageSelection?.description}</p>
        </div>

        <div className="flex justify-between mt-6">
          <button
              onClick={prevPage}
              className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700"
          >
            Previous
          </button>
          <button
              onClick={downloadPDF}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Download Quote
          </button>
        </div>
      </div>
  );
};

export default QuoteReview;
