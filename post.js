/* global customElements location */
import CustomLoader from './components/loader.js'
import PostContent from './components/post-content.js'

// define query from location
window.query = (search => {
  let o = {}
  search.substr(1).split('&').forEach(searchQuery => {
    let searchEntry = searchQuery.split('=')
    o[searchEntry[0]] = searchEntry[1]
  })
  return o
})(location.search)

// register components
customElements.define('custom-loader', CustomLoader)
customElements.define('post-content', PostContent)
