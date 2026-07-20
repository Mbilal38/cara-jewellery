import React from 'react'
import '../styles/NewsLetter.css'

export default function NewsLetter() {
  return (
    <>
    <section className='newsLetter-section'> 
      <div className='newsLetter-content'>
        <div className='newsletter-text'>
          <h4>stay close</h4>
          <h1>Be the first to see new arrivals</h1>          
        </div>
        <div className='newsletter-input'>
            <input type='Email' placeholder='Email address' className='placeholder'></input>
            <button className='newsletter-btn'>Subscribe</button>
          </div>

      </div>
    </section>
    </>
  )
}
