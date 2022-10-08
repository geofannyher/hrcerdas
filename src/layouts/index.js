import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Outlet } from "react-router-dom";

const UserLayout = () => {
  return (
    <div className="content">
      <div class="relativ md:ml-64 bg-blueGray-100">
        <Navbar />
        <div class="px-md:px-10 mx-auto w-full-m-24">
          <Sidebar />
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default UserLayout;
