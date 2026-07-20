import React from 'react'
import '../styles/banner.css'
import BannerImage from '/assets/Image7.webp'
export default function Banner() {
  return (
    <>
      <section className="banner-section">
        <div className="banner-content">
          <div className='banner-image-wrapper'>
            <img src={BannerImage} alt="banner Image" className="banner-image" />

          </div>
          
          <div className="banner-text">
            <h4>Engagement</h4>
            <h1>The Cara Setting</h1>
            <p>
              A solitaire engineered to hold more light, for the day and every day after.
            </p>
            <button className='banner-btn'> Explore engagement </button>
          </div>
        </div>

      </section>
    </>
  )
}
