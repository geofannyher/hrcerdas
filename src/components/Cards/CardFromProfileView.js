import axios from "axios";
import React, {  useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// components

const CardProfileView = () => {
    const [profile, setProfile] = useState({
        name: { first_name: "", last_nama: "" },
        DetailBasicPerusahaan: {},
        DetailProfile: {},
    });
    const navigate = useNavigate();
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

    useEffect(() => {
        if (token !== null) {
            getProfile(token);
        }
    }, [token]);

    const getProfile = async (token) => {
        await axios
            .get(`${process.env.REACT_APP_BASE_URL}/hr/profile`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((res) => {
                setProfile(res.data.data);
                console.log(res.data.data)
            })
            .catch((error) => {
                console.error(error);
            });
    }
    // console.log(profile.DetailProfile)
    return (
        <>
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-md rounded-lg bg-blueGray-100 border-0 mt-8">
                <div className="rounded-t bg-white mb-0 px-6 py-6">
                    <div className="text-center flex justify-between">
                        <h6 className="text-blueGray-700 text-xl font-bold">Detail Profile Account</h6>
                    </div>
                </div>

                <form>
                    <div className="grid gap-6 mb-6 md:grid-cols-2 m-6">
                        <div>
                            <label for="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">First name</label>
                            <input type="text" id="first_name" value={profile.name.first_name} className="font-semibold bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" disabled />
                        </div>
                        <div>
                            <label for="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Last name</label>
                            <input type="text" id="last_name" value={profile.name.last_name} className="font-semibold bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" disabled />
                        </div>
                        <div>
                            <label for="company" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Company</label>
                            <input type="text" id="company" value={profile.namaPerusahaan} className="font-semibold bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Flowbite" disabled />
                        </div>
                        <div>
                            <label for="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Phone number</label>
                            <input type="tel" id="phone" value={profile.noHp} className="font-semibold selection:bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0852-3365-2544" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" disabled />
                        </div>
                        <div>
                            <label for="website" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Website URL</label>
                            <input type="text" id="website" value={profile.DetailBasicPerusahaan.website} className="font-semibold bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="flowbite.com" disabled />
                        </div>
                        <div>
                            <label for="employes" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Total Employes</label>
                            <input type="text" id="visitors" value={profile.DetailProfile.capacity} min={0} className="font-semibold bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" disabled />
                        </div>
                        <div>
                            <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address</label>
                            <input type="email" id="email" value={profile.email} className="font-semibold bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" disabled />
                        </div>
                        {/* <div>
                            <label for="city" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">City</label>
                            <input type="text" id="city" className="bg-gray-50 border font-semibold border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" disabled />

                        </div> */}
                        <div>
                            <label for="industry_category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Industry Category</label>
                            <input type="text" id="city" value={profile.DetailProfile.industrycategory}  className="bg-gray-50 border font-semibold border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" disabled />

                        </div>
                        <div>
                            <label for="address" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Company Address</label>
                            <input type="text" id="address" value={profile.DetailBasicPerusahaan.alamat} className="bg-gray-50 font-semibold border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Panorama street" disabled />
                        </div>
                        <div>
                            <label for="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Company Description</label>
                            <textarea id="message" rows="4" cols="6" value={profile.DetailBasicPerusahaan.deskripsi} className="font-semibold block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..."></textarea>
                        </div>
                    </div>
                </form>

            </div>
        </>
    );
}
export default CardProfileView