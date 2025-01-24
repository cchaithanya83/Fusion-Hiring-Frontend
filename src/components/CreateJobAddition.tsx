import { useState } from "react";
import TwoPointSlider from "../utils/TwoPointSlider";

function CreateJobAddition() {
  const [NoticePeriod, setNoticePeriod] = useState("");
  const [values, setValues] = useState([3, 7]);
  const [addTags, setAddTags] = useState("");
  const [age, setAge] = useState<number | undefined>(undefined);
  const [gender, setGender] = useState<string>("");
  console.log(NoticePeriod, values, addTags, age, gender);
  return (
    <div className="w-full max-w-4xl mx-auto p-6 rounded-lg">
      <div className="space-y-6">
        {/* Notice period */}
        <div>
          <label className="block text-gray-700 font-medium">
            Notice Period
          </label>
          <input
            type="text"
            value={NoticePeriod}
            onChange={(e) => setNoticePeriod(e.target.value)}
            className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
        </div>

        {/* Salary Range */}
        <TwoPointSlider
          name={"Salary Range(LPA)"}
          upperValue={100}
          values={values}
          setValues={setValues}
        />

        {/* exception company */}
        <div>
          <label className="block text-gray-700 font-medium">
            Dont Consider Profiles from below Companies
          </label>
          <input
            type="text"
            value={NoticePeriod}
            onChange={(e) => setNoticePeriod(e.target.value)}
            placeholder="Type Companies here"
            className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
        </div>

        {/* Additional */}
        <div>
          <div className="   rounded-md mt-5">
            <h2 className="font-medium  mb-4">Additional</h2>
            <div className="grid grid-cols-2 gap-4 border border-gray-200 p-4">
              {/* Add Tags */}
              <div>
                <label
                  htmlFor="tags"
                  className="block text-sm font-medium text-gray-700"
                >
                  Add Tags
                </label>
                <input
                  type="text"
                  id="tags"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  onChange={(e) => setAddTags(e.target.value)}
                />
              </div>

              {/* Age */}
              <div>
                <label
                  htmlFor="age"
                  className="block text-sm font-medium text-gray-700"
                >
                  Age
                </label>
                <input
                  type="number"
                  id="age"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  onChange={(e) => setAge(Number(e.target.value))}
                />
              </div>

              {/* Gender */}
              <div>
                <span className="block text-sm font-medium text-gray-700">
                  Gender
                </span>
                <div className="mt-2 flex items-center space-x-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="gender"
                      value="male"
                      className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                      onChange={(e) => setGender(e.target.value)}
                    />
                    <span className="ml-2 text-sm text-gray-700">Male</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="gender"
                      value="female"
                      className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                      onChange={(e) => setGender(e.target.value)}
                    />
                    <span className="ml-2 text-sm text-gray-700">Female</span>
                  </label>
                </div>
              </div>

              {/* Field 1 */}
              <div>
                <label
                  htmlFor="field1"
                  className="block text-sm font-medium text-gray-700"
                >
                  Field 1
                </label>
                <input
                  type="text"
                  id="field1"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>

              {/* Field 1 Additional */}
              <div>
                <label
                  htmlFor="field2"
                  className="block text-sm font-medium text-gray-700"
                >
                  Field 2
                </label>
                <input
                  type="text"
                  id="field2"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>

              {/* Checkbox Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Field 1
                </label>
                <div className="mt-2 space-y-2">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                    />
                    <span className="ml-2 text-sm text-gray-700">Field 1</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                    />
                    <span className="ml-2 text-sm text-gray-700">Field 2</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CreateJobAddition;
