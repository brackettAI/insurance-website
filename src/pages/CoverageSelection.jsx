import React, { useState } from "react";
import { saveToLocalStorage } from "../localStorageHelper";

const CoverageSelection = ({ nextPage, prevPage }) => {
  const [selectedCoverage, setSelectedCoverage] = useState("");

  const handleNext = () => {
    saveToLocalStorage("coverageSelection", { coverage: selectedCoverage });
    nextPage();
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-lg font-semibold mb-4">Choose Your Coverage</h2>
      <label className="block mb-2">
        <input
          type="radio"
          value="basic"
          checked={selectedCoverage === "basic"}
          onChange={(e) => setSelectedCoverage(e.target.value)}
          className="mr-2"
        />
        Basic Package
      </label>
      <label className="block mb-2">
        <input
          type="radio"
          value="standard"
          checked={selectedCoverage === "standard"}
          onChange={(e) => setSelectedCoverage(e.target.value)}
          className="mr-2"
        />
        Standard Package
      </label>
      <label className="block mb-2">
        <input
          type="radio"
          value="premium"
          checked={selectedCoverage === "premium"}
          onChange={(e) => setSelectedCoverage(e.target.value)}
          className="mr-2"
        />
        Premium Package
      </label>
      <div className="flex justify-between mt-4">
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
          Next
        </button>
      </div>
    </div>
  );
};

export default CoverageSelection;
