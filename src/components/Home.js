import React, {Component} from "react";
import { allArticles } from '../util/api'
import ContentArticle from './HomeList'
import "../css/Content.css";



class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: null
    };
  }



  fetchAllArticles() {
    allArticles().then((data) => {
      this.setState({
        articles: data
      });
    })
  }

  componentDidMount() {
    this.fetchAllArticles();
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

export default Home;
