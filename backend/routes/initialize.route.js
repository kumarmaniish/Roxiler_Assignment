const express = require("express");
const router = express.Router();
const { initializeDatabase } = require("../controllers/initializeController");

// POST route to initialize database with seed data
router.post("/initialize-database", initializeDatabase);


module.exports = router;

