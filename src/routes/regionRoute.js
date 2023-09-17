const express = require('express');
const { regionController } = require('../controllers/regionController');

const regionRootes = express.Router()

const upload = require("../middleware/upload")

regionRootes.post("/regionadd", upload.single("image"),regionController.add)

regionRootes.get("/getregion", regionController.get)

regionRootes.delete("/deleteregion/:id", regionController.delete)

module.exports = { regionRootes }