import * as React from 'react'
import Gallery from '../components/Gallery/Gallery'
import BannerHome from '../components/BannerHome/BannerHome'
import Footer from '../components/footer/Footer'

function Home() {
  return (
    <div className="App">
          <BannerHome/>
          <Gallery/> 
          <Footer/>
    </div>
  )
}

export default Home
