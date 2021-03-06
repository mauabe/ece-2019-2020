import React, {Component} from 'react';
import Bubbles from '../components/Bubbles';
import {articlesNews} from '../assets/articlesNews.js';

class News extends Component{
  constructor(props) {
    super(props);
    this.state = {}
    // console.log('%c PROPS at FACULTY constructor', 'color:black;background:magenta;padding:6px;border:1px dashed black', this.props)
  }
  render() {
    return (
      <div className="content-area">
        <Bubbles
          pageView="news"
          articles={articlesNews}
        />
      </div>
    )
  }
}

export default News;
