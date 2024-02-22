require('dotenv').config()


const express = require('express')
const mongoose = require('mongoose')
const postRoutes = require('./routes/posts')


/* Express app */
const app = express()


/* Middleware */
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

/* Routes */
app.use('/api/posts', postRoutes)

/* Connect to db */
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('connected to db and listening on port', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })
