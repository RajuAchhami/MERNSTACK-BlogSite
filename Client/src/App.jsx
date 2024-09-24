import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Signin from "./components/Signin";
import SignUp from "./components/SignUp";
import Dashboard from "./components/Dashboard";
import Projects from "./components/Projects";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/project" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}
