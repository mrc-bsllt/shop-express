const getHomePage = (req, res, next) => {
  res.render('user/home-page')
}

module.exports = { getHomePage }