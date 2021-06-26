import React, { useState } from 'react';

import { PersonalDetails } from './Display/PersonalDetails'
import { useAppSelector } from '../app/hooks';

import { Name } from './Display/PersonalDetails/Output/Name'
import { Contact } from './Display/PersonalDetails/Output/Contact'
import { Navbar } from './Navbar'
import { AddContent } from './AddContent'
import { DesignName } from './Design/PersonalDetails'
import { DesignHeader } from './Design/Header'

export function Builder() {
  const [showModal, setShowModal] = useState(false)
  const [showDesign, setShowDesign] = useState(false)
  const details = useAppSelector((state) => state.detailsForm)

  return (
    <div>
      <Navbar setShowDesign={setShowDesign} showDesign={showDesign} />
      <div className="flex items-center bg-gray-100">
        <div className="h-screen w-5/12">
          {!showDesign && (
            <>
              <PersonalDetails />
              <div className="flex justify-center w-full mx-auto">
                <button
                  className="mt-6 bg-green-500 text-white text-lg font-semibold px-10 py-2 rounded-md"
                  onClick={() => setShowModal(true)}
                >Add Content</button>
              </div>
            </>
          )}
          {showDesign && (
            <>
<DesignName />
<DesignHeader />
            </>

          )}
        </div>
        <div className="h-screen w-6/12 bg-white shadow-lg rounded-md mx-8 my-8 ">
          <Name name={details.fullname} />
          <Contact details={details} />
        </div>
      </div>
      {showModal && <AddContent />}
    </div>
  )
}
