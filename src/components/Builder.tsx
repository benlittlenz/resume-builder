import React from 'react';

export function Builder() {
  return (
    <div>
      <div className="flex flex-col bg-white px-8 py-6 max-w-sm rounded-lg shadow-lg">
        <div className="flex justify-center items-center">
          <a className="px-2 py-1 bg-gray-600 text-sm text-green-100 rounded" href="#">Personal Details</a>
        </div>
        <div className="flex justify-between items-center mt-4 w-1/2">
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <span><a className="text-gray-700 text-sm mx-3" href="#">Alex steve</a></span>
        </div>
        <div className="flex justify-between items-center mt-4 w-1/2">
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <span><a className="text-gray-700 text-sm mx-3" href="#">Alex steve</a></span>
        </div>
        <div className="flex justify-between items-center mt-4 w-1/2">
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <span><a className="text-gray-700 text-sm mx-3" href="#">Alex steve</a></span>
        </div>
      </div>
    </div>
  )
}
