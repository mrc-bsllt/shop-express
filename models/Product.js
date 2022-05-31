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
  constructor(title) {
    this.title = title
    this.price = '19,99€'
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
}