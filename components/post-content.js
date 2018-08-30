/* global HTMLElement fetch */
import markdown from 'https://unpkg.com/snarkdown?module'

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
    const main = document.createElement('main')
    const div = document.createElement('div')
    const style = document.createElement('style')
    style.textContent = `
      :host div {
        height: 90%;
        display: table;
        vertical-align: middle;
        position: absolute;
      }
      :host div > a {
        vertical-align: middle;
        display: table-cell;
      }
      :host main {
        margin-right: auto;
        margin-left: auto;
        padding-left: 16rem;
        padding-right: 16rem;
        padding-top: 1rem;
        padding-bottom: 1rem;
        background-color: #fff;
        color: #111;
        height: 94%;
        overflow-y: scroll;
        font-size: 1.5rem;
        max-width: 34em;
        line-height: 1.5;
      }
      
      :host main > h1 {
        font-size: 3rem;
      }
    `
    div.innerHTML = `
    <a href="/"> 
      <svg version="1.1" preserveAspectRatio="xMidYMid meet" viewBox="0 0 127 324" width="127" height="122"><defs><path d="M121.3 320L6.7 161L121.3 2" id="b3EIhQ1lWg"></path></defs><g><g><use xlink:href="#b3EIhQ1lWg" opacity="1" fill="#000000" fill-opacity="0"></use><g><use xlink:href="#b3EIhQ1lWg" opacity="1" fill-opacity="0" stroke="#000000" stroke-width="10" stroke-opacity="1"></use></g></g></g></svg>
    </a>
    `

    shadow.appendChild(style)
    shadow.appendChild(div)
    shadow.appendChild(main)
  }
  async connectedCallback () {
    const response = await fetch(this.src)
    const md = await response.text()
    this.shadowRoot.querySelector('main').innerHTML = markdown(md)
    document.querySelector('custom-loader').remove()
  }
}
