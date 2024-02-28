require('dotenv').config()


const express = require('express')
const mongoose = require('mongoose')
const postRoutes = require('./routes/posts')
const userRoutes = require('./routes/user')


/* Express app */
const app = express()


/* Middleware */
app.use(express.json())


/* Routes */
app.use('/api/posts', postRoutes);
app.use('/api/user', userRoutes);

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
