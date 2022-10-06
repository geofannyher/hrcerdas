import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";
import Dashboard from "../../pages/admin/dashboard";

const Admin = () => {
  return (
    <>
      <Sidebar />
      <div class="relativ md:ml-64 bg-blueGray-100">
        <Navbar />
        <div class="px-md:px-10 mx-auto w-full-m-24">
          <BrowserRouter>
            <Routes>
              <Route path= "/admin/dashboard" element={ <Dashboard />}/>
            </Routes>
          </BrowserRouter>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Admin;
