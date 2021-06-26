import React, { useState, useEffect } from 'react';
import { useForm } from '../../../app/hooks/useForm'
import { Form } from '../../Form'
import { useAppDispatch } from '../../../app/hooks';
import { formSubmitted } from '../../../redux/ProfileSlice';

type FormProps = {
  setShowForm: (showForm: boolean) => void;
}

type Inputs = {
  profile: string,
};

export const formData = [
  {
    component: "page",
    label: "Page 1",
    _uid: "0c946643-5a83-4545-baea-055b27b51e8a",
    fields: [
      {
        component: "field",
        label: "Profile Description",
        _uid: "profile-description",
        field: {
            component: "text",
            label: "Profile",
            type: "text",
            id: "profile"
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
