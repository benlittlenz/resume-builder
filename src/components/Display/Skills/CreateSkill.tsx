import React, { useState, useEffect } from 'react';
import { useForm } from '../../../app/hooks/useForm'
import { Form } from '../../Form'
import { useAppDispatch } from '../../../app/hooks';
import { formSubmitted } from '../../../redux/ProfileSlice';

type FormProps = {
  setShowForm: (showForm: boolean) => void;
}

type Inputs = {
  skill: string,
  information: string,
};

export const formData = [
  {
    component: "page",
    label: "Page 1",
    _uid: "0c946643-5a83-4545-baea-055b27b51e8a",
    fields: [
      {
        component: "field",
        label: "Skill",
        _uid: "skill",
        field: {
            component: "text",
            label: "Skill",
            type: "text",
            id: "skill"
          }
      },
      {
        component: "field",
        label: "Information / Subskill",
        _uid: "information",
        field: {
            component: "text",
            label: "Information / Subskill",
            type: "text",
            id: "information"
          }
      },
    ]
  },
];

export function ProfileForm({setShowForm}: FormProps) {
  const [fields, handleChange] = useForm({
    profile: '',
  })
  const dispatch = useAppDispatch()

  useEffect(() => {
    console.log('update: ', fields)
    dispatch(formSubmitted(fields))
  }, [fields]);

  return (
    <Form formData={formData} handleChange={handleChange} />
  )
}
