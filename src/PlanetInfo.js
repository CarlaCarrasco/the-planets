import React from 'react'
import { useState } from 'react'
import PlanetImage from './PlanetImage'
import SideColumn from './SideColumn'
import BottomInfo from './BottomInfo'
// import Image from './images/planet-earth.svg'

const PlanetInfo = ({
   planetData,
   planetImage,
   setPlanetImage,
   planetColor,
}) => {
   //const [planetImage, setPlanetImage] = useState(Image)
   return (
      <div className="p-7 text-white mx-7">
         <div className="grid grid-cols-2 gap-4 m-auto">
            <PlanetImage image={planetImage} />
            <SideColumn
               name={planetData.name}
               overview={planetData.overview.content}
               setPlanetImage={setPlanetImage}
               images={planetData.images}
               planetColor={planetColor}
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
