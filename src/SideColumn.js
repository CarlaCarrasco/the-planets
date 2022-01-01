import React from 'react'
const SideColumn = ({
   name,
   overview,
   setPlanetImage,
   images,
   planetColor,
}) => {
   const changePlantImage = (el, image) => {
      let prevBtn = document.querySelector(`.${planetColor.toLowerCase()}`)
      prevBtn.classList.remove(planetColor.toLowerCase())
      el.classList.add(planetColor.toLowerCase())
      setPlanetImage(image)
   }
   return (
      <div className="shrink-2 p-10">
         <h1 className="text-6xl mb-6 text-left">{name}</h1>
         <p className="text-left">{overview}</p>
         <p className="text-left my-5 text-gray">
            Source:{'  '}
            <a
               href="https://en.wikipedia.org/wiki/Mercury"
               className="font-bold underline underline-offset-4"
            >
               Wikipedia
            </a>
         </p>
         <div className="text-left">
            <div
               className={`${planetColor.toLowerCase()} mb-3 p-3 hover:cursor-pointer border-2 border-dark-gray`}
               onClick={e => changePlantImage(e.target, images.planet)}
            >
               01 Overview
            </div>
            <div
               className={`mb-3 p-3 hover:cursor-pointer border-2 border-dark-gray`}
               onClick={e => changePlantImage(e.target, images.internal)}
            >
               02 Internal Structure
            </div>
            <div
               className={`mb-3 p-3 hover:cursor-pointer border-2 border-dark-gray`}
               onClick={e => changePlantImage(e.target, images.geology)}
            >
               03 Surface Geology
            </div>
         </div>
      </div>
   )
}

export default SideColumn
