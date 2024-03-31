import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CardTablePelamar from "../../components/Cards/CardTablePelamar";
import HeaderStats from "../../components/HeaderStats.js/HeaderStasts";

export default function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("user")) {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full px-4">
          <HeaderStats />
        </div>
        <div className="w-full mb-12 px-12 xl:w-12/12 mt-8 m-4 mx-5 items-center">
          <CardTablePelamar />
        </div>
      </div>
    </>
  );
}
