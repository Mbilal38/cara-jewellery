import React from 'react'
import '../styles/BestSeller.css'
import BestSellerData from '../data/best-seller-data.json'

export default function BestSeller() {
  return (
    <>
      <section className='bestSeller-section'>
        <div className='bestSeller-container'>
          <div className='bestSeller-heading'>
            <h4>Most loved</h4>
            <h1>Best sellers</h1>
            <p>The pieces our clients return to — quietly iconic, endlessly worn.</p>


          </div>
          <div className='bestSeller-grid'>
            {BestSellerData.map((item, index) => (
              <div className='bestSeller-card' key={index}>
                <div className='bestSeller-image-wrapper'>
                  <div className='bestSeller-badge' > best seller </div>
                  <img src={item.image} alt={item.name} className='bestSeller-image' />
                  <div className='add-btn'>
                    + Add to bag
                  </div>

                </div>
                <div className='bestSeller-card-info'>
                  <h3> {item.name} </h3>
                  <p> {item.price} </p>

                </div>


              </div>
            ))}


          </div>
          <button className='bestSeller-btn'>
            Shop all best sellers

          </button>
        </div>


      </section>

    </>
  )
}
