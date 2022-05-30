const { products } = require('../admin/products')

const getHomePage = (req, res, next) => {
  res.render('user/home-page', { products, path: 'homepage' })
}

module.exports = { getHomePage }