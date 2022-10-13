
// import CardDonut from "../../components/Cards/CardDonuts";
// import CardLineChart from "../../components/Cards/CardLineChart";
import CardFormPost from "../../components/Cards/CardFormPost";
import HeaderStats from "../../components/HeaderStats.js/HeaderStasts";

export default function Post() {
    return (
        <>
            <div className="flex flex-wrap">
                <div className="w-full px-4">
                    <HeaderStats />
                </div>
                <div className="w-full mb-12 px-12 xl:w-12/12 items-center">
                    <CardFormPost/>
                </div>
                {/* <div className="w-full mb-12 px-4 xl:w-3/12">
                    <CardLineChart />
                </div> */}
            </div>
        </>
    )
}