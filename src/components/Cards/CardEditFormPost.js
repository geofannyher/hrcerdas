import { useState,useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom"

export default function CardEditFormPost() {

    const { id } = useParams();

    const [lowongan,setLowongan] = useState({
        position: { },
        placementCity: {},
        skills: {},
        salaryMin: {},
        salaryMax: {},
        tesRequired: {},
        jobDescription: {},
        essay: {},
    })

// state
const navigate = useNavigate(); 
const [token,setToken] = useState(null);
const [position,setPosition] = useState("");
const [placementCity,setPlacementCity] = useState("");
const [salaryMin,setSalaryMin] = useState("");
const [salaryMax,setSalaryMax] = useState("");
const [tesRequired,setTesRequired] = useState("");
const [skill,setSkill] = useState("");
const [jobDescription,setJobDescription] = useState("");
const [startDate,setStartDate] = useState("");
const [endDate,setEndDate] = useState("");
const [essay,setEssay] = useState("");

// Get Token
useEffect(() => {
    if (!sessionStorage.getItem("data")) {
        navigate("/login")
    } else {
        const item = sessionStorage.getItem("data");
        if (item) {
            setToken(JSON.parse(item));
        }
    }
}, []);

useEffect(() => {
    if (token !== null){
        getLowongan(token);
    }
}, [token]);

const getLowongan = async (token) => {
    await axios
    .get(`${process.env.REACT_APP_BASE_URL}/lowonganpekerjaan/detaillowongan/id/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
    .then((res) => {
        setLowongan(res.data.data);
        console.log(res.data.data);
    })
    .catch((error) => {
        console.error(error);
    });
}

const editLowongan = async token => {
    const body = {
        position, placementCity, tesRequired, skill, jobDescription, essay, startDate, endDate, salaryMax, salaryMin
    }
    console.warn(body)
    await axios
        .put(
            `${process.env.REACT_APP_BASE_URL}/lowonganpekerjaan/update/id/${id}`,
            body,
            { headers: { Authorization: `Bearer ${token}`}}
        )
        .then(res => {
            if (res.status===200){
                console.log("data sukses di edit")
                navigate('/admin/listpost')
            }

        })
        .catch(err => {
            console.log(err.response.data)
        })
};

    
    return (
        <>
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-md rounded p-4">
                <div className="overflow-x-auto relative">
                <form
                onSubmit={e => {
                    editLowongan(token);
                    e.preventDefault();
                  }}
                >
                    <div className="mb-6">
                        <label for="role" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Posisi Yang Ditawarkan</label>
                        <input type="text" onChange={(e) => setPosition(e.target.value)} id="role" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required/>

                    </div>
                    <div className="mb-6">
                        <label for="coveredArea" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Area Penugasan</label>
                        <input type="text" onChange={(e) => setPlacementCity(e.target.value)} id="coveredArea" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required/>
                    </div>
                    <div className="grid gap-6 mb-6 md:grid-cols-2">
                        <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" for="user_avatar">Tanggal Lowongan Dibuka</label>
                            <input type="date" onChange={(e) => setStartDate(e.target.value)} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required="" />
                        </div>
                        <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" for="user_avatar">Tanggal Lowongan Ditutup</label>
                            <input type="date" onChange={(e) => setEndDate(e.target.value)} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                        </div>
                    </div>
                    <div className="grid gap-6 mb-6 md:grid-cols-2">
                        <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" for="user_avatar">Minimal Gaji</label>
                            <input type="text" onChange={(e) => setSalaryMin(e.target.value)} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required="" />
                        </div>
                        <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" for="user_avatar">Maksimal Gaji</label>
                            <input type="text" onChange={(e) => setSalaryMax(e.target.value)} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                        </div>
                    </div>
                    <h3 class="mb-4 font-semibold text-gray-900 dark:text-white">Butuh Sertifikasi ?</h3>
                    <ul class="mb-6 items-center w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                        <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                            <div class="flex items-center pl-3">
                                <input id="horizontal-list-radio-license" type="radio" value="True" name="list-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                                <label for="horizontal-list-radio-license" class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">Yes</label>
                            </div>
                        </li>
                        <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                            <div class="flex items-center pl-3">
                                <input id="horizontal-list-radio-id" type="radio" value="False" name="list-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                                <label for="horizontal-list-radio-id" class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">No</label>
                            </div>
                        </li>
                    </ul>
                    <div className="mb-6">
                        <label for="descRole" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Deskripsi Posisi Pekerjaan</label>
                        <textarea id="descRole" onChange={(e) => setJobDescription(e.target.value)} rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Masukkan Deskripsi Posisi Pekerjaan...."></textarea>
                    </div>
                    <div className="mb-6">
                        <label for="qualification" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Kualifikasi</label>
                        <textarea id="qualification" onChange={(e) => setSkill(e.target.value)} rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Masukkan Kualifikasi Pekerjaan...."></textarea>
                    </div>
                    <h3 class="mb-4 font-semibold text-gray-900 dark:text-white">Essay Reasons Why It Should Be Accepted</h3>
                    <ul class="mb-6 items-center w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                        <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                            <div class="flex items-center pl-3">
                                <input id="horizontal-list-radio-license" type="radio" value="True" name="list-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                                <label for="horizontal-list-radio-license" class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">Yes</label>
                            </div>
                        </li>
                        <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                            <div class="flex items-center pl-3">
                                <input id="horizontal-list-radio-id" type="radio" value="False" name="list-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                                <label for="horizontal-list-radio-id" class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">No</label>
                            </div>
                        </li>
                    </ul>
                </form>
                <button 
                    type="submit" 
                    onClick={() => {
                         editLowongan(token); 
                        }}  
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Post
                        </button>
                </div>
            </div>
        </>
    )
}