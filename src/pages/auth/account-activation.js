import React from "react";

const { default: LayoutAuth } = require("../../layouts/auth");
const {
  default: Creating,
} = require("../../shared/icons/user-profile-circle-black.svg");

const AccountActivation = () => {
  return (
    <LayoutAuth>
      <div className="flex flex-row gap-4 items-center justify-start w-full">
        <p className="text-black font-bold text-lg tracking-tight leading-relaxed mt-0">
          Create Account
        </p>
      </div>
      <div className="flex flex-col w-full items-center justify-center mt-8 lg:mt-0">
        <img
          className="animate-none lg:animate-ping"
          src={Creating}
          width="36"
          height="36"
          alt="Creating"
        />
        <p className="text-black font-medium text-xs text-center tracking-tight leading-relaxed mt-8">
          Take a break for a moment while we creating your account
        </p>
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
    </LayoutAuth>
  );
};

export default AccountActivation;
