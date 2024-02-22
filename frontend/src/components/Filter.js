import React from 'react'

const Filter = () => {
  return (
    <div className="relative top-12 mb-20 z-10 text-white w-full flex justify-center">
        <div className="py-4 px-2 my-3 bg-gray-300 shadow-[0px_0px_5px_0px_#1e1b4b] rounded-xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-700">
            <a href="#" className="p-3 transition-all duration-300 rounded-lg hover:bg-gray-800 w-full text-sm">Popular</a>
            <a href="#" className="p-3 transition-all duration-300 rounded-lg hover:bg-gray-800 w-full text-sm">Recently Added</a>
            <a href="#" className="p-3 transition-all duration-300 rounded-lg hover:bg-gray-800 w-full text-sm">Saved</a>
        </div>
    </div>
  )
}

export default Filter