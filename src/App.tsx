import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreateJobMain from "./pages/CreateJob.tsx";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CreateJobMain />} />
      </Routes>
    </Router>
  );
};

export default App;
