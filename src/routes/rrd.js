import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const { default: SignIn } = require("../pages/en-US/auth/sign-in");
const {
  default: AccountCreate,
} = require("../pages/en-US/auth/account-create");
const {
  default: AccountConfirmation,
} = require("../pages/en-US/auth/account-confirmation");
const {
  default: AccountActivation,
} = require("../pages/en-US/auth/account-activation");
const { default: Dashboard } = require("../pages/en-US/app/dashboard");

const RRD = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/en-US/auth/create" element={<AccountCreate />} />
        <Route
          path="/en-US/auth/confirmation"
          element={<AccountConfirmation />}
        />
        <Route path="/en-US/auth/activation" element={<AccountActivation />} />
        <Route path="/en-US/app" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default RRD;
