import React from 'react'
import { useState } from 'react'
import './App.css'
import Header from './Header'
import PlanetInfo from './PlanetInfo'
import Data from './data/data.json'
import Image from './images/planet-mercury.svg'

function App() {
   const [planetData, setPlanetData] = useState(Data[0])
   const [planetImage, setPlanetImage] = useState(Image)
   const [planetColor, setPlanetColor] = useState(Data[0].name)

   return (
      <div className="App background">
         <Header
            setPlanetData={setPlanetData}
            setPlanetImage={setPlanetImage}
            setPlanetColor={setPlanetColor}
         />
         <PlanetInfo
            planetData={planetData}
            planetImage={planetImage}
            setPlanetImage={setPlanetImage}
            planetColor={planetColor}
         />
      </div>
   )
}

export default App
