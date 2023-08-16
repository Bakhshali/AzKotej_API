const { default: mongoose, model } = require("mongoose")

const bathroomScheme = mongoose.Schema({
    room:Number
})

const Bathroom = new mongoose.model("bathSch",bathroomScheme)

module.exports = {Bathroom}