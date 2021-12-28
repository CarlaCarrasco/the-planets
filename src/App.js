import React from 'react'
import { useState } from 'react'
import './App.css'
import Header from './Header'
import PlanetInfo from './PlanetInfo'
import Data from './data/data.json'

function App() {
   const [planetData, setPlanetData] = useState(Data[0])
   console.log(planetData)

   return (
      <div className="App">
         <Header setPlanetData={setPlanetData} />
         <PlanetInfo planetData={planetData} />
      </div>
   )
}

export default App
