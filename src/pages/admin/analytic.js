import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import BarChart from "../../components/Cards/Charts/Chartsentiment";
import PieChart from "../../components/Cards/Charts/ChartTolerant";
import Progressbar from "../../components/Cards/Charts/Progress_bar";
import CChart from "react-chartjs-2";


export default function Analytic() {
    const navigate = useNavigate();
    const [token, setToken] = useState(null);
    const [profile, setProfile] = useState({
        name: { first_name: "", last_name: "" },
        DetailProfil: {},
        Score: {},
        sosialMedia: {},

    })
    const { id } = useParams();

    useEffect(() => {
        if (!sessionStorage.getItem("data")) {
            Navigate("/login");
        } else {
            const item = sessionStorage.getItem("data");
            if (item) {
                setToken(JSON.parse(item));
            }
        }
    }, []);

    // session timeout
    const timeout = () => {
        console.log("waktu jalan")
        setTimeout(() => {
            handleLogout()
            console.log("waktu end")
        }, token.expired)
    }

    // logout function
    const handleLogout = () => {
        sessionStorage.removeItem("data");
        navigate("/login");
    };

    useEffect(() => {
        if (token !== null) {
            getProfile(token);
            timeout()
        }
    }, [token]);

    const getProfile = async (token) => {
        await axios
            .get(`${process.env.REACT_APP_BASE_URL}/pelamar/getdetailpelamar/id/${id}`, {
                headers: {
                    Authorization: `Bearer ${token.data}`,
                },
            })
            .then((res) => {
                setProfile(res.data.data);
                // console.log(res.data.data)
            })
            .catch((error) => {
                console.error(error)
            })
    }

    const a = profile.Score.sentimen_positif
    const b = profile.Score.sentimen_negatif
    // console.log(a)

    // const c = Math.floor(Math.random() * 100);
    // console.log(c)
    const d = 100 - a
    // console.log(typeof a)
   

    // const labels = Utils.months({ count: 7 });
    const dataChart = {
        labels: ['positif','negatif'],
        datasets: [{
            label: 'Sentimen Analysis',
            data: [a,d],
            backgroundColor: [
                'rgba(75, 192, 192, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                
            ],
            borderColor: [
                'rgb(75, 192, 192)',
                'rgb(255, 99, 132)',
                
            ],
            borderWidth: 1
        }]
    };

    const data = {
        labels: [
            'Intolerant post',
            'Tolerant post',

        ],
        datasets: [{
            label: 'My First Dataset',
            data: [a, b],
            backgroundColor: [
                '#fb7185',
                '#0284c7',

            ],
            hoverOffset: 4
        }]
    };




    return (
        <>
            {/* Breadcrums */}
            <nav className="flex px-5 py-3 text-gray-700 border mx-14 border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700 mt-6" aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-1 md:space-x-3">
                    <li className="inline-flex items-center">
                        <a href="/admin" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                            Home
                        </a>
                    </li>
                    <li>
                        <div className="flex items-center">
                            <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                            <a href="/admin/listpost" className="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white">Lowongan Pekerjaan</a>
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center">
                            <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                            <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-500">Detail Lowongan</span>
                        </div>
                    </li>
                    <li aria-current="page">
                        <div className="flex items-center">
                            <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                            <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">Analytic</span>
                        </div>
                    </li>
                </ol>
            </nav>
            {/* Analytic */}
            <div className="flex flex-wrap px-12">
                <div className="w-full mb-12 px-2 xl:w-5/12 items-center">
                    <div className="relative flex flex-wrap min-w-0 break-words w-full mb-6 shadow-md rounded-lg bg-blueGray-100 border-0 mt-8">
                        <div className="xl:w-4/12 self-center m-5 py-12">
                            {profile.img !== undefined ? (
                                <div className="flex flex-auto self-center mx-4">
                                    <img className="w-30 h-30 rounded-full self-center" src={`${profile.img}`} alt="Rounded avatar" />
                                </div>
                            ) : (
                                <div className="flex flex-auto self-center">

                                    <img className="w-30 h-30 rounded-full self-center " src={`${process.env.PUBLIC_URL}/Logo Biru.png`} alt="Rounded avatar" />
                                </div>
                            )}
                        </div>
                        <div className="xl:w-7/12 mt-4 self-center">
                            <h4 className="text-left font-bold mt-4 mb-2 mx-2">Nama Lengkap : {`${profile.name.first_name}`} {`${profile.name.last_name}`} </h4>
                            {profile.DetailProfil === undefined ? (
                                <div>
                                    <p className="text-left font-semibold text-sm text-gray-400 mb-2 mx-2">User Belum Menginputkan Gender</p>
                                    <p className="text-left font-semibold text-sm text-gray-400 mb-2 mx-2">User Belum Menginputkan Status</p>
                                    <p className="text-left font-semibold text-sm text-gray-400 mb-2 mx-2">Tempat, Negara</p>
                                </div>
                            ) : (
                                <div>
                                    <p className="text-left font-semibold text-sm text-gray-400 mb-2 mx-2">Jenis Kelamnin : {`${profile.DetailProfil.gender}`}</p>
                                    <p className="text-left font-semibold text-sm text-gray-400 mb-2 mx-2">Status Pelamar : {`${profile.DetailProfil.residentialStatus}`}</p>
                                    <p className="text-left font-semibold text-sm text-gray-400 mb-2 mx-2">Alamat         : {`${profile.DetailProfil.location}`} , {`${profile.DetailProfil.nationality}`}</p>
                                </div>
                            )}
                            <p className="text-left font-semibold text-sm text-gray-400 mb-3 mx-2">Skills Pelamar :</p>
                            {profile.skills !== undefined ? (

                                <div className="flex flex-wrap text-center">
                                    <div className="flex flex-wrap">
                                        {profile.skills.map(val => (
                                            <div className="mb-5 w-full md:w-6/12">
                                                <span class="bg-blue-100  text-blue-800 text-xs font-semibold px-5 py-2 rounded-full dark:bg-blue-200 dark:text-blue-800 m-2">{val}</span>

                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ) : (

                                <div className="text-center  text-red-500">
                                    <p className="text-semibold ">Tidak Ditemukan Skills</p>
                                </div>
                            )}

                        </div>
                        {/* <p className="text-center font-semibold text-sm text-gray-800 mb-10">@HanifSatrio</p> */}
                    </div>
                </div>
                <div className="w-full px-12 xl:w-3/12 mt-8 items-center">
                    <div className="relative flex flex-col min-w-0 break-words w-full mb-8 shadow-md rounded-lg bg-blue-100 border-0  py-24">
                        <div className='text-center text-8xl font-bold text-blue-600'>
                            <h1>{`${profile.Score.score_utama}`}</h1>
                        </div>
                        <p className="text-center text-blue-500 font-semibold text-md">Score</p>
                    </div>
                </div>
                <div className="w-full mb-12 px-4 xl:w-4/12">
                    <div className='relative flex flex-col min-w-0 break-words w-full mb-6 shadow-md rounded-xl p-4 mt-8 border-solid border-gray-900'>
                        <div className='overflow-x-auto relative'>
                            {/* <div className="grid gap-6 mb-10 md:grid-cols-2 mt-12"> */}
                            {profile.sosialMedia !== undefined ? (
                                <div className="grid gap-6  md:grid-cols-2 m-15 border-spacing-2 ">
                                    <div className="py-10 border-2 border-gray-200">
                                        <a href={`https://${profile.sosialMedia.facebook}`} target="_blank" className='flex flex-auto justify-center'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-facebook text-blue-700" viewBox="0 0 16 16">
                                                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                            </svg>
                                        </a>
                                    </div>
                                    <div className='py-10 border-2 border-gray-200'>
                                        <a href={`https://${profile.sosialMedia.twitter}`} target="_blank" className="flex flex-auto justify-center border-slate-500"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-twitter text-blue-500" viewBox="0 0 16 16">
                                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                                        </svg></a>
                                    </div>
                                    <div className="py-10 border-2 border-gray-200">
                                        <a href={`https://${profile.sosialMedia.linkedin}`} target="_blank" className='flex flex-auto justify-center border-slate-500'><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-linkedin text-blue-700" viewBox="0 0 16 16">
                                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                                        </svg></a>
                                    </div>
                                    <div className='py-10 border-2 border-gray-200'>
                                        <a href={`https://${profile.sosialMedia.instagram}`} target="_blank" className="flex flex-auto justify-center "><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-instagram text-pink-500" viewBox="0 0 16 16">
                                            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                                        </svg></a>
                                    </div>
                                </div>
                            ) : (
                                <div className="grid gap-6 mb-10 md:grid-cols-2 mt-12">
                                    <div>
                                        <a href="#" className='flex flex-auto justify-center'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" className="bi bi-facebook text-blue-700" viewBox="0 0 16 16">
                                                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                            </svg>
                                        </a>
                                    </div>
                                    <div className='mb-12'>
                                        <a href="#" className="flex flex-auto justify-center border-slate-500"><svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" className="bi bi-twitter text-blue-500" viewBox="0 0 16 16">
                                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                                        </svg></a>
                                    </div>
                                    <div>
                                        <a href="#" className='flex flex-auto justify-center border-slate-500'><svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" className="bi bi-linkedin text-blue-700" viewBox="0 0 16 16">
                                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                                        </svg></a>
                                    </div>
                                    <div className='border-gray-600'>
                                        <a href="#" className="flex flex-auto justify-center "><svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" className="bi bi-instagram text-pink-500" viewBox="0 0 16 16">
                                            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                                        </svg></a>
                                    </div>
                                </div>
                            )}

                            {/* </div> */}
                        </div>
                    </div>
                </div>
                <div className="w-full mb-12 px-4 xl:w-8/12">
                    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 mt-8 shadow-md rounded p-4 ">
                        <p className='text-left text-xl font-bold text-gray-500'>Sentiment Analysis</p>
                        <p className="text-left text-xs font-semibold text-gray-600 mb-2">Data ini diambil dari analisis postingan sosial media pelamar</p>
                        <BarChart dataChart={dataChart} />

                    </div>
                </div>
                <div className="w-full mb-12 px-4 xl:w-4/12">
                    <div className="relative flex flex-col min-w-0 break-words w-full mb-30 mt-8 shadow-md rounded p-4">
                        <p className='text-left text-xl font-bold text-gray-500'>Tolerant Analisis</p>
                        <p className="text-left text-xs font-semibold text-gray-600 mb-2">Data ini diambil dari jumlah postingan pelamar</p>
                        <div className='mb-7'>
                            <PieChart chartData={data} />
                        </div>
                    </div>
                </div>
                <div className="w-full mb-12 px-4 xl:w-6/12">
                    <div className='relative flex flex-col min-w-0 break-words w-full mb-6 mt-8 shadow-md rounded p-4'>
                        <div className='m-2'>
                            <p className='text-left text-xl font-bold text-gray-500 mb-2'>Personality</p>
                            <p className="text-left text-xs font-semibold text-gray-600 mb-2">Data ini diambil dari Analisis Teori Big Five</p>
                            <div>
                                <p className="text-left font-semibold text-sm px-4 text-green-800">Openness</p>
                                <Progressbar bgcolor="#a5f3fc" progress={profile.Score.o} height={20} />
                            </div>
                            <div>
                                <p className="text-left font-semibold text-sm px-4 text-red-800">Conscientiousness</p>
                                <Progressbar bgcolor="#c7d2fe" progress={profile.Score.c} height={20} />
                            </div>
                            <div>
                                <p className="text-left font-semibold text-sm px-4 text-blue-800">Extraversion</p>
                                <Progressbar bgcolor="#fde68a" progress={profile.Score.e} height={20} />
                            </div>
                            <div>
                                <p className="text-left font-semibold text-sm px-4 text-yellow-800">Agreeableness</p>
                                <Progressbar bgcolor="#a7f3d0" progress={profile.Score.a} height={20} />
                            </div>
                            <div>
                                <p className="text-left font-semibold text-sm px-4 text-purple-800">Neuroticism</p>
                                <Progressbar bgcolor="#fef08a" progress={profile.Score.n} height={20} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full mb-12 px-4 xl:w-6/12">
                    <div className='relative flex flex-col min-w-0 break-words w-full mb-6 mt-8 shadow-md rounded p-4'>
                        <div className='m-2'>
                            <p className='text-left text-xl font-bold text-gray-500 mb-2'>Interest</p>
                            <p className="text-left text-xs font-semibold text-gray-600 mb-2">Data ini diambil dari Klasifikasi Interest sosial media</p>
                            <div>
                                <p className="text-left font-semibold text-sm px-4 text-green-800">Travel</p>
                                <Progressbar bgcolor="#fde68a" progress={profile.Score.travel} height={20} />
                            </div>
                            <div>
                                <p className="text-left font-semibold text-sm px-4 text-red-800">Food</p>
                                <Progressbar bgcolor="#a5f3fc" progress={profile.Score.food} height={20} />
                            </div>
                            <div>
                                <p className="text-left font-semibold text-sm px-4 text-blue-800">Sport</p>
                                <Progressbar bgcolor="#c7d2fe" progress={profile.Score.sport} height={20} />
                            </div>
                            <div className="mb-16">
                                <p className="text-left font-semibold text-sm px-4 text-yellow-800">Fashion</p>
                                <Progressbar bgcolor="#a7f3d0" progress={profile.Score.fashion} height={20} />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}