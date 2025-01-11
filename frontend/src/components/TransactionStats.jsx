import React, { useState, useEffect } from 'react';
// import { fetchStatistics } from '../services/statisticsApi';

const TransactionStats = ({ selectedMonth }) => {
  const [stats, setStats] = useState({ totalSales: 0, totalSold: 0, totalNotSold: 0 });

  // useEffect(() => {
  //   fetchStatistics(selectedMonth).then(data => setStats(data));
  // }, [selectedMonth]);

  return (
    <div>
      <p>Total Sales: {stats.totalSales}</p>
      <p>Total Sold Items: {stats.totalSold}</p>
      <p>Total Not Sold Items: {stats.totalNotSold}</p>
    </div>
  );
};

export default TransactionStats;
