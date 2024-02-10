import React from "react";
import css from "../../module/ui.module.css";

const {
  default: Username,
} = require("../../shared/icons/user-profile-03-black.svg");
const {
  default: Password,
} = require("../../shared/icons/lock-open-02-black.svg");

const SignIn = () => {
  return (
    <main
      className={`${css.auth} flex flex-col lg:flex-row w-full h-auto lg:h-screen items-center justify-center p-8 lg:p-0`}
    >
      <div className="bg-transparent lg:bg-black/5 flex flex-col w-full lg:w-[20%] h-auto lg:h-[75%] p-0 lg:p-8 ring-0 lg:ring-1 lg:ring-black/10 rounded-none lg:rounded-l-lg">
        <h1 className="text-blue-600 font-bold text-lg tracking-tight leading-relaxed mt-0">
          Reactive: Revolutionizing Social Networking
        </h1>
        <h2 className="text-black/80 font-medium text-sm tracking-tight leading-relaxed mt-4">
          In a world where connectivity is paramount, Reactive stands out as a
          revolutionary platform that combines cutting-edge technology with
          intuitive design to create a vibrant and engaging social ecosystem.
        </h2>
      </div>
      <div className="bg-white flex flex-col w-full lg:w-[20%] h-auto lg:h-[75%] p-0 lg:p-8 ring-0 lg:ring-1 lg:ring-black/10 rounded-none lg:rounded-r-lg">
        <form>
          <h1 className="text-black font-bold text-lg tracking-tight leading-relaxed mt-0">
            Sign In to Reactive
          </h1>
          <div className="bg-black/5 transition-all flex flex-row gap-4 w-full items-center p-4 rounded-lg ring-1 ring-black/10 hover:ring-black/20 mt-4">
            <img src={Username} width="16" height="16" alt="Username" />
            <input
              className="bg-transparent outline-none w-full text-black/80 font-medium text-sm tracking-tight"
              type="text"
              placeholder="Username"
            />
          </div>
          <div className="bg-black/5 transition-all flex flex-row gap-4 w-full items-center p-4 rounded-lg ring-1 ring-black/10 hover:ring-black/20 mt-4">
            <img src={Password} width="16" height="16" alt="Password" />
            <input
              className="bg-transparent outline-none w-full text-black/80 font-medium text-sm tracking-tight"
              type="password"
              placeholder="Password"
            />
          </div>
          <button className="bg-black/95 transition-all flex flex-row gap-4 w-full items-center justify-center p-4 rounded-lg ring-1 ring-black/10 hover:ring-black/20 mt-4">
            <img src={Password} width="16" height="16" alt="Password" />
            <h2 className="text-white font-medium text-sm tracking-tight leading-relaxed mt-0">
              Authenticate to Reactive
            </h2>
          </button>
        </form>
      </div>
    </main>
  );
};

export default SignIn;
