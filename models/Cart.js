const fs = require('fs')
const path = require('path')
const rootDir = require('../utils/path')

const p = path.join(rootDir, 'data', 'cart.json')

module.exports = class Cart {
  static addToCart(id, price) {
    let cart = { products: [], totalValue: 0 }

    fs.readFile(p, (error, content) => {
      if(!error) {
        cart = JSON.parse(content)
      }

      const existingProduct = cart.products.find(el => el.id === id)
      if(existingProduct) {
        const existingProductIndex = cart.products.findIndex(el => el.id === id)
        cart.products[existingProductIndex].quantity++
      } else {
        cart.products.push({ id, quantity: 1 })
      }

      cart.totalValue += price
      
      fs.writeFile(p, JSON.stringify(cart), (error) => {
        console.log(error)
      })
    })
  }
}