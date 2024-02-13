import React from "react";

const { default: Navbar } = require("../components/navbar");

const LayoutApp = () => {
  return (
    <main className="flex flex-col w-full h-auto lg:h-screen p-0 mt-0">
      <Navbar />
      <React.Children />
    </main>
  );
};

export default LayoutApp;
