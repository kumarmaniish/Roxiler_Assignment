const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
    id:{
        type:Number,
        required: [true,"Please add a id"],
    },
    title:{
        type:String,
        required: [true,"Please add a product name"],
    },
    price:{
        type:Number,
        required: [true,"Please add a price"],
    },
    description:{
        type:String,
        required:[true, "Enter valid description"],
    },
    category:{
        type:String,
        required: true,
    },
    dateOfSale:{
        type:Date,
        required:true,
    },    
    sold:{
        type:Boolean,
        required:true,
    }
},
{
    timestamps:true
});

module.exports=mongoose.model("Transaction",transactionSchema);