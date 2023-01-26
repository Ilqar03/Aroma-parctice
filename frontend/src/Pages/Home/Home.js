import React from 'react'
import PremiumProduct from '../../Componets/HomeComponents/PremiumProductSection/PremiumProduct'
import TrendingProductSection from '../../Componets/HomeComponents/TrendingProductSection/TrendingProductSection'
import Navbar from '../../LayOut/Navbar/Navbar'
import "./Home.scss"

function Home() {
  return (
    <main>
      <Navbar/>
      <PremiumProduct/>
      <TrendingProductSection/>
      </main>
  )
}

export default Home