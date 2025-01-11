const asyncHandler = require('express-async-handler');
const Transaction = require('../models/transactionModel');

const getTransactions = asyncHandler(async (req, res) => {
    const { search = '', page = 1, perPage = 10 } = req.query;

    const skip = (page - 1) * perPage;
    const searchRegex = new RegExp(search, 'i');

    const transactions = await Transaction.find({
        $or: [
            { title: { $regex: searchRegex } },
            { description: { $regex: searchRegex } },
            { price: { $regex: searchRegex } }
        ]
    })
    .skip(skip)
    .limit(parseInt(perPage));

    const totalTransactions = await Transaction.countDocuments({
        $or: [
            { title: { $regex: searchRegex } },
            { description: { $regex: searchRegex } },
            { price: { $regex: searchRegex } }
        ]
    });

    res.status(200).json({
        totalTransactions,
        transactions,
        totalPages: Math.ceil(totalTransactions / perPage),
        currentPage: parseInt(page),
        perPage: parseInt(perPage)
    });
});

module.exports = { getTransactions };
