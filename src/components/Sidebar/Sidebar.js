import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import SidebarInner from './SidebarInner';

const root = document.getElementById("sidebar");

export default class Sidebar extends Component {
  constructor() {
    super();
    this.state = {
      visible: false
    }
    this.el = document.createElement("div");
  }

  componentDidMount = () => {
    document.addEventListener('click', this.handleClickOutside, true);
    root.appendChild(this.el);
    root.classList.add('active');
    this.setState({ visible: true });
  };

  componentWillUnmount = () => {
    document.removeEventListener('click', this.handleClickOutside, true);
    root.removeChild(this.el);
    root.classList.remove('active');
    this.setState({ visible: false });
  };

  handleClickOutside = event => {
    const domNode = ReactDOM.findDOMNode(this);

    if (!domNode || !domNode.contains(event.target)) {
      this.setState({
        visible: false
      });
    }
  }

  render() {
    if (this.state.visible) {
      return ReactDOM.createPortal(
        <SidebarInner {...this.props}></SidebarInner>,
        this.el
      );
    }
    return null;
  }
}