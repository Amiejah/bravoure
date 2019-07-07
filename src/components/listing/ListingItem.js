import * as api from './../../Store';
import React, { Component } from 'react';

export default class ListingItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    if (this.props.episode) {
      this.getEpisodeMetaData(this.props.episode);
    }
  }

  /**
   * We need to get some additional episode meta data.
   * @param {*} episode
   */
  renderEpisodeMeta() {
    if (!this.state.loading) {
      const { meta } = this.state;
      const { Title } = this.props.episode;

      return (
        <div className="card">
          <div className="card-image">
            <span className="episode_number">{ meta.Episode }</span>
            {this.getThumb(meta.Episode)}
          </div>
          <div className="card-content">
            <p className="title is-6">{ Title }</p>
            <div className="subtitle is-6">{meta.Plot}</div>
          </div>
        </div>
      )
    }
  }

  getThumb(episode) {
    return (
      <figure className="image">
        <img src={`/images/episode-${episode}.jpeg`} alt=""/>
      </figure>
    );
  }

  getEpisodeMetaData({ seriesTitle, season, Episode }) {

    const args = {
      t: seriesTitle,
      season: season,
      episode: Episode
    }

    api.loadMedia(args).then((resp) => {
      this.setState({ meta: resp.data, loading: false}, () => {});
    }).catch((err) => {
      console.log(err);
      return null;
    });
  }

  render() {
    return (
      <div>
        {/* <span className="episode">{ Episode }</span>
        <span className="title">{Title}</span> */}

        {this.renderEpisodeMeta()}
      </div>
    )
  }
}