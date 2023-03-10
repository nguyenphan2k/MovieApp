import React, { useState } from 'react'
import Hero from '../Hero/Hero'
import Trending from '../Trending/Trending'
import Banner from '../Banner/Banner'
import Popular from '../Popular/Popular'
import Join from '../Join/Join'
import Leader from '../Leader/Leader'
import Movie from '../Movie/Movie'

function Home() {
     const [sectionToggle, setSectionToggle] = useState({
          first: "On TV",
          second: "On TV",
          third: "Today"
     })
     const handleToggledValue = (section,selectedValue) => {
          setSectionToggle(prev => {
             return{
                  ...prev,
                  [section]: selectedValue
             }
          })
     }
     console.log(setSectionToggle);
     return (
          <div>
               <Hero />
               <Trending title="Trending" items={["Today", "This Week"]} onToggle={handleToggledValue.bind(null,'first')}
               isToggled={sectionToggle.first==="On TV"?false:true}>
                    <Movie />
               </Trending>
               <Banner />
               <Popular title="What's Popular" items={["On TV", "In Threaters"]}/>
               <Join />
               <Leader />
          </div>
     )
}

export default Home