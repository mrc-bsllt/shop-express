const express = require('express')
const router = express.Router()

const { addProduct, getProducts } = require('../controllers/admin/products')

router.post('/add-product', addProduct)
router.get('/products', getProducts)

module.exports = { adminRoutes: router }