import React, { useState, useEffect } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { changeFontSize } from '../../features/DetailsSlice';

export function DesignName() {
  const [fontSize, setFontSize] = useState('XL')
  const [fontWeight, setFontWeight] = useState('semibold')

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(changeFontSize(fontSize))
  }, [fontSize]);

  return (
    <div className="flex flex-col bg-white px-8 py-6 max-w-md rounded-lg shadow-lg">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-bold px-2 py-1">Name</h2>
      </div>
      <div className="mt-4 border border-gray-50"></div>
      <div className="mt-4">
        <h4 className="text-gray-700 font-semibold text-sm">Size</h4>
        <div className="grid grid-cols-8 gap-1 mt-2">
          <button
            className="w-8 text-center px-2 bg-gray-50 hover:bg-gray-100 rounded-lg cursor-pointer"
            onClick={() => setFontSize('xs')}
          >XS</button>
          <button
            className="w-8 text-center px-2 bg-gray-50 hover:bg-gray-100 rounded-lg cursor-pointer"
            onClick={() => setFontSize('sm')}
          >S</button>
          <button
            className="w-8 text-center px-2 bg-gray-50 hover:bg-gray-100 rounded-lg cursor-pointer"
            onClick={() => setFontSize('base')}
          >M</button>
          <button
            className="w-8 text-center px-2 bg-gray-50 hover:bg-gray-100 rounded-lg cursor-pointer"
            onClick={() => setFontSize('lg')}
          >L</button>
          <button
            className="w-8 text-center px-2 bg-gray-50 hover:bg-gray-100 rounded-lg cursor-pointer"
            onClick={() => setFontSize('xl')}
          >XL</button>
        </div>
      </div>
    </div>
  )
}
