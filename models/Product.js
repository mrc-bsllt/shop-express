const products = []

module.exports = class product {
  constructor(title) {
    this.title = title
    this.price = '19,99€'
    this.createdAt = new Date()
    this.updatedAt = new Date()
  }

  save() {
    products.push(this)
  }

  static getProducts() {
    return products
  }
}