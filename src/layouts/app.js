import React from "react";
import css from "../modules/ui.module.css";

const { default: Navbar } = require("../components/en-US/navbar");
const { default: SubChat } = require("../components/en-US/sub-chat");

const LayoutApp = ({ children }) => {
  return (
    <main
      className={`${css.app} flex flex-col lg:flex-row w-full lg:w-auto h-auto lg:h-screen p-0 lg:p-8 mt-0`}
    >
      <Navbar />
      <div className="lg:bg-black/5 backdrop-blur-lg flex flex-col lg:flex-row w-full h-full rounded-none lg:rounded-r-lg border-r border-y border-r-black/10 border-y-black/10 p-0 mt-0">
        {React.Children.map(children, (child) => child)}
        <SubChat />
      </div>
    </main>
  );
};

export default LayoutApp;
