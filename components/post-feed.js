/* global HTMLElement fetch */
export default class PostFeed extends HTMLElement {
  static get observedAttributes () { return ['order-by', 'only-author', 'only-tags'] }
  get src () {
    return this.getAttribute('src')
  }
  get orderBy () {
    return this.getAttribute('order-by')
  }
  set orderBy (value) {
    this.setAttribute('order-by', value)
  }
  get onlyAuthor () {
    return this.getAttribute('only-author')
  }
  set onlyAuthor (value) {
    this.setAttribute('only-author', value)
  }
  get onlyTags () {
    return this.getAttribute('only-tags')
  }
  set onlyTags (value) {
    this.setAttribute('only-tags', value)
  }

  constructor () {
    super()
    // this.updatePosts(this.posts)
  }

  async attributeChangedCallback (name, oldValue, newValue) {
    await this.updatePosts(this.posts)
  }

  async loadPosts () {
    if (this.src) {
      const response = await fetch(this.src)
      const posts = await response.json()
      return posts.map(post => {
        const postElement = document.createElement('post-feed-item')
        if (post.date) postElement.date = post.date
        if (post.author) postElement.author = post.author
        if (post.tags) postElement.tags = post.tags
        if (post.slug) postElement.slug = post.slug
        postElement.innerHTML = `
          ${post.title ? `<h2 slot="title">${post.title}</h2>` : ''}
          ${post.abstract ? `<span slot="abstract">${post.abstract}</span>`: ''}
        `
        return postElement
      })
    }
    return Array.from(this.children)
  }

  async updatePosts (posts) {
    // get the current posts
    if (!posts) posts = await this.loadPosts()
    // remove them
    this.innerHTML = ''
    // sort them
    if (this.orderBy) {
      // by date
      if (this.orderBy === 'date') {
        posts.sort((first, second) => {
          return first.date.getTime() - second.date.getTime()
        })
      }
    }
    // filter them
    if (this.onlyAuthor || this.onlyTags) {
      const authors = this.onlyAuthor.split(',')
      const tags = this.onlyTags.split(',')
      if (this.onlyAuthor) {
        posts = posts.map(post => {
          if (authors.indexOf(post.author) < 0) {
            post.hide = true
          } else {
            post.hide = false
          }
          return post
        })
      }
      if (this.onlyTags) {
        posts = posts.map(post => {
          if (!post.tags.some(tag => tags.indexOf(tag) > -1)) {
            post.hide = true
          } else {
            post.hide = false
          }
          return post
        })
      }
    }
    // (re)append them
    posts.forEach(post => {
      this.appendChild(post)
    })
    this.posts = posts
    var loader
    if (loader = document.querySelector('custom-loader')) loader.remove()
  }
}
