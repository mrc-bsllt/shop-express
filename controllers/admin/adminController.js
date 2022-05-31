const Product = require('../../models/Product')

// Add product POST
const addProduct = (req, res, next) => {
  const product = new Product(req.body)
  product.save()

  res.redirect('/products')
}

// GET add product form page
const addProductPage = (req, res, next) => {
  res.render('admin/add-product', { path: 'add-product' })
}

// GET admin products list
const productsPage = (req, res, next) => {
  Product.getProducts(products => {
    res.render('admin/products', { products, path: 'admin-products' })
  })
}

module.exports = { addProduct, addProductPage, productsPage }