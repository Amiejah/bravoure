import React, { Component } from 'react'
import SidebarIcon from './SidebarIcon';

export default class SidebarInner extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    }
  }

  renderSidebar() {
    const { content } = this.props;
    console.log({content});
    return (
      <>
        <div>
          <img src={`/images/episode-${content.Episode}.jpeg`} alt=""/>
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
