const express = require('express');
const {getTransactionsByMonth} = require('../controllers/transactionMonthController');

const router = express.Router();

// Route to get transactions by month
router.get('/month/:month', getTransactionsByMonth);

module.exports = router;