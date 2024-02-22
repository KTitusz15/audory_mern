import React from 'react'

const Navbar = () => {
  return (
    /* Navbar */
    <nav id="navbar" className="p-4 z-20 flex fixed flex-row justify-around items-center w-full">
      {/* Navbar Container */}
      <div className="mx-auto px-3 flex justify-between items-center w-full">
          {/* Navbar Title */}
          <a href="#" className="text-white text-3xl font-semibold">Audory</a>
          <a href="#" className="text-gray-400 text-xl ml-auto">Profile</a>
      </div>
    </nav>
  )
}

export default Navbar