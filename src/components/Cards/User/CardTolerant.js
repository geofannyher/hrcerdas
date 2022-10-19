import React from 'react'
import PieChart from '../Charts/ChartTolerant';


function CardTolerant() {
    const data = {
        labels: [
          'Intolerant',
          'Tolerant',
          
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [30, 70],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            
          ],
          hoverOffset: 4
        }]
      };

  return (
    <div className="App">
      <div className="relative flex flex-col min-w-0 break-words w-full mb-30 mt-8 shadow-md rounded p-4">
        <PieChart chartData={data} />
      </div>
    </div>
  )
}

export default CardTolerant