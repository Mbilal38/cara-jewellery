import React from 'react'
import'../styles/ProductCarousel.css'
import carouselData from '../data/carousel-data.json'
export default function ProductCarousel() {
  return (
    <>
    <section className="product-carousel">
      <div className= "product-carousel-content">
        <div className="heading">
          <h4>Featured</h4>
          <h1>Collections</h1>
        </div>
        <div className="carousel">
          { carouselData.map((item, index) => (
            <div className='carouselCard' key={index}>
              <div className='carousel-image-wrapper'>
                <img src={item.image} alt={item.name} className='carousel-image' /> 

              </div>
              <div className='card-info'>
                <h3> {item.name} </h3>
                <p> {item.detail} </p>

              </div>

            </div>
          )
          )
          }
          

        </div>

      </div>

    </section>
    
    </>
  )
}
