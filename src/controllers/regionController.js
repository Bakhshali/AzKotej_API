const { Region } = require("../models/region")

const regionController = {
    add: (req, resp) => {
        const newRegion = new Region({
            name: req.body.name,
            image:{
                data:req.file.filename,
                contentType:"image/png"
            }
        })
        newRegion.save()
        .then(resp=>{
            resp.json({
                message:"Region added successfully!"
            })
        })
        .catch(error=>{
            resp.json({
                message:"An Error Occured!"
            })
        })
    },
    get: (req, resp) => {
        Region.find()
            .then((data) => {
                resp.json(data)
            })
            .catch((error) => {
                resp.status(500).json(error);
            })
    },
    delete: (req, resp) => {
        Region.findByIdAndDelete(req.params.id).then(data => {
            resp.status(200).send(data)
        }).catch(err => {
            resp.status(500).send({ "msg": "Couldnt deleted" });
        })
    }

}

module.exports = { regionController }
