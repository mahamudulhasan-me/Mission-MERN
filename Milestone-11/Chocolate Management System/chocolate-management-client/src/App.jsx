import React from "react";
import { Outlet } from "react-router-dom";
const App = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="bg-white w-4/5 mx-auto ">
        <div className="pt-10">
          <div className="bg-[#955A2C] w-2/5 mx-auto py-2 rounded-md">
            <h2 className="text-2xl font-semibold  text-center  text-white ">
              Chocolate management system
            </h2>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default App;
