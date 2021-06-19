import React from 'react';
import { useAppSelector } from '../../app/hooks';

type DetailsProps = {
  setShowForm: (showForm: boolean) => void;
}

export function Details({ setShowForm }: DetailsProps) {
  const {
    fullname,
    email,
    contactnum
  } = useAppSelector((state) => state.detailsForm)
  return (
    <div className="flex flex-col bg-white px-8 py-6 max-w-md rounded-lg shadow-lg">
      <div className="flex justify-between items-center">
        <a className="px-2 py-1 bg-gray-600 text-sm text-green-100 rounded" href="#">Personal Details</a>
        <span>
          <button
            className="flex items-center border border-gray-100 px-4 py-2 rounded-lg hover:border-gray-300"
            onClick={() => setShowForm(true)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
            <a className="text-gray-700 text-sm ml-2">Edit</a>
          </button>
        </span>
      </div>
      <div className="mt-4 border border-gray-50"></div>
      <div className="flex justify-between items-center mt-4">
        <div className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <a className="text-gray-700 text-sm mx-3 ml-6" href="#">{fullname}</a>
        </div>
      </div>
      <div className="flex justify-between items-center mt-4">
        <div className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <a className="text-gray-700 text-sm mx-3 ml-6" href="#">{email}</a>
        </div>
      </div>
      <div className="flex justify-between items-center mt-4">
        <div className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <a className="text-gray-700 text-sm mx-3 ml-6" href="#">{contactnum}</a>
        </div>
      </div>
    </div>
  )
}
