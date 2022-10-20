// import { mdiMapMarker } from '@mdi/js';

import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

export default function PhotoProfileAnalytic() {

    const { id } = useParams();

    const [profile, setProfile] = useState({
        nama: { first_name: "", last_name: ""},
    })

    const [token, setToken] = useState(null);

    useEffect(() => {
        if (token !== null){
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
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-md rounded-lg bg-blueGray-100 border-0 mt-8">

                    <img className="w-40 h-40 rounded-full self-center mt-8" src="https://cdn1-production-images-kly.akamaized.net/Sn5EjcEhFI-jWocCljrP7CZRwyw=/1200x900/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/1439641/original/042027300_1482131661-reddit.jpg" alt="Rounded avatar" />
                    <h4 className="text-center font-bold mt-4">{`${profile.name.first_name}`}<span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">She/Her</span></h4>
                    <p className="text-center font-semibold text-sm text-gray-400">Jl Matrip No. 35 Pancoran Bondowoso</p>
                    <p className="text-center font-semibold text-sm text-gray-400">Mahasiswa</p>
                    <p className="text-center font-semibold text-sm text-gray-400">Jember, Jawa Timur, Indonesia</p>
                    <p className="text-center font-semibold text-sm text-gray-800 mb-10">@HanifSatrio</p>


            </div>
        </>
    )
}