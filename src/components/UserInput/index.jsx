import React, { useState } from 'react'



function UserInput({onSubmit}) {
    const [name,setName] = useState('');
    
    const handleInputChange = (e) => {
        setName(e.target.value);
      };
    const handleSubmit = (e) => {
        e.prevent.default();
        onSubmit(name);
    }
    return (
      <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nameInput">Enter your name : </label>
        <input
          type="text"
          id="nameInput"
          value={name}
          onChange={handleInputChange}
        />
        <button type="submit">
          Submit
        </button>
      </form>
    </div>
      );
    }
    
export default UserInput;