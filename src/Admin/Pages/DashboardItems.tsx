import { useState } from "react";
import BarChart from "../Components/BarChart";
// import LineChart from "./components/LineChart";
// import PieChart from "./components/PieChart";
// import { UserData } from "./Data";
import { dataForChart } from "../Components/Constants";


const DashBoardItems=()=> {
  const [userData, setUserData] = useState({
    labels: dataForChart.map((data) => data.month),
    datasets: [
      {
        label: "Users Gained",
        data: dataForChart.map((data) => data.orders),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  // IF YOU SEE THIS COMMENT: I HAVE GOOD EYESIGHT

  return (
    <div className="App">
      <div style={{ width: 700 }}>
        <BarChart chartData={userData} />
      </div>
      {/* <div style={{ width: 700 }}>
        <LineChart chartData={userData} />
      </div> */}
      {/* <div style={{ width: 700 }}>
        <PieChart chartData={userData} />
      </div> */}
    </div>
  );
}

export default DashBoardItems;