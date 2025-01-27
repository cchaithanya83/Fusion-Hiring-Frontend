import React, { useState } from "react";
import PersonLogo from "../utils/SvgLogo";
const CreateJobGoLive: React.FC = () => {
  const [coworkers, setCoworkers] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");

  const addCoworker = () => {
    if (inputValue.trim() !== "") {
      setCoworkers([...coworkers, inputValue.trim()]);
      setInputValue("");
    }
  };

  const removeCoworker = (name: string) => {
    setCoworkers(coworkers.filter((coworker) => coworker !== name));
  };
  const jobBoardsLink =
    "https://mail.google.com/mail/u/1/#inbox/FMfcgxwCgzlGPmDJWjXxX";

  return (
    <div className="p-6 space-y-6">
      <div className="bg-white rounded-2xl p-6">
        <h2 className="text-xl font-semibold mb-4">
          Ask Co-workers for Referrals
        </h2>
        <p className="text-sm mb-2">
          Send an email to co-workers to see if they have a candidate for the
          "ROLE NAME"
        </p>
        <div className="flex items-center gap-2 mb-4">
          <input
            type="text"
            placeholder="Enter co-worker names"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="flex-grow border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={addCoworker}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Add
          </button>
        </div>
        <div className="flex flex-wrap gap-2">
          {coworkers.map((coworker) => (
            <div
              key={coworker}
              className="flex items-center gap-2 bg-gray-100 border border-gray-300 rounded-lg px-4 py-2"
            >
              <PersonLogo />
              <span>{coworker}</span>
              <button
                onClick={() => removeCoworker(coworker)}
                className="text-red-500 hover:text-red-700"
              >
                ×
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white  w-full rounded-2xl shadow-lg p-3">
        <h2 className="text-xl font-semibold mb-4">
          Share this Job on Social Network
        </h2>
        <div className="flex gap-1 text-blue-500">
          <button className="flex items-center gap-1 border border-gray-300 px-2 py-2 rounded-lg hover:bg-gray-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path d="M22.23 0H1.77A1.77 1.77 0 000 1.77v20.46A1.77 1.77 0 001.77 24h20.46A1.77 1.77 0 0024 22.23V1.77A1.77 1.77 0 0022.23 0zM7.12 20.46H3.56V9h3.56v11.46zM5.34 7.51a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM20.46 20.46h-3.56v-5.62c0-1.34-.03-3.07-1.88-3.07-1.88 0-2.17 1.47-2.17 2.99v5.7H9.3V9h3.42v1.56h.05a3.75 3.75 0 013.38-1.86c3.62 0 4.29 2.38 4.29 5.47v6.29z" />
            </svg>
            LinkedIn
          </button>
          <button className="flex items-center gap-1 border border-gray-300 px-2 py-2 rounded-lg hover:bg-gray-100">
            <svg
              className="w-5 h-5 text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1a10.66 10.66 0 01-8-4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
            </svg>
            Twitter
          </button>
          <button className="flex items-center gap-1 border border-gray-300 px-2 py-2 rounded-lg hover:bg-gray-100">
            <svg
              className="w-5 h-5 text-blue-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M22.675 0h-21.35c-.733 0-1.325.593-1.325 1.326v21.349c0 .732.592 1.325 1.325 1.325h11.494v-9.294h-3.123v-3.622h3.123v-2.672c0-3.1 1.893-4.788 4.658-4.788 1.325 0 2.464.099 2.794.144v3.24l-1.918.001c-1.504 0-1.795.714-1.795 1.763v2.312h3.587l-.467 3.621h-3.12v9.293h6.116c.732 0 1.325-.593 1.325-1.325v-21.349c0-.733-.593-1.326-1.326-1.326z" />
            </svg>
            Facebook
          </button>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-xl font-semibold mb-4">
          Get API Link to Job Boards
        </h2>
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={jobBoardsLink}
            readOnly
            className="flex-grow border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            className="border border-gray-300 px-4 rounded-lg py-2 hover:bg-gray-100"
            onClick={() => {
              navigator.clipboard.writeText(jobBoardsLink);
              alert("Copied to clipboard");
            }}
          >
            Copy
          </button>
        </div>
      </div>

      <div className="text-left">
        <button
          className="  px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-white"
          onClick={() => window.location.reload()}
        >
          Done. Take me to the job.
        </button>
      </div>
    </div>
  );
};

export default CreateJobGoLive;
