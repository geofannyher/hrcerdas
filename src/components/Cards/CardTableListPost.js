import { faWindowRestore } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useEffect, useState } from "react";
import { useNavigate, useRouteLoaderData } from 'react-router-dom';

export default function CardTableListPost() {

    // state
    // const [local,setLocal] = useState(null);
    const [token, setToken] = useState(null);
    const [lowongan, setLowongan] = useState({});
    const [openModal, setOpenModal] = useState(false);

    console.log(setOpenModal)
    const [deleteId, setDeleteId] = useState(); 
    const navigate = useNavigate();
    const [deleteLowongan, setDeleteLowowngan] = useState();
    const [refresh, setRefresh] = useState(false);


    // const handleClickDelete = (id) => {
    //     setDeleteId(id)
    //     setOpenModal(true)
    //     console.log(id)
    // }

    // const handleDeleteItem = (id) => {
    //     setOpenModal(false)
    //     // setRefresh(!RefreshData)
    //     getDeleteLowongan(id)


    // }

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
        },[])


    useEffect(() => {
        if (token !== null) {
            getLowonganHr(token);
            getDeleteLowongan(token);
        }
    }, [token]);

    useEffect(() => {
        getLowonganHr()
    }, [refresh])

    const getLowonganHr = async () => {
        await axios
            .get(`${process.env.REACT_APP_BASE_URL}/lowonganpekerjaan/getlowonganhr`, {
                headers: { Authorization: `Bearer ${token}` },
            })
            .then((res) => {
                setLowongan(res.data.data);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const getDeleteLowongan = async (id) => {
        await axios
            .delete(`${process.env.REACT_APP_BASE_URL}/lowonganpekerjaan/deletelowongan/id/${id}`, {
                headers: { Authorization: `Bearer ${token}` },
            })
            .then(() => {
                setLowongan();
                location.reload()
            })

    };

    return (
        <>
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-md rounded p-4">
                <div className="overflow-x-auto relative">
                    <div className="pb-4 bg-white dark:bg-gray-900 p-2 grid grid-cols-2">
                        <label for="table-search" className="sr-only">Search</label>
                        <div className="relative mt-1">
                            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                            </div>
                            <input type="text" className="block p-2 pl-10 w-80 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search the the job" />
                        </div>
                        <div className="justify-self-end">
                            <a href="/admin/listPost/addPost" rel="noreferrer">
                                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">New</button>
                            </a>
                        </div>
                    </div>
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="py-3 px-6">
                                    Nama Perusahaan
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Job Position
                                </th>
                                <th scope="col" class="py-3 px-6">
                                    Start Date
                                </th>
                                <th scope="col" class="py-3 px-6">
                                    End Date
                                </th>
                                <th scope="col" class="py-3 px-6">
                                    Job Location
                                </th>
                                <th scope="col" class="py-3 px-6">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {lowongan.length > 0 ? ( 
                                lowongan.map(val => (
                                    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                        <th scope="row" className="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white">
                                            {val.profileImage !== "" ? (
                                                <img className="w-10 h-10 rounded" src={val.profileImage} alt="test" />
                                            ) : (
                                                <img className="w-10 h-10 rounded" src={`${process.env.PUBLIC_URL}/Logo Biru.png`} alt="test" />
                                            )}
                                            <div className="pl-3">
                                                <div className="text-base font-semibold">{val.namaPerusahaan}</div>
                                            </div>
                                        </th>
                                        <td className="py-4 px-6">
                                            {val.position}
                                        </td>
                                        <td className="py-4 px-6">
                                            {val.start_date}
                                        </td>
                                        <td className="py-4 px-6">
                                            {val.end_date}
                                        </td>
                                        <td className="py-4 px-6">
                                            {val.placementCity}
                                        </td>
                                        <td class="flex items-center py-4 px-6 space-x-3">
                                            <a href={`/admin/editPost/${val._id}`}>
                                                <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Edit</button>
                                            </a>
                                            {/* <a href={`/admin/listpost/`}> */}
                                            <button onClick={() => setOpenModal(true)} 
                                                type="button" class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800" data-modal-toggle="modalId" aria-hidden="true" data-modal-show="true"    >Delete</button> 
                                            {/* { 
                                                openModal ? ( 
                                                    <Delete open={openModal} onClose={() => setOpenModal(false)} /> 
                                                ) : null 
                                            }  */}
                                                { openModal ? (                                               
                                                    <div id="popup-modal" tabindex="-1" class=" flex justify-center item-center absolute overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 md:inset-0 h-modal md:h-full">
                                                    <div class="relative p-4 w-full max-w-md h-full md:h-auto">
                                                        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                                            <button button onClick={() => setOpenModal(false)}  type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="popup-modal">
                                                                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                                                <span class="sr-only">Close modal</span>
                                                            </button>
                                                            <div class="p-6 text-center">
                                                                <svg aria-hidden="true" class="mx-auto mb-4 w-14 h-14 text-gray-400 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                                                <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Apakah anda yakin untuk menghapus lowongan ini?</h3>
                                                                <button button onClick={() => getDeleteLowongan(val._id)}
                                                                data-modal-toggle="popup-modal" type="button" class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                                                                    Ya, Saya yakin
                                                                </button>
                                                                <button button onClick={() => setOpenModal(false)}  data-modal-toggle="popup-modal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Tidak</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div> ) : null}

                                            <a href={`/admin/listpost/detailPost/${val._id}`}>
                                                <button type="button" class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800">Detail</button>
                                            </a>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <div className='flex flex-auto mt'>
                                    <p className='text-center'>No Data</p>
                                </div>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}