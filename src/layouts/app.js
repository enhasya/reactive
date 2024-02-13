import React from "react";

const { default: Navbar } = require("../components/en-US/navbar");

const LayoutApp = ({ children }) => {
  return (
    <main className="flex flex-col w-full h-auto lg:h-screen p-0 mt-0">
      <Navbar />
      <div className="bg-black/5 flex w-full h-full p-8 lg:p-4">
        {React.Children.map(children, (child) => child)}
      </div>
    </main>
  );
};

export default LayoutApp;
