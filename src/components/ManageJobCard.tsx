import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faArrowsRotate,
  faArrowUpFromBracket,
  faCopy,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";

const metrics_data = [
  { number: 56, label: "Total Resume" },
  { number: 56, label: "Best Match" },
  { number: 56, label: "Partial Match" },
  { number: 56, label: "May Be" },
  { number: 56, label: "Review Required" },
];

const progressData = [
  {
    label: "Shortlisted",
    barColor: "bg-green-500",
    barWidth: "30%",
    count: "02",
  },
  { label: "Interview", barColor: "bg-blue-500", barWidth: "20%", count: "02" },
  { label: "Offered", barColor: "bg-yellow-500", barWidth: "20%", count: "02" },
  { label: "Hired", barColor: "bg-purple-500", barWidth: "20%", count: "02" },
  { label: "Rejected", barColor: "bg-red-500", barWidth: "20%", count: "02" },
];

const StatusDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState("On hold");
  const statusOptions = ["Open", "On hold", "Canceled", "Closed"];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700"
      >
        Status: <span className="font-medium">{selectedStatus}</span>
        <FiChevronDown
          className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
          <div className="p-2">
            <h3 className="px-3 py-2 text-base font-semibold text-gray-500 text-center">
              Change Status
            </h3>
            <div className="border border-b-1 border-gray-400"></div>
            {statusOptions.map((option) => (
              <div>
                <button
                  key={option}
                  onClick={() => {
                    setSelectedStatus(option);
                    setIsOpen(false);
                  }}
                  className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                >
                  {option}
                </button>
                <div className="border border-b-1 border-gray-200"></div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const ManageJobCard = () => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 w-full">
      <div className="grid grid-cols-3 gap-4 mb-6 w-full">
        <div className="col-span-2 w-full">
          <div className="flex justify-between items-start border-b pb-4 mb-4">
            <div>
              <h2 className="text-xl font-semibold">Lead UX Designer</h2>
              <p className="text-gray-600">Bangalore, Exp- 5-8 yrs</p>
              <p className="text-sm text-gray-400">Job ID: 77560</p>
              <p className="text-sm text-gray-400 mt-1">
                15 days old | Last Refreshed on 27/05/2019
              </p>
            </div>
            <div className="text-right">
              <div className="flex space-x-2 mt-2 mr-2">
                <StatusDropdown />
                <button className="text-gray-500 hover:text-gray-700">
                  <FontAwesomeIcon icon={faEdit} />
                </button>
                <button className="text-gray-500 hover:text-gray-700">
                  <FontAwesomeIcon icon={faCopy} />
                </button>
                <button className="text-gray-500 hover:text-gray-700">
                  <FontAwesomeIcon icon={faArrowUpFromBracket} />
                </button>
                <button className="text-gray-500 hover:text-gray-700">
                  <FontAwesomeIcon icon={faArrowsRotate} />
                </button>
              </div>
            </div>
          </div>

          <p className="text-sm text-gray-700 mb-4">
            Skills Required: Lead design efforts and implement the defined
            technical standards for software coding, tools and platforms in line
            with...
          </p>
          <div className="flex justify-between text-sm text-gray-500 mb-6">
            <p>
              Positions: <span className="font-medium">08</span>
            </p>
            <div className="border border-r-1 border-gray-500"></div>
            <p>
              Vendors: <span className="font-medium">04</span>
            </p>
            <div className="border border-r-1 border-gray-500"></div>

            <p>
              Uploaded by: <span className="font-medium">Me</span>
            </p>
            <div className="border border-r-1 border-gray-500"></div>

            <p>
              Job Posted: <span className="font-medium">27/05/2019</span>
            </p>

            <p className="font-medium">
              {" "}
              <FontAwesomeIcon icon={faArrowUpFromBracket} /> Hiring Patern
            </p>
          </div>
        </div>

        <div className="grid grid-cols-9 gap-4 w-full items-center text-gray-500 text-m mb-4">
          {progressData.map((item, index) => (
            <React.Fragment key={index}>
              <p className="col-span-3">{item.label}</p>
              <div className="col-span-4 relative h-2 bg-gray-200 rounded-full">
                <div
                  className={`absolute top-0 left-0 h-2 rounded-full ${item.barColor}`}
                  style={{ width: item.barWidth }}
                ></div>
              </div>
              <p className="col-span-1 text-right">{item.count}</p>
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className="w-full border border-t-1 border-gray-500 mb-2"></div>
      <div className="flex justify-between text-center mb-4">
        {metrics_data.map((item, index) => (
          <div key={index} className="flex items-center">
            {index !== 0 && (
              <div className="border border-l-2 border-gray-600 h-10 mx-4"></div>
            )}
            <div className="grid grid-cols-2 gap-2">
              <p className="text-lg text-gray-600 flex items-center">
                {item.label}
              </p>
              <p className="flex items-center justify-center w-12 h-12 text-lg font-medium border-2 border-gray-500 rounded-full">
                {item.number}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageJobCard;
