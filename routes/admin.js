const express = require('express')
const router = express.Router()

const { addProduct } = require('../controllers/admin/products')

router.post('/admin/add-product', addProduct)
module.exports = { adminRoutes: router }