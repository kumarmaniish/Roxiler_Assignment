const axios=require("axios");
const Transaction = require("../models/transaction.models");

const asyncHandler=require("express-async-handler");

const initializeDatabase=asyncHandler(async(req,res)=>{
    const apiUrl=process.env.THIRD_PARTY_API_URL;
     
    const response=await axios.get(apiUrl);
    const transactions=response.data;

    if(!Array.isArray(transactions)){
        return res.status(400).json({message:"Invalid data format from API"});
    }

    await Transaction.deleteMany();
    await Transaction.insertMany(transactions);

    res.status(200).json({message:"Database Initialize successfully" });
});


module.exports={initializeDatabase}