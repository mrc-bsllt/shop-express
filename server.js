const path = require('path')
const express = require('express')
const sequelize = require('./utils/database')

const Product = require('./models/Product')
const User = require('./models/User')
const Cart = require('./models/Cart')
const CartProduct = require('./models/CartProduct')

const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')))

const { userRoutes } = require('./routes/user')
const { adminRoutes } = require('./routes/admin')

app.use((req, res, next) => {
  User.findByPk(1)
    .then(user => {
      req.USER = user
      next()
    }).catch(error => console.log(error))
})

app.use(userRoutes)
app.use('/admin', adminRoutes)
app.use('/', (req, res, next) => {
  res.status(404).render('404', { path: '404' })
})

Product.belongsTo(User)
User.hasMany(Product)

User.hasOne(Cart)
Cart.belongsTo(User)

Cart.belongsToMany(Product, { through: CartProduct })
Product.belongsToMany(Cart, { through: CartProduct })

// sequelize.sync({ force: true })
sequelize.sync()
  .then(() => {
    return User.findByPk(1)
  })
  .then(user => {
    if(!user) {
      return User.create({ username: 'Marco', email: 'mrc@test.com' })
    }
    return user
  })
  .then(() => {
    return Cart.findByPk(1)
  })
  .then(cart => {
    if(!cart) {
      return Cart.create()
    }
    return cart
  })
  .then(() => {
    app.listen(3000)
  }).catch(error => console.log(error))