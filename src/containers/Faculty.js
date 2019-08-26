
import React, {Component} from 'react';
import { withRouter, Redirect } from "react-router-dom";
import '../scss/styles.scss';

import Header from './Header';
import Features from './Features';
import Bubbles from '../components/Bubbles';
import ContentArea from '../components/ContentArea';


class Faculty extends Component{

  constructor(props) {
		super(props);
	  this.state = {
      pageView: 'features'
    }
    console.log('%c PROPS at APP constructor', 'color:black;background:magenta;padding:6px;border:1px dashed black', this.props);
  }

  render() {
    return (
      <div className="bubbles">
        <div className="bubbbles section">
          <div className="bubble-circle"></div>
            <ContentArea />
            <Bubbles />
          <h4>this.props.headlineShort</h4>

        </div>
      </div>
    );
  }
}

export default Faculty;