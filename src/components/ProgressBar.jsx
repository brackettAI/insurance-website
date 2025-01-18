import React from "react";

const ProgressBar = ({ step, totalSteps }) => {
  const percentage = (step / totalSteps) * 100;
  return (
    <div className="w-full bg-gray-200 h-2 rounded-full">
      <div
        className="bg-blue-600 h-2 rounded-full"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;