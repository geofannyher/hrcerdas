import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function CardEditFormPost({}) {
  const { id } = useParams();

  const [lowongan, setLowongan] = useState({});

  // state
  const navigate = useNavigate();
  const [token, setToken] = useState(null);
  const [position, setPosition] = useState("");
  const [placementCity, setPlacementCity] = useState("");
  const [salarymin, setSalarymin] = useState("");
  const [salarymax, setSalarymax] = useState("");
  const [tesRequired, setTesRequired] = useState("");
  const [skill, setSkill] = useState([]);
  const [jobDescription, setJobDescription] = useState("");
  const [startdate, setStartdate] = useState("");
  const [enddate, setEnddate] = useState("");
  const [essay, setEssay] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const data = [];

  // Get Token
  useEffect(() => {
    if (!sessionStorage.getItem("data")) {
    } else {
      const item = sessionStorage.getItem("data");
      if (item) {
        setToken(JSON.parse(item));
      }
    }
  }, []);

  useEffect(() => {
    if (token !== null) {
      getLowongan(token);
    }
  }, [token]);

  function ayo() {
    data.push(skill);
  }

  const getLowongan = async (token) => {
    await axios
      .get(
        `${process.env.REACT_APP_BASE_URL}/lowonganpekerjaan/detaillowongan/id/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token.data}`,
          },
        }
      )
      .then((res) => {
        setLowongan(res.data.data);
        // console.log(res.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const editLowongan = async (token) => {
    const body = {
      position,
      placementCity,
      tesRequired,
      skill: data,
      jobDescription,
      essay,
      startdate,
      enddate,
      salarymax,
      salarymin,
    };
    console.warn(body);
    await axios
      .put(
        `${process.env.REACT_APP_BASE_URL}/lowonganpekerjaan/update/id/${id}`,
        body,
        { headers: { Authorization: `Bearer ${token.data}` } }
      )
      .then((res) => {
        if (res.status === 200) {
          console.log("data sukses di edit");
          navigate("/admin/listpost");
        }
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-md rounded p-4">
        <div className="overflow-x-auto relative">
          <form
            onSubmit={(e) => {
              editLowongan(token);
              e.preventDefault();
            }}
          >
            <div className="mb-6">
              <label
                htmlFor="role"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Posisi Yang Ditawarkan
              </label>
              <input
                type="text"
                onChange={(e) => setPosition(e.target.value)}
                id="role"
                defaultValue={lowongan.position}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="coveredArea"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Area Penugasan
              </label>
              <input
                type="text"
                onChange={(e) => setPlacementCity(e.target.value)}
                id="coveredArea"
                defaultValue={lowongan.placementCity}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                required
              />
            </div>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                <label
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  htmlFor="user_avatar"
                >
                  Tanggal Lowongan Dibuka
                </label>
                <input
                  type="date"
                  onChange={(e) => setStartdate(e.target.value)}
                  id="first_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div>
              <div>
                <label
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  htmlFor="user_avatar"
                >
                  Tanggal Lowongan Ditutup
                </label>
                <input
                  type="date"
                  onChange={(e) => setEnddate(e.target.value)}
                  id="first_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div>
            </div>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                <label
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  htmlFor="user_avatar"
                >
                  Minimal Gaji
                </label>
                <input
                  type="number"
                  min={0}
                  onChange={(e) => setSalarymin(e.target.value)}
                  id="first_name"
                  placeholder="ex : 1.000.000"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div>
              <div>
                <label
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  htmlFor="user_avatar"
                >
                  Maksimal Gaji
                </label>
                <input
                  type="number"
                  min={0}
                  onChange={(e) => setSalarymax(e.target.value)}
                  id="first_name"
                  placeholder="ex : 6.000.000"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div>
            </div>
            <h3 class="mb-4 font-semibold text-gray-900 dark:text-white">
              Butuh Sertifikasi ?
            </h3>
            <ul class="mb-6 items-center w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
              <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                <div class="flex items-center pl-3">
                  <input
                    id="horizontal-list-radio-license"
                    type="radio"
                    value="True"
                    name="list-radio"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    htmlFor="horizontal-list-radio-license"
                    class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Yes
                  </label>
                </div>
              </li>
              <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                <div class="flex items-center pl-3">
                  <input
                    id="horizontal-list-radio-id"
                    type="radio"
                    value="False"
                    name="list-radio"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    htmlFor="horizontal-list-radio-id"
                    class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    No
                  </label>
                </div>
              </li>
            </ul>
            <div className="mb-6">
              <label
                htmlFor="descRole"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Deskripsi Posisi Pekerjaan
              </label>
              <textarea
                id="descRole"
                onChange={(e) => setJobDescription(e.target.value)}
                rows="6"
                defaultValue={lowongan.jobdescription}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Masukkan Deskripsi Posisi Pekerjaan...."
              ></textarea>
            </div>
            <div className="mb-6">
              <label
                htmlFor="qualification"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Kualifikasi
              </label>
              <button
                onClick={() => setOpenModal(true)}
                type="button"
                class="text-white bg-yellow-600 hover:bg-yellow-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-yellow-400 dark:hover:bg-yellow-700 focus:outline-none dark:focus:ring-yellow-800"
                data-modal-toggle="modalId"
                aria-hidden="true"
                data-modal-show="true"
              >
                Tambah Kualifikasi Skills
              </button>
              {openModal ? (
                <div
                  id="popup-modal"
                  tabindex="-1"
                  class=" flex justify-center backdrop-blur-sm item-center absolute overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 md:inset-0 h-modal md:h-full"
                >
                  <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                      <div className="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                          Add Skills
                        </h3>
                        <button
                          onClick={() => setOpenModal(false)}
                          type="button"
                          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                          data-modal-toggle="popup-modal"
                        >
                          <svg
                            aria-hidden="true"
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                          <p className="sr-only">Close</p>
                        </button>
                      </div>
                      <div className="p-6 space-y-6">
                        <form
                          onSubmit={(e) => {
                            // addLowongan(token);
                            e.preventDefault();
                          }}
                        >
                          <div className="mb-6">
                            <label
                              for="email"
                              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                              Select 10 of your strongest skills. This will
                              allow recruiters to better understand your
                              suitability for the job.
                            </label>
                            <label
                              for="email"
                              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                              Upload it for once and you can use it for the next
                              application.
                            </label>
                          </div>
                          <div className="mb-6">
                            <input
                              type="text"
                              onChange={(e) => setSkill(e.target.value)}
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              required
                            />
                          </div>
                        </form>
                      </div>
                      <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                        <button
                          button
                          onClick={() => setOpenModal(false)}
                          type="button"
                          className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                        >
                          Cancel
                        </button>
                        <button
                          onClick={() => {
                            ayo();
                            setOpenModal(false);
                            // addLowongan(token);
                          }}
                          data-modal-toggle="defaultModal"
                          type="button"
                          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
            <h3 class="mb-4 font-semibold text-gray-900 dark:text-white">
              Essay Reasons Why It Should Be Accepted
            </h3>
            <ul class="mb-6 items-center w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
              <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                <div class="flex items-center pl-3">
                  <input
                    id="horizontal-list-radio-license"
                    type="radio"
                    value="True"
                    name="list-radio"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    htmlFor="horizontal-list-radio-license"
                    class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Yes
                  </label>
                </div>
              </li>
              <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                <div class="flex items-center pl-3">
                  <input
                    id="horizontal-list-radio-id"
                    type="radio"
                    value="False"
                    name="list-radio"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    htmlFor="horizontal-list-radio-id"
                    class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    No
                  </label>
                </div>
              </li>
            </ul>
          </form>
          <button
            type="submit"
            onClick={() => {
              ayo();
              editLowongan(token);
            }}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Post
          </button>
        </div>
      </div>
    </>
  );
}
