import React, { useState } from "react";
import CreateJobBasic from "./CreateJobBasic";


const CreateJobAdditional: React.FC = () => (
  <div>Additional Step Content</div>
);
const CreateJobCollaboration: React.FC = () => (
  <div>Collaboration Step Content</div>
);
const CreateJobGoLive: React.FC = () => (
  <div>Go Live Step Content</div>
);

const CreateJobMain: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = ["Basic", "Additional", "Collaboration", "Go Live"];
  const stepComponents = [
    <CreateJobBasic />,
    <CreateJobAdditional />,
    <CreateJobCollaboration />,
    <CreateJobGoLive />,
  ];

  // Function to go to the next step
  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };

  // Function to go to the previous step
  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep((prevStep) => prevStep - 1);
    }
  };

  return (
    <div className=" flex flex-col items-center bg-gray-100">
      {/* Stepper */}
      <div className="w-full max-w-4xl ">
        {/* Desktop Stepper */}
        <div className="hidden sm:flex items-center">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              {/* Step */}
              <div className="flex items-center">
                <div
                  className={`w-8 h-8 flex items-center justify-center rounded-full font-bold 
                  ${
                    currentStep === index + 1
                      ? "bg-gray-800 text-white"
                      : "bg-gray-300 text-gray-500"
                  }`}
                >
                  {index + 1}
                </div>
                <span
                  className={`ml-2 font-medium ${
                    currentStep === index + 1 ? "text-gray-800" : "text-gray-500"
                  }`}
                >
                  {step}
                </span>
              </div>

              {/* Line Between Steps */}
              {index < steps.length - 1 && (
                <div
                  className={`flex-1 border-t-2 ${
                    currentStep > index + 1
                      ? "border-gray-800"
                      : "border-dotted border-gray-300"
                  }`}
                ></div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Mobile Stepper */}
        <div className="flex sm:hidden justify-between">
          {steps.map((_, index) => (
            <div
              key={index}
              className={`w-8 h-8 flex items-center justify-center rounded-full font-bold 
                ${
                  currentStep === index + 1
                    ? "bg-gray-800 text-white"
                    : "bg-gray-300 text-gray-500"
                }`}
            >
              {index + 1}
            </div>
          ))}
        </div>
      </div>

      {/* Step Content */}
      <div className="mt-6 w-full max-w-lg">
        {stepComponents[currentStep - 1]}
      </div>

      {/* Buttons */}
      <div className="flex justify-between mt-6 space-x-4">
        <button
          onClick={handlePrevious}
          disabled={currentStep === 1}
          className="px-4 py-2 bg-gray-300 text-gray-600 font-bold rounded disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={currentStep === steps.length}
          className="px-4 py-2 bg-gray-800 text-white font-bold rounded disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CreateJobMain;
