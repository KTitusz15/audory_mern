import React from 'react'

const PostDetails = ({post}) => {
  return (
    <div className="p-5 my-3 bg-black shadow-[0px_0px_10px_0px_#1e1b4b] rounded-xl bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-70 border border-gray-700 text-white w-full self-center transition-transform duration-200 hover:scale-[1.01]">
    <div className="flex flex-row items-center justify-between">
        {/* Details */}
        <div className="flex flex-col justify-between gap-0.5 sm:gap-1 md:gap-1 lg:gap-2 xl:gap-6 items-start w-full h-full px-5">
            <p className="font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl">{post.title}</p>
            <p className="font-light text-sm sm:text-sm md:text-lg lg:text-xl xl:text-2xl">{post.user}</p>
            
            <p className="font-extralight opacity-70 text-xs sm:text-sm md:text-sm lg:text-lg">{post.desc}</p>
            <a target='_blank' href={post.link} className="self-center inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 transition-transform duration-200 hover:scale-105">
              <span className="text-center relative text-xs sm:text-sm md:text-lg lg:text-xl px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Play on SoundCloud
            </span>
            </a>
        </div>

        {/* Interactions */}
        <div className="flex flex-col justify-around items-center gap-4">
            {/* Comment */}
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>

            {/* Like */}
            <div className="flex flex-col items-center gap-1.5">
              <svg className='hover:fill-white transition-colors hover:cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
              <p className="text-sm">{post.like}</p>
            </div>
        </div>
        
    </div>
    </div>
  )
}

export default PostDetails