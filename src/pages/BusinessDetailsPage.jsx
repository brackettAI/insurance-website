// src/pages/BusinessDetailsPage.jsx
import React, { useState } from "react";
import { saveToLocalStorage } from "../localStorageHelper";

const BusinessDetailsPage = ({ nextPage, prevPage }) => {
  const [formData, setFormData] = useState({
    legalName: "",
    annualRevenue: "",
    annualPayroll: "",
    employeeCount: "",
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
    <div className="p-4 max-w-2xl mx-auto bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Let’s get some details about your business</h2>

      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-1">Legal Business Name</label>
        <input
          type="text"
          name="legalName"
          value={formData.legalName}
          onChange={handleChange}
          className="border border-gray-300 p-2 rounded-md w-full"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-1">What’s your expected annual revenue?</label>
        <input
          type="number"
          name="annualRevenue"
          value={formData.annualRevenue}
          onChange={handleChange}
          className="border border-gray-300 p-2 rounded-md w-full"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-1">What’s the estimated annual payroll for your business?</label>
        <input
          type="number"
          name="annualPayroll"
          value={formData.annualPayroll}
          onChange={handleChange}
          className="border border-gray-300 p-2 rounded-md w-full"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-1">How many employees do you have?</label>
        <input
          type="number"
          name="employeeCount"
          value={formData.employeeCount}
          onChange={handleChange}
          className="border border-gray-300 p-2 rounded-md w-full"
        />
      </div>

      <div className="flex justify-between items-center mt-6">
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
