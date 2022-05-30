const products = []

const addProduct = (req, res, next) => {
  const newProduct = req.body
  products.push({ title: newProduct, price: '19,99€', createdAt: new Date, updatedAt: new Date })
  res.redirect('/')
}

module.exports = { addProduct, products }