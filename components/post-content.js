/* global HTMLElement fetch */
import snarkdown from 'https://unpkg.com/snarkdown?module'

export default class Loader extends HTMLElement {
  get src () {
    let rawSrc = this.getAttribute('src')
    return rawSrc.replace(/{{p}}/, window.query.p)
  }
  set src (value) {
    this.setAttribute('src', value)
  }
  get comments () {
    return this.getAttribute('comments')
  }
  set comments (value) {
    this.setAttribute('comments', value)
  }
  constructor () {
    super()
    const shadow = this.attachShadow({mode: 'open'})
    const div = document.createElement('div')

    shadow.appendChild(div)
  }
  async connectedCallback () {
    const response = await fetch(this.src)
    const md = await response.text()
    this.shadowRoot.querySelector('div').innerHTML = snarkdown(md)
  }
}
