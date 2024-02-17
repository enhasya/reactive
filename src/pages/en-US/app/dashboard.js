import React from "react";

const { default: LayoutApp } = require("../../../layouts/app");

const Dashboard = () => {
  return (
    <LayoutApp>
      <div className="bg-transparent flex flex-col lg:flex-row w-full h-full border-y border-r border-y-slate-600/10 border-r-slate-600/10 rounded-none lg:rounded-r-lg p-0 mt-0">
        <div className="flex flex-col w-full h-auto lg:h-full p-4">
          <p className="text-black font-medium text-xs text-start tracking-tight leading-relaxed mt-0">
            This is the dashboard page for the app
          </p>
        </div>
      </div>
    </LayoutApp>
  );
};

export default Dashboard;
