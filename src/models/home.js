const { default: mongoose } = require("mongoose")

const homeScheme = new mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    price: {
        type:Number,
        min:0
    },
    address: {
        type:String,
        required:true
    },
    phone: {
        type:Number
    },
    area: {
        type:Number,
        min:0
    },
    latitude: {
        type:Number
    },
    longtitude: {
        type:Number
    },
    photos:{
        type:[String]
    },
    description:{
        type:String,
        required:true
    },
    createdAt: { type: Date, default: Date.now }

})

const HomeSch = new mongoose.model("homeSch", homeScheme)

module.exports = { HomeSch }