/* global customElements location Gitalk */
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

/*
const gitalk = new Gitalk({
  clientID: '47550ec2e0377dd322b3',
  clientSecret: '7cd81f278006b3417662e42e7d2d0e86ac81b79b',
  repo: 'blog',
  owner: 'YerkoPalma',
  admin: ['YerkoPalma'],
  id: 'blog',      // Ensure uniqueness and length less than 50
  distractionFreeMode: false  // Facebook-like distraction free mode
})

gitalk.render('gitalk-container') */

