const fs = require('fs')
const path = require('path')
const rootDir = require('../utils/path')

const p = path.join(rootDir, 'data', 'products.json')

module.exports = class Product {
  constructor(title) {
    this.title = title
    this.price = '19,99€'
    this.createdAt = new Date()
    this.updatedAt = new Date()
  }

  save() {
    let products = []
    fs.readFile(p, (err, content) => {
      if(!err) {
        products = JSON.parse(content)
      }

      products.push(this)
      fs.writeFile(p, JSON.stringify(products), (error) => {
        console.log(error)
      })
    })

    products.push(this)
  }

  static getProducts(cb) {
    fs.readFile(p, (err, content) => {
      if(err) {
        cb([])
      }

      cb(JSON.parse(content))
    })
  }
}