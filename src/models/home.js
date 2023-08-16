const { default: mongoose } = require("mongoose")

const homeScheme = new mongoose.Schema({
    name: String,
    price:Number,
    address:String,
    phone:Number,
    area:Number,
    latitude:Number,
    longtitude:Number,
    createdAt: { type: Date, default: Date.now }

})

const HomeSch = new mongoose.model("homeSch", homeScheme)

module.exports = { HomeSch }