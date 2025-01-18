import React, { useState } from "react";
import { saveToLocalStorage } from "../localStorageHelper";

const BusinessTypePage = ({ nextPage }) => {
  const [businessType, setBusinessType] = useState("");

  const handleNext = () => {
    saveToLocalStorage("businessType", businessType);
    nextPage();
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-lg font-semibold mb-4">What’s your business type?</h2>
      <input
        type="text"
        placeholder="Business Type"
        value={businessType}
        onChange={(e) => setBusinessType(e.target.value)}
        className="border border-gray-300 p-2 rounded-md w-full mb-4"
      />
      <button
        onClick={handleNext}
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
      >
        Continue to Business Structure
      </button>
    </div>
  );
};

export default BusinessTypePage;
