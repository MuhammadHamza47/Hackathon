import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashbord from "./Dashboard/Dashbord";
import Student from "./Student/Student";
import Courses from "./Cources/Courses";
import Attendance from "./Attendance/Attendance";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" >
          <Route index element={<Dashbord />} />
          <Route path="/student" element={<Student/>} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/attendance" element={<Attendance />} />
        </Route>
      </Routes>
    </>
  );
};

export default Routing;
