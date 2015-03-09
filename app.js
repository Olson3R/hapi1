var Path = require('path')
var Hapi = require('hapi')

// server
var server = new Hapi.Server()
server.connection({
  port: process.env.PORT || 4000,
  routes: {
    files: {
      relativeTo: Path.join(__dirname, 'public')
    }
  },
  router: { stripTrailingSlash: true }
})

// register views
server.views({
  engines: {dust: require('hapi-dust')},
  path: Path.join(__dirname, 'templates'),
  defaultExtension: 'dust',
  isCached: false,
  layout: 'layouts/main'
})

// register good
server.register({
  register: require('good'),
  options: {
    opsInterval: 15000,
    reporters: [{
      reporter: require('good-console'),
      args: [{log: '*', response: '*', ops: '*', error: '*'}]
    }]
  }
}, function(err) {
  if (err) {
    console.error(err)
  }
})

// routes
server.route({
  method: 'GET',
  path: '/hello',
  handler: function(req, res) {
    res.view('hello', {name: "this is a test"})
  }
})

// start server
server.start(function() {
  console.info('Server started at ' + server.info.uri)
})
