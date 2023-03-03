import React from 'react'
import Hero from '../Hero/Hero'
import Trending from '../Trending/Trending'
import Banner from '../Banner/Banner'
import Popular from '../Popular/Popular'
import Join from '../Join/Join'
import Leader from '../Leader/Leader'

function Home() {
     return (
          <div>
               <Hero />
               <Trending />
               <Banner />
               <Popular />
               <Join />
               <Leader />
          </div>
     )
}

export default Home