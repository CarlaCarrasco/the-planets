import React from 'react'

const BottomInfo = ({ rotation, revolution, radius, temp }) => {
   return (
      <div className="grid grid-cols-4 grid-flow-col gap-5 justify-items-stretch">
         <div className="text-left border-2 border-slate-700 py-3 px-4">
            <div className="text-gray font-bold">Rotation Time</div>
            <h2 className="text-4xl">{rotation}</h2>
         </div>
         <div className="text-left border-2 border-dark-gray py-3 px-4">
            <div className="text-gray font-bold">Revolution Time</div>
            <h2 className="text-4xl">{revolution}</h2>
         </div>
         <div className="text-left border-2 border-dark-gray py-3 px-4">
            <div className="text-gray">Radius</div>
            <h2 className="text-4xl">{radius}</h2>
         </div>
         <div className="text-left border-2 border-dark-gray py-3 px-4">
            <div className="text-gray">Average Temp.</div>
            <h2 className="text-4xl">{temp}</h2>
         </div>
      </div>
   )
}

export default BottomInfo
