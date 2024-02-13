import React from "react";

const { default: LayoutAuth } = require("../../layouts/auth");
const {
  default: ArrowLeft,
} = require("../../shared/icons/arrow-left-sm-white.svg");
const {
  default: YourName,
} = require("../../shared/icons/user-profile-03-black.svg");
const {
  default: BirthDate,
} = require("../../shared/icons/calendar-02-black.svg");
const {
  default: Create,
} = require("../../shared/icons/arrow-right-sm-white.svg");

const AccountConfirmation = () => {
  return (
    <LayoutAuth>
      <div className="flex flex-row gap-4 items-center justify-start w-full">
        <a
          href="/auth/create-account"
          className="bg-black/95 hover:bg-black/75 transition-all p-2 rounded-full"
        >
          <img src={ArrowLeft} width="20" height="20" alt="ArrowLeft" />
        </a>
        <p className="text-black font-bold text-lg tracking-tight leading-relaxed mt-0">
          Create Account
        </p>
      </div>
      <form className="flex flex-col w-full">
        <div className="bg-black/5 transition-all flex flex-row gap-4 w-full items-center p-4 rounded-lg ring-1 ring-black/10 hover:ring-black/20 mt-4">
          <img src={YourName} width="14" height="14" alt="Your Name" />
          <input
            className="bg-transparent outline-none w-full text-black/80 font-medium text-xs tracking-tight"
            type="text"
            placeholder="Your Name"
          />
        </div>
        <div className="bg-black/5 transition-all flex flex-row gap-4 w-full items-center p-4 rounded-lg ring-1 ring-black/10 hover:ring-black/20 mt-4">
          <img src={BirthDate} width="14" height="14" alt="Your Name" />
          <input
            className="bg-transparent outline-none w-full text-black/80 font-medium text-xs tracking-tight"
            type="date"
            placeholder="Birth Date"
          />
        </div>
        <a
          href="/auth/activation"
          className="bg-black/95 hover:bg-black/75 transition-all flex flex-row gap-4 w-full items-center justify-center p-4 rounded-lg ring-1 ring-black/10 hover:ring-black/20 mt-4"
        >
          <p className="text-white font-bold text-xs tracking-tight leading-relaxed mt-0">
            Create Account
          </p>
          <img src={Create} width="14" height="14" alt="Create" />
        </a>
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
    </LayoutAuth>
  );
};

export default AccountConfirmation;
