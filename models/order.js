const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Product = require("./product");

var productCartSchema = new Schema({
    product : {
        type :Schema.Types.ObjectId,
        ref : "Product"
    },
    count : Number,
    price : Number
});

var orderSchema = new Schema({
    _id : Schema.Types.ObjectId,
    transaction_id : String,
    products : [productCartSchema],
    //TODO: SET THE ENUM FOR ORDER STATUS
    order_status : {
        type : String,
        default : "Processing",
        enum : ["Pending"]
    },
    order_date : Date,
    update : Date,
    order_address : String,
    user : {
        type : Schema.Types.ObjectId,
        ref : "User"
    },
    order_amount : Number
});