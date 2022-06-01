const Product = require('../../models/Product')

// Add product POST
const addProduct = (req, res, next) => {
  const product = new Product(req.body)
  product.save()

  res.redirect('/products')
}

// GET add product form page
const addProductPage = (req, res, next) => {
  res.render('admin/add-product', { path: 'add-product' })
}

// GET edit product page
const editProductPage = (req, res, next) => {
  const id = +req.params.id
  Product.getProductById(id, product => {
    res.render('admin/edit-product', { product, path: 'edit-product' })
  })
}
// POST edit product
const editProduct = (req, res, next) => {
  req.body.id = +req.body.id
  if(typeof req.body.price === 'string') {
    req.body.price = +req.body.price
  }
  
  const editedProduct = { ...req.body, updatedAt: new Date() }
  Product.editProduct(editedProduct, () => {
    res.redirect('/admin/products')
  })
}

// GET admin products list
const productsPage = (req, res, next) => {
  Product.getProducts(products => {
    res.render('admin/products', { products, path: 'admin-products' })
  })
}

// POST delete product
const deleteProduct = (req, res, next) => {
  const id = +req.body.id
  Product.deleteProduct(id, () => {
    res.redirect('/admin/products')
  })
}

module.exports = { addProduct, addProductPage, editProductPage, editProduct, productsPage, deleteProduct }