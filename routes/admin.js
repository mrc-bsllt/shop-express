const express = require('express')
const router = express.Router()

const { addProduct, 
        addProductPage, 
        editProductPage,
        editProduct,
        productsPage } = require('../controllers/admin/adminController')

router.post('/add-product', addProduct)
router.get('/add-product', addProductPage)

router.get('/edit/:id', editProductPage)
router.post('/edit-product', editProduct)

router.get('/products', productsPage)

module.exports = { adminRoutes: router }