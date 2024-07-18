// import React from 'react'

import SignUp from "./Componentes/SignUp";
import Courses from "./courses/courses";
import Home from "./Home/Home";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Courses />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
