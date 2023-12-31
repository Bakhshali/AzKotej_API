const { default: mongoose } = require("mongoose")

const categoryScheme = new mongoose.Schema({
    name: {
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

const Category = new mongoose.model("categorySch", categoryScheme)

module.exports = { Category }