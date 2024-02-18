import React from "react";
import css from "../modules/ui.module.css";

const { default: Navbar } = require("../components/en-US/navbar");
const {
  default: MessageWidget,
} = require("../components/en-US/message-widget");

const LayoutApp = ({ children }) => {
  return (
    <main
      className={`${css.app} flex col lg:flex-row w-full lg:w-auto h-auto lg:h-screen p-0 lg:p-8 mt-0`}
    >
      <Navbar />
      <div className="bg-transparent backdrop-blur-lg flex flex-col lg:flex-row w-full h-full p-0 mt-0">
        <MessageWidget />
        {React.Children.map(children, (child) => child)}
      </div>
    </main>
  );
};

export default LayoutApp;
