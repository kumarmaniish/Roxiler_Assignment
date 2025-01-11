const moment = require('moment');
const asyncHandler = require('express-async-handler');
const Transaction = require('../models/transaction.models');

// Controller to get transactions by month (ignoring the year and time zone)
const getTransactionsByMonth = asyncHandler(async (req, res) => {
    const { month } = req.params;

    const months = [
        'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
        'September', 'October', 'November', 'December'
    ];

    if (!months.includes(month)) {
        return res.status(400).json({ error: 'Invalid month' });
    }

    const monthIndex = months.indexOf(month);

    // Fetch transactions where the month part of dateOfSale matches the provided month
    const transactions = await Transaction.find({
        dateOfSale: {
            $gte: new Date(new Date().getFullYear(), monthIndex, 1),  // First day of the given month
            $lt: new Date(new Date().getFullYear(), monthIndex + 1, 0)  // Last day of the given month
        }
    });
    res.status(200).json(transactions);
});

module.exports = { getTransactionsByMonth };
