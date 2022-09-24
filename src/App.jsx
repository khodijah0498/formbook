import React, { useState } from 'react';
import PersonForm from './components/PersonForm/PersonForm';
import Persons from './components/Persons/Persons';
import "./App.css";



const App = () => {
  const [persons, setPersons] = useState([]);
  const [newFirstName, setNewFirstName] = useState("");
  const [newLastName, setNewLastName] = useState("");
  const [newUserName, setNewUserName] = useState("");
  const [newDate, setNewDate] = useState("");
  
  
   const changeFirstName = (e) => {
     setNewFirstName(e.target.value);
     
   };
   const changeLastName = (e) => {
     setNewLastName(e.target.value);
   };
    const changeUserName = (e) => {
      setNewUserName(e.target.value);
    };
    const changeDate = (e) => {
      setNewDate(e.target.value);
    };
 
 
 
  const handleSubmit = (e) => {
    e.preventDefault();
    const findName = persons.find((person) => person.firstname === newFirstName && person.lastname === newLastName
     );
    if (findName) {
      alert(`${newFirstName === findName.firstname} is already added to formbook`);
      setPersons([...persons]);
    } else {
      setPersons([
        ...persons,
        {
          id: Math.random().toString(16).slice(2, 6),

          firstname: newFirstName,
          lastname: newLastName,
          username: newUserName,
          date: newDate,
        },
        
        
      ]);
    }

    setNewFirstName("");
    setNewLastName("");
    setNewUserName("");
    setNewDate("")


    }
 
  return (
    <div className="app">
      <div className="container">
        <PersonForm
          handleSubmit={handleSubmit}
          newFirstName={newFirstName}
          newLastName={newLastName}
          newUserName={newUserName}
          newDate={newDate}
          changeFirstName={changeFirstName}
          changeLastName={changeLastName}
          changeUserName={changeUserName}
          changeDate={changeDate}
        />

        <Persons persons={persons} setPersons={setPersons} />
      </div>
    </div>
  );
}

export default App;