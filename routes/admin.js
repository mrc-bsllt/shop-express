const express = require('express')
const router = express.Router()

const { addProduct, 
        addProductPage, 
        productsPage } = require('../controllers/admin/adminController')

router.post('/add-product', addProduct)
router.get('/add-product', addProductPage)
router.get('/products', productsPage)

module.exports = { adminRoutes: router }