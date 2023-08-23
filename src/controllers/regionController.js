const { Region } = require("../models/region")

const regionController = {
    add: (req, resp) => {
        const newRegion = new Region({
            name: req.body.name,
            image: req.body.image
        })

        newRegion.save();
        resp.json(newRegion);
    },
    get: (req, resp) => {
        Region.find()
            .then((data) => {
                resp.json(data)
            })
            .catch((error) => {
                resp.status(500).json(error);
            })
    }

}

module.exports = { regionController }
