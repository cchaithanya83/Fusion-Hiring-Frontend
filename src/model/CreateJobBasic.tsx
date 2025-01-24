import { useState } from "react";
import ExperienceSlider from "../utils/TwoPointSlider";
import SkillsInput from "../utils/CreateJobBasicExperienceSkillInputs";
import TwoPointSlider from "../utils/TwoPointSlider";

const CreateJobBasic = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [skills, setSkills] = useState([]);
  const [skillInput, setSkillInput] = useState("");
  const [values, setValues] = useState([3, 7]);
  const [locations, setLocations] = useState([
    { jobLocation: "", positions: "", vendor: "", client: "" },
  ]);
  const [description, setDescription] = useState("");

  const deleteLocation = (index: number) => {
    setLocations(locations.filter((_, i) => i !== index));
  };

  const addLocation = () => {
    setLocations([
      ...locations,
      { jobLocation: "", positions: "", vendor: "", client: "" },
    ]);
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6 rounded-lg">
      <div className="space-y-6">
        {/* Job Title */}
        <div>
          <label className="block text-gray-700 font-medium">Job Title</label>
          <input
            type="text"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
        </div>

        {/* Skills Section */}
        <SkillsInput
          skills={skills}
          setSkills={setSkills}
          skillInput={skillInput}
          setSkillInput={setSkillInput}
        />

        {/* Experience Range */}
        <TwoPointSlider  name={"Experience Range"} upperValue={20} values={values} setValues={setValues} />

        {/* Locations */}
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium text-gray-700">Location</h3>
          <button
            type="button"
            onClick={addLocation}
            className="text-sm text-blue-500 hover:underline"
          >
            + Add Location
          </button>
        </div>

        {locations.map((location, index) => (
          <div
            key={index}
            className="border p-4 rounded-md space-y-4 mb-4 relative"
          >
            {/* Delete Button for cards except the first */}
            {index > 0 && (
              <button
                type="button"
                onClick={() => deleteLocation(index)}
                className="absolute top-4 right-4 text-red-500 text-sm hover:underline"
              >
                Delete
              </button>
            )}

            <div className="grid grid-cols-2 gap-4">
              {/* Job Location */}
              <div>
                <label className="block text-gray-700 font-medium">
                  Job Location
                </label>
                <input
                  type="text"
                  value={location.jobLocation}
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
              </div>

              {/* Number of Positions */}
              <div>
                <label className="block text-gray-700 font-medium">
                  Number of Positions
                </label>
                <input
                  type="number"
                  value={location.positions}
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {/* Add Vendor */}
              <div>
                <label className="block text-gray-700 font-medium">
                  Add Vendor
                </label>
                <input
                  type="text"
                  value={location.vendor}
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
              </div>

              {/* Add Client */}
              <div>
                <label className="block text-gray-700 font-medium">
                  Add Client
                </label>
                <input
                  type="text"
                  value={location.client}
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
              </div>
            </div>
          </div>
        ))}

        {/* Employment Type */}
        <div>
          <label className="block text-gray-700 font-medium">
            Employment Type
          </label>
          <div className="flex items-center space-x-4 mt-2">
            {["Full Time", "Part Time", "Contractor / Consultant"].map(
              (type) => (
                <label key={type} className="flex items-center space-x-2">
                  <input type="radio" name="employment" value={type} />
                  <span>{type}</span>
                </label>
              )
            )}
          </div>
        </div>

        {/* Job Description */}
        <div>
          <label className="block text-gray-700 font-medium">
            Job Description
          </label>
          <textarea
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
          ></textarea>
        </div>

        {/* Job Requisition ID */}
        <div>
          <label className="block text-gray-700 font-medium">
            Requisition ID
          </label>
          <textarea
            rows={1}
            className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default CreateJobBasic;
