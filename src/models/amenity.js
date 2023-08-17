const { default: mongoose } = require("mongoose")

const amenitiyScheme = new mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    image: {
        type:String,
        required:true
    },
    homes:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"home"
        }
    ]

})

const AmenitySch = new mongoose.model("amenitySch", amenitiyScheme)

module.exports = { AmenitySch }