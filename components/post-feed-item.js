/* global HTMLElement */
export default class PostFeedItem extends HTMLElement {
  static get observedAttributes () { return ['slug', 'hide', 'date', 'tags'] }
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
  get slug () {
    return this.getAttribute('slug')
  }
  set slug (value) {
    this.setAttribute('slug', value)
  }
  get tags () {
    return this.getAttribute('tags') ? this.getAttribute('tags').split(',') : []
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
        color: #333;
      }
      :host a:hover {
        color: #ff725c;
      }
      :host h2,
      ::slotted(h2) {
        margin-top: 2rem;
        margin-bottom: 0;
        margin-top: 0;
        font-size: 2.25rem;
      }
      ${this.hide ? '::slotted(*) { display: none; }' : ''}
      :host time {
        font-size: .875rem;
        color: #777;
        display: block;
        margin-bottom: 1rem;
      }
      :host .tags {
        padding: 0;
        margin-bottom: .5rem;
      }
      :host .tags li {
        display: inline-block;
      }
      :host .tags li > a {
        margin: 0;
        color: #333;
        border: none;
        padding: .125rem .7rem;
        background-color: #ccc;
        border-radius: .1rem;
        font-size: .91rem;
        opacity: .5;
        margin-bottom: .5rem;
      }
      :host .tags li > a:hover {
        opacity: 1;
      }
    `
    template.innerHTML = `
      <div>
        <a href="post.html?p=${this.slug}">
          <slot name="title"><h2>Untitled post</h2></slot>
        </a>
      </div>
      <time datetime="${this.date}">${this.printDate()}</time>
      <ul class="tags">${this.tags.reduce((prev, tag) => `${prev} <li><a href="index.html?tags=${tag}">${tag}</a></li>`, '')}</ul>
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
    if (name === 'tags') {
      this.shadowRoot.querySelector('.tags').innerHTML = this.tags.reduce((prev, tag) => `${prev} <li><a href="index.html?tags=${tag}">${tag}</a></li>`, '')
    }
    if (name === 'date') {
      this.shadowRoot.querySelector('time').datetime = this.date
      this.shadowRoot.querySelector('time').textContent = this.printDate()
    }
    if (name === 'slug') {
      this.shadowRoot.querySelector('a').href = `post.html?p=${this.slug}`
    }
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