import React, { useState } from 'react';

import { Form } from './Form';
import { Details } from './Display';

export function PersonalDetails() {
  const [data, setData] = useState({})
  const [showForm, setShowForm] = useState(false);
  return (
    <div>
      {!showForm && <Details setShowForm={setShowForm} />}
      {showForm && <Form setShowForm={setShowForm} setData={setData} />}
    </div>
  )
}
