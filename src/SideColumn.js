import React from 'react'
const SideColumn = ({ name, overview, setPlanetImage, images }) => {
   return (
      <div>
         <h1 className="text-6xl">{name}</h1>
         <p className="text-left">{overview}</p>
         <p className="text-left my-5">Source link</p>
         <div className="text-left">
            <div
               className="bg-slate-500 mb-3 p-3"
               onClick={() => setPlanetImage(images.planet)}
            >
               01 Overview
            </div>
            <div
               className="bg-slate-500 mb-3 p-3"
               onClick={() => setPlanetImage(images.internal)}
            >
               02 Internal Structure
            </div>
            <div
               className="bg-slate-500 mb-3 p-3"
               onClick={() => setPlanetImage(images.geology)}
            >
               03 Surface Geology
            </div>
         </div>
      </div>
   )
}

export default SideColumn
