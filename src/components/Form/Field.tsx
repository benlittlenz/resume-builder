import React, { useState } from "react";

type FieldProps = {
  field: any
  handleChange: () => void
}

export const Field = ({ field, handleChange }: FieldProps) => {

  return (
    <div className="">
      <label
        className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor={field ? field?.id : ''}
      >
        {field ? field?.label : ''}
      </label>
      {field.type === 'textarea' ? (
        <textarea
          className="autoexpand tracking-wide py-2 px-4 mb-3 leading-relaxed appearance-none block w-full bg-gray-200 border border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-500"
          id={field ? field?.id : ''}
          placeholder={field ? field?.label : ''}
          onChange={handleChange}
        ></textarea>
      ) : (
        <input
          className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
          id={field ? field?.id : ''}
          type="text"
          placeholder={field ? field?.label : ''}
          onChange={handleChange}
        />
      )}
    </div>
  )

};
