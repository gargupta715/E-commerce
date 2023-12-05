import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import NewCollections from '../Components/NewCollection/NewCollections'
import Offers from '../Components/Offers/Offers'
import NewsLetter from '../Components/NewLetter/NewsLetter'
import Footer from '../Components/Footer/Footer'

const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <NewCollections/>
      <NewsLetter/>
      <Footer/>
    </div>
  )
}

export default Shop