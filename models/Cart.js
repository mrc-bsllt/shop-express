const fs = require('fs')
const path = require('path')
const rootDir = require('../utils/path')

const p = path.join(rootDir, 'data', 'cart.json')

module.exports = class Cart {
  static addToCart(product) {
    let cart = { products: [], totalValue: 0 }

    fs.readFile(p, (error, content) => {
      if(!error) {
        cart = JSON.parse(content)
      }

      const existingProduct = cart.products.find(el => el.id === product.id)
      if(existingProduct) {
        const existingProductIndex = cart.products.findIndex(el => el.id === product.id)
        cart.products[existingProductIndex].quantity++
      } else {
        cart.products.push({ ...product, quantity: 1 })
      }

      cart.totalValue += product.price

      fs.writeFile(p, JSON.stringify(cart), (error) => {
        console.log(error)
      })
    })
  }
}