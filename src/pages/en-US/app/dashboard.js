import React from "react";

const { default: LayoutApp } = require("../../../layouts/app");

const Dashboard = () => {
  return (
    <LayoutApp>
      <div className="bg-transparent flex flex-col w-full h-auto lg:h-full gap-0 p-4 border-y border-r border-y-black/10 border-r-black/10 rounded-r-lg">
        <p className="text-black font-bold text-base text-start tracking-tight leading-relaxed mt-0">
          Chats
        </p>
        <div className="flex flex-col w-full h-auto gap-2 mt-4">
          <div className="bg-black/5 flex flex-col w-full h-auto p-4 rounded-lg">
            <p className="text-black font-medium text-xs text-start tracking-tight leading-relaxed mt-0">
              Person 1
            </p>
          </div>
          <div className="bg-black/5 flex flex-col w-full h-auto p-4 rounded-lg">
            <p className="text-black font-medium text-xs text-start tracking-tight leading-relaxed mt-0">
              Person 2
            </p>
          </div>
        </div>
      </div>
    </LayoutApp>
  );
};

export default Dashboard;
