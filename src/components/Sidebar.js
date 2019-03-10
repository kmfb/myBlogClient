import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import '../css/Sidebar.css'

class Sidebar extends Component {
  render() {
    return (
      <aside className="sidebar">
        <NavLink to="/Content">Home</NavLink>
        <NavLink to="/About">About</NavLink>
      </aside>
    )
  }
}

export default Sidebar;
