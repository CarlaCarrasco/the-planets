import React from 'react'

const PlanetImage = ({ image }) => {
   return (
      <div className="p-10 shrink-0 space-x-5">
         <img className="p-7" src={image} />
      </div>
   )
}

export default PlanetImage
