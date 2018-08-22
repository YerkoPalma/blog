/* global HTMLElement */
export default class PostFeed extends HTMLElement {
  static get observedAttributes () { return ['order-by', 'only-author', 'only-tags'] }
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
    this.updatePosts()
  }

  attributeChangedCallback (name, oldValue, newValue) {
    this.updatePosts()
  }

  updatePosts () {
    // get the current posts
    let posts = Array.from(this.children)
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
  }
}