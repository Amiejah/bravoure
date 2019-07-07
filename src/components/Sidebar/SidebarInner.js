import React, { Component } from 'react'
import SidebarIcon from './SidebarIcon';

export default class SidebarInner extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    }
  }

  renderSidebar(children) {
    // if (!this.state.isOpen) {
    //   return null
    // }
    console.log(children);

    return (
      <div>Load sidebar content</div>
    )
  }

  toggleSidebar = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }));
  }

  render() {
    const { children } = this.props;
    return (
      <div className="sidebar-container">
        <SidebarIcon isOpen={this.state.isOpen} onClick={this.toggleSidebar} />
        {this.renderSidebar(children)}
      </div>
    )
  }
}
