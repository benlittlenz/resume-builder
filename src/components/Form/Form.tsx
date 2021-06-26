import React, { useState, useEffect } from "react";

type FormProps = {
  formData: {
    component: string
    label: string
    _uid: string
    fields?: {
      component: string
      label: string
      _uid: string
      fields?: {
        component: string
        label: string
        type: string
        _uid: string
      }[]
    }[]
  }[]
  createData?: any
}

const Form = ({ formData }: FormProps) => {
  const [page, setPage] = useState(0);
  const [currentPageData, setCurrentPageData] = useState(formData[page]);
  const [values, setValues] = useState({});

  // this effect will run when the `page` changes
  useEffect(() => {
    const upcomingPageData = formData[page];
    setCurrentPageData(upcomingPageData);
    setValues((currentValues): any => {
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

  const fieldChanged = (fieldId: any, value: any) => {
    setValues((currentValues: any) => {
      currentValues[fieldId] = value;
      return currentValues;
    });

    setCurrentPageData((currentPageData: any) => {
      return Object.assign({}, currentPageData);
    });
  };
  const onSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={onSubmit}>
      <h2>{currentPageData.label}</h2>
      {currentPageData.fields?.map((field: any) => {
        return (
          <Field
            key={field._uid}
            field={field}
            fieldChanged={fieldChanged}
            value={values[field._uid]}
          />
        );
      })}
    </form>
  );
};

export default Form;
