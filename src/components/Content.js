import React, {Component} from "react";
import ContentArticle from './ContentArticle'
import "../css/Content.css";

const PATH_BASE = "http://localhost:5000/api/v1";
const PATH_SEARCH = "/articles";
const url = PATH_BASE + PATH_SEARCH;

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: null
    };
  }

  setArticles(data) {
    this.setState({
      articles: data
    });
  }

  fetchArticles() {
    fetch(url)
        .then(res => res.json())
        .then(data => {
          this.setArticles(data);
          // console.log(this.state.articles)
        });
  }

  componentDidMount() {
    this.fetchArticles();
  }

  render() {

    const { match } = this.props

    if (!this.state.articles) {
      return false;
    }

    return (

        <main className="content">

          <div className="articles">
            <ContentArticle
                articles={this.state.articles}
                match={match}
            />
          </div>
          <footer className="footer"></footer>
        </main>
    );
  }
}

export default Content;
