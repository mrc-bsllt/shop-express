const Product = require('../../models/Product')

const homePage = (req, res, next) => {
  res.render('user/home-page', { path: 'homepage' })
}

const productsPage = (req, res, next) => {
  Product.getProducts(products => {
    res.render('user/products', { products, path: 'user-products' })
  })
}

const cartPage = (req, res, next) => {
  res.render('user/cart', { path: 'cart' })
}

module.exports = { homePage, productsPage, cartPage }