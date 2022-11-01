import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FormPassword from "../../components/Cards/CardFormPassword";
import CardProfile from "../../components/Cards/CardFromProfile";
import CardProfileView from "../../components/Cards/CardFromProfileView";
import PhotoProfile from "../../components/Cards/CardPhotosProfile";

export default function Profile() {
    // State
    // const [profile, setProfile] = useState({
    //     name: { first_name: "", last_nama: "" },
    // });
    // const navigate = useNavigate();
    // const [token, setToken] = useState(null);

    // useEffect(() => {
    //     if (!sessionStorage.getItem("data")) {
    //         navigate("/login");
    //     } else {
    //         const item = sessionStorage.getItem("data");
    //         if (item) {
    //             setToken(JSON.parse(item));
    //         }
    //     }
    // }, []);

    // useEffect(() => {
    //     if (token !== null) {
    //         getProfile(token);
    //     }
    // }, [token]);

    // const getProfile = async (token) => {
    //     await axios
    //         .get(`${process.env.REACT_APP_BASE_URL}/hr/profile`, {
    //             headers: {
    //                 Authorization: `Bearer ${token.data}`,
    //             },
    //         })
    //         .then((res) => {
    //             setProfile(res.data.data);
    //         })
    //         .catch((error) => {
    //             console.error(error);
    //         });
    // }

    return (
        <>
            {/* Breadcrumb */}
            {/* <div className="relative flex flex-col min-w-0 break-words mb-3 mt-2 w-full px-4 m-10 overflow-x-auto container"> */}
            <nav className="flex px-5 py-3 text-gray-700 border mx-14 border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700 mt-6" aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-1 md:space-x-3">
                    <li className="inline-flex items-center">
                        <a href="/admin" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                            Home
                        </a>
                    </li>
                    <li aria-current="page">
                        <div className="flex items-center">
                            <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                            <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">Detail Profile</span>
                        </div>
                    </li>
                    {/* <li>
                            <div className="flex items-center">
                                <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                                <a href="#" className="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white">Profile Detail</a>
                            </div>
                        </li> */}
                </ol>
            </nav>
            {/* </div> */}
            <div className="flex flex-wrap mx-10">
                <div className="w-full px-4  xl:w-3/12">
                    <PhotoProfile />
                </div>
                <div className="w-full px-4 xl:w-9/12">
                    {/* {profile((post, index) => ( */}
                        <CardProfileView  />
                    {/* ))} */}
                </div>
            </div>
        </>
    )
}