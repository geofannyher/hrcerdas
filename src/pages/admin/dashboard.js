
// import CardDonut from "../../components/Cards/CardDonuts";
// import CardLineChart from "../../components/Cards/CardLineChart";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CardTableListPost from "../../components/Cards/CardTableListPost"
import CardTablePelamar from "../../components/Cards/CardTablePelamar";
import HeaderStats from "../../components/HeaderStats.js/HeaderStasts";


export default function Dashboard() {
    const navigate = useNavigate();
    const [local, setLocal] = useState(null);
    const [profile, setProfile] = useState({})

    useEffect(() => {
        if (!sessionStorage.getItem("data")) {
            navigate("/login");

        } else {
            const item = sessionStorage.getItem("data");
            if (item) {
                setLocal(JSON.parse(item));
            }
        }
    }, []);

    useEffect(() => {
        if (local !== null) {
            getProfile(local);
        }
    }, [local]);

    

    useEffect(() => {
        if (local !== null){
            getProfile();
        }
    }, [local]);
    const getProfile = async () => {
        await axios
        .get(`${process.env.REACT_APP_BASE_URL}/hr/profile`, {
            headers: { Authorization: `Bearer ${local}`},
        })
        .then(res => {
            if (res.status === 200) {
                setProfile(res.data.data);
            }
        })
        .catch(err => {
            console.log(err.response.data);
        });
    };


    return (
        <>
            <div className="flex flex-wrap">
                <div className="w-full px-4">
                    <HeaderStats />
                </div>
                <div className="w-full mb-12 px-12 xl:w-12/12 items-center">
                    <CardTablePelamar />
                </div>
                {/* <div className="w-full mb-12 px-4 xl:w-3/12">
                    <CardLineChart />
                </div> */}
            </div>
        </>
    )
}