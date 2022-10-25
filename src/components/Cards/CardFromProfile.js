import { data } from "autoprefixer";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// components

export default function CardProfile() {

    const [profile, setProfile] = useState({
        name: { first_name: "", last_name: "" },
        DetailBasicPerusahaan: {},
        DetailProfile: {},
    });

    const navigate = useNavigate();
    const [token, setToken] = useState(null);
    const [alamat, setAlamat] = useState("");
    const [email, setEmail] = useState("");
    const [website, setWebsite] = useState("");
    const [deskripsi, setDeskripsi] = useState("");
    const [Capacity, setCapacity] = useState("");
    const [industryCategory, setindustryCategory] = useState("");




    //Get Token
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

    const updateProfile = async token => {

        const body = {
            alamat, email, website, deskripsi, Capacity, industryCategory
        }
        console.warn(body)
        await axios
            .put(
                `${process.env.REACT_APP_BASE_URL}/detailperusahaan/basic`,
                body,
                { headers: { Authorization: `Bearer ${token}` } }
            )
            .then(res => {
                if (res.status === 200) {
                    navigate("/admin/profile")
                    console.log("data sukses di edit")
                }

            })
            .catch(err => {
                console.log(err.response.data)
            })
    };



    return (
        <>



            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-md rounded-lg bg-blueGray-100 border-0 mt-8">
                <div className="rounded-t bg-white mb-0 px-6 py-6">
                    <div className="text-center flex justify-between">
                        <h6 className="text-blueGray-700 text-xl font-bold">Setting Account</h6>
                    </div>
                </div>

                <form
                    onSubmit={e => {
                        updateProfile(token);
                        // updateProfile2(token);
                        e.preventDefault();
                    }}>
                    <div className="grid gap-6 mb-6 md:grid-cols-2 m-6">
                        {/* <div>
                            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">First name</label>
                            <input type="text"  id="first_name" disabled className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
                        </div>
                        <div>
                            <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Last name</label>
                            <input type="text" id="last_name"  disabled className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required />
                        </div>
                        <div>
                            <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Company</label>
                            <input type="text" id="company"  disabled className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Flowbite" required />
                        </div>
                        <div>
                            <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Phone number</label>
                            <input type="tel" id="phone"  disabled className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0852-3365-2544" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
                        </div> */}
                        <div>
                            <label htmlFor="website" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Website URL</label>
                            {profile.DetailBasicPerusahaan !== undefined ? (
                                <div>
                                    <input type="text" defaultValue={profile.DetailBasicPerusahaan.website} onChange={e => setWebsite(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="flowbite.com" required />
                                </div>
                            ) : (
                                <div>
                                    <input type="text" onChange={e => setWebsite(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="flowbite.com" required />
                                </div>
                            )}
                        </div>
                        <div>
                            <label htmlFor="employes" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Total Employes</label>
                            {profile.DetailBasicPerusahaan !== undefined ? (
                                <div>
                                    <input type="text" id="employes" defaultValue={profile.DetailBasicPerusahaan.capacity} onChange={e => setCapacity(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=" 0 - 2000000" required />
                                </div>
                            ) : (
                                <div>
                                    <input type="text" id="employes" onChange={e => setCapacity(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0 - 2000000" required />
                                </div>
                            )}
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address</label>
                            <input type="email" defaultValue={profile.email} onChange={e => setEmail(e.target.value)} id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required />
                        </div>
                        {/* <div>
                            <label htmlFor="city" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">City</label>
                            <select id="city" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" >
                                <option disabled> -- Select City -- </option>
                                <option value={"bali"}>bali</option>
                                <option value={"Malang"}>Malang</option>
                                <option value={"Jember"}>Jember</option>
                                <option value={"Situbondo"}>Situbondo </option>
                            </select>
                        </div> */}
                        <div>
                            <label htmlFor="industry_category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Industry Category</label>
                            {profile.DetailBasicPerusahaan !== undefined ? (
                                <div>
                                    <input id="industry_category" type="text" defaultValue={profile.DetailBasicPerusahaan.industrycategory} onChange={e => setindustryCategory(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                </div>
                            ) : (
                                <div>
                                    <input id="industry_category" type="text" onChange={e => setindustryCategory(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                </div>
                            )}
                        </div>
                        {profile.DetailBasicPerusahaan !== undefined ? (
                            <div>
                                <div>
                                    <label htmlFor="adress" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Company Address</label>
                                    <input type="text" id="address" defaultValue={profile.DetailBasicPerusahaan.alamat} onChange={e => setAlamat(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Panorama street" required />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Company Description</label>
                                    <textarea id="message" rows="4" cols="6" defaultValue={profile.DetailBasicPerusahaan.deskripsi} onChange={e => setDeskripsi(e.target.value)} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..." required></textarea>
                                </div>
                            </div>
                        ) : (
                            <div>
                                <div>
                                    <label htmlFor="adress" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Company Address</label>
                                    <input type="text" id="address" onChange={e => setAlamat(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Panorama street" required />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Company Description</label>
                                    <textarea id="message" rows="4" cols="6" onChange={e => setDeskripsi(e.target.value)} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..." required></textarea>
                                </div>
                            </div>
                        )}

                        {/* <div>
                            <label htmlFor="dripzone-file" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">SIUP, Directur KTP, SKKK</label>
                            <label htmlFor="dropzone-file" className="flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                <div className="flex flex-col justify-center items-center pt-5 pb-6">
                                    <svg aria-hidden="true" className="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">.DOC .PDF (Max. 2000 KB)</p>
                                </div>
                                <input id="dropzone-file" type="file" className="hidden" />
                            </label>
                        </div> */}
                        <div >
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" for="multiple_files">Upload Files</label>
                            <input class="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="default_size" type="file" multiple />
                            <p className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">TDP, SIUP, KTP (.pdf max.2 mb) .</p>
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" for="multiple_files">Company Photo Profile</label>
                            <div class="flex justify-center items-center w-full">
                                <label for="dropzone-file" class="flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                    <div class="flex flex-col justify-center items-center pt-5 pb-6">
                                        <svg aria-hidden="true" class="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                        <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                                        <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                    </div>
                                    <input id="dropzone-file" type="file" class="hidden" />
                                </label>
                            </div>
                        </div>
                    </div>
                    <button type="submit" onClick={() => { updateProfile(token); }} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none m-6 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save Data</button>
                </form>

            </div>


        </>
    );
}
