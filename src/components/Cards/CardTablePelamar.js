import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Dashboardload from "../spinner/dashboardload";

const AllLowongan = () => {
    const [token, setToken] = useState(null);
    const [lowongan, setLowongan] = useState({

    });
    // const [openModal, setOpenModal] = useState(false);
    const navigate = useNavigate();

    //  Get Login Data
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
            getLowonganHr(token);
        }
    })

    const getLowonganHr = async () => {
        await axios
            .get(`${process.env.REACT_APP_BASE_URL}/lowonganpekerjaan/allpelamarapllylowongan`, {
                headers: { Authorization: `Bearer ${token.data}` },
            })
            .then((res) => {
                setLowongan(res.data.data);
                console.log(res.data.data)
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const val = [];

    return (

        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-md rounded p-4">
            <div className="overflow-x-auto relative">

                <div className="pb-4 bg-white dark:bg-gray-900 p-2">
                    <label htmlFor="table-search" className="sr-only">Search</label>
                    <div className="relative mt-1">
                        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                        </div>
                        <input type="text" className="block p-2 pl-10 w-80 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search the employes" />
                    </div>
                </div>
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="py-3 px-6">
                                Name
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Status
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Alasan
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Score
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            lowongan.length > 0 ? (
                                lowongan.map((tes) => (
                                    tes.map(val => (
                                        <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                            <th scope="row" className="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white">
                                                {val.profile !== undefined ? (
                                                    <img className="w-10 h-10 rounded-full" src={val.profile} />
                                                ) : (
                                                    <img className="w-10 h-10 rounded-full" src={`${process.env.PUBLIC_URL}/Logo Biru.png`} alt="" />
                                                )}
                                                <div className="pl-3">
                                                    <div className="text-base font-semibold">{val.name}</div>
                                                    <div className="font-normal text-gray-500">{val.nomer}</div>
                                                </div>
                                            </th>
                                            <td className="py-4 px-6">
                                                <span class="bg-yellow-100 text-yellow-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-200 dark:text-yellow-900">Pending</span>
                                            </td>
                                            <td className="py-4 px-6">
                                                {val.alasan}
                                            </td>
                                            <td className="py-4 px-6">
                                                <span className="bg-blue-100 text-blue-800 text-sm font-bold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">{val.score_utama}</span>
                                            </td>
                                            <td className="flex items-center py-4 px-6 space-x-3">
                                                <a href={`/admin/detail/${val.id_pelamar}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard-check-fill" viewBox="0 0 16 16">
                                                    <path d="M6.5 0A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3Zm3 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3Z" />
                                                    <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1A2.5 2.5 0 0 1 9.5 5h-3A2.5 2.5 0 0 1 4 2.5v-1Zm6.854 7.354-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708.708Z" />
                                                </svg></a>
                                                <a href={`/admin/analytic/${val.id_pelamar}`} className="font-medium text-gray-600 dark:text-gray-500 hover:underline"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard2-data-fill" viewBox="0 0 16 16">
                                                    <path d="M10 .5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5V2a.5.5 0 0 0 .5.5h5A.5.5 0 0 0 11 2v-.5a.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5Z" />
                                                    <path d="M4.085 1H3.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1h-.585c.055.156.085.325.085.5V2a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 4 2v-.5c0-.175.03-.344.085-.5ZM10 7a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0V7Zm-6 4a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0v-1Zm4-3a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1Z" />
                                                </svg></a>
                                            </td>
                                        </tr>
                                    ))


                                ))
                            ) : (
                                <tr>
                                    <td className="text-center">
                                        --
                                    </td>
                                    <td className="text-center">
                                        --
                                    </td>
                                    <td>

                                        <div class="flex flex-auto mt-10 mb-10 justify-center">
                                            <div role="status">
                                                <svg class="inline mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                                </svg>
                                                <span class="sr-only">Loading...</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="text-center">
                                        --
                                    </td>
                                    <td className="text-center">
                                        --
                                    </td>

                                </tr>
                            )}
                    </tbody>
                </table>
            </div>
        </div >
    );
};
export default AllLowongan;