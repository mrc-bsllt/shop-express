const Product = require('../../models/Product')

const homePage = (req, res, next) => {
  res.render('user/home-page', { path: 'homepage' })
}

const productsPage = (req, res, next) => {
  Product.getProducts(products => {
    res.render('user/products', { products, path: 'user-products' })
  })
}

const productPage = (req, res, next) => {
  res.render('user/product', { path: 'product' })
}

const cartPage = (req, res, next) => {
  res.render('user/cart', { path: 'cart' })
}

const checkoutPage = (req, res, next) => {
  res.render('user/checkout', { path: 'checkout' })
}

const ordersPage = (req, res, next) => {
  res.render('user/orders', { path: 'orders' })
}

module.exports = { homePage, productsPage, productPage, cartPage, checkoutPage, ordersPage }