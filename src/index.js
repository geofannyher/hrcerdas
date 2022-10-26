
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
import Detail from "./pages/dashboard/detail";
import Admin from "./pages/admin/dashboard";
import Profile from "./pages/admin/profile";
import EditProfile from "./pages/admin/editprofile";
import AddPost from "./pages/admin/addpost";
import DetailUser from "./pages/admin/detail";
import ListPost from "./pages/admin/listPost";
import EditPost from "./pages/admin/editpost";
import DetailPost from "./pages/admin/detailpost";
import Analytic from "./pages/admin/analytic";
import Chart from "./components/Cards/User/CardSentiment";
import UserLayout from "./layouts";
import Navbar from "./components/navbar";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* Auth Start */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<Forgot />} />

        {/* error page */}
        <Route path="*" element={<NotFound />} />

        {/* layouts */}
        <Route element={<UserLayout />} >
          <Route path="/admin" element={<Admin />} />
          <Route path="/analitik" element={<Chart />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/admin/listpost" element={<ListPost />} />
          <Route path="/admin/listpost/addPost" element={<AddPost />} />
          <Route path="/admin/editPost/:id" element={<EditPost />} />
          <Route path="/admin/listpost/detailPost/:id" element={<DetailPost />} />
          <Route path="/admin/analytic/:id" element={< Analytic />} />
          <Route path="/admin/detail/:id" element={<DetailUser />} />
          <Route path="/admin/profile" element={<Profile />} />
          <Route path="/admin/profile/edit" element={<EditProfile />} />
        </Route>
        <Route index element={<App />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
