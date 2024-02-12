import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const { default: SignIn } = require("../pages/auth/sign-in");
const { default: CreateAccount } = require("../pages/auth/create-account");
const {
  default: AccountConfirmation,
} = require("../pages/auth/account-confirmation");
const {
  default: AccountActivation,
} = require("../pages/auth/account-activation");

const RRD = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/auth/create-account" element={<CreateAccount />} />
        <Route
          path="/auth/account-confirmation"
          element={<AccountConfirmation />}
        />
        <Route
          path="/auth/account-activation"
          element={<AccountActivation />}
        />
      </Routes>
    </Router>
  );
};

export default RRD;
