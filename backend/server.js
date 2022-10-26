const express = require('express')
const app = express()
const cors = require('cors') 
const mongoose = require('mongoose')
const CurseModel = require("./model/Curse")
require("dotenv").config()

app.use(express.json({limit:"1mb"}))
app.use(express.urlencoded({ limit: '1mb', extended: false }))
app.use(cors())

try {
    mongoose.connect(`${process.env.MONGO_URI}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(()=>{
        console.log("connected")
    }).catch(()=>{
        console.log("fail")
    })
} catch (err) {
    process.exit(1)
}

app.post("/",async (req,res) => {
    const {text} = req.body
    const query = new CurseModel({text:text})
    query.save()
    res.send(query)
})

app.get("/",async (req,res) => {
    const query = await CurseModel.find()
    const randQuery = query[Math.floor(Math.random() * (query.length))]
    res.send(randQuery)
})

app.listen(3002)

