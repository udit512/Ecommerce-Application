const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var variantSchema = new Schema({
    _id : Schema.Types.ObjectId,
    name : String,
    values : [String],
});

module.exports = mongoose.model("Variant",variantSchema);