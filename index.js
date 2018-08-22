/* global customElements */
import CustomLoader from './components/loader.js'
import PostFeed from './components/post-feed.js'
import PostFeedItem from './components/post-feed-item.js'

// register components
customElements.define('custom-loader', CustomLoader)
customElements.define('post-feed-item', PostFeedItem)
customElements.define('posts-feed', PostFeed)
