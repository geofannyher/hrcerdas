import { useState } from "react";
import { Link } from "react-router-dom";
import Detailmenu from "./detailmenu";
import Notification from "./notification";
const Navbar = () => {

  const [open, setOpen] = useState(false);
  const [notification, setNotification] = useState(false);
  return (
    <>
      <header>
        <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 shadow-sm rounded dark:bg-gray-900">
          <div className="container flex flex-wrap justify-between items-center mx-auto">
            <div className="mr-3 h-6 sm:h-9"></div>
            {/* <Link to="/" className="flex items-center">
              <img
                src={`${process.env.PUBLIC_URL}/HRCerdas.png`}
                className="mr-3 h-6 sm:h-9"
                alt="HRCerdas Logo"
              />
  
            </Link> */}
            <div className="flex items-center lg:order-2">
              {!sessionStorage.getItem("data") ? (
                <div className="flex justify-center">
                  <Link
                    to="/signin"
                    className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/signup"
                    className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
                  >
                    Sign Up
                  </Link>
                </div>
              ) :
                <div className="flex md:order-2">
                  {/* button notification */}
                  <button
                    onClick={() => setNotification(true)}
                    id="dropdownNotificationButton" data-dropdown-toggle="dropdownNotification" className="inline-flex mx-4 items-center text-sm font-medium text-center text-gray-500 hover:text-gray-900 focus:outline-none dark:hover:text-white dark:text-gray-400" type="button">
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path></svg>
                    <div className="flex relative">
                      <div className="inline-flex relative -top-2 right-3 w-3 h-3 bg-red-500 rounded-full border-2 border-white dark:border-gray-900"></div>
                    </div>
                  </button>
                  {
                    notification ? (
                      <Notification notification={notification} onClose={() => setNotification(false)} />
                    ) : null
                  }


                  {/* button avatar */}
                  <button onClick={() => setOpen(true)}>
                    <img
                      className="w-10 h-10 rounded-full"
                      src="https://cdna.artstation.com/p/assets/images/images/045/610/778/large/seonghwan-jang-jy-flcl38-02.jpg?1643130229"
                      alt="Rounded avatar"
                    />
                  </button>
                  {
                    open ? (
                      <Detailmenu open={open} onClose={() => setOpen(false)} />
                    ) : null
                  }
                </div>
              }
            </div>
            {/* <div
              className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
              id="mobile-menu-2"
            >
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <Link
                    to="#"
                    className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Job Vacancy
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Company
                  </Link>
                </li>
              </ul>
            </div> */}
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
