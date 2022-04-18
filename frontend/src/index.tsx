import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from "./routes/Login";
import Register from "./routes/Register";
import Reset from "./routes/ForgotPassword";
import Home from "./routes/Home";
import FP from "./routes/FirstPage"
import StatsGroup from './routes/Statistics'

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<FP />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="reset" element={<Reset />} />
      <Route path="home" element={<Home />} />
      {/* <Route path="stats" element={<StatsGroup title='' stats='' description=''/>} /> */}
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
