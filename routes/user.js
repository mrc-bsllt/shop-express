const express = require('express')
const router = express.Router()

const { homePage, productsPage, cartPage } = require('../controllers/user/userController')

router.get('/', homePage)
router.get('/products', productsPage)
router.get('/cart', cartPage)
module.exports = { userRoutes: router }