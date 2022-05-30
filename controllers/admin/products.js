const Product = require('../../models/Product')

const addProduct = (req, res, next) => {
  const product = new Product(req.body.title)
  product.save()

  res.redirect('/')
}

const getProducts = (req, res, next) => {
  const products = Product.getProducts()
  res.render('admin/products', { products, path: 'products' })
}

module.exports = { addProduct, getProducts }