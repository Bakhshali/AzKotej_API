const express = require('express');
const { userController } = require('../controllers/userController');

const userRoutes = express.Router()

userRoutes.post("/phauth", userController.auth)

module.exports = { userRoutes }