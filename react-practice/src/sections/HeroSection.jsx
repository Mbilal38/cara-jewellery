import React from 'react'
import '../styles/HeroSection.css'
import heroImage from '/assets/hero-section.webp'
export default function HeroSection() {
  return (
    <>
      <section className="hero-section">
        <div className="hero-content">
          <img src={heroImage} alt="Hero Image" className="hero-image" />
          <div className="hero-text">
            <h4>Fine Jewelry</h4>
            <h1>A signature worth keeping</h1>
            <button className='btn'> Discover High Jewelry</button>
          </div>
        </div>

      </section>
    
    </>
  )
}
