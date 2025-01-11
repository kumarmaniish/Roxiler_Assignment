const express = require('express');
const { getTransactions } = require('../controllers/listOfTransactionController');

const router = express.Router();

// Route to get all transactions with search and pagination
router.get('/transactions', getTransactions);

module.exports = router;