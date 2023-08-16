const { default: mongoose, model } = require("mongoose")

const bedroomScheme = mongoose.Schema({
    room: Number
})

const Bedroom = new mongoose.model("bedSch", bedroomScheme)

module.exports = { Bedroom }