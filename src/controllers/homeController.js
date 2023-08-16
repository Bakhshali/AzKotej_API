const { HomeSch } = require("../models/home")

const homeController = {
    add: (req, resp) => {
        const newHome = new HomeSch({
            name: req.body.name,
            price: req.body.price,
            address: req.body.address,
            phone: req.body.phone,
            area: req.body.area,
            latitude: req.body.latitude,
            longtitude: req.body.longtitude,
        })

        newHome.save();
        resp.json(newHome);
    }

}

module.exports = { homeController }
