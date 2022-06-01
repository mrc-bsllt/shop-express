const Sequelize = require('sequelize')
const sequelize = require('../utils/database')

const CartItem = sequelize.define('cart-product', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 1
  }
})

module.exports = CartItem