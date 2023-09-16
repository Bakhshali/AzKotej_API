const express = require('express');
const { homeController } = require('../controllers/homeController');

const homeRoutes = express.Router()

homeRoutes.post("/homeadd", homeController.add)
homeRoutes.get("/gethome", homeController.gethome)
homeRoutes.delete("/homedelete/:id", homeController.homedelete)

module.exports = { homeRoutes }