/* global fetch */
var Component = require('choo/component')
var html = require('choo/html')
var MarkdownIt = require('markdown-it')
var md = new MarkdownIt()
md.use(require('markdown-it-meta'))

class PostPreview extends Component {
  constructor (id, state, emit) {
    super(id)
    this.local = state.components[id] = {}

    fetch(`../content/${id}`)
      .then(response => response.text())
      .then(text => {
        this.local.content = md.render(text)
        this.local.title = md.meta.title
        this.local.author = md.meta.author
        this.local.date = new Date(md.meta.date)
        this.local.date.print = () => {
          const month = ['Enero','Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
          return `${this.local.date.getDate()} de ${month[this.local.date.getMonth()]}, ${this.local.date.getFullYear()}`
        }
        this.local.tags = md.meta.tags
        this.rerender()
      })
  }

  createElement () {
    return html`
      <div>
        <h2 class="mt3 mb0 f2">
          <a class="link pointer bb b--dashed bt-0 bl-0 br-0 bw2 bg-animate hover-bg-light-red b--light-red black">${this.local.title || 'Loading...'}</a>
        </h2>
        <time datetime="${this.local.date}" class="f6 db gray">${this.local.date && this.local.date.print()}</time>
      </div>
    `
  }

  update () {
    return true
  }
}

module.exports = PostPreview
