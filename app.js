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
  router: {
    isCaseSensitive: false,
    stripTrailingSlash: true
  }
})

// register views
var baseDir = Path.join(__dirname, 'app/views')
var templateExt = 'dust'
server.views({
  engines: {dust: require('hapi-dust')},
  path: baseDir,
  defaultExtension: templateExt,
  isCached: false,
  compileOptions: {
    baseDir: baseDir,
    defaultExt: templateExt,
  }
})

// routes
server.route(require('./config/routes').routes)

// register plugins and start server
server.register(require('./config/plugins').plugins, function(err) {
  if (err) {
    throw err
  }

  // start server
  server.start(function() {
    console.info('Server started at ' + server.info.uri)
  })
})
