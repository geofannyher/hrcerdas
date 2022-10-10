import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import Forgot from "./pages/auth/forgot";
import Dashboard from "./pages/dashboard";
import NotFound from "./pages/error/404";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Layout from "./layouts";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Detail from "./pages/dashboard/detail";
import Admin from "./pages/admin/dashboard";
import Profile from "./pages/admin/profile";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        {/* Auth Start */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<Forgot />} />
        {/* Auth End */}

        {/* error page */}
        <Route path="*" element={<NotFound />} />
        <Route index element={<App />} />

        {/* layouts */}
        <Route path="/" element={<Layout />}>
          <Route path="/admin" element={<Admin />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/profile" element={ <Profile />} />
        </Route>
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
