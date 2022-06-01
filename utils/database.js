const mysql = require('mysql2')

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'shop-express',
  password: 'marcodevelon'
})

module.exports = pool.promise()