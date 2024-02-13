import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const { default: SignIn } = require("../pages/auth/sign-in");
const { default: AccountCreate } = require("../pages/auth/account-create");
const {
  default: AccountConfirmation,
} = require("../pages/auth/account-confirmation");
const {
  default: AccountActivation,
} = require("../pages/auth/account-activation");
const { default: Dashboard } = require("../pages/app/dashboard");

const RRD = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/auth/create" element={<AccountCreate />} />
        <Route path="/auth/confirmation" element={<AccountConfirmation />} />
        <Route path="/auth/activation" element={<AccountActivation />} />
        <Route path="/app" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default RRD;
