import * as api from './../../Store';
import React, { Component } from 'react';
import Truncate from '@konforti/react-truncate';
import Sidebar from '../Sidebar/Sidebar';

export default class ListingItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      isOpen: false,
    };

  }

  componentDidMount() {
    if (this.props.episode) {
      this.getEpisodeMetaData(this.props.episode);
    }
  }

  toggleSidebar = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }));

    if (this.state.isOpen) {
      return (
        <Sidebar></Sidebar>
      )
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
        <div className="card" onClick={this.toggleSidebar}>
          <div className="card-image">
            <span className="card__episode-number">{ meta.Episode }</span>
            {this.getThumb(meta.Episode)}
          </div>
          <div className="card-content">
            <p className="title is-6">{ Title }</p>
            <div className="subtitle is-6">
              <Truncate lines={3}>{meta.Plot}</Truncate>
            </div>
          </div>

          { this.state.isOpen ? <Sidebar content={meta}></Sidebar> : null }
        </div>
      )
    }
  }

  getThumb(episode, cardBg = {}) {

    if (episode) {
      cardBg = {
        backgroundImage: `url(/images/episode-${episode}.jpeg)`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }
    }

    return (
      <figure className="image" style={cardBg}></figure>
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
        {this.renderEpisodeMeta()}
      </div>
    )
  }
}