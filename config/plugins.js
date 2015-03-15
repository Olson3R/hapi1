module.exports.plugins = []

module.exports.plugins.push({
  register: require('good'),
  options: {
    opsInterval: 15000,
    reporters: [{
      reporter: require('good-console'),
      args: [{log: '*', response: '*', ops: '*', error: '*'}]
    }]
  }
})

module.exports.plugins.push({
  register: require('hapi-sass'),
  options: {
    debug: true,
    force: true,
    src: './app/scss',
    outputStyle: 'compressed',
    dest: './public/css',
    routePath: '/css/{file}.css'
  }
})
