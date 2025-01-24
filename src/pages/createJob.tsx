import React, { useState } from "react";
import CreateJobBasic from "../components/CreateJobBasic";
import CreateJobAddition from "../components/CreateJobAddition";
import NavBar from "../components/Nav";
import CreateJobCollaboration from "../components/CreateJobCollaboration";
import CreateJobGoLive from "../components/CreateJobGoLive";
const YetToDevelop: React.FC = () => (
  <div className="text-center p-8 text-xl font-bold ">Yet to develop!</div>
);

const CreateJobMain: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = ["Basic", "Additional", "Collaboration", "Go Live"];
  const stepComponents = [
    <CreateJobBasic />,
    <CreateJobAddition />,
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
  const [showScheduleModal, setShowScheduleModal] = useState(false);
  // State for Schedule Publish Modal
  const [publishDate, setPublishDate] = useState("");
  const [publishTime, setPublishTime] = useState("");
  const [isPopoverVisible, setPopoverVisible] = useState(false);

  const togglePopover = () => {
    setPopoverVisible(!isPopoverVisible);
  };

  const handleSave = () => {
    console.log("Publish Date:", publishDate);
    console.log("Publish Time:", publishTime);
    setPopoverVisible(false); // Close the popover after saving
  };

  return (
    <div className="items-center">
      <NavBar currentactivePage={"Manage Jobs"} />
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
                      className={`w-8 h-8 flex items-center justify-center rounded-full font-bold ml-2 mr-1 ${
                        currentStep >= index + 1
                          ? "bg-[#FD3995] text-white"
                          : "bg-gray-400 text-gray-100"
                      }`}
                    >
                      {currentStep <= index + 1 && index + 1}
                      {currentStep > index + 1 && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="white"
                          className="w-6 h-6"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.6 17.2c-.4.4-1 .4-1.4 0l-4-4c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l3.3 3.3 6.7-6.7c.4-.4 1-.4 1.4 0s.4 1 0 1.4l-7.4 7.4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </div>
                    <span
                      className={`ml-2 font-medium mr-1 ${
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
                        currentStep > index + 1
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

            {/* Buttons for 1 2  */}
            {currentStep < 3 && (
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
            )}

            {/*  Button for 3 */}

            {currentStep == 3 && (
              <div className="flex inline-block item center justify-center mb-4 p-4 shadow">
                <button
                  className="px-6 py-2 bg-blue-700 text-white rounded-md mr-4 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium"
                  onClick={handleNext}
                >
                  Publish
                </button>
                {/* Schedule Publish Button */}
                <button
                  onClick={togglePopover}
                  className="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Schedule Publish
                </button>

                {/* Right Popover */}
                {isPopoverVisible && (
                  <div className="absolute z-10 inline-block w-72 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-lg dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800">
                    <div className="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-gray-700">
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        Schedule Publish
                      </h3>
                    </div>
                    <div className="px-3 py-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Publish Date
                      </label>
                      <input
                        type="date"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        value={publishDate}
                        onChange={(e) => setPublishDate(e.target.value)}
                      />
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Publish Time
                      </label>
                      <input
                        type="time"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        value={publishTime}
                        onChange={(e) => setPublishTime(e.target.value)}
                      />
                      <div className="flex justify-end space-x-4">
                        <button
                          onClick={togglePopover}
                          className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400 transition"
                        >
                          Cancel
                        </button>
                        <button
                          onClick={handleSave}
                          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
                        >
                          Save
                        </button>
                      </div>
                    </div>
                    <div className="absolute top-1/2 left-0 transform -translate-x-full -translate-y-1/2 w-2 h-2 bg-white border-l border-t border-gray-200 dark:bg-gray-800 dark:border-gray-600 rotate-45"></div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateJobMain;
