const express=require("express");
const bodyParser=require("body-parser");
const connectDB = require("./config/dbConnection.config");
const initializeRoutes = require("./routes/initialize.route");
const transactionMonthRoutes = require("./routes/transactionMonth.route");
const listOfTransactionRoutes=require("./routes/listOfTransaction.route");
const statisticsRoutes=require("./routes/statistics.route");
const {bargraphRoutes, piechartRoutes}=require("./routes/chart.route");
const combinedTransaction=require('./controllers/combinedTransaction');
const errorHandler=require("./middleware/errorHandler");
const cors=require("cors");
  
// .env file connection
require('dotenv').config();
//database connection
connectDB()

const app=express();

// port
const port=process.env.PORT || 4000;

// middleware to handle incomming request
app.use(bodyParser.json());

// error handling middleware
app.use(errorHandler)

// connect backend to frontend
app.use(cors());

//Routes
// task 1 -> initialize database
app.use("/api",initializeRoutes);

//task 2 -> for months
app.use('/api/transactions',transactionMonthRoutes);

//task 3 -> list of transactions
app.use('/api/listOfTransaction', listOfTransactionRoutes);

//task 4 -> statistics routes
app.use('/api/statistics', statisticsRoutes);

// task 5 -> bargraph 
app.use('/api/chart',bargraphRoutes);

// task 6 -> piechart
app.use('/api/charts',piechartRoutes);

//task 7 -> combined 
app.use('/api/combined', combinedTransaction)


// created server and listen at port 3000
app.listen(port, ()=>{
    console.log(`Server is listening at http://localhost:${port}`);
})


