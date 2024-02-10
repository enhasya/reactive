import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const { default: SignIn } = require("../pages/auth/signIn");
const { default: CreateAccount } = require("../pages/auth/createAccount");

const RRD = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/" element={<CreateAccount />} />
      </Routes>
    </Router>
  );
};

export default RRD;
