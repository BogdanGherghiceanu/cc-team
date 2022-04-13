import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./routes/Home";
import Login from "./routes/Login";
import Register from "./routes/Register";
import Reset from "./routes/ForgotPassword";
import Home from "./routes/Home";
import FP from "./routes/FirstPage"

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<FP />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="reset" element={<Reset />} />
      <Route path="home" element={<Home />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
