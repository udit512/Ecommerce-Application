const mongoose = require("mongoose");
const { schema } = require("./user");
const Schema = mongoose.Schema;

var categorySchema = new Schema({
    _id : Schema.Types.ObjectId,
    name : String
});

module.exports = mongoose.model("Category",categorySchema);