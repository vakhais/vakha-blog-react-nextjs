import Link from 'next/link'

export default () => (
  <React.Fragment>
      <article>
          <div className="post-img">
              <a href="details.html" target="_blank"><img className="img-responsive" src="/static/post-img-1.jpg" alt="Post"/></a>
          </div>
          <a href="details.html" target="_blank" className="btn btn-default btn-sm btn-category" type="submit">business</a>
          <a href="details.html" target="_blank"><h2 className="post-title">React To The Future With Isomorphic Apps</h2></a>
          <div className="post-meta">
              <span><a href="#none"><i className="fa fa-share-alt post-meta-icon"></i> 400 Shares </a></span>
              <span><a href="#none"><i className="fa fa-comments post-meta-icon"></i> 20 Comments </a></span>
              <span><a href="#none"><i className="fa fa-calendar-check-o post-meta-icon"></i> april 13, 2015 </a></span>
          </div>
          <div className="post-content">
              <p>Things often come full circle in software engineering. The web in particular started with servers delivering content down to the client. Recently with the creation of modern web frameworks such as Angular JS and Ember, we've seen a push to render on the client and only use a server for an API</p>
          </div>
      </article>
  </React.Fragment>
)