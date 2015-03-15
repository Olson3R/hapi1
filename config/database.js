var knexConfig = require('../knexfile').development
var knex = require('knex')(knexConfig)
var bookshelf = require('bookshelf')(knex)

module.exports.knex = knex
module.exports.bookshelf = bookshelf
