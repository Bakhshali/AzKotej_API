const { default: mongoose, model } = require("mongoose")

const bathroomScheme = mongoose.Schema({
    room:{
        type:Number
    },
    homes:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"home"
        }
    ]
})

const Bathroom = new mongoose.model("bathSch",bathroomScheme)

module.exports = {Bathroom}