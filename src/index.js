import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Explore from "./pages/Explore";

//dapp
import { DAppProvider } from "@usedapp/core";
import NFTDetail from "./pages/NFTDetail";
import Creators from "./pages/Creators";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={
          <DAppProvider config={{}}>
            <Home />
          </DAppProvider>
        }
      />
      <Route
        path="/create"
        element={
          <DAppProvider>
            <Create />
          </DAppProvider>
        }
      />
      <Route
        path="/explore"
        element={
          <DAppProvider>
            <Create />
          </DAppProvider>
        }
      />
      <Route
        path="/explore"
        element={
          <DAppProvider config={{}}>
            <Explore />
          </DAppProvider>
        }
      />
      <Route
        path="/detail"
        element={
          <DAppProvider config={{}}>
            <NFTDetail />
          </DAppProvider>
        }
      />
      <Route
        path="/creators"
        element={
          <DAppProvider config={{}}>
            <Creators />
          </DAppProvider>
        }
      />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
