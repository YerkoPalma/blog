var html = require('choo/html')
var PostPreview = require('../components/post-preview')

var TITLE = 'welcome - main'

module.exports = view

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)

  /* eslint-disable */
  return html`
    <body class="pv4 ph3 code lh-copy bg-near-black">
      <main class="bg-white near-black w-100 h-100 pv3 ph7 center w5">
      ${state.posts.map(post => {
        return state.cache(PostPreview, post).render()
      })}
      </main>
    </body>
    `
}
