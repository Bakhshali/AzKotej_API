const { default: mongoose } = require("mongoose")

const homeScheme = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        min: 0
    },
    address: {
        type: String,
        required: true
    },
    phone: {
        type: Number
    },
    area: {
        type: Number,
        min: 0
    },
    latitude: {
        type: Number
    },
    longtitude: {
        type: Number
    },
    amenities: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "amenity",
            required:true
        }
    ],
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "category",
        required:true
    },
    regionId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "region",
        required:true
    },
    maxGuestId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "maxGuest",
        required:true
    },
    bedroomId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "bedroom",
        required:true
    },
    bathroomId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "bathroom",
        required:true
    },
    photos:{
        type:[String]
    },
    description:{
        type:String,
        required:true
    },
    createdAt: { type: Date, default: Date.now }

})

const HomeSch = new mongoose.model("homeSch", homeScheme)

module.exports = { HomeSch }