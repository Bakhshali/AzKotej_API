const { default: mongoose } = require("mongoose")

const guestScheme = new mongoose.Schema({
    person: {
        type:Number
    },
    homes:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"home"
        }
    ]
})

const Guest = new mongoose.model("guestSch", guestScheme)

module.exports = { Guest }