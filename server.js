const path = require('path')
const express = require('express')
const db = require('./utils/database')
const bodyParser = require('body-parser')

const app = express()

db.execute('SELECT * FROM products')
  .then(response => {
    console.log(response)
  })
  .catch(error => {
    console.log(error)
  })

app.use(bodyParser.urlencoded({ extended: false }))
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')))

const { userRoutes } = require('./routes/user')
const { adminRoutes } = require('./routes/admin')

app.use(userRoutes)
app.use('/admin', adminRoutes)
app.use('/', (req, res, next) => {
  res.status(404).render('404', { path: '404' })
})

app.listen(3000)