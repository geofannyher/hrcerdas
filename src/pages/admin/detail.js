import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Detail from "../../components/Cards/User/CardDetailUser";
import { supabase } from "../../services/supabase/login.services";
// import CardDetailUser from "../../components/Cards/User/CardDetailUser";

export default function DetailUser() {
  const navigate = useNavigate();
  const [token, setToken] = useState(null);
  const [data, setdata] = useState({});

  const [skill, setSkill] = useState([]);
  const [workExperience, setWorkExperience] = useState([]);
  const [addorganization, setOrganization] = useState([]);
  const [addEducation, setAddEducation] = useState([]);

  const { id } = useParams();
  useEffect(() => {
    getdata();
  }, []);

  const getdata = async (token) => {
    const res = await supabase
      .from("pelamar")
      .select("*")
      .eq("id", id)
      .single();
    if (res?.data) {
      setdata(res?.data);
    }
  };

  return (
    <>
      <div className="flex flex-wrap mx-10">
        <div className="w-full px-4  xl:w-3/12">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-md rounded-lg bg-blueGray-100 border-0 mt-8">
            <div className="rounded-t bg-white mb-0 px-6 py-6">
              <div className="text-center flex justify-between">
                <h6 className="text-blueGray-700 text-xl font-bold">
                  Account data
                </h6>
              </div>
            </div>
            <img
              className="w-40 h-40 rounded-full self-center"
              src={`https://picsum.photos/200/300`}
            />

            <h4 className="text-center font-bold mt-4">
              {/* {data.first_name} {data.last_name} */}
              {data.gender !== undefined ? (
                <div>
                  {" "}
                  {data.gender !== "Male" ? (
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
                      He/Him
                    </span>
                  ) : (
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
                      She/Her
                    </span>
                  )}
                </div>
              ) : (
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
                  undefined
                </span>
              )}
            </h4>
            {data.national !== undefined ? (
              <div>
                <p className="text-center font-semibold text-sm text-gray-400">
                  {data.alamat},{data.nationality}
                </p>
                <p className="text-center font-semibold text-sm text-gray-400">
                  {data.status}
                </p>
                <p className="text-center font-semibold text-sm text-gray-800 m-2">
                  {data.bio}
                </p>
              </div>
            ) : (
              <div>
                <p className="text-center font-semibold text-sm text-gray-400">
                  Tidak Dicantumkan
                </p>
                <p className="text-center font-semibold text-sm text-gray-400">
                  Tidak Dicantumkan
                </p>
                <p className="text-center font-semibold text-sm text-gray-800">
                  Tidak Dicantumkan
                </p>
              </div>
            )}

            <a
              href="/admin/data/edit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none sm:w-auto m-6 focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Accept
            </a>
            <a
              href="/admin/data/edit"
              className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none sm:w-auto m-6 focus:ring-red-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 mt-1 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
            >
              Denied
            </a>
          </div>
        </div>
        <div className="w-full px-4 xl:w-9/12">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-md rounded-lg bg-blueGray-100 border-0 mt-8">
            <div className="rounded-t bg-white mb-0 px-6 py-6">
              <div className="text-center flex justify-between">
                <h6 className="text-blueGray-700 text-xl font-bold">
                  Detail data Account
                </h6>
              </div>
            </div>

            <form>
              <div className="grid gap-6 mb-6 md:grid-cols-2 m-6">
                <div>
                  <label
                    for="first_name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    First name
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    defaultValue={data.first_name}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="John"
                    disabled
                  />
                </div>
                <div>
                  <label
                    for="last_name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Last name
                  </label>
                  <input
                    type="text"
                    id="last_name"
                    defaultValue={data.last_name}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Doe"
                    disabled
                  />
                </div>
                <div>
                  <label
                    for="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    defaultValue={data.email}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <div>
                  <label
                    for="phone"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Phone number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    defaultValue={data.phone}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="0852-3365-2544"
                    pattern="[0-9]{4}-[0-9]{4}-[0-9]{4}"
                    disabled
                  />
                </div>
              </div>
              {data !== undefined ? (
                <div className="grid gap-6 mb-6 md:grid-cols-2 m-6">
                  <div>
                    <label
                      for="birth"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Birth of Date
                    </label>
                    <input
                      type="text"
                      id="birth"
                      defaultValue={data.birthday}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="flowbite.com"
                      disabled
                    />
                  </div>
                  <div>
                    <label
                      for="gender"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Gender
                    </label>
                    <input
                      type="text"
                      id="twitter"
                      defaultValue={data.gender}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="man"
                      disabled
                    />
                  </div>
                  <div>
                    <label
                      for="residential"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Residential Status
                    </label>
                    <input
                      type="text"
                      id="residential"
                      defaultValue={data.status}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Mahasiswa"
                      disabled
                    />
                  </div>
                  <div>
                    <label
                      for="nationality"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Nationality
                    </label>
                    <input
                      type="text"
                      id="nationality"
                      defaultValue={data.national}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Indonesia"
                      disabled
                    />
                  </div>
                </div>
              ) : (
                <div className="grid gap-6 mb-6 md:grid-cols-2 m-6">
                  <div>
                    <label
                      for="birth"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Birth of Date
                    </label>
                    <input
                      type="text"
                      id="birth"
                      defaultValue={"Belum Terisi"}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="flowbite.com"
                      disabled
                    />
                  </div>
                  <div>
                    <label
                      for="gender"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Gender
                    </label>
                    <input
                      type="text"
                      id="twitter"
                      defaultValue={"Belum Terisi"}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="man"
                      disabled
                    />
                  </div>
                  <div>
                    <label
                      for="residential"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Residential Status
                    </label>
                    <input
                      type="text"
                      id="residential"
                      defaultValue={"Belum Terisi"}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Mahasiswa"
                      disabled
                    />
                  </div>
                  <div>
                    <label
                      for="nationality"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Nationality
                    </label>
                    <input
                      type="text"
                      id="nationality"
                      defaultValue={"Belum Terisi"}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Indonesia"
                      disabled
                    />
                  </div>
                </div>
              )}
              {data !== undefined ? (
                <div className="grid gap-6 mb-6 md:grid-cols-2 m-6">
                  <div>
                    <label
                      for="twitter"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Twitter Username
                    </label>
                    <input
                      type="text"
                      id="twitter"
                      defaultValue={data.twitter}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="@HanifSatrio"
                      disabled
                    />
                  </div>
                  <div>
                    <label
                      for="linkedin"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      linkedin Username
                    </label>
                    <input
                      type="text"
                      id="linkedin"
                      defaultValue={data.linkedin}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Hanif-Satrio"
                      disabled
                    />
                  </div>
                </div>
              ) : (
                <div className="grid gap-6 mb-6 md:grid-cols-2 m-6">
                  <div>
                    <label
                      for="twitter"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Twitter Username
                    </label>
                    <input
                      type="text"
                      id="twitter"
                      defaultValue={"belum terisi"}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="@HanifSatrio"
                      disabled
                    />
                  </div>
                  <div>
                    <label
                      for="linkedin"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      linkedin Username
                    </label>
                    <input
                      type="text"
                      id="linkedin"
                      defaultValue={"belum terisi"}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Hanif-Satrio"
                      disabled
                    />
                  </div>
                </div>
              )}
              <div className="grid gap-6 mb-6 md:grid-cols-2 m-6">
                {data !== undefined ? (
                  <div>
                    <label
                      for="adress"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Address
                    </label>
                    <textarea
                      id="address"
                      rows="4"
                      cols="6"
                      defaultValue={data.alamat}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Panorama street"
                      disabled
                    ></textarea>
                  </div>
                ) : (
                  <div>
                    <label
                      for="adress"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Address
                    </label>
                    <textarea
                      id="address"
                      rows="4"
                      cols="6"
                      defaultValue={"belum terisi"}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Panorama street"
                      disabled
                    ></textarea>
                  </div>
                )}
                <div>
                  <label
                    for="message"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                  >
                    About User
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    cols="6"
                    defaultValue={data.bio}
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="About"
                    disabled
                  ></textarea>
                </div>
              </div>
            </form>
          </div>
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-md rounded-lg bg-blueGray-100 border-0 mt-8">
            <div className="rounded-t bg-white mb-0 px-6 py-6">
              <div className="text-center flex justify-between">
                <h6 className="text-blueGray-700 text-xl font-bold">
                  Experience
                </h6>
              </div>
            </div>

            <div className="">
              {data !== undefined ? (
                <div className="grid gap-6 mb-6 md:grid-cols-2 m-6">
                  <div className="flex flex-wrap">
                    <div>
                      <p>{data.experience}</p>
                    </div>
                  </div>
                </div>
              ) : (
                <p className="m-4 text-center font-semibold">
                  <span class="bg-red-100 text-red-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">
                    No Data
                  </span>
                </p>
              )}
            </div>
          </div>

          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-md rounded-lg bg-blueGray-100 border-0 mt-8">
            <div className="rounded-t bg-white mb-0 px-6 py-6">
              <div className="text-center flex justify-between">
                <h6 className="text-blueGray-700 text-xl font-bold">
                  Educations
                </h6>
              </div>
            </div>

            <div className="">
              {data !== undefined ? (
                <div className="grid gap-6 mb-6 md:grid-cols-2 m-6">
                  <div className="flex flex-wrap">
                    <div>
                      <p>{data.education}</p>
                    </div>
                  </div>
                </div>
              ) : (
                <p className="m-4 text-center font-semibold">
                  <span class="bg-red-100 text-red-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">
                    No Data
                  </span>
                </p>
              )}
            </div>
          </div>
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-md rounded-lg bg-blueGray-100 border-0 mt-8">
            <div className="rounded-t bg-white mb-0 px-6 py-6">
              <div className="text-center flex justify-between">
                <h6 className="text-blueGray-700 text-xl font-bold">
                  Organization
                </h6>
              </div>
            </div>

            <div className="">
              {data !== undefined || null ? (
                <div className="grid gap-6 mb-6 md:grid-cols-2 m-6">
                  <div className="flex flex-wrap">
                    <div>
                      <p>{data.organitation}</p>
                    </div>
                  </div>
                </div>
              ) : (
                <p className="m-4 text-center font-semibold">
                  <span class="bg-red-100 text-red-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">
                    No Data
                  </span>
                </p>
              )}
            </div>
          </div>
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-md rounded-lg bg-blueGray-100 border-0 mt-8">
            <div className="rounded-t bg-white mb-0 px-6 py-6">
              <div className="text-center flex justify-between">
                <h6 className="text-blueGray-700 text-xl font-bold">Skills</h6>
              </div>
            </div>

            <div className="grid gap-6 mb-6 md:grid-cols-2 m-6 px-2">
              <div className="flex flex-wrap">
                <div className=" xl:w-9/12 px-2">
                  {skill !== undefined ? (
                    <div className="">
                      <div className="grid gap-6 mb-6 md:grid-cols-2 m-6">
                        <div className="flex flex-wrap">
                          <div>
                            <p>{data.skill}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <p className="text-center flex flex-auto">No data</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
