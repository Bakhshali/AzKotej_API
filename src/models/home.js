const { default: mongoose } = require("mongoose")

const homeScheme = new mongoose.Schema({
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
    // amenities: [
    //     {
    //         type: mongoose.Schema.Types.ObjectId,
    //         ref: "amenity",
    //         required: true
    //     }
    // ],
    regionId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "regionSch"
    },
    photos: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    maxGuest: {
        type: Number
    },
    land: {
        type: Number
    },
    roomCount: {
        type: Number
    },
    bathRoom: {
        type: Number,
    },
    bedRoom: {
        type: Number
    },
    createdAt: { type: Date, default: Date.now }
}, {
    timestamps: true
})

const HomeSch = new mongoose.model("homeSch", homeScheme)

module.exports = { HomeSch }