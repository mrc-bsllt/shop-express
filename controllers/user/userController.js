const Product = require('../../models/Product')
const Cart = require('../../models/Cart')

const homePage = (req, res, next) => {
  res.render('user/home-page', { path: 'homepage' })
}

const productsPage = (req, res, next) => {
  Product.getProducts(products => {
    res.render('user/products', { products, path: 'user-products' })
  })
}

const productPage = (req, res, next) => {
  const id = +req.params.id
  Product.getProductById(id, (product) => {
    res.render('user/product', { product, path: product.title })
  })
}

const cartPage = (req, res, next) => {
  res.render('user/cart', { path: 'cart' })
}
const cartPost = (req, res, next) => {
  const id = +req.body.product_id
  Product.getProductById(id, (product) => {
    Cart.addToCart(product)
    res.render('user/cart', { path: 'cart' })
  })
}

const checkoutPage = (req, res, next) => {
  res.render('user/checkout', { path: 'checkout' })
}

const ordersPage = (req, res, next) => {
  res.render('user/orders', { path: 'orders' })
}

module.exports = { homePage, productsPage, productPage, cartPage, cartPost, checkoutPage, ordersPage }