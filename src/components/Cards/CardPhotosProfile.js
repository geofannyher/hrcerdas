// import { mdiMapMarker } from '@mdi/js';

import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PhotoProfile() {
  const [profile, setProfile] = useState({
    name: { first_name: "", last_nama: "" },
    DetailBasicPerusahaan: {},
    DetailProfile: {},
  });
  const navigate = useNavigate();
  const [token, setToken] = useState(null);

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
      getProfile(token);
    }
  }, [token]);

  const getProfile = async (token) => {
    await axios
      .get(`${process.env.REACT_APP_BASE_URL}/hr/profile`, {
        headers: {
          Authorization: `Bearer ${token.data}`,
        },
      })
      .then((res) => {
        setProfile(res.data.data);
        console.log(res.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-md rounded-lg bg-blueGray-100 border-0 mt-8">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-blueGray-700 text-xl font-bold">
              Account Profile
            </h6>
          </div>
        </div>
        {profile.img !== undefined ? (
          <img
            className="w-40 h-40 rounded-full self-center"
            src={profile.img}
          />
        ) : (
          <img
            className="w-40 h-40 rounded-full self-center"
            src={`${process.env.PUBLIC_URL}/Logo Biru.png`}
            alt="Rounded avatar"
          />
        )}
        <h4 className="text-center font-bold mt-4">{`${profile.name.first_name}  ${profile.name.last_name}`}</h4>
        {profile.DetailBasicPerusahaan !== undefined ? (
          <div>
            <p className="text-center font-semibold text-sm text-gray-400">{`${profile.DetailBasicPerusahaan.alamat}`}</p>
          </div>
        ) : (
          <div>
            <p className="text-center font-semibold text-sm text-gray-400">
              {"Tidak Terdapat Alamat"}
            </p>
          </div>
        )}
        <p className="text-center font-semibold text-sm text-gray-400">{`${profile.namaPerusahaan}`}</p>
        <a
          href="/admin/profile/edit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none sm:w-auto m-6 focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Edit Profile
        </a>
      </div>
    </>
  );
}
