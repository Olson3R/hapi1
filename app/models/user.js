var bookshelf = require('../../config/database').bookshelf

var User = bookshelf.Model.extend({
  tableName: 'users'
})

module.exports = User
