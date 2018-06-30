var fs = require('fs')
var path = require('path')

module.exports = store

store.storeName = 'posts'
function store (state, emitter) {
  state.posts = fs.readdirSync('./content').map(post => path.basename(post, path.extname(post)))
  emitter.emit('render')
}
