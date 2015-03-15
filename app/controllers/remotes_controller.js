var remotes = [
  {key: 'receiver', title: 'Receiver'},
  {key: 'tv', title: 'TV'},
  {key: 'ps3', title: 'PS3'}
]

var handlers = {}

handlers.index = function(req, res) {
  res.view('remotes/index', { remotes: remotes })
}

handlers.show = function(req, res) {
  res.view('remotes/' + req.params.remote)
}

module.exports = handlers
