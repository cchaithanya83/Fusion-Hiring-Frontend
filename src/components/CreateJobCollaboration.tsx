import React, { useState } from "react";
import PersonLogo from "../utils/SvgLogo";
const CreateJobCollaboration: React.FC = () => {
  const [teamMembers, setTeamMembers] = useState<
    { name: string; role: string }[]
  >([]);
  const [jobBoards, setJobBoards] = useState<string[]>([]);
  const [newMember, setNewMember] = useState({ name: "", role: "" });

  const handleAddToTeam = () => {
    if (newMember.name && newMember.role) {
      setTeamMembers([...teamMembers, newMember]);
      setNewMember({ name: "", role: "" });
    }
  };

  const handleRemoveMember = (index: number) => {
    const updatedTeam = [...teamMembers];
    updatedTeam.splice(index, 1);
    setTeamMembers(updatedTeam);
  };

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const availableJobBoards = [
    "LinkedIn",
    "Naukri",
    "Quicker Jobs",
    "Times Jobs",
    "Indeed",
  ];

  const [approvers, setApprovers] = useState<{ name: string; role: string }[]>(
    []
  );
  const [newApprover, setNewApprover] = useState({ name: "", role: "" });

  // Add a new approver to the list
  const addApproverToList = () => {
    if (newApprover.name && newApprover.role) {
      setApprovers([...approvers, newApprover]);
      setNewApprover({ name: "", role: "" });
    }
  };

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const handleJobBoardSelection = (board: string) => {
    if (jobBoards.includes(board)) {
      setJobBoards(jobBoards.filter((b) => b !== board));
    } else {
      setJobBoards([...jobBoards, board]);
    }
  };

  return (
    <div className="p-6  rounded-md space-y-8 max-w-4xl mx-auto">
      {/* My Team Section */}
      <div className="flex items-center space-x-4">
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700">
            My Team
          </label>
          <select className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500">
            <option>Select Team</option>
          </select>
        </div>
        <button className="px-4 mt-5 py-2 bg-gray-300 text-sm font-medium rounded-md">
          Create Team
        </button>
      </div>

      {/* Add Team Member Section */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Name or Email
        </label>
        <div className="flex items-center space-x-4 mt-2">
          <input
            type="text"
            value={newMember.name}
            onChange={(e) =>
              setNewMember({ ...newMember, name: e.target.value })
            }
            placeholder="Enter name or email"
            className="w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
          <select
            value={newMember.role}
            onChange={(e) =>
              setNewMember({ ...newMember, role: e.target.value })
            }
            className="border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="">Select Hiring Role</option>
            <option value="Recruiter">Recruiter</option>
            <option value="Hiring Manager">Hiring Manager</option>
          </select>
          <button
            onClick={handleAddToTeam}
            className="px-4 py-2   bg-[#555085] hover:bg-[#555080] w-full text-white text-sm rounded-md"
          >
            Add to Team
          </button>
        </div>
        {/* Team Members */}
        <div className="space-y-2 mt-4">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="flex   p-3 bg-gray-50 border rounded-md"
            >
              <PersonLogo />
              <span className="w-full ml-10">{member.name}</span>
              <div className="flex w-full items-center space-x-8">
                <span className="w-full">{member.role}</span>
                <button
                  onClick={() => handleRemoveMember(index)}
                  className="text-red-500 pl-6"
                >
                  X
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Job Boards Section */}
      <div className="relative">
        <label className="block text-sm font-medium text-gray-700">
          Job Boards
        </label>

        <div
          className="mt-2 relative cursor-pointer w-fit border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          onClick={toggleDropdown}
        >
          <div className="flex items-center px-4 py-2">
            {jobBoards.length > 0 ? jobBoards.join(", ") : "Select Job Boards"}
            <svg
              className="w-2.5 h-2.5 ms-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </div>
        </div>

        {dropdownOpen && (
          <div className="absolute z-10 bg-white border border-gray-300 rounded-md mt-1 max-w-full shadow-lg">
            {availableJobBoards.map((board) => (
              <label
                key={board}
                className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={jobBoards.includes(board)}
                  onChange={() => handleJobBoardSelection(board)}
                />
                {board}
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Approvers Section */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Add Approver</h3>
        <div className="grid grid-cols-3 gap-4">
          <input
            type="text"
            className="col-span-1 px-4  border rounded-md"
            placeholder="Name or Email"
            value={newApprover.name}
            onChange={(e) =>
              setNewApprover({ ...newApprover, name: e.target.value })
            }
          />
          <select
            className="col-span-1 px-4  border rounded-md"
            value={newApprover.role}
            onChange={(e) =>
              setNewApprover({ ...newApprover, role: e.target.value })
            }
          >
            <option value="">Approver</option>
            <option value="Manager">Manager</option>
            <option value="Director">Director</option>
          </select>
          <button
            onClick={addApproverToList}
            className="col-span-1 px-4  bg-[#555085] text-white rounded-md"
          >
            Add to Team
          </button>
        </div>

        {/* Display Approvers List */}
        {approvers.map((approver, index) => (
          <div
            key={index}
            className="flex items-center justify-between px-4 py-2 bg-gray-100 rounded-md"
          >
            <PersonLogo />
            <div className="text-sm font-medium text-gray-800  w-full ml-7">
              {approver.name}
            </div>
            <div className="text-xs text-gray-500 w-full border-2 border-gray-300 p-3">
              {approver.role}
            </div>

            <button
              onClick={() =>
                setApprovers(approvers.filter((_, i) => i !== index))
              }
              className="text-red-500 pl-6"
            >
              X
            </button>
          </div>
        ))}
      </div>
      {/* Job Start and End Dates */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Job Start Date
          </label>
          <input
            type="date"
            className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Job Post End Date
          </label>
          <input
            type="date"
            className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
      </div>
    </div>
  );
};

export default CreateJobCollaboration;
