import React from "react";
import { Field } from "./Field";

type FieldProps = {
  field: any
  fieldChanged: any
  type?: any
  values: any
  toggleEdit?: boolean
}

export const FieldGroup = ({ field, fieldChanged, values }: FieldProps) => {
  const fields = field.fields;
  return (
    <div key={field._uid} className="flex items-center justify-between">
      {fields.map((field: any, index: number) => (
        <Field
          key={field._uid}
          field={field}
          fieldChanged={fieldChanged}
          value={values[field._uid]}
        />
      )
      )}
    </div>
  );
};
