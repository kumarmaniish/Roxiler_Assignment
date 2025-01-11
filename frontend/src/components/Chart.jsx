import React, { useEffect, useState } from 'react';
// import { fetchChartData } from '../services/chartApi';
import { Bar } from 'react-chartjs-2';

const Chart = ({ selectedMonth }) => {
  const [chartData, setChartData] = useState({ labels: [], datasets: [] });

  // useEffect(() => {
  //   fetchChartData(selectedMonth).then(data => {
  //     setChartData({
  //       labels: data.priceRanges,
  //       datasets: [{
  //         label: 'Number of Items',
  //         data: data.itemCounts,
  //         backgroundColor: 'rgba(75, 192, 192, 0.2)',
  //         borderColor: 'rgba(75, 192, 192, 1)',
  //         borderWidth: 1,
  //       }],
  //     });
  //   });
  // }, [selectedMonth]);

  return (
    <div>
      <Bar data={chartData} />
    </div>
  );
};

export default Chart;
