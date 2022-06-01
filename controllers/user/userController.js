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
  Cart.getCartProducts(cart => {
    res.render('user/cart', { products: cart.products, totalValue: cart.totalValue, path: 'cart' })
  })
}
const cartPost = (req, res, next) => {
  const id = +req.body.product_id
  Product.getProductById(id, (product) => {
    Cart.addToCart(product, cart => {
      res.render('user/cart', { products: cart.products, totalValue: cart.totalValue, path: 'cart' })
    })
  })
}
const cartRemove = (req, res, next) => {
  const id = +req.body.id
  Cart.deleteProduct(id, cart => {
    res.render('user/cart', { products: cart.products, totalValue: cart.totalValue, path: 'cart' })
  })
}

const checkoutPage = (req, res, next) => {
  res.render('user/checkout', { path: 'checkout' })
}

const ordersPage = (req, res, next) => {
  res.render('user/orders', { path: 'orders' })
}

module.exports = { 
  homePage, 
  productsPage, 
  productPage, 
  cartPage, 
  cartPost, 
  cartRemove, 
  checkoutPage, 
  ordersPage 
}