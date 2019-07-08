import * as api from './../../Store';

import React, { Component } from 'react';
import { Carousel, Icon } from "antd";
import ListingItem from './ListingItem';

export default class Listing extends Component {

  constructor(props) {
    super(props);
    this.state = {
      episodes: null,
      media: null,
      loading: true,
    };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.carousel = React.createRef();
  }

  next() {
    this.carousel.next();
  }
  previous() {
    this.carousel.prev();
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
    const config = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1
    };
    return (
      <div className="columns">

        <Icon type="left-circle" onClick={this.previous} />
        <Icon type="right-circle" onClick={this.next} />

        <Carousel ref={node => (this.carousel = node)} {...config}>
          {episodes.map((episode, i) => {
            episode.season = this.props.season;
            episode.seriesTitle = this.props.title;
            return (
              <div key={i} className="column is-one-quarter">
                <ListingItem episode={episode}></ListingItem>
              </div>
            )
          })}
        </Carousel>

      </div>
    )
  }
}