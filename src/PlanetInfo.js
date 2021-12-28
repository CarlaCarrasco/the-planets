import React from 'react'
import { useState } from 'react'
import PlanetImage from './PlanetImage'
import SideColumn from './SideColumn'
import BottomInfo from './BottomInfo'
import Image from './images/planet-earth.svg'

const PlanetInfo = ({ planetData }) => {
   const [planetImage, setPlanetImage] = useState(Image)
   return (
      <div className="p-7">
         <div className="flex flex-row p-7">
            <PlanetImage image={planetImage} />
            <SideColumn
               name={planetData.name}
               overview={planetData.overview.content}
               setPlanetImage={setPlanetImage}
               images={planetData.images}
            />
         </div>
         <BottomInfo
            rotation={planetData.rotation}
            revolution={planetData.revolution}
            radius={planetData.radius}
            temp={planetData.temperature}
         />
      </div>
   )
}

export default PlanetInfo
