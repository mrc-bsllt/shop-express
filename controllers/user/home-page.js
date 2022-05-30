const Product = require('../../models/Product')

const getHomePage = (req, res, next) => {
  const products = Product.getProducts()
  res.render('user/home-page', { products, path: 'homepage' })
}

module.exports = { getHomePage }