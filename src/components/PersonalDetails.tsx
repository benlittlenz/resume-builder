import React from 'react';

export function PersonalDetails() {
  return (
    <div>
      <div className="flex flex-col bg-white px-8 py-6 max-w-md rounded-lg shadow-lg">
        <div className="flex justify-between items-center">
          <a className="px-2 py-1 bg-gray-600 text-sm text-green-100 rounded" href="#">Personal Details</a>
          <span>
            <button className="flex items-center border border-gray-100 px-4 py-2 rounded-lg hover:border-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
              <a className="text-gray-700 text-sm ml-2">Edit</a>
            </button>
          </span>
        </div>
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <a className="text-gray-700 text-sm mx-3 ml-6" href="#">Alex steve</a>
          </div>
        </div>
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <a className="text-gray-700 text-sm mx-3 ml-6" href="#">alexsteve@gmail.com</a>
          </div>
        </div>
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <a className="text-gray-700 text-sm mx-3 ml-6" href="#">09 8484 444</a>
          </div>
        </div>
      </div>

      <div className="flex flex-col bg-white px-6 py-6 max-w-md rounded-lg shadow-lg">
        <div className="flex justify-between items-center">
          <div className="w-full">
            <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="fullname">
              Full Name
            </label>
            <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="fullname" type="text" placeholder="Enter your title, first and last name" />
          </div>
        </div>

        <div className="flex justify-between items-center py-4">
          <div className="">
            <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="fullname">
              Email
            </label>
            <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="fullname" type="text" placeholder="Email" />
          </div>
          <div className="ml-4">
            <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="fullname">
              Contact #
            </label>
            <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="fullname" type="text" placeholder="Contact #" />
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="w-full">
            <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="street">
              Street
            </label>
            <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="street" type="text" placeholder="Enter Street" />
          </div>
        </div>
        <div className="-mx-3 md:flex mb-2 mt-4">
          <div className="md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="city">
              City
            </label>
            <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="city" type="text" placeholder="City" />
          </div>
          <div className="md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="postcode">
              Post Code
            </label>
            <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="country" type="text" placeholder="postcode" />
          </div>
          <div className="md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="country">
              Country
            </label>
            <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="country" type="text" placeholder="zip" />
          </div>
        </div>
      </div>

    </div>
  )
}
