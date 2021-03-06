const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var variantSchema = new Schema({
    variant : {
        type : Schema.Types.ObjectId,
        ref : "Variant"
    },
    value : String
})

var productSchema = new Schema({
    _id : Schema.Types.ObjectId,
    product_name : {
        type: String ,
        required : true,
        trim : true
    },
    product_head_description : {
        type: String,
        required: true,
    },
    product_description : {
        type : String
    },
    product_highligts : [{type : String}],
    stock : Number,
    product_category : {
        type: Schema.Types.ObjectId,
        ref : "Category"
    },
    product_variant : [variantSchema],
    sold : Number,
    product_number_carts : Number,
    price : Decimal128,
    product_min_order : Number,
    //TODO: Add image in DB
    product_images : {
        type : String
    }
});

module.exports = mongoose.model("Product",productSchema);