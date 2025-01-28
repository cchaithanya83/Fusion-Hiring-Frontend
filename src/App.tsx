import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreateJobMain from "./pages/CreateJobMain.tsx";
import ManageJobCard from "./components/ManageJobCard.tsx";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CreateJobMain />} />
        <Route path="Managejobs" element={<ManageJobCard />} />
      </Routes>
    </Router>
  );
};

export default App;
