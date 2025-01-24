// Skills Input Component
const SkillsInput = ({ skills, setSkills, skillInput, setSkillInput }: any) => {
  const allSkills = [
    "JavaScript",
    "React",
    "TypeScript",
    "Node.js",
    "TailwindCSS",
  ];

  const addSkill = (skill: string) => {
    if (skill.trim() && !skills.includes(skill)) {
      setSkills([...skills, skill]);
    }
    setSkillInput("");
  };

  const removeSkill = (skill: string) => {
    setSkills(skills.filter((s: string) => s !== skill));
  };

  const handleSkillInputKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && skillInput.trim()) {
      addSkill(skillInput);
    }
  };

  return (
    <div>
      <label className="block text-gray-700 font-medium">
        Mandatory Skills
      </label>
      <div className="relative mt-1">
        <input
          type="text"
          value={skillInput}
          onChange={(e) => setSkillInput(e.target.value)}
          onKeyPress={handleSkillInputKeyPress}
          placeholder="Type a skill and press Enter..."
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

      <div className="flex flex-wrap gap-2 mt-2">
        {skills.map((skill: string) => (
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
  );
};

export default SkillsInput;
