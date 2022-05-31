const express = require('express')
const router = express.Router()

const { homePage, productsPage, productPage, cartPage, checkoutPage } = require('../controllers/user/userController')

router.get('/', homePage)
router.get('/products', productsPage)
router.get(`/product/`, productPage)
router.get('/cart', cartPage)
router.get('/checkout', checkoutPage)

module.exports = { userRoutes: router }