import React from 'react';
import { useAppSelector } from '../../../app/hooks';

export function Contact({ details }: any) {
  const {
    headerAlignment
  } = useAppSelector((state) => state.detailsForm)
  return (
    <div>
      <div
        className={`grid ${headerAlignment === 'center'
          ? 'grid-cols-3 gap-4 justify-items-center'
          : headerAlignment === 'left'
            ? 'justify-items-start'
            : 'justify-items-end'}`}>

        {(details.street || details.city) && (
          <div className={`${headerAlignment !== 'center' ? 'flex ml-2' : ''}`}>
            <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 ${headerAlignment === 'center' ? 'mx-auto' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <p
              className={`text-gray-700 text-sm ${headerAlignment === 'left'
                ? 'flex pl-2'
                : headerAlignment === 'right'
                  ? 'flex pr-2'
                  : ''}`}>
              {details.street} <br />
              {details.postcode} {details.city}
            </p>
          </div>
        )}
        {details.email && (
          <div className={`${headerAlignment !== 'center' ? 'flex items-center mt-1 ml-2' : ''}`}>
            <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 ${headerAlignment === 'center' ? 'mx-auto' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <p
              className={`text-gray-700 text-sm ${headerAlignment === 'left'
                ? 'flex pl-2'
                : headerAlignment === 'right'
                  ? 'flex pr-2'
                  : ''}`}>
              {details.email}
            </p>
          </div>
        )}
        {details.contactnum && (
          <div className={`${headerAlignment !== 'center' ? 'flex items-center mt-1 ml-2' : ''}`}>
            <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 ${headerAlignment === 'center' ? 'mx-auto' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <p
              className={`text-gray-700 text-sm ${headerAlignment === 'left'
                ? 'flex pl-2'
                : headerAlignment === 'right'
                  ? 'flex pr-2'
                  : ''}`}>
              {details.contactnum}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
