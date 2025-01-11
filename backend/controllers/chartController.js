const asyncHandler = require('express-async-handler');
const Transaction = require('../models/transaction.models');
const moment = require('moment');


// for bar graph
const getBarChartData = asyncHandler(async (req, res) => {
    const { month } = req.query;
    const monthNumber = moment().month(month).month();

    const startOfMonth = moment().month(monthNumber).startOf('month').startOf('day').toDate();
    const endOfMonth = moment().month(monthNumber).endOf('month').endOf('day').toDate();

    const priceRanges = [
        { min: 0, max: 100 },
        { min: 101, max: 200 },
        { min: 201, max: 300 },
        { min: 301, max: 400 },
        { min: 401, max: 500 },
        { min: 501, max: 600 },
        { min: 601, max: 700 },
        { min: 701, max: 800 },
        { min: 801, max: 900 },
        { min: 901, max: Infinity }
    ];

    const barChartData = await Promise.all(priceRanges.map(async (range) => {
        const count = await Transaction.countDocuments({
            price: { $gte: range.min, $lte: range.max },
            dateOfSale: { $gte: startOfMonth, $lt: endOfMonth }
        });
        return {
            range: `${range.min}-${range.max}`,
            count
        };
    }));

    res.status(200).json(barChartData);
});


// for pie chart
const getPieChartData = asyncHandler(async (req, res) => {
    const { month } = req.query;
    const monthNumber = moment().month(month).month();

    const startOfMonth = moment().month(monthNumber).startOf('month').startOf('day').toDate();
    const endOfMonth = moment().month(monthNumber).endOf('month').endOf('day').toDate();

    const categoryData = await Transaction.aggregate([
        { $match: { dateOfSale: { $gte: startOfMonth, $lt: endOfMonth } } },
        { $group: { _id: '$category', count: { $sum: 1 } } }
    ]);

    const pieChartData = categoryData.map(item => ({
        category: item._id,
        count: item.count
    }));

    res.status(200).json(pieChartData);
});


module.exports = { getBarChartData, getPieChartData };
