var html = require('choo/html')
var PostContent = require('../components/post-content')

module.exports = view

function view (state, emit) {
  return html`
    <body class="pv4 ph3 code h-100 lh-copy overflow-y-hidden bg-near-black">
      <main class="bg-white near-black w-100 h-100 pv3 ph7-ns ph3 center w5">
        ${state.cache(PostContent, state.params.post + '-content').render()}
      </main>
    </body>
  `
}
