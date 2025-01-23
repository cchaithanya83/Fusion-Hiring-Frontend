import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreateJob from "./pages/createJob";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CreateJob />} />
      </Routes>
    </Router>
  );
};

export default App;
