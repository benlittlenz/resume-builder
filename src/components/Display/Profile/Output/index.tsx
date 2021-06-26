import React from 'react';
import { useAppSelector } from '../../../../app/hooks';

export function ProfileOutput() {
  const { profile } = useAppSelector((state) => state.profileForm)
  console.log("YOYOOYOY", profile)
  return (
    <div>
      <h1 className={`title-font text-xl pt-4 mb-4 font-bold text-gray-900`}>Profile</h1>
      <div>
        <p>{profile}</p>
      </div>
    </div>

  )
}
