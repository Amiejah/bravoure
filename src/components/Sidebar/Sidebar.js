import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import SidebarInner from './SidebarInner';

const root = document.getElementById("sidebar");

// const Sidebar = () => {
//   return ReactDOM.createPortal(
//     <SidebarInner></SidebarInner>,
//     document.getElementsByClassName('.sidebar'),
//   )
// }

export default class Sidebar extends Component {
  constructor() {
    super();
    this.el = document.createElement("div");
    console.log(this);
  }

  componentDidMount = () => {
    root.appendChild(this.el);
    root.classList.add('active');
  };

  componentWillUnmount = () => {
    root.removeChild(this.el);
    root.classList.remove('active');
  };

  render() {
    const { children } = this.props;
    console.log(children);
    return ReactDOM.createPortal(
      <SidebarInner></SidebarInner>,
      this.el
    );
  }
}