/* global navigator localStorage */
module.exports = store

store.storeName = 'offline'
function store (state, emitter) {
  emitter.on('DOMContentLoaded', function () {
    if (navigator.serviceWorker) {
      navigator.serviceWorker.ready
        .then(registration => {
          var localVersion = localStorage.getItem('version')
          var currentVersion = require('../package.json').version
          if (localVersion !== currentVersion) {
            // update version
            localStorage.setItem('version', currentVersion)
            // update service worker
            registration.update()
          }
        })
    }
  })
}