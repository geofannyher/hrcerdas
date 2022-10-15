import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Detailmenu = ({ open, onClose }) => {


    const navigate = useNavigate();
    const [profile, setProfile] = useState({
        name: { first_name: "", last_name: "" },
    });
    const [token, setToken] = useState(null);
    
    useEffect(() => {
        if (!sessionStorage.getItem("data")) {
          navigate("/login");
        } else {
          const item = sessionStorage.getItem("data");
          if (item) {
            setToken(JSON.parse(item));
          }
        }
      }, []);

    // get data profile
    const getdataProfile = async (token) => {
        await axios
            .get(`${process.env.REACT_APP_BASE_URL}/hr/profile`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((res) => {
                setProfile(res.data.data);
            })
            .catch((error) => {
                console.error(error);
            });
    };


    useEffect(() => {
        if (token !== null) {
            getdataProfile(token);
        }
    }, [token]);


    const handleLogout = async () => {
        sessionStorage.removeItem('data');
        onClose()
        navigate('/');
    };
    return (
        <>
            <div className=" absolute z-10 right-5 divide-y mt-12 w-56 origin-top rounded-xl bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                <div className=" py-3 px-4 text-sm text-gray-900 dark:text-white">
                    <div>{`${profile.name.first_name} ${profile.name.last_name}`}</div>
                    <div className="font-medium position truncate">
                        {`${profile.email}`}
                    </div>
                    <button type="button" onClick={onClose} className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="popup-modal">
                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </button>
                </div>

                <hr />
                <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="avatarButton">
                    <Link to={"/admin"} onClick={onClose}>
                        <li>
                            <a className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Home</a>
                        </li>
                    </Link>
                    <Link to={"/admin/profile"} onClick={onClose}>
                        <li>
                            <a className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Profile</a>
                        </li>
                    </Link>
                    <hr />
                </ul>
                <div className="py-1" onClick={handleLogout} >
                    <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Log Out</a>
                </div>
            </div>
        </>
    )
}

export default Detailmenu