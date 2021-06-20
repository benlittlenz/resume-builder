import React, { useState } from 'react';

export function DesignName() {

  return (
    <div className="flex flex-col bg-white px-8 py-6 max-w-md rounded-lg shadow-lg">
      <div className="flex justify-between items-center">
        <h2 className="font-xl font-bold px-2 py-1">Name</h2>
      </div>
      <div className="mt-4 border border-gray-50"></div>
      <div className="mt-4">
        <h4 className="text-gray-700 font-semibold text-sm">Size</h4>
        <div className="grid grid-cols-8 gap-1 mt-2">
          <span className="w-8 text-center px-2 bg-gray-50 hover:bg-gray-100 rounded-lg cursor-pointer">XS</span>
          <span className="w-8 text-center px-2 bg-gray-50 hover:bg-gray-100 rounded-lg cursor-pointer">S</span>
          <span className="w-8 text-center px-2 bg-gray-50 hover:bg-gray-100 rounded-lg cursor-pointer">M</span>
          <span className="w-8 text-center px-2 bg-gray-50 hover:bg-gray-100 rounded-lg cursor-pointer">L</span>
          <span className="w-8 text-center px-2 bg-gray-50 hover:bg-gray-100 rounded-lg cursor-pointer">XL</span>
        </div>
      </div>
    </div>
  )
}
