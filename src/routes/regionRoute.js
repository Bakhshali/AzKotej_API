const express = require('express');
const { regionController } = require('../controllers/regionController');

const regionRootes = express.Router()

regionRootes.post("/regionadd", regionController.add)
regionRootes.get("/getregion", regionController.get)

module.exports = { regionRootes }