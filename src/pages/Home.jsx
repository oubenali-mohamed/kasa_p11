import * as React from 'react'
import Gallery from '../components/Gallery/Gallery'
import BannerHome from '../components/BannerHome/BannerHome'

function Home() {
  return (
    <div className="App">
          <BannerHome/>
          <Gallery/> 
    </div>
  )
}

export default Home
