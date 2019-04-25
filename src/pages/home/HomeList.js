import React, {Component} from "react";
import {Link} from "react-router-dom"
import {formatTime} from '../../util/common'


class ArticleList extends Component {
  constructor(props) {
    super(props)
    console.log(props)
  }


  render() {


    const {articles, match} = this.props;

    const ArticleList = articles.map(post =>
        <article key={post.id}>

          <header className="post-title">
            <h2>

              <Link to={`${match.url}/${post.id}`}>{post.title}</Link>
            </h2>
          </header>

          <div className="post-date">{formatTime(post.date)}</div>
          <div className="post-summery">{post.summery}</div>
          <div className="post-tag">{post.tags}</div>
        </article>)

    return (
        <div>
          <div className="articles-container">
            {ArticleList}
          </div>
        </div>


    );
  }
}

export default ArticleList;
