import React from 'react'


const Navbar_new = () => {


    return (
        <nav id='navbar' className="fixed top-0 z-50 w-full transition-colors duration-300">
            <div className="px-5 py-5 lg:px-5 lg:pl-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center justify-start rtl:justify-end">
                        <a href="#" className="flex ms-2 md:me-24">
                            <img src="https://picsum.photos/200" className="h-8 me-3 rounded-full" alt="Audory Logo" />
                            <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">Audory</span>
                        </a>
                    </div>
                    <div className="flex items-center">
                        <div className="flex items-center ms-3 text-white">
                            <div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar_new