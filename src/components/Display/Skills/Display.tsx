import React, { useState } from 'react';

type SkillsProps = {
  setShowForm: (showForm: boolean) => void;
}

export function Details({ setShowForm }: SkillsProps) {
  const [showCreateSkill, setShowCreateSkill] = useState(false);

  return (
    <>
      {showCreateSkill ? (
        <div>
          ggfddgfgd
        </div>
      ) : (
        <div className="flex flex-col bg-white px-8 py-6 max-w-md rounded-lg shadow-lg">
          <div className="flex justify-between items-center">
            <a className="px-2 py-1 bg-gray-600 text-sm text-green-100 rounded" href="#">Technical Skills</a>
            <span>
              <button
                className="flex items-center border border-gray-100 px-4 py-2 rounded-lg hover:border-gray-300"
                onClick={() => setShowForm(true)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
                {/* <a className="text-gray-700 text-sm ml-2">Edit</a> */}
              </button>
            </span>
          </div>
          <div className="mt-4 border border-gray-50"></div>
          <div className="flex justify-between items-center mt-4">
            <a className="text-gray-700 text-sm mx-3 ml-6" href="#"></a>
          </div>
          <div className="flex justify-end">
            <button
              className="flex items-center border-2 border-green-400 px-4 py-2 rounded-lg hover:border-green-500 text-green-500 hover:shadow-md focus:outline-none"
              onClick={() => setShowCreateSkill(true)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm hover:text-green-600">Technical Skills</span>
            </button>
          </div>
        </div>
      )}
    </>
  )
}
