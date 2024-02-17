import React from "react";

const { default: LayoutApp } = require("../../../layouts/app");

const Dashboard = () => {
  return (
    <LayoutApp>
      <div className="bg-transparent flex flex-col lg:flex-row w-full h-full p-0 mt-0">
        <div className="flex flex-col w-full lg:w-[20%] h-auto lg:h-full p-4">
          <p className="text-black font-medium text-xs text-start tracking-tight leading-relaxed mt-0">
            This is the dashboard page for the app
          </p>
        </div>
      </div>
    </LayoutApp>
  );
};

export default Dashboard;
