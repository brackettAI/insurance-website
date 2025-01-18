import React, { useState } from "react";
import { saveToLocalStorage } from "../localStorageHelper";

const CoverageSelection = ({ nextPage, prevPage }) => {
  const [selectedCoverage, setSelectedCoverage] = useState(null);

  const packages = [
    {
      name: "Basic Package",
      price: "$252.28 per month",
      description: "Includes general liability, business property, and business income coverage."
    },
    {
      name: "Standard Package",
      price: "$296.28 per month",
      description: "Adds additional personal property coverage to the basic package."
    },
    {
      name: "Premium Package",
      price: "$317.64 per month",
      description: "Offers extended liability and maximum protection for businesses."
    }
  ];

  const handleSelect = (pkg) => {
    setSelectedCoverage(pkg);
    saveToLocalStorage("selectedCoverage", pkg);
    nextPage();
  };

  return (
    <div className="p-4 max-w-2xl mx-auto bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Choose Your Coverage</h2>
      <div className="space-y-4">
        {packages.map((pkg, index) => (
          <div key={index} className="border border-gray-300 rounded-lg p-4 hover:shadow-lg">
            <h3 className="text-lg font-bold text-blue-600">{pkg.name}</h3>
            <p className="text-gray-700 mt-2">{pkg.description}</p>
            <p className="text-blue-600 font-semibold mt-4">{pkg.price}</p>
            <button
              onClick={() => handleSelect(pkg)}
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              Select
            </button>
          </div>
        ))}
      </div>
      <button
        onClick={prevPage}
        className="mt-6 bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700"
      >
        Previous
      </button>
    </div>
  );
};

export default CoverageSelection;
