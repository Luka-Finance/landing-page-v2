import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import React from "react";
import {
  BlogPage,
  Homepage,
  LoginPage,
  NotFoundPage,
  SignupPage,
  SingleBlogPage,
} from "./pages";
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
            <Route path="/blogs" element={<BlogPage />} />
            <Route path="/blogs/:id" element={<SingleBlogPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default AppRoutes;
