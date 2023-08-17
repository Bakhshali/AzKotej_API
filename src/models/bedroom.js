const { default: mongoose, model } = require("mongoose")

const bedroomScheme = mongoose.Schema({
    room: {
        type:Number
    },
    homes:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"home"
        }
    ]
})

const Bedroom = new mongoose.model("bedSch", bedroomScheme)

module.exports = { Bedroom }