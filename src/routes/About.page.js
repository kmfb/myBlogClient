import React from 'react';
import "../css/About.page.scss"

const About = () => {
  return (
      <div className="about-main">
        <img src={`${process.env.PUBLIC_URL}/assets/seal.jpg`} alt=""/>
      </div>
  )
}

export default About;
