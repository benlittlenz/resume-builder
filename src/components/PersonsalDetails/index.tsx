import React, { useState } from 'react';

import { Form } from './Form';
import { Details } from './Details';

export function PersonalDetails() {
  const [showForm, setShowForm] = useState(false);
  return (
    <div>
      {!showForm && <Details setShowForm={setShowForm} />}
      {showForm && <Form setShowForm={setShowForm} />}
    </div>
  )
}
