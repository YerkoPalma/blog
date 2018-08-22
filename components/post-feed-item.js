/* global HTMLElement */
export default class PostFeedItem extends HTMLElement {
  static get observedAttributes () { return ['hide'] }
  get date () {
    return new Date(this.getAttribute('date'))
  }
  set date (value) {
    this.setAttribute('date', value)
  }
  get hide () {
    return !!this.getAttribute('hide')
  }
  set hide (value) {
    if (!value) {
      this.removeAttribute('hide')
    } else {
      this.setAttribute('hide', value)
    }
  }
  get author () {
    return this.getAttribute('author')
  }
  set author (value) {
    this.setAttribute('author', value)
  }
  get tags () {
    return this.getAttribute('tags').split(',')
  }
  set tags (value) {
    if (Array.isArray(value)) this.setAttribute('tags', value.join())
    else if (value instanceof 'string') this.setAttribute('tags', value)
  }
  constructor () {
    super()
    const shadow = this.attachShadow({mode: 'open'})
    const style = document.createElement('style')
    const template = document.createElement('template')
    style.textContent = `
      ${this.hide ? ':host * { display: none !important; }' : ''}
      :host a {
        text-decoration: none;
        transition: all .15s ease-in;
        border-width: 0 0 .25rem 0;
        display: inline-block;
        border-color: #ff725c;
        margin-top: 1rem;
        border-style: dashed;
      }
      :host a:hover {
        background-color: #ff725c;
      }
      :host h2,
      ::slotted(h2) {
        margin-top: 2rem;
        margin-bottom: 0;
        margin-top: 0;
        color: #333;
        font-size: 2.25rem;
      }
      ${this.hide ? '::slotted(*) { display: none; }' : ''}
      :host time {
        font-size: .875rem;
        color: #777;
        display: block;
        margin-bottom: 1rem;
      }
    `
    template.innerHTML = `
      <div>
        <a href="post.html?p=${this.slug}">
          <slot name="title"><h2>Untitled post</h2></slot>
        </a>
      </div>
      <time datetime="${this.date}">${this.printDate()}</time>
      <slot name="abstract"></slot>
    `
    shadow.appendChild(style)
    shadow.appendChild(template.content)
  }
  printDate () {
    if (!this.date) return
    const month = ['Enero','Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
    return `${this.date.getDate()} de ${month[this.date.getMonth()]}, ${this.date.getFullYear()}`
  }
  attributeChangedCallback (name, oldValue, newValue) {
    if (name === 'hide') {
      const style = this.shadowRoot.querySelector('style')
      style.textContent = `
      ${this.hide ? ':host * { display: none !important; }' : ''}
        :host a {
          text-decoration: none;
          transition: all .15s ease-in;
          border-width: 0 0 .25rem 0;
          display: inline-block;
          border-color: #ff725c;
          margin-top: 1rem;
          border-style: dashed;
        }
        :host a:hover {
          background-color: #ff725c;
        }
        :host h2,
        ::slotted(h2) {
          margin-top: 2rem;
          margin-bottom: 0;
          margin-top: 0;
          color: #333;
          font-size: 2.25rem;
        }
        ${this.hide ? '::slotted(*) { display: none; }' : ''}
        :host time {
          font-size: .875rem;
          color: #777;
          display: block;
          margin-bottom: 1rem;
        }
      `
    }
  }
}