import React, { useState, useEffect } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { changeFontSize, changeFontWeight } from '../../features/DetailsSlice';

export function DesignName() {
  const [fontSize, setFontSize] = useState('XL')
  const [fontWeight, setFontWeight] = useState('semibold')

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(changeFontSize(fontSize))
  }, [fontSize]);

  useEffect(() => {
    dispatch(changeFontWeight(fontWeight))
  }, [fontWeight]);

  const sizeOptions = ['xs', 'sm', 'base', 'lg', 'xl']
  const weightOptions = ['normal', 'medium', 'semibold', 'bold', 'extrabold']

  return (
    <div className="flex flex-col bg-white px-8 py-6 max-w-2xl rounded-lg shadow-lg">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-bold px-2 py-1">Name</h2>
      </div>
      <div className="mt-4 border border-gray-50"></div>
      <div className="mt-4">
        <h4 className="text-gray-700 font-semibold text-sm">Size</h4>
        <div className="grid grid-cols-8 gap-1 mt-2">
          {sizeOptions.map(size => (
            <button
              className="w-8 text-center px-2 bg-gray-50 hover:bg-gray-100 rounded-lg cursor-pointer"
              value={size}
              onClick={() => setFontSize(size)}
            >{size.toUpperCase()}</button>
          ))}

        </div>
      </div>
      <div className="mt-4">
        <h4 className="text-gray-700 font-semibold text-sm">Weight</h4>
        <div className="grid grid-cols-5 gap-2 mt-2">
          {weightOptions.map(weight => (
            <button
              className="w-18 text-center px-2 bg-gray-50 hover:bg-gray-100 rounded-lg cursor-pointer"
              onClick={() => setFontWeight(weight)}
            >{weight.charAt(0).toUpperCase() + weight.slice(1)}</button>
          ))}
        </div>
      </div>
    </div>
  )
}
