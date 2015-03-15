var remotesController = require('../app/controllers/remotes_controller')
var usersController = require('../app/controllers/users_controller')

module.exports.routes = []

module.exports.routes.push({
  method: 'GET',
  path: '/',
  handler: function(req, res) {
    res.view('index', { name: "this is a test" })
  }
})

// Users
module.exports.routes.push({
  method: 'GET',
  path: '/users',
  handler: usersController.index
})

module.exports.routes.push({
  method: 'GET',
  path: '/users/new',
  handler: usersController.new
})

module.exports.routes.push({
  method: 'POST',
  path: '/users/new',
  handler: usersController.create
})

module.exports.routes.push({
  method: 'GET',
  path: '/users/{userId}/edit',
  handler: usersController.edit
})

module.exports.routes.push({
  method: 'POST',
  path: '/users/{userId}/edit',
  handler: usersController.update
})

// Remotes
module.exports.routes.push({
  method: 'GET',
  path: '/remotes',
  handler: remotesController.index
})

module.exports.routes.push({
  method: 'GET',
  path: '/remotes/{remote}',
  handler: remotesController.show
})
