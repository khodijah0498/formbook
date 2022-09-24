import React from 'react'
import "./PersonForm.css"

const PersonForm = ({handleSubmit, newFirstName, newLastName, newUserName, newDate, changeFirstName, changeLastName, changeUserName, changeDate}) => {
  
  return (
    <form onSubmit={handleSubmit}>
      <div className="formlabel">
        <label>
          <h2>FirstName</h2>
          <input
            type="firstname"
            name="firstname"
            value={newFirstName}
            onChange={changeFirstName}
            placeholder="First Name"
            required
          />
        </label>
        <label>
          <h2>LastName</h2>
          <input
            type="lastname"
            name="lastname"
            value={newLastName}
            onChange={changeLastName}
            placeholder="Last Name"
            required
          />
        </label>
        <label>
          <h2>UserName</h2>
          <input
            type="username"
            name="username"
            value={newUserName}
            onChange={changeUserName}
            placeholder="Username"
            required
          />
        </label>
        <label>
          <h2>Date of Birth</h2>
          <input
            type="dateofbirth"
            name="dateofbirth"
            value={newDate}
            onChange={changeDate}
            placeholder="Date of Birth"
            required
          />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default PersonForm