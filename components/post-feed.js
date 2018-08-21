/* global HTMLElement */
export default class PostFeed extends HTMLElement {
  static get observedAttributes () { return [] }
 
  constructor () {
    super()
    const shadow = this.attachShadow({mode: 'open'})
    const style = document.createElement('style')
    const div = document.createElement('div')
    style.textContent = ``
    div.innerHTML = ''
    shadow.appendChild(style)
    shadow.appendChild(div)
  }
  attributeChangedCallback (name, oldValue, newValue) {}
}