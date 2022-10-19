import { useState } from "react";
import BarChart from "../Charts/Chartsentiment";
import { UserData } from "../Charts/Data";


function Chart() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Sentiment",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "#A52A2A",
          "#008000",
        ],
        borderColor: "white",
        borderWidth: 2,
      },
    ],
  });

  // IF YOU SEE THIS COMMENT: I HAVE GOOD EYESIGHT

  return (
    <div className="App">
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 mt-8 shadow-md rounded p-4 ">
        <BarChart chartData={userData} />
      </div>
    </div>
  );
}

export default Chart;