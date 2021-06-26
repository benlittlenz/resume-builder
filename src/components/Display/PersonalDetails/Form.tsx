import React, { useState, useEffect } from 'react';
import { useForm } from '../../../app/hooks/useForm'
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { formSubmitted } from '../../../redux/PersonalDetailsSlice';

type FormProps = {
  setShowForm: (showForm: boolean) => void;
  setData: (data: object) => any;
}

type Inputs = {
  fullname: string,
  email: string,
  contactnum: string,
  street: string,
  city: string,
  postcode: string,
  country: string
};

export function Form({setShowForm, setData}: FormProps) {
  const [fields, handleChange] = useForm({
    fullname: '',
    email: '',
    contactnum: '',
    street: '',
    city: '',
    postcode: '',
    country: ''
  })
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(formSubmitted(fields))
  }, [fields]);

  return (
        <form className="flex flex-col bg-white px-6 py-6 max-w-md rounded-lg shadow-lg">
          <div className="flex justify-between items-center">
            <div className="w-full">
              <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="fullname">
                Full Name
              </label>
              <input
                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="fullname" type="text" placeholder="Enter your title, first and last name"
                value={fields.fullname}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="flex justify-between items-center py-4">
            <div className="">
              <label
                className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="email"
              >
                Email
              </label>
              <input
                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                id="email"
                type="text"
                placeholder="Email"
                value={fields.email}
                onChange={handleChange}
              />
            </div>
            <div className="ml-4">
              <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="fullname">
                Contact #
              </label>
              <input
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
              id="contactnum"
              type="text"
              placeholder="Contact #"
              value={fields.contactnum}
              onChange={handleChange}
              />
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="w-full">
              <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="street">
                Street
              </label>
              <input
                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                id="street"
                type="text"
                placeholder="Enter Street"
                value={fields.street}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="-mx-3 md:flex mb-2 mt-4">
            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="city">
                City
              </label>
              <input
                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                id="city"
                type="text"
                placeholder="City"
                value={fields.city}
                onChange={handleChange}
              />
            </div>
            <div className="md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="postcode">
                Post Code
              </label>
              <input
                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                id="postcode"
                type="text"
                placeholder="postcode"
                value={fields.postcode}
                onChange={handleChange}
              />
            </div>
            <div className="md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="country">
                Country
              </label>
              <input
                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                id="country"
                type="text"
                placeholder="country"
                value={fields.country}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="pt-8 flex justify-end space-x-4">
              <button
                className="flex justify-center items-center w-28 border border-gray-100 hover:border-gray-300 text-gray-900 px-4 py-3 rounded-md focus:outline-none"
                onClick={() => setShowForm(false)}

              >
                <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg> Cancel
              </button>
              <button type="submit" className="bg-green-500 flex justify-center items-center w-24 hover:bg-green-600 font-bold text-white px-4 py-3 rounded-md focus:outline-none">Save</button>
          </div>
        </form>
  )
}
