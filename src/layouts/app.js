import React from "react";
import MessageWidget from "../components/en-US/message-widget";

const { default: Navbar } = require("../components/en-US/navbar");

const LayoutApp = ({ children }) => {
  return (
    <main className="bg-black/60 flex flex-col w-full h-auto lg:h-screen p-0 lg:p-8 mt-0">
      <Navbar />
      <div className="bg-white/100 flex flex-col lg:flex-row w-full h-full rounded-none lg:rounded-b-lg p-0 mt-0">
        <MessageWidget />
        {React.Children.map(children, (child) => child)}
      </div>
    </main>
  );
};

export default LayoutApp;
