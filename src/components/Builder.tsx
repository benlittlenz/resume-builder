import React, { useState } from 'react';

import { PersonalDetails } from './PersonsalDetails'
import { Counter } from '../features/Counter'
import { useAppSelector } from '../app/hooks';

import { Name } from './PersonsalDetails/Output/Name'
import { Contact } from './PersonsalDetails/Output/Contact'
export function Builder() {
  const details = useAppSelector((state) => state.detailsForm)

  return (
    <div className="flex items-center bg-gray-100">
      <div className="h-screen w-4/12">
      <PersonalDetails />
      </div>
      <div className="h-screen w-6/12 bg-white shadow-lg rounded-md mx-8 my-8 mx-auto">
        <Name name={details.fullname} />
        <Contact details={details} />
      </div>
    </div>
  )
}
