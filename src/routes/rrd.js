import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const { default: SignIn } = require("../pages/auth/sign-in");
const { default: CreateAccount } = require("../pages/auth/account-create");
const {
  default: AccountConfirmation,
} = require("../pages/auth/account-confirmation");
const {
  default: AccountActivation,
} = require("../pages/auth/account-activation");
const { default: App } = require("../pages/class/app");

const RRD = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/auth/create" element={<CreateAccount />} />
        <Route
          path="/auth/confirmation"
          element={<AccountConfirmation />}
        />
        <Route
          path="/auth/activation"
          element={<AccountActivation />}
        />
        <Route path="/app" element={<App />} />
      </Routes>
    </Router>
  );
};

export default RRD;
