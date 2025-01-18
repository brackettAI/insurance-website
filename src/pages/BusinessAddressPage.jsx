import React, { useState } from "react";
import { saveToLocalStorage } from "../localStorageHelper";

const BusinessAddressPage = ({ nextPage, prevPage }) => {
  const [formData, setFormData] = useState({
    address: "",
    suite: "",
    city: "",
    state: "",
    zip: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNext = () => {
    saveToLocalStorage("businessAddress", formData);
    nextPage();
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-lg font-semibold mb-4">What’s your business address?</h2>
      <input
        type="text"
        name="address"
        placeholder="Address"
        value={formData.address}
        onChange={handleChange}
        className="border border-gray-300 p-2 rounded-md w-full mb-4"
      />
      <input
        type="text"
        name="suite"
        placeholder="Suite (optional)"
        value={formData.suite}
        onChange={handleChange}
        className="border border-gray-300 p-2 rounded-md w-full mb-4"
      />
      <input
        type="text"
        name="city"
        placeholder="City"
        value={formData.city}
        onChange={handleChange}
        className="border border-gray-300 p-2 rounded-md w-full mb-4"
      />
      <input
        type="text"
        name="state"
        placeholder="State"
        value={formData.state}
        onChange={handleChange}
        className="border border-gray-300 p-2 rounded-md w-full mb-4"
      />
      <input
        type="text"
        name="zip"
        placeholder="ZIP Code"
        value={formData.zip}
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

export default BusinessAddressPage;
