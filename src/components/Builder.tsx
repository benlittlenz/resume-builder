import React from 'react';

import { PersonalDetails } from './PersonsalDetails'

export function Builder() {
  return (
    <div className="flex items-center">
      <div className="w-4/12">
      <PersonalDetails />
      </div>
      <Counter />
      <div className="h-screen w-6/12 bg-red-500 mx-8 my-8 mx-auto">
sddfsdfsfd
      </div>
    </div>
  )
}
