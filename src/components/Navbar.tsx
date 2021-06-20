import React from 'react';

type NavProps = {
  setShowDesign: (showDesign: boolean) => void;
  showDesign: boolean
}

export function Navbar({setShowDesign, showDesign}: NavProps) {
  return (
    <div className="container items-center">
      <div className="text-blueGray-700 transition duration-500 ease-in-out transform bg-white  rounded-lg ">
        <div className="flex flex-col flex-wrap mx-auto md:items-center md:flex-row">
          <a href="/" className="pr-2 lg:pr-8 lg:px-6 focus:outline-none">
            <div className="inline-flex items-center">
              <div className="w-2 h-2 p-2 mr-2 rounded-full bg-gradient-to-tr from-blue-500 to-blue-600">
              </div>
              <h2 className="block p-2 text-xl font-medium tracking-tighter text-black transition duration-500 ease-in-out transform cursor-pointer hover:text-blueGray-500 lg:text-x lg:mr-8"> wickedblocks </h2>
            </div>
          </a>
          <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto md:mr-auto">
            <ul className="items-center inline-block list-none lg:inline-flex">
              <li className={`flex items-center h-full focus:outline-none px-4 py-4 ${showDesign === false ? ' bg-gray-100' : 'hover:bg-gray-50'}`} onClick={() => setShowDesign(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                <a href="#" className="px-4 py-1 mr-1 text-base text-blueGray-500 transition focus:outline-none duration-500 ease-in-out transform rounded-md hover:text-black ">Content</a>
              </li>
              <li className={`flex items-center h-full px-4 py-4 ${!showDesign ? ' hover:bg-gray-50' : 'bg-gray-100'}`} onClick={() => setShowDesign(true)}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
                <a href="#" className="px-4 py-1 mr-1 text-base text-blueGray-500 transition focus:outline-none duration-500 ease-in-out transform rounded-md hover:text-black ">Design</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>

  )
}
