import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import '../../css/Sidebar.scss'

class Sidebar extends Component {
  render() {
    return (
      <aside className="sidebar">
        <div className="blog-logo">
          <img src={`${process.env.PUBLIC_URL}/assets/fish.png`} alt=""/>
        </div>
        <ul>
          <li>
            <NavLink to="/home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>


      </aside>
    )
  }
}

export default Sidebar;
