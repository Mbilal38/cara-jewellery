import React from 'react'
import '../styles/Categories.css'
import category1 from '/assets/bestSellerImage1.webp'
import category2 from '/assets/bestSellerImage2.webp'
import category3 from '/assets/new-arrivals-image4.webp'
import category4 from '/assets/new-arrivals-image3.webp'
import category5 from '/assets/bestSellerImage4.webp'

export default function Categories() {
  return (
    <>
      <section className='categories-section'>
        <div className='categories-container'>
          <div className="category-content">
            <div className='category-card'>
              <img src={category1} alt="category1" className="category-image" />
              <div className="category-text">
                <h4>Rings</h4>
              </div>
            </div>
            <div className='category-card'>
              <img src={category2} alt="category2" className="category-image" />
              <div className="category-text">
                <h4>Necklaces</h4>
              </div>
            </div>
            <div className='category-card'>
              <img src={category3} alt="category3" className="category-image" />
              <div className="category-text">
                <h4>Earings</h4>
              </div>
            </div>
            <div className='category-card' >
              <img src={category4} alt="category4" className="category-image" />
              <div className="category-text">
                <h4>Bracelets</h4>
              </div>
            </div>
            <div className='category-card'>
              <img src={category5} alt="category5" className="category-image" />
              <div className="category-text">
                <h4>Engagement</h4>
              </div>
            </div>
          </div>


        </div>
      </section>

    </>
  )
}
