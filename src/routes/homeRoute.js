const express = require('express');
const { homeController } = require('../controllers/homeController');

const homeRoutes = express.Router()

homeRoutes.post("/homeadd", homeController.add)

module.exports = { homeRoutes }