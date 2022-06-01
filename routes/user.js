const express = require('express')
const router = express.Router()

const { homePage, 
        productsPage, 
        productPage, 
        cartPage, 
        cartPost,
        cartRemove,
        checkoutPage, 
        ordersPage } = require('../controllers/user/userController')

router.get('/', homePage)

router.get('/products', productsPage)
router.get(`/products/:id`, productPage)

router.get('/cart', cartPage)
router.post('/cart', cartPost)
router.post('/cart/remove', cartRemove)

router.get('/checkout', checkoutPage)

router.get('/orders', ordersPage)

module.exports = { userRoutes: router }