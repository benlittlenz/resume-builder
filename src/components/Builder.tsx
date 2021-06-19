import React, { useState } from 'react';

import { PersonalDetails } from './PersonsalDetails'
import { Counter } from '../features/Counter'
import { useAppSelector } from '../app/hooks';
export function Builder() {
  const details = useAppSelector((state) => state.detailsForm)

  return (
    <div className="flex items-center">
      <div className="w-4/12">
      <PersonalDetails />
      </div>
        <Counter />
      <div className="h-screen w-6/12 bg-red-500 mx-8 my-8 mx-auto">
        {details.fullname}
      </div>
    </div>
  )
}
