var fs = require('fs')

module.exports = store

store.storeName = 'posts'
function store (state, emitter) {
  state.posts = fs.readdirSync('./content').sort((d1, d2) => {
    const f1 = d1.match(/(\d\d)-(\d\d)-(\d\d\d\d)/)
    const f2 = d2.match(/(\d\d)-(\d\d)-(\d\d\d\d)/)

    if (f1[3] < f2[3]) return -1
    else if (f1[3] > f2[3]) return 1
    else if (f1[2] < f2[2]) return -1
    else if (f1[2] > f2[2]) return 1
    else if (f1[1] < f2[1]) return -1
    else if (f1[1] > f2[1]) return 1
    else return 0
  })
  emitter.emit('render')
}
