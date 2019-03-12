import React from 'react'

const HomeBanner = () => {
  return (
      <div className="home-banner-container">
        <div className="video-frame">
          <img src={`${process.env.PUBLIC_URL}/assets/overlay-hero.png`} alt=""/>
        </div>
        <div className="home-banner-video">
          <video autoPlay loop muted>
            <source src={`${process.env.PUBLIC_URL}/assets/ocean.mp4`}/>
          </video>
          <div className="video-overlay"> </div>
        </div>
        <div className="home-banner-hinter">
          <a href="#homeList">
            <img src={`${process.env.PUBLIC_URL}/assets/hook.png`} alt=""/>
          </a>
        </div>
      </div>
  )
}

export default HomeBanner;