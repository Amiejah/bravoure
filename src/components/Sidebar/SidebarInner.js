import React, { Component } from 'react'
// import SidebarIcon from './SidebarIcon';
import { Icon } from "antd";
export default class SidebarInner extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    }
  }

  getRating = (ratings) => {
    if (Object.entries(ratings).length) {
      return (
        <>
          <Icon type="star" theme="filled"></Icon> {ratings[0].Value}
        </>
      );
    }
    return null;
  }

  renderSidebar() {
    const { content } = this.props;

    const coverImage = {
      backgroundImage: `url(/images/episode-${content.Episode}.jpeg)`
    }

    return (
      <>
        <div className="episode-cover" style={coverImage}>
        </div>
        <div className="section">
          <div className="container sidebar-reviews">
            <span>{`Episode ${content.Episode}`} - {content.Year}</span>
            <span>
              {this.getRating(content.Ratings)}
            </span>
          </div>
        </div>
        <div className="section">
          <div className="container sidebar-meta">
            <h3 className="title is-3">{content.Title}</h3>
            <p className="subtitle">{ content.Plot }</p>
          </div>
        </div>
      </>
    )
  }

  toggleSidebar = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }));
  }

  render() {
    return (
      <div className="sidebar-container">
        {/* <SidebarIcon isOpen={this.state.isOpen} onClick={this.toggleSidebar} /> */}
        {this.renderSidebar()}
      </div>
    )
  }
}
