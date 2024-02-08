// UserInput.js
import React, { useState } from 'react';

function UserInput({ onSubmit }) {
  const [name, setName] = useState('');

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Corrected typo
    onSubmit(name);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nameInput">Enter your name : </label>
        <input
          type="text"
          id="nameInput"
          value={name}
          onChange={handleInputChange}
          placeholder="Enter your name" // Added placeholder
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default UserInput;
