const { db } = require("./src/conf/db");
const express = require("express");
const { userRoutes } = require("./src/routes/userRoute");
const { homeRoutes } = require("./src/routes/homeRoute");
const { regionRootes } = require("./src/routes/regionRoute");
const app = express()

app.use(express.json())

db.connect()

app.use('/api/userphn', userRoutes)
app.use('/api', homeRoutes)
app.use('/api', regionRootes)

app.listen(7777, () => {
    console.log('Server is running...');
})
