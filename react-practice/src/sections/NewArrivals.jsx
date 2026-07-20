import React from 'react'
import '../styles/NewArrivals.css'
import NewArrivalsData from '../data/new-arrivals-data.json'
export default function NewArrivals() {
  return (
    <>
      <section className='newArrivals-section'>
        <div className='newArrivals-container'>
          <div className='newArrivals-heading'>
            <h4>Just arrived</h4>
            <h1>New arrivals</h1>

          </div>
          <div className='newArrivals-grid'>
            {NewArrivalsData.map((item, index) =>(
              <div className='newArrivals-card' key={index}>
                <div className='newArrivals-image-wrapper'>
                  <div className='bestSeller-badge' > best seller </div>
                  <img src={item.image} alt={item.name} className='newArrivals-image' />
                  <div className='add-btn-newArrivals'>
                    + Add to bag
                  </div>
                </div>
                <div className='newArrivals-card-info'>
                  <h3> {item.name} </h3>
                  <p> {item.price} </p>

                </div>
              </div>

            ) )}

          </div>


        </div>
      </section>
    </>
  )
}
