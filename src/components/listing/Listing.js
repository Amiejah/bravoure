import * as api from './../../Store';

import React, { Component } from 'react';
import { Carousel, Icon } from "antd";
import ListingItem from './ListingItem';
import "antd/lib/carousel/style/index.css";
export default class Listing extends Component {

  constructor(props) {
    super(props);
    this.state = {
      episodes: null,
      media: null,
      loading: true,
      dotPosition: 'top',
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
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            dots: true,
            slidesToScroll: 1
          }
        }]

    };
    return (
      <>
        <div className="columns">
          <Carousel ref={node => (this.carousel = node)} {...config} dotPosition={this.state.dotPosition}>
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

        <div className="icon-holder">
          <Icon type="arrow-left" onClick={this.previous} />
          <Icon type="arrow-right" onClick={this.next} />
        </div>
      </>
    )
  }
}