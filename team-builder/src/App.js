import React, { useState } from 'react';
import Form from "./components/Form";
import Card from "./components/Card";
import { Route } from "react-router-dom";

import './App.css';

function App() {
  const [teamList, setTeamList] = useState([]);
  const [memberToEdit, setMemberToEdit] = useState(null);

  function addPersonToList(person) {
    const newTeamList = teamList.concat(person);
    setTeamList(newTeamList);
  }

  function editMember(person) {
    setMemberToEdit(person);
  }

  function editPerson(editedPerson) {
    const newPeople = [...teamList];
    const oldPerson = newPeople.find(person => person.id === editedPerson.id);
    
    oldPerson.name = editedPerson.name;
    oldPerson.email = editedPerson.email;
    oldPerson.role = editedPerson.role;

    setTeamList(newPeople);
    setMemberToEdit(null);
  }

  return (
    <div className="App">
      <h1>Signup Form</h1>
      <Form editPerson={editPerson} setList={addPersonToList} memberToEdit={memberToEdit} />
      <h1>Team Members</h1>
      {teamList.map(person => <Card key={person.name} person={person} editMember={editMember} />)}
    </div>
  );
}

export default App;