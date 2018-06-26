var Component = require('choo/component')
var html = require('choo/html')

class Button extends Component {
  constructor (id, state, emit, text) {
    super(id)
    this.local = state.components[id] = {
      count: 0
    }
    this.text = text || ''
    this.state = state
    this.emit = emit

    this.click = this.click.bind(this)
  }

  click (event) {
    this.local.count++
    this.emit('render')
  }

  createElement (state) {
    this.state = state
    return html`
      <button onclick=${this.click} class="f5 w-75 tc center pointer no-underline black bg-animate hover-bg-black hover-white pa3 ba border-box mr4">${this.text}</button>
    `
  }

  update (state, emit) {
    this.state = state
    return false
  }
}

module.exports = Button
