import React, { useState, useEffect } from 'react';
// import { fetchTransactions } from '../services/transactionApi';

const TransactionTable = ({ selectedMonth, searchQuery, currentPage, onPageChange }) => {
  const [transactions, setTransactions] = useState([]);

  // useEffect(() => {
  //   fetchTransactions(selectedMonth, searchQuery, currentPage).then(data => setTransactions(data.transactions));
  // }, [selectedMonth, searchQuery, currentPage]);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td>{transaction.description}</td>
              <td>{transaction.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => onPageChange('previous')}>Previous</button>
      <button onClick={() => onPageChange('next')}>Next</button>
    </div>
  );
};

export default TransactionTable;
