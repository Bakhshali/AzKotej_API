const { default: mongoose } = require("mongoose")

const userScheme = new mongoose.Schema({
    phone: String,
    code: String
})

const PhoneUser = new mongoose.model("UserAuthen", userScheme)

module.exports = { PhoneUser }