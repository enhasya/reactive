import React from "react";
import css from "../modules/ui.module.css";

const { default: Reactive } = require("../components/reactive");

const LayoutAuth = ({ children }) => {
  return (
    <main
      className={`${css.auth} flex flex-col lg:flex-row w-full h-auto lg:h-screen items-center justify-center p-8 lg:p-0`}
    >
      <Reactive />
      <div className="bg-white flex flex-col items-start justify-between w-full lg:w-[360px] h-auto lg:h-[560px] p-0 lg:p-8 ring-0 lg:ring-1 lg:ring-black/10 rounded-none lg:rounded-r-lg mt-8 lg:mt-0">
        {React.Children.map(children, (child) => child)}
      </div>
    </main>
  );
};

export default LayoutAuth;
