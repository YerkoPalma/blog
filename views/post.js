var html = require('choo/html')
var PostContent = require('../components/post-content')

module.exports = view

function view (state, emit) {
  return html`
    <body class="db pv4 ph3 code h-100 lh-copy overflow-y-hidden bg-near-black">
      <div class="absolute dt-ns dn v-mid" style="height: 90%;">
        <a class="v-mid dtc" href="/">
          <svg version="1.1" preserveAspectRatio="xMidYMid meet" viewBox="0 0 127 324" width="127" height="122"><defs><path d="M121.3 320L6.7 161L121.3 2" id="b3EIhQ1lWg"/></defs><g><g><use xlink:href="#b3EIhQ1lWg" opacity="1" fill="#000000" fill-opacity="0"/><g><use xlink:href="#b3EIhQ1lWg" opacity="1" fill-opacity="0" stroke="#000000" stroke-width="10" stroke-opacity="1"/></g></g></g></svg>
        </a>
      </div>
      <main class="bg-white near-black w-100 h-100 pv3 overflow-y-scroll ph7-ns ph3 center w5">
        ${state.cache(PostContent, state.params.post + '-content').render()}
      </main>
    </body>
  `
}
