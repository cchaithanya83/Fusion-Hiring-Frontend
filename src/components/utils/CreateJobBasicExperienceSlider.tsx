// Experience Slider Component

import { Range } from "react-range";


const ExperienceSlider = ({ values, setValues }: any) => {
  const STEP = 1;
  const MIN = 0;
  const MAX = 50;

  return (
    <div>
      <label className="block text-gray-700 font-medium mb-4">
        Experience Range: {values[0]} - {values[1]} years
      </label>
      <Range
        values={values}
        step={STEP}
        min={MIN}
        max={MAX}
        onChange={(values) => setValues(values)}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "8px",
              background: `linear-gradient(
                to right,
                #d1d5db ${((values[0] - MIN) / (MAX - MIN)) * 100}%,
                #3b82f6 ${((values[0] - MIN) / (MAX - MIN)) * 100}%,
                #3b82f6 ${((values[1] - MIN) / (MAX - MIN)) * 100}%,
                #d1d5db ${((values[1] - MIN) / (MAX - MIN)) * 100}%
              )`,
              borderRadius: "4px",
            }}
          >
            {children}
          </div>
        )}
        renderThumb={({ props, index }) => (
          <div
            {...props}
            className="w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow-md"
            style={{ ...props.style }}
          >
            <div className="text-xs absolute top-6 -left-2 text-gray-700">
              {values[index]}
            </div>
          </div>
        )}
      />
      <div className="flex justify-between text-sm text-gray-500 mt-2">
        <span>{MIN}</span>
        <span>{MAX}</span>
      </div>
    </div>
  );
};

export default ExperienceSlider;