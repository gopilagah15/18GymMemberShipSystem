// components/RegistrationForm.js
import React, { useState } from 'react';

const RegistrationForm = ({ onRegister }) => {
  const [name, setName] = useState('');
  const [membershipType, setMembershipType] = useState('Standard');

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister({ id: Date.now(), name, membershipType });
    setName('');
    setMembershipType('Standard');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Membership Registration</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        required
      />
      <select value={membershipType} onChange={(e) => setMembershipType(e.target.value)}>
        <option value="Standard">Standard</option>
        <option value="Premium">Premium</option>
      </select>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
