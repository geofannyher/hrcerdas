import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../services/supabase/login.services";
const AllLowongan = () => {
  const [token, setToken] = useState(null);
  const [lowongan, setLowongan] = useState({});
  // const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();

  const getLowonganHr = async () => {
    const res = await supabase.from("pelamar").select();
    console.log(res);
    if (res?.data.length > 0) {
      setLowongan(res?.data);
    }
  };

  useEffect(() => {
    getLowonganHr();
  }, []);

  return (
    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-md rounded p-4">
      <div className="overflow-x-auto relative">
        <div className="pb-4 bg-white dark:bg-gray-900 p-2">
          <label htmlFor="table-search" className="sr-only">
            Search
          </label>
          <div className="relative mt-1">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              className="block p-2 pl-10 w-80 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search the employes"
            />
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
            {lowongan && lowongan.length > 0 ? (
              lowongan.map((tes) => {
                console.log(tes);
                return (
                  <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                    <th
                      scope="row"
                      className="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <img
                        className="w-10 h-10 rounded-full"
                        src={`https://picsum.photos/200/300`}
                        alt=""
                      />

                      <div className="pl-3">
                        <div className="text-base font-semibold">
                          {tes.nama}
                        </div>
                        <div className="font-normal text-gray-500">
                          {tes.status}
                        </div>
                      </div>
                    </th>
                    <td className="py-4 px-6">
                      <span class="bg-yellow-100 text-yellow-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-200 dark:text-yellow-900">
                        Pending
                      </span>
                    </td>
                    <td className="py-4 px-6">{tes.alasan}</td>
                    <td className="py-4 px-6">
                      <span className="bg-blue-100 text-blue-800 text-sm font-bold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
                        {tes.score}
                      </span>
                    </td>
                    <td className="flex items-center py-4 px-6 space-x-3">
                      <button
                        onClick={() => navigate(`/admin/detail/${tes.id}`)}
                        className="bg-blue-600 rounded-md px-4 py-2 text-white font-semibold"
                      >
                        Detail
                      </button>
                      <button
                        onClick={() => navigate(`/admin/analytic/${tes.id}`)}
                        className="bg-blue-900 rounded-md px-4 py-2 text-white font-semibold"
                      >
                        Analytic
                      </button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td className="text-center">--</td>
                <td className="text-center">--</td>
                <td>
                  <div class="flex flex-auto mt-10 mb-10 justify-center">
                    <div role="status">
                      <svg
                        class="inline mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="currentColor"
                        />
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          fill="currentFill"
                        />
                      </svg>
                      <span class="sr-only">Loading...</span>
                    </div>
                  </div>
                </td>
                <td className="text-center">--</td>
                <td className="text-center">--</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default AllLowongan;
