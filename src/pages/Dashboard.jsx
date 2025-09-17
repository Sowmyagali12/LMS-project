import React from "react";
import { Routes, Route } from "react-router-dom";

import WeeklyProgress from "./dashboard/WeeklyProgress";
import Assignments from "./dashboard/Assignments";
import Placement from "./dashboard/Placement";
import Updates from "./dashboard/Updates";
import Courses from "./dashboard/Courses";

const Dashboard = () => {
  return (
    <div>
      <Routes>
        <Route path="weekly-progress" element={<WeeklyProgress />} />
        <Route path="assignments" element={<Assignments />} />
        <Route path="placement" element={<Placement />} />
        <Route path="updates" element={<Updates />} />
        <Route path="courses" element={<Courses />} />
      </Routes>
    </div>
  );
};

export default Dashboard;
