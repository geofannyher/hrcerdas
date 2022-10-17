import axios from 'axios';
import {useState,useEffect} from 'react';

export default function CardFormPost() {

    // state
    const [local, setLocal] = useState(null);
    const [position, setPosition] = useState({});
    const [placementCity,setPlacementCity] = useState({});
    const [salaryMin,setSalaryMin] = useState({});
    const [salaryMax, setSalaryMax] = useState({});
    const [tesRequired,setTesRequired] = useState({});
    const [skill,setSkill] = useState({});
    const [jobDescription,setJobDescription] = useState({});
    const [essay,setEssay] = useState({});
    const [startDate,setStartDate] = useState({});
    const [endDate,setEndDate] = useState({});
    const [hook,setHook] = useState("");

    // Get Login Data
    useEffect(()=> {
        let item = sessionStorage.getItem("data");
        if (item){
            setLocal(JSON.parse(item));
        }
    }, []);

    const addLowongan = async (token) => {
        await axios.post(
            `${process.env.REACT_APP_BASE_URL}/lowonganpekerjaan/create`,
            {
                position: position,
                placementCity: placementCity,
                salaryMin: salaryMin,
                salaryMax: salaryMax,
                tesRequired: tesRequired,
                skill: skill,
                jobDescription: jobDescription,
                essay: essay,
                startDate: startDate,
                endDate: endDate
            },
            { headers: { Authorization: `Bearer ${token}` } }
        )
            .then((res) => {
                if (res.status === 200) {
                    // onClose(true);
                    console.log(res.data.data)
                }
            })
            .catch((err) => {
                console.log(err.response.data);
            });
    };
    console.log(hook)
    const getValue = () => {
        var data = document.getElementsByName("list-radio");
        var i;
        for (i=0; i<=data.length; i++){
            setHook(data[i].value)
        }
        
    }

    return (
        <>
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-md rounded p-4">
                <div className="overflow-x-auto relative">
                <form>
                    <div className="mb-6">
                        <label for="role" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Posisi Yang Ditawarkan</label>
                        <input type="text"onChange={(e) => setPosition(e.target.value)} id="role" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Masukkan Posisi Pekerjaan..." required/>
                    </div>
                    <div className="mb-6">
                        <label for="coveredArea" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Area Penugasan</label>
                        <input type="text" onChange={(e) => setPlacementCity(e.target.value)} id="coveredArea" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Masukkan Daerah Penugasan..." required/>
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
                    <button type="submit"  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Post</button>
                </form>
                </div>
            </div>
        </>
    )
}