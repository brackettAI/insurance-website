import React from "react";
import { loadFromLocalStorage } from "../localStorageHelper";

const QuoteReview = ({ prevPage }) => {
  const businessType = loadFromLocalStorage("businessType");
  const businessStructure = loadFromLocalStorage("businessStructure");
  const businessAddress = loadFromLocalStorage("businessAddress");
  const businessDetails = loadFromLocalStorage("businessDetails");
  const coverageSelection = loadFromLocalStorage("coverageSelection");

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-lg font-semibold mb-4">Review Your Quote</h2>
      <p className="mb-2">Business Type: {businessType}</p>
      <p className="mb-2">Structure: {businessStructure}</p>
      <p className="mb-2">
        Address: {businessAddress?.address}, {businessAddress?.city}, {businessAddress?.state} {businessAddress?.zip}
      </p>
      <p className="mb-2">Square Footage: {businessDetails?.squareFootage}</p>
      <p className="mb-2">Number of Locations: {businessDetails?.locations}</p>
      <p className="mb-2">Coverage: {coverageSelection?.coverage}</p>
      <div className="flex justify-start mt-4">
        <button
          onClick={prevPage}
          className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700"
        >
          Previous
        </button>
      </div>
    </div>
  );
};

export default QuoteReview;
