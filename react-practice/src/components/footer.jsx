import React from 'react'
import '../styles/footer.css'
export default function Footer() {
  return (
    <>
      <section className='footer'>
        <div className='footer-top'>
          <div className='footer-top-content'>
            <div className='footer-top-brand' >
              <h1>
                CARA
              </h1>
              <p> Fine jewellery, certified and made to order. Complimentary worldwide shipping, duties included. </p>
              <div className='footer-socials'>
                <a>Instagram</a>
                <a>Facebook</a>
                <a>YouTube</a>
              </div>

            </div>
            <div className='footer-top-list'>
              <div className='footer-top-list-inner'>
              <h3>
                shop
              </h3>
              <ul>
                <li>High Jewellery</li>
                <li>Engagement</li>
                <li>Diamonds</li>
                <li>Gemstones</li>
                <li>Made to Order</li>
              </ul>
            </div>
            <div className='footer-top-list-inner'>
              <h3>
                About
              </h3>
              <ul>
                <li>The Maison</li>
                <li>Craftsmanship</li>
                <li>Certification</li>
                <li>Boutiques</li>
              </ul>
            </div>

            <div className='footer-top-list-inner'>
              <h3>
                Help
              </h3>
              <ul>
                <li>Contact</li>
                <li>Shipping</li>
                <li>Returns</li>
                <li>Book Appointment</li>
              </ul>
            </div>
            <div className='footer-top-list-inner'>
              <h3>
                Legal
              </h3>
              <ul>
                <li>Terms</li>
                <li>Privacy</li>
                <li>Cookie Policy</li>
                <li>Returns Policy</li>

              </ul>
            </div>

            </div>
            


          </div>

        </div>
        <div className='footer-bottom'>
          <div className='footer-bottom-content'>
            <h3>© 2026 Cara Jewellers</h3>
            <div className='footer-bottom-span'>
              <span>UAE EN</span>
              <span>UAE AR</span>
              <span>UK</span>
              <span>Global</span>
            </div>

          </div>

        </div>

      </section>
    </>
  )
}
