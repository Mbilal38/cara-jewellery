import React from 'react'
import { useState, useEffect } from 'react'
import '../styles/header.css'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }    
    }; 
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  }, []);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>

      <nav className="navbar-content">
        <div className="nav-left">
        <button className={`hamburger-btn ${isMenuOpen ? 'open' : ''}`} 
         onClick={toggleMenu}
         aria-label="Toggle navigation menu">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu size-5" aria-hidden="true">
          <path d="M4 5h16"></path>
          <path d="M4 12h16"></path>
          <path d="M4 19h16"></path>
         </svg>
        </button>
        <div className="logo">CARA</div>
        </div>
        <div className={`nav-links ${isMenuOpen ? 'mobile-open' : ''}`}>
          <a href="#highjewelry" onClick ={()=> setIsMenuOpen(false)} >high jewelry</a>
          <a href="#jewelry" onClick ={()=> setIsMenuOpen(false)} >jewelry</a>
          <a href="#engagement " onClick ={()=> setIsMenuOpen(false)}>engagement</a>
          <a href="#bridal" onClick ={()=> setIsMenuOpen(false)}>bridal</a>
          <a href="#diamonds" onClick ={()=> setIsMenuOpen(false)}>diamonds</a>
          < a className="golden" href="#gemstone" onClick ={()=> setIsMenuOpen(false)}>gemstone</a>
          <a href="#made to order" onClick ={()=> setIsMenuOpen(false)}>made to order</a>
          <a className= "bookavisit" href="book a visit" onClick ={()=> setIsMenuOpen(false)}>book a visit</a>
        </div>
        <div className="nav-icons">
          <p> EN · AR </p> 
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          <svg xmlns="http://www.w3.org/200/svg" width="24" height="24" viewBox=" 0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart size-[18px]" aria-hidden="true"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-use size-[18px]" aria-hidden="true"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-bag size-[18px]" aria-hidden="true"><path d="M16 10a4 4 0 0 1-8 0"></path><path d="M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></svg>

        </div>
      </nav>
      {isMenuOpen && <div className="menu-backdrop" onClick={toggleMenu}></div>}
    </header>
  );
}