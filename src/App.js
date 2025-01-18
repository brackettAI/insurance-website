import React, { useState } from "react";
import Header from "./components/Header";
import ProgressBar from "./components/ProgressBar";
import BusinessTypePage from "./pages/BusinessTypePage";
import BusinessStructurePage from "./pages/BusinessStructurePage";
import BusinessAddressPage from "./pages/BusinessAddressPage";
import BusinessDetailsPage from "./pages/BusinessDetailsPage";
import CoverageSelection from "./pages/CoverageSelection";
import QuoteReview from "./pages/QuoteReview";

const App = () => {
  const [step, setStep] = useState(1);

  const nextPage = () => setStep(step + 1);
  const prevPage = () => setStep(step - 1);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="max-w-4xl mx-auto py-8">
        <ProgressBar step={step} totalSteps={6} />
        <div className="mt-8">
          {step === 1 && <BusinessTypePage nextPage={nextPage} />}
          {step === 2 && <BusinessStructurePage nextPage={nextPage} prevPage={prevPage} />}
          {step === 3 && <BusinessAddressPage nextPage={nextPage} prevPage={prevPage} />}
          {step === 4 && <BusinessDetailsPage nextPage={nextPage} prevPage={prevPage} />}
          {step === 5 && <CoverageSelection nextPage={nextPage} prevPage={prevPage} />}
          {step === 6 && <QuoteReview prevPage={prevPage} />}
        </div>
      </div>
    </div>
  );
};

export default App;
