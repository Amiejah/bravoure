import React, { Component } from 'react';
import * as api from './../../Store';

import Listing from './../Listing/Listing';

export default class Media extends Component {

  constructor(props) {
    super(props);
    this.state = {
      media: {},
    };
  }

  componentDidMount() {
    if (this.props.search) {
      const args = {
        t: this.props.search,
      };

      api.loadMedia(args).then((resp) => {
        this.setState({media: resp.data});
      });
    }
  }


  render() {
    return (
      <section className="media">
        <p className="subtitle is-5">{ `Season ${this.props.season}` }</p>
        <h1 className="title is-1">{ this.state.media.Title }</h1>
        <p className="subtitle is-4">{this.state.media.Plot}</p>
        {Object.entries(this.state.media).length > 0 &&
          <Listing title={ this.state.media.Title } season={ this.props.season }></Listing>
        }
      </section>
    )
  }
}


Media.defaultProps = {
  search: '',
}