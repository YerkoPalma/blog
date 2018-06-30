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
        ${raw(this.local.content
          .replace(/<pre/g, '<pre class=\"near-white bg-mid-gray w-100 overflow-x-visible-ns overflow-x-scroll pa3\"')
          .replace(/<code class="(.*)"/g, '<code class=\"$1 pre db\"')
          .replace(/<a /g, '<a class=\"link pointer bb b--dashed bt-0 bl-0 br-0 bw2 bg-animate hover-bg-light-red b--light-red black\" ')
          .replace(/<p>/g, '<p class=\"f4 f3-ns lh-copy measure-wide georgia\">')
          .replace(/<blockquote>/g, '<blockquote class=\"i pl4 bl bw1 b--light-red mb4\">')
          .replace(/<h(\d)>/g, '<h$1 class=\"f$1 georgia\">')
          .replace(/<li>/g, '<li class=\"f4 f3-ns lh-copy georgia\">')
          )}
      </div>
    `
  }

  update () {
    return true
  }
}

module.exports = PostContent