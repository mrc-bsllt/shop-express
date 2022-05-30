const express = require('express')
const router = express.Router()

const { getHomePage } = require('../controllers/user/home-page')

//Home Page
router.get('/', getHomePage)

module.exports = { userRoutes: router }