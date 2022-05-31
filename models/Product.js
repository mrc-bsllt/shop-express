const fs = require('fs')
const path = require('path')
const rootDir = require('../utils/path')

const p = path.join(rootDir, 'data', 'products.json')

const getAllProductsFromFile = (callback) => {
  fs.readFile(p, (err, content) => {
    if(err) {
      return callback([])
    }
    callback(JSON.parse(content))
  })
}

module.exports = class Product {
  constructor(prod) {
    this.id = Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000
    this.title = prod.title
    this.image_url = prod.image_url
    this.description = prod.description
    this.price = +prod.price
    this.createdAt = new Date()
    this.updatedAt = new Date()
  }

  save() {
    getAllProductsFromFile(products => {
      products.push(this)
      fs.writeFile(p, JSON.stringify(products), (error) => {
        console.log(error)
      })
    })
  }

  static getProducts(callback) {
    getAllProductsFromFile(callback)
  }

  static getProductById(id, callback) {
    getAllProductsFromFile(products => {
      const product = products.find(prod => prod.id === id)
      callback(product)
    })
  }

  static editProduct(editedProduct) {
    const id = +editedProduct.id
    getAllProductsFromFile(products => {
      const productIndex = products.findIndex(prod => prod.id === id)
      products[productIndex] = editedProduct
      fs.writeFile(p, JSON.stringify(products), (error) => {
        console.log(error)
      })
    })
  }
}