import React from "react";
import css from "../../module/ui.module.css";

const {
  default: ArrowLeft,
} = require("../../shared/icons/arrow-left-sm-white.svg");
const {
  default: Username,
} = require("../../shared/icons/user-profile-03-black.svg");
const {
  default: Password,
} = require("../../shared/icons/lock-open-02-black.svg");
const {
  default: Authenticate,
} = require("../../shared/icons/logout-02-white.svg");

const CreateAccount = () => {
  return (
    <main
      className={`${css.auth} flex flex-col lg:flex-row w-full h-auto lg:h-screen items-center justify-center p-8 lg:p-0`}
    >
      <div className="bg-transparent lg:bg-black/5 backdrop-blur-lg flex flex-col w-full lg:w-[360px] h-auto lg:h-[560px] p-0 lg:p-8 ring-0 lg:ring-1 lg:ring-black/10 rounded-none lg:rounded-l-lg">
        <h1 className="text-blue-600 font-bold text-lg tracking-tight leading-relaxed mt-0">
          Reactive: Revolutionizing Social Networking
        </h1>
        <h2 className="text-black/80 font-medium text-xs tracking-tight leading-relaxed mt-4">
          In a world where connectivity is paramount, Reactive stands out as a
          revolutionary platform that combines cutting-edge technology with
          intuitive design to create a vibrant and engaging social ecosystem.
        </h2>
      </div>
      <div className="bg-white flex flex-col items-start justify-between w-full lg:w-[360px] h-auto lg:h-[560px] p-0 lg:p-8 ring-0 lg:ring-1 lg:ring-black/10 rounded-none lg:rounded-r-lg mt-8 lg:mt-0">
        <div className="flex flex-row gap-4 items-center justify-start w-full">
          <a href="/" className="bg-black/95 hover:bg-black/75 transition-all p-2 rounded-full">
            <img src={ArrowLeft} width="20" height="20" alt="ArrowLeft" />
          </a>
          <p className="text-black font-bold text-lg tracking-tight leading-relaxed mt-0">
            Reactive Account Creation
          </p>
        </div>
        <form className="flex flex-col w-full">
          <div className="bg-black/5 transition-all flex flex-row gap-4 w-full items-center p-4 rounded-lg ring-1 ring-black/10 hover:ring-black/20 mt-4">
            <img src={Username} width="14" height="14" alt="Username" />
            <input
              className="bg-transparent outline-none w-full text-black/80 font-medium text-xs tracking-tight"
              type="text"
              placeholder="Your Name"
            />
          </div>
          <div className="bg-black/5 transition-all flex flex-row gap-4 w-full items-center p-4 rounded-lg ring-1 ring-black/10 hover:ring-black/20 mt-4">
            <img src={Username} width="14" height="14" alt="Username" />
            <input
              className="bg-transparent outline-none w-full text-black/80 font-medium text-xs tracking-tight"
              type="text"
              placeholder="Username"
            />
          </div>
          <div className="bg-black/5 transition-all flex flex-row gap-4 w-full items-center p-4 rounded-lg ring-1 ring-black/10 hover:ring-black/20 mt-4">
            <img src={Password} width="14" height="14" alt="Password" />
            <input
              className="bg-transparent outline-none w-full text-black/80 font-medium text-xs tracking-tight"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="bg-black/5 transition-all flex flex-row gap-4 w-full items-center p-4 rounded-lg ring-1 ring-black/10 hover:ring-black/20 mt-4">
            <img src={Password} width="14" height="14" alt="ConfirmPassword" />
            <input
              className="bg-transparent outline-none w-full text-black/80 font-medium text-xs tracking-tight"
              type="password"
              placeholder="Confirm Password"
            />
          </div>
          <button className="bg-black/95 hover:bg-black/75 transition-all flex flex-row gap-4 w-full items-center justify-center p-4 rounded-lg ring-1 ring-black/10 hover:ring-black/20 mt-4">
            <img src={Authenticate} width="14" height="14" alt="Create" />
            <h2 className="text-white font-bold text-xs tracking-tight leading-relaxed mt-0">
              Create Reactive Account
            </h2>
          </button>
        </form>
        <p className="text-black font-medium text-xs tracking-tight leading-relaxed mt-4 lg:mt-0">
          By creating an account, you agree to our{" "}
          <span className="font-bold text-blue-600 hover:underline">
            Terms of Service
          </span>{" "}
          and{" "}
          <span className="font-bold text-blue-600 hover:underline">
            Privacy Policy
          </span>
          .
        </p>
      </div>
    </main>
  );
};

export default CreateAccount;
