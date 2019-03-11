import React, {Component} from "react";
import {Link} from "react-router-dom"



class ArticleList extends Component {
  constructor (props) {
    super(props)
    console.log(props)
  }

  formatTime(time) {
    let t = new Date(time)
    let year = t.getFullYear()
    let month = t.getMonth() + 1
    let day = t.getDate()
    if (month <= 9) {
      month = '0' + month
    }
    if (day <= 9) {
      day = '0' + day
    }
    let formatTime = `${year}-${month}-${day}`
    return formatTime
  }


  render() {


    const {articles, match} = this.props;

    const ArticleList = articles.map(post =>
        <article key={post.id}>
          <Link to={`${match.url}/${post.id}`}>
            <header className="post-title"><h2>{post.title}</h2></header>
          </Link>
          <div className="post-date">{this.formatTime(post.date)}</div>
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
