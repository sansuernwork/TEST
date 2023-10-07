import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EXAM2 from "./exam2";
import EXAM3 from "./exam3";
import EXAM4 from "./exam4";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App></App>}></Route>
        <Route path="/exam2" element={<EXAM2></EXAM2>}></Route>
        <Route path="/exam3" element={<EXAM3></EXAM3>}></Route>
        <Route path="/exam4" element={<EXAM4></EXAM4>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
