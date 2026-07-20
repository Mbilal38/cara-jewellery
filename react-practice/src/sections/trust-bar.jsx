import React from 'react'
import '../styles/trust-bar.css'
export default function TrustBar() {
  return (
    <>
      <section className='trust-bar-section'>
        <div className='trust-bar-container'>
          <div className='trust-bar-content'>
            <div className='trust-bar-item'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox=' 0 0 24 24' fill='none' stroke='currentColor'
                strokeWidth="1.3" stroke-linecap='round' stroke-linejoin="round" class="lucide lucide-gem size-6 text-primary" aria-hidden="true">
                <path d="M10.5 3 8 9l4 13 4-13-2.5-6"></path>
                <path d="M17 3a2 2 0 0 1 1.6.8l3 4a2 2 0 0 1 .013 2.382l-7.99 10.986a2 2 0 0 1-3.247 0l-7.99-10.986A2 2 0 0 1 2.4 7.8l2.998-3.997A2 2 0 0 1 7 3z"></path>
                <path d="M2 9h20"></path>
              </svg>
              <h3>
                Certified by GIA · IGI · HRD
              </h3>

            </div>
            <div className='trust-bar-item'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox=' 0 0 24 24' fill='none' stroke='currentColor'
                strokeWidth="1.3" stroke-linecap='round' stroke-linejoin="round" class="lucide lucide-shield-check size-6 text-primary" aria-hidden="true">
                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                <path d="m9 12 2 2 4-4"></path>
              </svg>
              <h3>
                Secure payment
              </h3>

            </div>
            <div className='trust-bar-item'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox=' 0 0 24 24' fill='none' stroke='currentColor'
                strokeWidth="1.3" stroke-linecap='round' stroke-linejoin="round" class="lucide lucide-truck size-6 text-primary" aria-hidden="true">
                <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path>
                <path d="M15 18H9"></path>
                <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
                <circle cx="17" cy="18" r="2"></circle>
                <circle cx="7" cy="18" r="2"></circle>
              </svg>
              <h3>
                Worldwide shipping, duties included
              </h3>

            </div>
            <div className='trust-bar-item'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox=' 0 0 24 24' fill='none' stroke='currentColor'
                strokeWidth="1.3" stroke-linecap='round' stroke-linejoin="round" class="lucide lucide-calendar-heart size-6 text-primary" aria-hidden="true">
                <path d="M12.127 22H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5.125"></path>
                <path d="M14.62 18.8A2.25 2.25 0 1 1 18 15.836a2.25 2.25 0 1 1 3.38 2.966l-2.626 2.856a.998.998 0 0 1-1.507 0z"></path>
                <path d="M16 2v4"></path>
                <path d="M3 10h18"></path>
                <path d="M8 2v4"></path>
              </svg>
              <h3>
                Book a private appointment
              </h3>

            </div>
          </div>

        </div>
      </section>
    </>
  )
}
