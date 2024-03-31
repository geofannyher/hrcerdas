import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Detailmenu from "./detailmenu";
const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  return (
    <>
      <header>
        <nav className="bg-white relativ md:ml-64  border-gray-200 px-2 sm:px-4 py-2.5 shadow-sm rounded dark:bg-gray-900">
          <div className="container flex flex-wrap justify-end items-center mx-auto">
            <div className="flex items-center justify-end">
              {!localStorage.getItem("user") ? (
                <div className="flex justify-center">
                  <div className="mx-2">
                    <button
                      onClick={() => navigate("/login")}
                      type="button"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Login
                    </button>
                  </div>
                  <div className="mx-2">
                    <button
                      onClick={() => {
                        navigate("/register");
                      }}
                      type="button"
                      className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800"
                    >
                      Register
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex md:order-2">
                  {/* button avatar */}
                  <button onClick={() => setOpen(true)}>
                    <img
                      className="w-10 h-10 rounded-full"
                      src={`https://picsum.photos/200/300`}
                      alt=""
                    />
                  </button>
                  {open ? <Detailmenu onClose={() => setOpen(false)} /> : null}
                </div>
              )}
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
