var Component = require('choo/component')
var html = require('choo/html')
var raw = require('choo/html/raw')

class PostContent extends Component {
  constructor (id, state, emit) {
    super(id)
    this.cache = state.cache
    this.local = state.components[id] = this.cache(function () {}, id.replace(/(\w*)-content/, '$1')).local
  }

  createElement () {
    return html`
      <div>
        ${raw(this.local.content.replace(/<pre/g, '<pre class=\"near-white bg-mid-gray overflow-x-visible-ns overflow-x-scroll pa3\"'))}
      </div>
    `
  }

  update () {
    return true
  }
}

module.exports = PostContent