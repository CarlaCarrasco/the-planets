import React from 'react'
import Data from './data/data.json'

const Header = ({ setPlanetData }) => {
   return (
      <nav className="bg-white py-2 md:py-4 border-b-2">
         <div className="container px-4 mx-auto md:flex md:items-center">
            <div className="flex justify-between items-center">
               <a className="font-bold text-xl text-blue-600">The Planets</a>
               <button
                  className="border border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden"
                  id="navbar-toggle"
               >
                  <i className="fas fa-bars" />
               </button>
            </div>

            <div
               className="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0"
               id="navbar-collapse"
            >
               <a
                  className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
                  onClick={() => setPlanetData(Data[0])}
               >
                  Mercury
               </a>
               <a
                  className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
                  onClick={() => setPlanetData(Data[1])}
               >
                  Venus
               </a>
               <a
                  className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
                  onClick={() => setPlanetData(Data[2])}
               >
                  Mars
               </a>
               <a
                  className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
                  onClick={() => setPlanetData(Data[3])}
               >
                  Jupiter
               </a>
               <a
                  className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
                  onClick={() => setPlanetData(Data[4])}
               >
                  Saturn
               </a>
               <a
                  className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
                  onClick={() => setPlanetData(Data[5])}
               >
                  Uranus
               </a>
               <a
                  className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
                  onClick={() => setPlanetData(Data[6])}
               >
                  Neptune
               </a>
            </div>
         </div>
      </nav>
   )
}

export default Header
