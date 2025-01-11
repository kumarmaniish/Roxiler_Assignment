const asyncHandler = require('express-async-handler');
const Transaction = require('../models/transactionModel');
const moment = require('moment');

const getStatistics = asyncHandler(async (req, res) => {
    const { month } = req.query;
    const monthNumber = moment().month(month).month(); // Get the month number based on month name

    const startOfMonth = moment().month(monthNumber).startOf('month').startOf('day').toDate();
    const endOfMonth = moment().month(monthNumber).endOf('month').endOf('day').toDate();

    // Total Sale Amount
    const totalSaleAmount = await Transaction.aggregate([
        { $match: { dateOfSale: { $gte: startOfMonth, $lt: endOfMonth } } },
        { $group: { _id: null, totalSale: { $sum: '$price' } } }
    ]);

    // Total Sold Items
    const soldItems = await Transaction.countDocuments({
        dateOfSale: { $gte: startOfMonth, $lt: endOfMonth },
        sold: true // Assuming `sold` field tracks whether an item was sold
    });

    // Total Not Sold Items
    const notSoldItems = await Transaction.countDocuments({
        dateOfSale: { $gte: startOfMonth, $lt: endOfMonth },
        sold: false
    });

    res.status(200).json({
        totalSaleAmount: totalSaleAmount[0]?.totalSale || 0,
        totalSoldItems: soldItems,
        totalNotSoldItems: notSoldItems
    });
});

module.exports = { getStatistics };
