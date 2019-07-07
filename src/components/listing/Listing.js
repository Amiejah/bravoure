import * as api from './../../Store';

import React, { Component } from 'react';
import ListingItem from './ListingItem';

export default class Listing extends Component {

  constructor(props) {
    super(props);
    this.state = {
      episodes: null,
      media: null,
      loading: true,
    };
  }

  componentDidMount() {
    const args = {
      t: this.props.title,
      season: this.props.season,
    };

    api.loadMedia(args).then((resp) => {
      this.setState({ episodes: resp.data.Episodes, loading: false}, () => {});
    }).catch((err) => {
      console.log(err);
      return null;
    });
  }

  render() {
    if (this.state.loading) {
      return <div>Loading episodes...</div>;
    }
    const { episodes } = this.state;
    return (
      <div className="columns">
        {episodes.map((episode, i) => {
          episode.season = this.props.season;
          episode.seriesTitle = this.props.title;
          return (
            <div key={i} className="column is-one-quarter">
              <ListingItem episode={episode}></ListingItem>
            </div>
          )
        })}
      </div>
    )
  }
}