import React from 'react'
import '../styles/ImageText.css'
import featureImage from'/assets/Image7.webp'

export default function ImageText() {
  return (
    <>
    <section className='ImageText'>
      <div className='main-section'>
        <div className='mainImage' >
          <img src={featureImage} alt="The House of Cara Fine Jewelry Craft" className='SectionImage' />
        </div>
        <div className='SectionContent'>
          <h4>the house of cara </h4>
          <h1>Craft that outlives the moment</h1>
          <hr className='divider'/>
          <p>Every Cara piece is made to order by master jewellers and certified by GIA, IGI, and HRD — a quiet promise of provenance, set in gold and light.</p>
          <button className='maison-btn'>DIscover the maison</button>


        </div>
      </div>

    </section>
    </>
  )
}
