import React, { useState } from "react";

type FieldProps = {
  field: any
  fieldChanged: any
  type?: any
  value: any
}

export const Field = ({ field, fieldChanged, type, value }: FieldProps) => {

  return (
    <div className="relative z-0 w-full mb-2 border border-gray-500">
      <input
        type={type || field.component}
        name={field._uid}
        placeholder=" "
        required
        value={value}
        className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
        onChange={(e) => {
          fieldChanged(field._uid, e.target.value);
        }}
      />
      <label htmlFor={field._uid} className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 pl-2">{field.label}</label>
    </div>
  )

};
