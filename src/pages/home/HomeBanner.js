import React from 'react'

const HomeBanner = () => {
  return (
      <div className="home-banner-container">
        <div className="video-frame">
          <img src={`${process.env.PUBLIC_URL}/assets/overlay-hero.png`} alt=""/>
        </div>
        <div className="home-banner-video">
          <video autoPlay loop muted x5-video-player-type="h5">
            <source src="http://source.zhwangart.com/hexo/themes/ocean/ocean.mp4" type="video/mp4" />
              <source src="http://source.zhwangart.com/hexo/themes/ocean/ocean.ogv" type="video/ogg" />
                <source src="http://source.zhwangart.com/hexo/themes/ocean/ocean.webm" type="video/webm" />
                  <p>Your user agent does not support the HTML5 Video element.</p>
          </video>
          <div className="video-overlay"> </div>
        </div>
        <div className="home-banner-hinter">
          <a href="#homeList">
            <img src={`${process.env.PUBLIC_URL}/assets/hook.png`} alt=""/>
          </a>
        </div>
        <div className="home-banner-text">
          <div className="home-banner-text-inner">Boat House</div>

        </div>
      </div>
  )
}

export default HomeBanner;