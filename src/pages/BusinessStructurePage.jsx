import React, { useState } from "react";
import { saveToLocalStorage } from "../localStorageHelper";

const BusinessStructurePage = ({ nextPage, prevPage }) => {
  const [structure, setStructure] = useState("");

  const handleNext = () => {
    saveToLocalStorage("businessStructure", structure);
    nextPage();
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-lg font-semibold mb-4">How is your business structured?</h2>
      <input
        type="text"
        placeholder="Structure"
        value={structure}
        onChange={(e) => setStructure(e.target.value)}
        className="border border-gray-300 p-2 rounded-md w-full mb-4"
      />
      <div className="flex justify-between">
        <button
          onClick={prevPage}
          className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Continue to Business Address
        </button>
      </div>
    </div>
  );
};

export default BusinessStructurePage;
