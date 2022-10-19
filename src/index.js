
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
import EditProfile from "./pages/admin/editprofile";
import AddPost from "./pages/admin/addpost";
import DetailUser from "./pages/admin/detail";
import ListPost from "./pages/admin/listPost";
import EditPost from "./pages/admin/editpost";
import DetailPost from "./pages/admin/detailpost";


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

          <Route path="/admin/listpost" element={<ListPost />} />
          <Route path="/admin/listpost/addPost" element={<AddPost />} />
          <Route path="/admin/editPost" element={<EditPost />} />
          <Route path="/admin/listpost/detailPost/:id" element={<DetailPost />} />

          <Route path="/admin/detail" element={ <DetailUser />} />
          <Route path="/admin/profile" element={ <Profile />} />
          <Route path="/admin/profile/edit" element={ <EditProfile />} />
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
