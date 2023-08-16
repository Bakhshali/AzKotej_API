const { default: mongoose } = require("mongoose")

const guestScheme = new mongoose.Schema({
    person: Number
})

const Guest = new mongoose.model("guestSch", guestScheme)

module.exports = { Guest }