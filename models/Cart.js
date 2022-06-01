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

  static deleteProduct(id) {
    fs.readFile(p, (error, content) => {
      if(error) return

      const cart = JSON.parse(content)
      const indexToDelete = cart.products.findIndex(product => product.id === id)
      if(indexToDelete < 0) return 

      const productToDelete = cart.products[indexToDelete]
      cart.totalValue -= productToDelete.price * productToDelete.quantity
      cart.products.splice(indexToDelete, 1)
      fs.writeFile(p, JSON.stringify(cart), (error) => {
        console.log(error)
      })
    })
  }
}