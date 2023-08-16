const { default: mongoose, model } = require("mongoose")

const regionScheme = mongoose.Schema({
    name:String
})

const Region = new mongoose.model("regionSch",regionScheme)

module.exports = {Region}