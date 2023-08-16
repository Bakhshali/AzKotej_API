const { default: mongoose } = require("mongoose")

const categoryScheme = new mongoose.Schema({
    name: String
    
})

const Category = new mongoose.model("categorySch", categoryScheme)

module.exports = { Category }