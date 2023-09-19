const { default: mongoose, model } = require("mongoose")

const regionScheme = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String
        // data: Buffer,
        // contentType:String
    }
}, { timestamps: true })

const Region = new mongoose.model("regionSch", regionScheme)

module.exports = { Region }