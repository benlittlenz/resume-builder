import React, { useState, useEffect } from "react";
import { Field } from './Field'

type FormProps = {
  handleChange: () => void
  formData: {
    component?: string
    label?: string
    _uid?: string
    fields?: {
      component?: string
      label?: string
      _uid: string
      field?: {
        component: string
        label: string
        type: string
        id: string
      }
    }[]
  }[]
}

export const Form = ({ formData, handleChange }: FormProps) => {
  const [page, setPage] = useState(0);
  const [currentPageData, setCurrentPageData] = useState(formData[page]);
  const [values, setValues] = useState<any>({});

  // this effect will run when the `page` changes
  useEffect(() => {
    const upcomingPageData = formData[page];
    setCurrentPageData(upcomingPageData);
    setValues((currentValues: any) => {
      const newValues = upcomingPageData.fields?.reduce((obj: any, field: any) => {
        if (field.component === "field_group") {
          for (const subField of field.fields) {
            obj[subField._uid] = "";
          }
        } else {
          obj[field._uid] = "";
        }
        return obj;
      }, {});

      return Object.assign({}, newValues, currentValues);
    });
  }, [page, formData]);

  const onSubmit = (e: any) => {
    //e.preventDefault();
  };

  return (
    <form className="flex flex-col bg-white px-6 py-6 max-w-md rounded-lg shadow-lg">
      {currentPageData.fields?.map(({ field }: any) => {
        console.log(field)
        return (
          <div className="flex justify-between items-center py-4">
            <div className="">
              <label
                className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor={field ? field?.id : ''}
              >
                {field ? field?.label : ''}
              </label>
              <input
                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                id={field ? field?.id : ''}
                type="text"
                placeholder={field ? field?.label : ''}
                onChange={handleChange}
              />
            </div>
          </div>
        )
      })}
      <div className="pt-8 flex justify-end space-x-4">
        <button
          className="flex justify-center items-center w-28 border border-gray-100 hover:border-gray-300 text-gray-900 px-4 py-3 rounded-md focus:outline-none"
          // onClick={() => setShowForm(false)}
        >
          <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg> Cancel
        </button>
        <button type="submit" className="bg-green-500 flex justify-center items-center w-24 hover:bg-green-600 font-bold text-white px-4 py-3 rounded-md focus:outline-none">Save</button>
      </div>
    </form>
  )
};
