import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Detail from "../../components/Cards/User/CardDetailUser";
import PhotoProfileUser from "../../components/Cards/User/CardPhotosProfile";
// import CardDetailUser from "../../components/Cards/User/CardDetailUser";

export default function DetailUser() {
    const [token, setToken] = useState(null);
    const [profile, setProfile] = useState({
        name: { first_name: "", last_name: "" },
        DetailProfil: {},
        sosialMedia: {}
    })

    const { id } = useParams();

    useEffect(() => {
        if (!sessionStorage.getItem("data")) {
            Navigate("/login");
        } else {
            const item = sessionStorage.getItem("data"); {
                if (item) {
                    setToken(JSON.parse(item));
                }
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
            .get(`${process.env.REACT_APP_BASE_URL}/pelamar/getdetailpelamar/id/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((res) => {
                setProfile(res.data.data);
                console.log(res.data.data)
            })
            .catch((error) => {
                console.error(error)
            })
    }
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
                            <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">Detail Account</span>
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
                    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-md rounded-lg bg-blueGray-100 border-0 mt-8">
                        <div className="rounded-t bg-white mb-0 px-6 py-6">
                            <div className="text-center flex justify-between">
                                <h6 className="text-blueGray-700 text-xl font-bold">Account Profile</h6>
                            </div>
                        </div>
                        <img className="w-40 h-40 rounded-full self-center" src="https://cdn1-production-images-kly.akamaized.net/Sn5EjcEhFI-jWocCljrP7CZRwyw=/1200x900/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/1439641/original/042027300_1482131661-reddit.jpg" alt="Rounded avatar" />
                        <h4 className="text-center font-bold mt-4">{profile.name.first_name} {profile.name.last_name}   
                            {profile.DetailProfil.gender !== "laki - laki" ? (
                                 <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">She/Her</span>
                            ) : (
                                 <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">He/Him</span>
                            )}
                        </h4>
                        {profile.DetailProfil !== undefined ? (
                            <div>
                                <p className="text-center font-semibold text-sm text-gray-400">{profile.DetailProfil.location},{profile.DetailProfil.nationality}</p>
                                <p className="text-center font-semibold text-sm text-gray-400">{profile.DetailProfil.residentialStatus}</p>
                                <p className="text-center font-semibold text-sm text-gray-800 m-2">{profile.aboutme}</p>
                            </div>

                        ) : (
                            <div>
                                <p className="text-center font-semibold text-sm text-gray-400">Jember, Jawa Timur, Indonesia</p>
                                <p className="text-center font-semibold text-sm text-gray-400">Mahasiswa</p>
                                <p className="text-center font-semibold text-sm text-gray-800">Deskription</p>
                            </div>

                        )}

                        <a href="/admin/profile/edit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none sm:w-auto m-6 focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Accept</a>
                        <a href="/admin/profile/edit" className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none sm:w-auto m-6 focus:ring-red-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 mt-1 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Denied</a>
                    </div>
                </div>
                <div className="w-full px-4 xl:w-9/12">
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
                                    <input type="text" id="first_name" defaultValue={profile.name.first_name} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" disabled />
                                </div>
                                <div>
                                    <label for="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Last name</label>
                                    <input type="text" id="last_name" defaultValue={profile.name.last_name} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" disabled />
                                </div>
                                <div>
                                    <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address</label>
                                    <input type="email" id="email" defaultValue={profile.email} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" disabled />
                                </div>
                                <div>
                                    <label for="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Phone number</label>
                                    <input type="tel" id="phone" defaultValue={profile.noHp} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0852-3365-2544" pattern="[0-9]{4}-[0-9]{4}-[0-9]{4}" disabled />
                                </div>
                            </div>
                            {profile.DetailProfil !== undefined ? (
                                <div className="grid gap-6 mb-6 md:grid-cols-2 m-6">
                                    <div>
                                        <label for="birth" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Birth of Date</label>
                                        <input type="text" id="birth" defaultValue={profile.DetailProfil.tanggalLahir} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="flowbite.com" disabled />
                                    </div>
                                    <div>
                                        <label for="gender" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Gender</label>
                                        <input type="text" id="twitter" defaultValue={profile.DetailProfil.gender} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="man" disabled />
                                    </div>
                                    <div>
                                        <label for="residential" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Residential Status</label>
                                        <input type="text" id="residential" defaultValue={profile.DetailProfil.residentialStatus} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Mahasiswa" disabled />

                                    </div>
                                    <div>
                                        <label for="nationality" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nationality</label>
                                        <input type="text" id="nationality" defaultValue={profile.DetailProfil.nationality} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Indonesia" disabled />

                                    </div>
                                </div>
                            ) : (
                                <div className="grid gap-6 mb-6 md:grid-cols-2 m-6">
                                    <div>
                                        <label for="birth" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Birth of Date</label>
                                        <input type="text" id="birth" defaultValue={'Belum Terisi'} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="flowbite.com" disabled />
                                    </div>
                                    <div>
                                        <label for="gender" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Gender</label>
                                        <input type="text" id="twitter" defaultValue={'Belum Terisi'} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="man" disabled />
                                    </div>
                                    <div>
                                        <label for="residential" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Residential Status</label>
                                        <input type="text" id="residential" defaultValue={'Belum Terisi'} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Mahasiswa" disabled />

                                    </div>
                                    <div>
                                        <label for="nationality" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nationality</label>
                                        <input type="text" id="nationality" defaultValue={'Belum Terisi'} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Indonesia" disabled />

                                    </div>
                                </div>
                            )}
                            {profile.sosialMedia !== undefined ? (
                                <div className="grid gap-6 mb-6 md:grid-cols-2 m-6">
                                    <div>
                                        <label for="twitter" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Twitter Username</label>
                                        <input type="text" id="twitter" defaultValue={profile.sosialMedia.twitter} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="@HanifSatrio" disabled />

                                    </div>
                                    <div>
                                        <label for="linkedin" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">linkedin Username</label>
                                        <input type="text" id="linkedin" defaultValue={profile.sosialMedia.linkedin} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Hanif-Satrio" disabled />

                                    </div>

                                </div>
                            ) : (
                                <div className="grid gap-6 mb-6 md:grid-cols-2 m-6">
                                    <div>
                                        <label for="twitter" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Twitter Username</label>
                                        <input type="text" id="twitter" defaultValue={"belum terisi"} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="@HanifSatrio" disabled />

                                    </div>
                                    <div>
                                        <label for="linkedin" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">linkedin Username</label>
                                        <input type="text" id="linkedin" defaultValue={"belum terisi"} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Hanif-Satrio" disabled />

                                    </div>
                                </div>
                            )}
                            <div className="grid gap-6 mb-6 md:grid-cols-2 m-6">
                                {profile.DetailProfil !== undefined ? (
                                    <div>
                                        <label for="adress" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Address</label>
                                        <textarea id="address" rows="4" cols="6" defaultValue={profile.DetailProfil.location} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Panorama street" disabled ></textarea>
                                    </div>
                                ) : (
                                    <div>
                                        <label for="adress" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Address</label>
                                        <textarea id="address" rows="4" cols="6" defaultValue={"belum terisi"} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Panorama street" disabled ></textarea>
                                    </div>
                                )}
                                <div>
                                    <label for="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">About User</label>
                                    <textarea id="message" rows="4" cols="6" defaultValue={profile.aboutme} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="About" disabled></textarea>
                                </div>
                            </div>

                        </form>

                    </div>
                    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-md rounded-lg bg-blueGray-100 border-0 mt-8">
                        <div className="rounded-t bg-white mb-0 px-6 py-6">
                            <div className="text-center flex justify-between">
                                <h6 className="text-blueGray-700 text-xl font-bold">Experience</h6>
                            </div>
                        </div>


                        <div className="grid gap-6 mb-6 md:grid-cols-2 m-6">
                            <div className="flex flex-wrap">
                                <div className=" xl:w-3/12 px-2">
                                    <img className="w-40 h-35 rounded" src="https://andromedia.co.id/wp-content/uploads/2018/04/foto-capita-07.png" alt="Default avatar" />
                                </div>
                                <div className=" xl:w-9/12 px-2">
                                    <p className="font-semibold text-xl">Andromedia</p>
                                    <p className="font-normal text-gray-400 text-xs">2022</p>

                                    <ol className="relative border-l border-gray-200 dark:border-gray-700">
                                        <li className="mb-10 ml-4">
                                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Juni 2022</time>
                                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Create Code From UI Design</h3>
                                            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce &amp; Marketing pages.</p>
                                            <a href="#" className="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Learn more <svg className="ml-2 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></a>
                                        </li>
                                        <li className="mb-10 ml-4">
                                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Agustus 2022</time>
                                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Code With Laravel Framework</h3>
                                            <p className="text-base font-normal text-gray-500 dark:text-gray-400">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p>
                                        </li>
                                        <li className="ml-4">
                                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Oktober 2022</time>
                                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Create New Framework Javascript</h3>
                                            <p className="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
                                        </li>
                                    </ol>

                                </div>
                            </div>
                            <div className="flex flex-wrap">
                                <div className=" xl:w-3/12 px-2">
                                    <img className="w-40 h-35 rounded" src="https://law.uii.ac.id/wp-content/uploads/2021/11/logo-bangkit-2022.png" alt="Default avatar" />
                                </div>
                                <div className=" xl:w-9/12 px-2">
                                    <p className="font-semibold text-xl">Bangkit Academy</p>
                                    <p className="font-normal text-gray-400 text-xs">2022</p>
                                    <ol className="relative border-l border-gray-200 dark:border-gray-700">
                                        <li className="mb-10 ml-4">
                                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">February 2022</time>
                                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Application UI code in Tailwind CSS</h3>
                                            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce &amp; Marketing pages.</p>
                                            <a href="#" className="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Learn more <svg className="ml-2 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></a>
                                        </li>
                                        <li className="mb-10 ml-4">
                                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">March 2022</time>
                                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Marketing UI design in Figma</h3>
                                            <p className="text-base font-normal text-gray-500 dark:text-gray-400">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p>
                                        </li>
                                        <li className="ml-4">
                                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">April 2022</time>
                                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">E-Commerce UI code in Tailwind CSS</h3>
                                            <p className="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
                                        </li>
                                    </ol>

                                </div>
                            </div>
                        </div>


                    </div>
                    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-md rounded-lg bg-blueGray-100 border-0 mt-8">
                        <div className="rounded-t bg-white mb-0 px-6 py-6">
                            <div className="text-center flex justify-between">
                                <h6 className="text-blueGray-700 text-xl font-bold">Lecense & Sertificate</h6>
                            </div>
                        </div>


                        <div className="grid gap-6 mb-6 md:grid-cols-2 m-6">
                            <div className="flex flex-wrap">
                                <div className=" xl:w-3/12 px-2">
                                    <img className="w-40 h-35 rounded" src="https://law.uii.ac.id/wp-content/uploads/2021/11/logo-bangkit-2022.png" alt="Default avatar" />
                                </div>
                                <div className=" xl:w-9/12 px-2">
                                    <p className="font-semibold text-xl">Bangkit Academy</p>
                                    <p className="font-normal text-gray-400 text-xs">2022</p>
                                    <a href="#" className="inline-flex items-center mt-2 py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Cridential <svg className="ml-2 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></a>
                                </div>
                            </div>
                            <div className="flex flex-wrap">
                                <div className=" xl:w-3/12 px-2">
                                    <img className="w-40 h-35 rounded" src="https://law.uii.ac.id/wp-content/uploads/2021/11/logo-bangkit-2022.png" alt="Default avatar" />
                                </div>
                                <div className=" xl:w-9/12 px-2">
                                    <p className="font-semibold text-xl">Bangkit Academy</p>
                                    <p className="font-normal text-gray-400 text-xs">2022</p>
                                    <a href="#" className="inline-flex items-center mt-2 py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Cridential<svg className="ml-2 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></a>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-md rounded-lg bg-blueGray-100 border-0 mt-8">
                        <div className="rounded-t bg-white mb-0 px-6 py-6">
                            <div className="text-center flex justify-between">
                                <h6 className="text-blueGray-700 text-xl font-bold">Educations</h6>
                            </div>
                        </div>


                        <div className="grid gap-6 mb-6 md:grid-cols-2 m-6">
                            <div className="flex flex-wrap">
                                <div className=" xl:w-3/12 px-2">
                                    <img className="w-20 h-20 rounded" src="https://www.polije.ac.id/wp-content/uploads/2021/03/LOGO-POLITEKNIK-NEGERI-JEMBER.png" alt="Default avatar" />
                                </div>
                                <div className=" xl:w-9/12 px-2">
                                    <p className="font-semibold text-xl">Politeknik Negeri Jember</p>
                                    <p className="font-bold  text-gray-700 text-xs">S.Trkom</p>
                                    <p className="font-normal text-gray-400 text-xs">2019 - 2023</p>
                                </div>
                            </div>
                            <div className="flex flex-wrap">
                                <div className=" xl:w-3/12 px-2">
                                    <img className="w-20 h-20 rounded" src="https://global-uploads.webflow.com/62d785c9e7b9b749907a5233/62eb38a4b31a6d717886e3d8_minimal-logo-binar-academy.svg" alt="Default avatar" />
                                </div>
                                <div className=" xl:w-9/12 px-2">
                                    <p className="font-semibold text-xl">Bangkit Academy</p>
                                    <p className="font-bold  text-gray-700 text-xs">S.Trkom</p>
                                    <p className="font-normal text-gray-400 text-xs">2022</p>

                                </div>
                            </div>
                        </div>


                    </div>
                    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-md rounded-lg bg-blueGray-100 border-0 mt-8">
                        <div className="rounded-t bg-white mb-0 px-6 py-6">
                            <div className="text-center flex justify-between">
                                <h6 className="text-blueGray-700 text-xl font-bold">Organization</h6>
                            </div>
                        </div>


                        <div className="grid gap-6 mb-6 md:grid-cols-2 m-6">
                            <div className="flex flex-wrap">
                                <div className=" xl:w-3/12 px-2">
                                    <img className="w-40 h-35 rounded" src="https://law.uii.ac.id/wp-content/uploads/2021/11/logo-bangkit-2022.png" alt="Default avatar" />
                                </div>
                                <div className=" xl:w-9/12 px-2">
                                    <p className="font-semibold text-xl">Bangkit Academy</p>
                                    <p className="font-normal text-gray-400 text-xs">2021 - 2022</p>
                                    <a href="#" className="inline-flex items-center mt-2 py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Cridential <svg className="ml-2 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></a>
                                </div>
                            </div>
                            <div className="flex flex-wrap">
                                <div className=" xl:w-3/12 px-2">
                                    <img className="w-40 h-35 rounded" src="https://law.uii.ac.id/wp-content/uploads/2021/11/logo-bangkit-2022.png" alt="Default avatar" />
                                </div>
                                <div className=" xl:w-9/12 px-2">
                                    <p className="font-semibold text-xl">Bangkit Academy</p>
                                    <p className="font-normal text-gray-400 text-xs">2020 - 2021</p>
                                    <a href="#" className="inline-flex items-center mt-2 py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Cridential<svg className="ml-2 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></a>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-md rounded-lg bg-blueGray-100 border-0 mt-8">
                        <div className="rounded-t bg-white mb-0 px-6 py-6">
                            <div className="text-center flex justify-between">
                                <h6 className="text-blueGray-700 text-xl font-bold">Skill</h6>
                            </div>
                        </div>


                        <div className="grid gap-6 mb-6 md:grid-cols-2 m-6 px-2">
                            <div className="flex flex-wrap">
                                <div className=" xl:w-9/12 px-2">

                                    <ol className="relative border-l border-gray-200 dark:border-gray-700">
                                        <li className="mb-10 ml-6">
                                            <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                                <svg aria-hidden="true" className="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                                            </span>
                                            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">UI / UX Designer</h3>
                                            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on January 13th, 2022</time>
                                            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce &amp; Marketing pages.</p>
                                        </li>
                                        <li className="mb-10 ml-6">
                                            <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                                <svg aria-hidden="true" className="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                                            </span>
                                            <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Frontend Developer</h3>
                                            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on December 7th, 2021</time>
                                            <p className="text-base font-normal text-gray-500 dark:text-gray-400">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p>
                                        </li>
                                        <li className="ml-6">
                                            <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                                <svg aria-hidden="true" className="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                                            </span>
                                            <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Backend Developer</h3>
                                            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on December 2nd, 2021</time>
                                            <p className="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
                                        </li>
                                    </ol>

                                </div>
                            </div>
                            <div className="flex flex-wrap">
                                <div className=" xl:w-9/12 px-2">

                                    <ol className="relative border-l border-gray-200 dark:border-gray-700">
                                        <li className="mb-10 ml-6">
                                            <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                                <svg aria-hidden="true" className="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                                            </span>
                                            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Dev Ops <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">Latest</span></h3>
                                            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on January 13th, 2022</time>
                                            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce &amp; Marketing pages.</p>
                                        </li>

                                    </ol>

                                </div>
                            </div>
                        </div>


                    </div>
                </div>

            </div>
        </>
    )
}