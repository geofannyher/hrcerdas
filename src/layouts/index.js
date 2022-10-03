import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { Outlet } from "react-router-dom";

const UserLayout = () => {
  return (
    <div className="content">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default UserLayout;