const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.set('view engine', 'ejs')


const { userRoutes } = require('./routes/user')
app.use(userRoutes)

app.listen(3000)