import React, { useState, useEffect } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { changeAlignment } from '../../redux/PersonalDetailsSlice';

export function DesignHeader() {
  const [alignment, setAlignment] = useState('center')
  const [displayType, setDisplayType] = useState('icon')

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(changeAlignment(alignment))
  }, [alignment]);

  return (
    <div className="flex flex-col bg-white px-8 py-6 mt-8 max-w-2xl rounded-lg shadow-lg">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-bold px-2 py-1">Header</h2>
      </div>
      <div className="mt-4 border border-gray-50"></div>
      <div className="mt-4">
        <h4 className="text-gray-700 font-semibold text-sm">Alignment</h4>
        <div className="grid grid-cols-8 gap-1 mt-2">
          <button
            className="flex justify-center px-2 bg-gray-50 hover:bg-gray-100 focus:outline-none rounded-lg cursor-pointer"
            onClick={() => setAlignment('left')}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H4Z" fill="currentColor" />
              <path
                d="M4 13C3.44772 13 3 13.4477 3 14C3 14.5523 3.44772 15 4 15H20C20.5523 15 21 14.5523 21 14C21 13.4477 20.5523 13 20 13H4Z" fill="currentColor"
              />
              <path d="M6 10C6 9.44772 6.44772 9 7 9H17C17.5523 9 18 9.44772 18 10C18 10.5523 17.5523 11 17 11H7C6.44772 11 6 10.5523 6 10Z" fill="currentColor" />
              <path d="M7 17C6.44772 17 6 17.4477 6 18C6 18.5523 6.44772 19 7 19H17C17.5523 19 18 18.5523 18 18C18 17.4477 17.5523 17 17 17H7Z" fill="currentColor" />
            </svg>
          </button>
          <button
            className="flex justify-center px-2 bg-gray-50 hover:bg-gray-100 focus:outline-none rounded-lg cursor-pointer"
            onClick={() => setAlignment('center')}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H4Z"
                fill="currentColor"
              />
              <path
                d="M4 9C3.44772 9 3 9.44772 3 10C3 10.5523 3.44772 11 4 11H12C12.5523 11 13 10.5523 13 10C13 9.44772 12.5523 9 12 9H4Z"
                fill="currentColor"
              />
              <path
                d="M3 14C3 13.4477 3.44772 13 4 13H20C20.5523 13 21 13.4477 21 14C21 14.5523 20.5523 15 20 15H4C3.44772 15 3 14.5523 3 14Z"
                fill="currentColor"
              />
              <path
                d="M4 17C3.44772 17 3 17.4477 3 18C3 18.5523 3.44772 19 4 19H12C12.5523 19 13 18.5523 13 18C13 17.4477 12.5523 17 12 17H4Z"
                fill="currentColor"
              />
            </svg>
          </button>
          <button
            className="flex justify-center px-2 bg-gray-50 hover:bg-gray-100 focus:outline-none rounded-lg cursor-pointer"
            onClick={() => setAlignment('right')}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 5C20.5523 5 21 5.44772 21 6C21 6.55228 20.5523 7 20 7H4C3.44772 7 3 6.55228 3 6C3 5.44772 3.44772 5 4 5H20Z"
                fill="currentColor"
              />
              <path
                d="M20 9C20.5523 9 21 9.44772 21 10C21 10.5523 20.5523 11 20 11H12C11.4477 11 11 10.5523 11 10C11 9.44772 11.4477 9 12 9H20Z"
                fill="currentColor"
              />
              <path
                d="M21 14C21 13.4477 20.5523 13 20 13H4C3.44772 13 3 13.4477 3 14C3 14.5523 3.44772 15 4 15H20C20.5523 15 21 14.5523 21 14Z"
                fill="currentColor"
              />
              <path
                d="M20 17C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H12C11.4477 19 11 18.5523 11 18C11 17.4477 11.4477 17 12 17H20Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="flex items-center mt-4">
        <button
           className={`py-1 px-8 mx-2 rounded-lg border-2 focus:outline-none text-semibold tracking-wide hover:shadow:md
           ${displayType === 'icon'
             ? 'border-indigo-400 bg-indigo-200 text-indigo-800 hover:bg-indigo-400 hover:text-white'
             : 'border-gray-300 bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
             onChange={() => setDisplayType('icon')}
            >
          Icon
        </button>
        <button
          className={`py-1 px-8 mx-2 rounded-lg border-2 focus:outline-none text-semibold tracking-wide hover:shadow:md
          ${displayType === 'bullet'
            ? 'border-indigo-600 bg-indigo-200 text-indigo-800 hover:bg-indigo-400 hover:text-white'
            : 'border-gray-300 bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
            onChange={() => setDisplayType('bullet')}
            >
          Bullet
        </button>
        <button
          className={`py-1 px-8 mx-2 rounded-lg border-2 focus:outline-none text-semibold tracking-wide hover:shadow:md
          ${displayType === 'line'
            ? 'border-indigo-600 bg-indigo-200 text-indigo-800 hover:bg-indigo-400 hover:text-white'
            : 'border-gray-300 bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
          onChange={() => setDisplayType('line')}
          >
          Line
        </button>
      </div>
    </div>
  )
}
