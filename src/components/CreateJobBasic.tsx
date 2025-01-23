import React, { useState } from "react";

const CreateJobBasic = () => {
  const [skills, setSkills] = useState<string[]>([]); // Selected skills
  const [skillInput, setSkillInput] = useState(""); // Current input
  const allSkills = [
    "JavaScript",
    "React",
    "TypeScript",
    "Node.js",
    "TailwindCSS",
  ];

  const addSkill = (skill: string) => {
    if (!skills.includes(skill)) {
      setSkills([...skills, skill]);
    }
    setSkillInput("");
  };

  const removeSkill = (skill: string) => {
    setSkills(skills.filter((s) => s !== skill));
  };


  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100 rounded-lg shadow">
   

      <h1 className="text-2xl font-bold mb-6 mt-3">Create Job</h1>

      <div className="space-y-6">
        {/* Job Title */}
        <div>
          <label className="block text-gray-700 font-medium">Job Title</label>
          <input
            type="text"
            className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
        </div>

        {/* Mandatory Skills */}
        <div>
          <label className="block text-gray-700 font-medium">
            Mandatory Skills
          </label>
          <div className="relative mt-1">
            <input
              type="text"
              value={skillInput}
              onChange={(e) => setSkillInput(e.target.value)}
              placeholder="Type to search..."
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            {skillInput && (
              <ul className="absolute left-0 w-full bg-white border rounded-md mt-1 max-h-40 overflow-auto shadow">
                {allSkills
                  .filter(
                    (skill) =>
                      skill.toLowerCase().includes(skillInput.toLowerCase()) &&
                      !skills.includes(skill)
                  )
                  .map((skill) => (
                    <li
                      key={skill}
                      className="p-2 cursor-pointer hover:bg-gray-200"
                      onClick={() => addSkill(skill)}
                    >
                      {skill}
                    </li>
                  ))}
              </ul>
            )}
          </div>
          {/* Display selected skills */}
          <div className="flex flex-wrap gap-2 mt-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="flex items-center bg-gray-200 px-3 py-1 rounded-md text-sm font-medium text-gray-700"
              >
                {skill}
                <button
                  className="ml-2 text-red-500 hover:text-red-700"
                  onClick={() => removeSkill(skill)}
                >
                  ✕
                </button>
              </span>
            ))}
          </div>
        </div>

        {/* Experience Range */}
        <div>
          <label className="block text-gray-700 font-medium">
            Experience Range
          </label>
          <div className="flex items-center space-x-4">
            <span>0</span>
            <input type="range" min="0" max="50" step="1" className="w-full" />
            <span>50</span>
          </div>
        </div>

        {/* Location */}
        <div>
          <label className="block text-gray-700 font-medium">Location</label>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Job Location"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            <input
              type="number"
              placeholder="Number of Positions"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            <input
              type="text"
              placeholder="Add Vendor"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            <input
              type="text"
              placeholder="Add Client"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
          </div>
        </div>

        {/* Employment Type */}
        <div>
          <label className="block text-gray-700 font-medium">
            Employment Type
          </label>
          <div className="flex items-center space-x-4 mt-2">
            <label className="flex items-center space-x-2">
              <input type="radio" name="employment" />
              <span>Full Time</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="radio" name="employment" />
              <span>Part Time</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="radio" name="employment" />
              <span>Contractor / Consultant</span>
            </label>
          </div>
        </div>

        {/* Job Description */}
        <div>
          <label className="block text-gray-700 font-medium">
            Job Description
          </label>
          <textarea
            rows={3}
            className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
          ></textarea>
        </div>

        {/* Job Requisition ID */}
        <div>
          <label className="block text-gray-700 font-medium">
            Job Requisition ID
          </label>
          <input
            type="text"
            className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
        </div>

       
      </div>
    </div>
  );
};

export default CreateJobBasic;
