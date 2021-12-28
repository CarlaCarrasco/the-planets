import React from 'react'

const BottomInfo = ({ rotation, revolution, radius, temp }) => {
   return (
      <div className="grid grid-cols-4 grid-flow-col gap-5 justify-items-stretch">
         <div className="text-left border-2 border-slate-700 py-3 px-4">
            <div>Rotation Time</div>
            <h2 className="text-4xl">{rotation}</h2>
         </div>
         <div className="text-left border-2 border-slate-700 py-3 px-4">
            <div>Revolution Time</div>
            <h2 className="text-4xl">{revolution}</h2>
         </div>
         <div className="text-left border-2 border-slate-700 py-3 px-4">
            <div>Radius</div>
            <h2 className="text-4xl">{radius}</h2>
         </div>
         <div className="text-left border-2 border-slate-700 py-3 px-4">
            <div>Average Temp.</div>
            <h2 className="text-4xl">{temp}</h2>
         </div>
      </div>
   )
}

export default BottomInfo
