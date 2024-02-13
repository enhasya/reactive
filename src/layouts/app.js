import React from "react";

const { default: Navbar } = require("../components/en-US/navbar");
const {
  default: MessageWidget,
} = require("../components/en-US/message-widget");

const LayoutApp = ({ children }) => {
  return (
    <main className="flex flex-col w-full h-auto lg:h-screen p-0 mt-0">
      <Navbar />
      <div className="flex flex-col lg:flex-row w-full h-full p-0">
        <div className="bg-black/5 flex flex-col w-full lg:w-[80%] h-full p-8 lg:p-4">
          {React.Children.map(children, (child) => child)}
        </div>
        <div className="bg-white flex flex-col w-full lg:w-[20%] h-full p-8 lg:p-4">
          <MessageWidget />
        </div>
      </div>
    </main>
  );
};

export default LayoutApp;
