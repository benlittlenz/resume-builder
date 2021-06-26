import React, { useState, useEffect } from 'react';
import { useForm } from '../../../app/hooks/useForm'
import { useAppDispatch } from '../../../app/hooks';
import { formSubmitted } from '../../../redux/PersonalDetailsSlice';

type FormProps = {
  setShowForm: (showForm: boolean) => void;
}

type Inputs = {
  profile: string,
};

export function Form({setShowForm}: FormProps) {
  const [fields, handleChange] = useForm({
    profile: '',
  })
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(formSubmitted(fields))
  }, [fields]);

  return (
        <form className="flex flex-col bg-white px-6 py-6 max-w-md rounded-lg shadow-lg">
          <div className="flex justify-between items-center">
            <div className="w-full">
              <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="profile">
                Profile
              </label>
              <input
                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="profile" type="text" placeholder="Enter your title, first and last name"
                value={fields.profile}
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
