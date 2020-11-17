const mongoose = require("mongoose");
const express = require("express");
const app = express()
require("dotenv").config();
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const cors = require("cors")

mongoose.connect(process.env.DATABASE,
    {
        useNewUrlParser : true,
        useUnifiedTopology: true,
        useCreateIndex: true
    }
).then(() => {
    console.log("DB CONNECTED");
})

app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

app.get('/trialapi',(req,res)=>{
    res.json({
        name: "Udit"
    })
})

const PORT = parseInt(process.env.PORT);
app.listen(PORT,() => {
    console.log(`App running at ${PORT} ....`)
})