import React, {Component} from "react";
import { allArticles } from '../util/api'
import HomeList from './HomeList'
import HomeBanner from './HomeBanner'
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
          <HomeBanner />
          <div className="articles" id="homeList">
            <HomeList
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
