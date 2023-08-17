const { default: mongoose, model } = require("mongoose")

const regionScheme = mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    homes:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"home"
        }
    ]
})

const Region = new mongoose.model("regionSch", regionScheme)

module.exports = { Region }