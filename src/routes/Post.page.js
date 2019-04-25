import React , { Component } from 'react'
import { article } from '../util/api'
import { formatTime, Markdown } from '../util/common'
import '../css/markdown.css'


const md = new Markdown()

class PostPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      article: null
    }
  }

  componentDidMount () {
    article(this.props.match.params.id)
        .then((data) => {

          this.setState({
            article: data
          })
        })
  }

  createMarkup () {
    return {__html: md.compile(this.state.article.content) }
  }


  render () {

    const { article } = this.state

    if (!article) {
      return false;
    }

    return (
        <main className="content">
          <div className="articles-container">
            <article>
              <div className="post-title">
                <h2>{article.title}</h2>
              </div>
              <div className="post-date">
                <div>{formatTime(article.date)}</div>
              </div>
              <div className="post-content">
                <div dangerouslySetInnerHTML={this.createMarkup()} ></div>
              </div>
            </article>
          </div>
        </main>
    )
  }
}

export default PostPage;