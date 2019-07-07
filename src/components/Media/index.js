import React, { Component } from 'react';
import * as api from './../../Store';

import Listing from './../listing/Listing';

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
        <span className="media_season">{ `Season ${this.props.season}` }</span>
        <h1 className="media_title">{ this.state.media.Title }</h1>
        <p className="media_excerpt">{this.state.media.Plot}</p>
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