import React, { useState } from 'react';

import { PersonalDetails } from './PersonsalDetails'
import { Counter } from '../features/Counter'
import { useAppSelector } from '../app/hooks';

import { Name } from './PersonsalDetails/Output/Name'
import { Contact } from './PersonsalDetails/Output/Contact'
import { AddContent } from './AddContent'
export function Builder() {
  const [showModal, setShowModal] = useState(false)
  const details = useAppSelector((state) => state.detailsForm)

  return (
    <div>
      <div className="flex items-center bg-gray-100">
        <div className="h-screen w-4/12">
          <PersonalDetails />
          <div className="flex justify-center w-full mx-auto">
            <button
              className="mt-6 bg-green-500 text-white text-lg font-semibold px-10 py-2 rounded-md"
              onClick={() => setShowModal(true)}
            >Add Content</button>
          </div>

        </div>
        <div className="h-screen w-6/12 bg-white shadow-lg rounded-md mx-8 my-8 mx-auto">
          <Name name={details.fullname} />
          <Contact details={details} />
        </div>
      </div>
      {showModal && <AddContent />}
    </div>
  )
}
