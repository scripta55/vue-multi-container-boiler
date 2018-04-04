var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_URL: '""',
  ADMIN_URL: '""',
  SITE_URL: '"http://localhost:8090"'
})
