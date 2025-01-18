import React, { useState } from "react";
import { saveToLocalStorage } from "../localStorageHelper";

const BusinessDetailsPage = ({ nextPage, prevPage }) => {
  const [formData, setFormData] = useState({
    squareFootage: "",
    locations: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNext = () => {
    saveToLocalStorage("businessDetails", formData);
    nextPage();
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-lg font-semibold mb-4">Tell us more about your business</h2>
      <input
        type="number"
        name="squareFootage"
        placeholder="Approximate Square Footage"
        value={formData.squareFootage}
        onChange={handleChange}
        className="border border-gray-300 p-2 rounded-md w-full mb-4"
      />
      <input
        type="number"
        name="locations"
        placeholder="Number of Locations"
        value={formData.locations}
        onChange={handleChange}
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
          Next
        </button>
      </div>
    </div>
  );
};

export default BusinessDetailsPage;
