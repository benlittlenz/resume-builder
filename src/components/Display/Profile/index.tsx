import React, { useState } from 'react';

import { Details } from './Display';
import { ProfileForm } from './Form';

export function Profile() {
  const [showForm, setShowForm] = useState(false);
  return (
    <div className="mt-8">
      {!showForm && <Details setShowForm={setShowForm} />}
      {showForm && <ProfileForm setShowForm={setShowForm} />}
    </div>
  )
}
