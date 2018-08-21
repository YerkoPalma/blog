/* global HTMLElement */
export default class PostFeedItem extends HTMLElement {
  static get observedAttributes () { return ['date', 'author', 'tags', 'slug'] }
  get date () {
    return new Date(this.getAttribute('date'))
  }
  set date (value) {
    this.setAttribute('date', value)
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
      :host a {
        text-decoration: none;
        transition: color .15s ease-in;
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
    `
    template.innerHTML = `
    <div>
      <a href="post" class="">
        <slot name="title"><h2>Untitled post</h2></slot>
      </a>
      <slot name="abstract"></slot>
      <time datetime="${this.date}" class="f6 db gray">${this.date || ''}</time>
    </div>
    `
    shadow.appendChild(style)
    shadow.appendChild(template.content)
  }
  attributeChangedCallback (name, oldValue, newValue) {}
}