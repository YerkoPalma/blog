var html = require('choo/html')
var PostContent = require('../components/post-content')

module.exports = view

function view (state, emit) {
  return html`
    <body class="pv4 ph3 code lh-copy bg-near-black">
      <main class="bg-white near-black w-100 h-100 pv3 ph7 center w5">
        ${state.cache(PostContent, state.params.post + '-content').render()}
      </main>
    </body>
  `
}
