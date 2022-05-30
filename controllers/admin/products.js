const products = []

const addProduct = (req, res, next) => {
  const newProduct = req.body
  products.push({ title: newProduct, price: '19,99€', createdAt: new Date, updatedAt: new Date })
  res.redirect('/')
}

const getProducts = (req, res, next) => {
  res.render('admin/products', { products, path: 'products' })
}

module.exports = { addProduct, getProducts, products }