/* global HTMLElement fetch */
import markdown from 'https://unpkg.com/md?module'

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
        width: 90%;
        vertical-align: middle;
        position: absolute;
      }
      :host div > a {
        vertical-align: middle;
        display: table-cell;
      }
      :host div > a > .small{
        margin-top: .75rem;
      }
      :host div > a > .small {
        margin-top: .75rem;
        display: block;
      }
      :host div > a > .big {
        display: none;
      }
      :host main {
        margin-right: auto;
        margin-left: auto;
        padding-left: 1rem;
        padding-right: 1rem;
        padding-top: 1rem;
        padding-bottom: 1rem;
        background-color: #fff;
        color: #111;
        height: 94%;
        overflow-y: scroll;
        font-size: 16px;
        line-height: 1.5;
      }
      @media screen and (min-width: 30em) {
        :host main {
          padding-left: 16rem;
          padding-right: 16rem;
          font-size: 20px;
        }
        :host div {
          height: 90%;
          width: auto;
          display: table;
        }
        :host div > a > .small {
          display: none;
        }
        :host div > a > .big {
          display: block;
        }
        :host main > h1 {
          font-size: 3rem;
        }
      }
      :host main > h1 {
        font-size: 2.75rem;
      }
      :host main a {
        text-decoration: none;
        transition: all .15s ease-in;
        border-width: 0 0 .25rem 0;
        display: inline-block;
        border-color: #ff725c;
        margin-top: 0;
        border-style: dashed;
        color: #111;
      }
      :host main a:hover {
        cursor: pointer;
        color: #ff725c;
      }
      :host main > blockquote {
        padding-left: 2rem;
        font-style: italic;
        border-width: .125rem;
        border-color: #ff725c;
        border-left-style: solid;
        margin-bottom: 0;
      }
      :host main pre {
        background-color: #333;
        color: #ddd;
        padding: .5rem 1rem;
        font-size: 1rem;
        overflow-x: scroll;
      }
      :host img {
        max-width: 100%;
      }
      :host li {
        word-wrap: break-word;
        word-break: break-all;
      }
    `
    div.innerHTML = `
    <a href="/"> 
      <svg class="small" version="1.1" preserveAspectRatio="xMidYMid meet" viewBox="0 0 127 324" width="45" height="40"><defs><path d="M121.3 320L6.7 161L121.3 2" id="b3EIhQ1lWg"></path></defs><g><g><use xlink:href="#b3EIhQ1lWg" opacity="1" fill="#000000" fill-opacity="0"></use><g><use xlink:href="#b3EIhQ1lWg" opacity="1" fill-opacity="0" stroke="#000000" stroke-width="10" stroke-opacity="1"></use></g></g></g></svg>
      <svg class="big" version="1.1" preserveAspectRatio="xMidYMid meet" viewBox="0 0 127 324" width="127" height="122"><defs><path d="M121.3 320L6.7 161L121.3 2" id="b3EIhQ1lWg"></path></defs><g><g><use xlink:href="#b3EIhQ1lWg" opacity="1" fill="#000000" fill-opacity="0"></use><g><use xlink:href="#b3EIhQ1lWg" opacity="1" fill-opacity="0" stroke="#000000" stroke-width="10" stroke-opacity="1"></use></g></g></g></svg>
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
