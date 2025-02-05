import React from "react";
import { Routes, Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import SignupPage from "./page/SignupPage";


function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/signup" element={<SignupPage />} />
      
    </Routes>
  );
}

export default AppRouter;