import React from 'react';
import { useAppSelector } from '../../../app/hooks';

export function Name({name}: any) {
  const {
    nameSize,
    nameWeight
  } = useAppSelector((state) => state.detailsForm)

  return (
    <h1 className={`title-font text-${nameSize} text-center pt-4 mb-4 font-${nameWeight} text-gray-900`}>{name}</h1>
  )
}
