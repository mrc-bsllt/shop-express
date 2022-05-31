const express = require('express')
const router = express.Router()

const { homePage, 
        productsPage, 
        productPage, 
        cartPage, 
        cartPost,
        checkoutPage, 
        ordersPage } = require('../controllers/user/userController')

router.get('/', homePage)
router.get('/products', productsPage)
router.get(`/products/:id`, productPage)
router.get('/cart', cartPage)
router.post('/cart', cartPost)
router.get('/checkout', checkoutPage)
router.get('/orders', ordersPage)

module.exports = { userRoutes: router }