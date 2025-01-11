import React, { useState } from 'react';
import TransactionTable from '../components/TransactionTable';
import TransactionStats from '../components/TransactionStats';
import Chart from '../components/Chart';

const Dashboard = () => {
  const [selectedMonth, setSelectedMonth] = useState('03');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const handleSearchChange = (e) => setSearchQuery(e.target.value);
  const handleMonthChange = (e) => setSelectedMonth(e.target.value);
  const handlePageChange = (direction) => {
    setCurrentPage(direction === 'next' ? currentPage + 1 : currentPage - 1);
  };

  return (
    <div>
      <select value={selectedMonth} onChange={handleMonthChange}>
        <option value="01">Jan</option>
        <option value="02">Feb</option>
        <option value="03">Mar</option>
        <option value="04">Apr</option>
        <option value="05">May</option>
        <option value="06">Jun</option>
        <option value="07">Jul</option>
        <option value="08">Aug</option>
        <option value="09">Sep</option>
        <option value="10">Oct</option>
        <option value="11">Nov</option>
        <option value="12">Dec</option>
      </select>
      <input
        type="text"
        placeholder="Search Transactions"
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <br />
      <br />      
      <TransactionStats selectedMonth={selectedMonth} />
      <br />
      <br />
      <TransactionTable
        selectedMonth={selectedMonth}
        searchQuery={searchQuery}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
      <Chart selectedMonth={selectedMonth} />
      <br />
      <br />
    </div>
  );
};

export default Dashboard;
