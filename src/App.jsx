import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RunningMan from "./components/RunningMan";
import Lp from "./components/lp";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RunningMan />} />
        <Route path="/lp" element={<Lp />} />
      </Routes>
    </Router>
  );
}

export default App;
