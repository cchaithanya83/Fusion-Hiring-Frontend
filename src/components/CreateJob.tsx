import React, { useState } from "react";
import CreateJobBasic from "./model/CreateJobBasic";

const CreateJobAdditional: React.FC = () => <div>Additional Step Content</div>;
const CreateJobCollaboration: React.FC = () => (
  <div>Collaboration Step Content</div>
);
const CreateJobGoLive: React.FC = () => <div>Go Live Step Content</div>;
const CreateJobMain: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = ["Basic", "Additional", "Collaboration", "Go Live"];
  const stepComponents = [
    <CreateJobBasic />,

    <CreateJobAdditional />,
    <CreateJobCollaboration />,
    <CreateJobGoLive />,
  ];

  const handleNext = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep((prevStep) => prevStep - 1);
    }
  };

  return (
    <div className="flex flex-col items-center bg-gray-200">
      <div className="w-full max-w-4xl mt-6">
        <h1 className="text-l font-bold mb-6 mt-3 p-3 md:p-2 lg:p-0">
          Create Job
        </h1>
        <div className="bg-white rounded-lg shadow-lg">
          {/* Stepper */}
          <div className="hidden sm:flex items-center p-5 shadow">
            {steps.map((step, index) => (
              <React.Fragment key={index}>
                <div className="flex items-center">
                  <div
                    className={`w-8 h-8 flex items-center justify-center rounded-full font-bold ml-2 mr-3 ${
                      currentStep === index + 1
                        ? "bg-[#FD3995] text-white"
                        : "bg-[#886AB5] text-gray-100"
                    }`}
                  >
                    {index + 1}
                  </div>
                  <span
                    className={`ml-2 font-medium ${
                      currentStep === index + 1
                        ? "text-gray-800"
                        : "text-gray-500"
                    }`}
                  >
                    {step}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`ml-1 mr-1 flex-1 border-t-2 ${
                      currentStep > index
                        ? "border-gray-600"
                        : "border-dotted border-gray-300"
                    }`}
                  ></div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Step Content */}
          <div className="w-full">{stepComponents[currentStep - 1]}</div>

          {/* Buttons */}
          <div className="flex justify-center mt-6 space-x-4 mb-3 p-4 shadow">
            <button
              onClick={handlePrevious}
              disabled={currentStep === 1}
              className="px-4 py-2 bg-gray-300 text-gray-600 font-bold rounded disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              className="px-4 py-2 bg-[#7454A7] text-white font-bold rounded disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
            </button>
            <button className="flex items-center justify-center text-gray-600  p-2 md:px-4 md:py-2 rounded-md hover:bg-gray-100">
              <svg
                className="w-full max-w-[50px] max-h-[50px] md:max-w-[60px] md:max-h-[30px]"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 293.399 293.399"
                xmlSpace="preserve"
              >
                <g>
                  <g>
                    <path
                      style={{ fill: "#010002" }}
                      d="M185.711,39.694L156.052,4.357c-0.092-0.103-0.207-0.174-0.299-0.277
              c-0.457-0.517-0.968-0.979-1.507-1.403c-0.071-0.054-0.125-0.114-0.196-0.158C152,0.957,149.476,0,146.702,0
              c-2.774,0-5.298,0.963-7.348,2.518c-0.071,0.049-0.125,0.103-0.196,0.158c-0.538,0.43-1.05,0.892-1.507,1.403
              c-0.092,0.103-0.212,0.174-0.299,0.277l-29.659,35.338c-4.335,5.156-3.66,12.858,1.501,17.198
              c5.167,4.324,12.869,3.655,17.198-1.512l8.104-9.654v151.016c0,6.739,5.461,12.205,12.205,12.205
              c6.744,0,12.205-5.466,12.205-12.205V45.732l8.104,9.654c2.41,2.877,5.874,4.362,9.355,4.362c2.763,0,5.553-0.936,7.838-2.85
              C189.372,52.558,190.046,44.856,185.711,39.694z"
                    />
                    <g>
                      <path
                        style={{ fill: "#010002" }}
                        d="M232.819,293.399H60.586c-13.092,0-23.742-10.65-23.742-23.736V97.425
                c0-13.086,10.65-23.736,23.742-23.736h44.247c6.744,0,12.205,5.466,12.205,12.205s-5.461,12.211-12.205,12.211H61.255v170.884
                h170.89V98.099h-42.593c-6.744,0-12.205-5.466-12.205-12.211c0-6.739,5.461-12.205,12.205-12.205h43.262
                c13.092,0,23.742,10.65,23.742,23.736v172.239C256.561,282.75,245.911,293.399,232.819,293.399z"
                      />
                    </g>
                  </g>
                </g>
              </svg>
            </button>
            {/* Add Questionnaire Button */}
            <button className="flex items-center font-small text-gray-600 border border-gray-400  py-2 rounded-md hover:bg-gray-100">
              Add Questionnaire
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateJobMain;
