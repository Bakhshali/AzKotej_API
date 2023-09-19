const { HomeSch } = require("../models/home")

const homeController = {
    add: (req, resp) => {
        const newHome = new HomeSch({
            price: req.body.price,
            address: req.body.address,
            phone: req.body.phone,
            area: req.body.area,
            latitude: req.body.latitude,
            longtitude: req.body.longtitude,
            rent: req.body.rent,
            region: req.body.region,
            photos: req.body.photos,
            description: req.body.description,
            category: req.body.category,
            maxGuest: req.body.maxGuest,
            land: req.body.land,
            roomCount: req.body.roomCount,
            bathRoom: req.body.bathRoom,
            bedRoom: req.body.bedRoom,
        })

        newHome.save();
        resp.json(newHome);
    },
    homedelete: (req, resp) => {
        HomeSch.findByIdAndDelete(req.params.id).then(data => {
            resp.status(200).send(data)
        }).catch(err => {
            resp.status(500).send({ "msg": "Couldnt deleted" });
        })
    },
    gethome: (req, resp) => {
        HomeSch.find()
            .then((data) => {
                resp.json(data)
            })
            .catch((error) => {
                resp.status(500).json(error);
            })
    }

}

module.exports = { homeController }
