/* @flow */

import React, {Component} from 'react';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

export default class Layout extends Component {
  static propTypes = {

  };

  render() {
    return (
      <div>
        <Header />
        <Body>
          {this.props.children}
        </Body>
        <Footer />
      </div>
    );
  }
}
