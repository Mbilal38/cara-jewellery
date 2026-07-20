import { useState } from 'react'
import AnnouncementBar from './components/announcement-bar.jsx'
import Header from './components/header.jsx'
import HeroSection from './sections/HeroSection.jsx'
import ProductCarousel from './sections/ProductCarousel.jsx'
import ImageText from './sections/ImageText.jsx'
import BestSeller from './sections/BestSeller.jsx'
import NewArrivals from './sections/NewArrivals.jsx'
import Categories from './sections/Categories.jsx'
import Banner from './sections/banner.jsx'
import TrustBar from './sections/trust-bar.jsx'
import NewsLetter from './sections/NewsLetter.jsx'
import Footer from './components/footer.jsx'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AnnouncementBar />
      <Header />
      <HeroSection/>
      <ProductCarousel/>
      <ImageText />
      <BestSeller />
      <NewArrivals />
      <Categories />
      <Banner />
      <TrustBar />
      <NewsLetter />
      <Footer />
    </>
  )
}

export default App
