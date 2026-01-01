import React from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import { Routes } from "react-router";
import { Route } from "react-router";

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/checkout" element={<div>Test</div>} />
    </Routes>
  );
}

export default App;
