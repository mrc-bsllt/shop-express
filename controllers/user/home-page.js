const Product = require('../../models/Product')

const getHomePage = (req, res, next) => {
  Product.getProducts(products => {
    res.render('user/home-page', { products, path: 'homepage' })
  })
}

module.exports = { getHomePage }