import React from "react";
import css from "../../module/ui.module.css";

const {
  default: ArrowLeft,
} = require("../../shared/icons/arrow-left-sm-white.svg");
const {
  default: Creating,
} = require("../../shared/icons/arrow-rotate-right-01-black.svg");

const BirthConfirmation = () => {
  return (
    <main
      className={`${css.auth} flex flex-col lg:flex-row w-full h-auto lg:h-screen items-center justify-center p-8 lg:p-0`}
    >
      <div className="bg-white flex flex-col items-start justify-between w-full lg:w-[360px] h-auto lg:h-[560px] p-0 lg:p-8 ring-0 lg:ring-1 lg:ring-black/10 rounded-lg mt-0">
        <div className="flex flex-row gap-4 items-center justify-start w-full">
          <a
            href="/auth/create-account"
            className="bg-black/95 hover:bg-black/75 transition-all p-2 rounded-full"
          >
            <img src={ArrowLeft} width="20" height="20" alt="ArrowLeft" />
          </a>
          <p className="text-black font-bold text-lg tracking-tight leading-relaxed mt-0">
            Account Confirmation
          </p>
        </div>
        <div className="flex flex-col w-full items-center justify-center">
          <img
            className="animate-spin"
            src={Creating}
            width="48"
            height="48"
            alt="Your Name"
          />
          <img
            className="animate-spin"
            src={Creating}
            width="48"
            height="48"
            alt="Your Name"
          />
        </div>
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

export default BirthConfirmation;
