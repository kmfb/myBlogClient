import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import '../css/Sidebar.css'

class Sidebar extends Component {
  render() {
    return (
      <aside className="sidebar">
        <div className="blog-logo">
          <img src={`${process.env.PUBLIC_URL}/assets/fish.png`} alt=""/>
        </div>
        <ul>
          <li>
            <NavLink to="/Home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/About">About</NavLink>
          </li>
        </ul>


      </aside>
    )
  }
}

export default Sidebar;
