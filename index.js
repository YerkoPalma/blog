/* global customElements */
import CustomLoader from './components/loader.js'
import PostFeed from './components/post-feed.js'
import PostFeedItem from './components/post-feed-item.js'

// register components
customElements.define('custom-loader', CustomLoader)
customElements.define('post-feed-item', PostFeedItem)
customElements.define('posts-feed', PostFeed)

// Register service worker
navigator.serviceWorker
  .register('/service-worker.js', { updateViaCache: 'none' })

// tags updates
window.addTag = function (tag) {
  const feed = document.querySelector('posts-feed')
  let tags = new Set(feed.onlyTags ? feed.onlyTags.split(',') : [])
  tags.add(tag)
  feed.onlyTags = [...tags].join()
}