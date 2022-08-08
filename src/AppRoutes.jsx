import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import React from "react";
import { Homepage, LoginPage, SignupPage } from "./pages";
import ScrollToTop from "./scrollToTop/ScrollToTop";

const AppRoutes = () => {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/">
            <Route index element={<Homepage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default AppRoutes;
