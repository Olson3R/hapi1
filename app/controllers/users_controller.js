var hapi = require('hapi')
var User = require('../models/user')

var handlers = {}

handlers.index = function(req, res) {
  User.fetchAll().then(function(users) {
    res.view('users/index', { users: users.toJSON() })
  })
}

handlers.new = function(req, res) {
  res.view('users/new', { user: new User() })
}

handlers.create = function(req, res) {
  new User(req.payload).save().then(function(user) {
    res.redirect('/users')
  },
  function(errors) {
    res.view('users/new', {
      user: req.payload,
      errors: errors.errors
    })
  })
}

handlers.edit = function(req, res) {
  new User({ id: req.params.userId })
    .fetch({ require: true })
    .then(function(user) {
      if (user)
        res.view('users/edit', { user: user.toJSON() })
    })
    .catch(function(errors) {
      res('Not found.').code(404)
    })
}

handlers.update = function(req, res) {
  new User({ id: req.params.userId })
    .save(req.payload, { patch: true })
    .then(function(user) {
      res.redirect('/users')
    },
    function(errors) {
      res.view('users/new', {
        user: req.payload,
        errors: errors.errors
      })
    })
}

module.exports = handlers
