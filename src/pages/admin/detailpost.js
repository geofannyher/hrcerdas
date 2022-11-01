
// import CardDonut from "../../components/Cards/CardDonuts";
// import CardLineChart from "../../components/Cards/CardLineChart";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CardDetailPost from "../../components/Cards/CardDetailPost";
import CardTablePelamar from "../../components/Cards/CardTablePelamar";
import HeaderStats from "../../components/HeaderStats.js/HeaderStasts";

export default function DetailPost() {
    const navigate = useNavigate();
    const [token, setToken] = useState(null);
    const [profile, setProfile] = useState({})

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

    

    // session timeout
    const timeout = () => {
        console.log("waktu jalan")
        setTimeout(() => {
            handleLogout()
            console.log("waktu end")
        }, token.expired)
    }

    // logout function
    const handleLogout = () => {
        sessionStorage.removeItem("data");
        navigate("/login");
    };

    useEffect(() => {
        if (token !== null) {
            getProfile();
            timeout()
        }
    }, [token]);

    const getProfile = async () => {
        await axios
            .get(`${process.env.REACT_APP_BASE_URL}/hr/profile`, {
                headers: { Authorization: `Bearer ${token.data}` },
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
                    <CardDetailPost />
                </div>
                {/* <div className="w-full mb-12 px-4 xl:w-3/12">
                    <CardLineChart />
                </div> */}
            </div>
        </>
    )
}