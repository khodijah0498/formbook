import React from 'react'
import "./Persons.css"

const Persons = ({persons, setPersons}) => {


 function handleDelete(id) {
   const filteredItems = persons.filter(person => person.id !== id);
   setPersons(filteredItems)

 }

   return (
    <div>
      <h3>Users</h3>

      {persons.map((person, i) => {
        let firstletter = person.firstname;
        firstletter = firstletter.slice(0,1).toLocaleUpperCase();
        let lastletter = person.lastname;
        lastletter = lastletter.slice(0,1).toLocaleUpperCase();

        
        return (
          <div className="users" key={person.id}>
            <span className="letter">{firstletter + lastletter}</span>
            <span>{person.username}</span>
            <span>
              {person.firstname} {person.lastname}
            </span>
            <span>{person.date}</span>
            <img
              onClick={() => handleDelete(person.id)}
              src="/public/vector/delete.svg"
              alt="delete"
            />
          </div>
        );}
      )}
    </div>
  );
}

export default Persons