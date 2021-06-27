import React from 'react';
import { useAppSelector } from '../../../../app/hooks';

export function ProfileOutput() {
  const { profile } = useAppSelector((state) => state.profileForm)
  console.log("YOYOOYOY", profile)
  return (
    <div>
      <div className="w-2/12 px-12">
        <h1 className={`title-font text-lg pt-4 font-bold text-gray-900`}>Profile</h1>
        <div className="w-full border-2 border-indigo-600"></div>
      </div>
      <div className="px-12 mt-1">
        <p className="text-sm">{profile}</p>
      </div>
    </div>

  )
}
