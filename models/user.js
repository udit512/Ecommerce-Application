const mongoose = require("mongoose");
const uuidv4 = require("uuid");
const crypto = require("crypto")
const Schema = mongoose.Schema;

var productCartSchema = new Schema({
    product : {
        type :Schema.Types.ObjectId,
        ref : "Product"
    },
    count : Number,
    price : Number
});

var userSchema = new Schema({
    _id : mongoose.ObjectId,
    name : {
        type: String,
        required : true,
        trim : true
    },
    email : {
        type: String,
        required : true,
        trim : true,
        unique : true
    },
    salt : String,
    encryp_password : {
        type : String ,
        required : true
    },
    // TODO: After the order and product schema is made
    purchases : [{type : Schema.Types.ObjectId,ref : "Order"}],
    cart : [productCartSchema],
    role : {
        type : Number,
        default : 0
    }
});

userSchema.virtual("password")
        .set(function(password){
            this._password = password;
            this.salt = uuidv4();
            this.encryp_password = this.securePassword(password)
        })
        .get(function(){
            return this._password;
        });

userSchema.method = {

    authenticate : function(plainpassword){
        return this.securePassword(plainpassword) === this.encryp_password
    },
    securePassword : function(plainPassword){

        if(!plainPassword)
            return "";

        try{
            return crypto.createHmac("sha256",this.salt)
                .update(plainPassword)
                .digest("hex")
        }catch(err){
            return "Error"
        }
        
    }
}

module.exports = mongoose.model("User",userSchema);