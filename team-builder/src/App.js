import React, { useState } from 'react';
import Form from "./components/Form";
import Card from "./components/Card";
import { Route } from "react-router-dom";

import './App.css';

function App() {
  const [teamList, setTeamList] = useState([{ name: "", email: "", role: "", id: 0}]);
  const [memberToEdit, setMemberToEdit] = useState(null);

  function addPersonToList(person) {
    console.log(person)
    console.log(teamList)
    const newTeamList = teamList.concat(person);
    console.log(newTeamList)
    setTeamList(newTeamList);
  }

  function editMember(person) {
    setMemberToEdit(person);
  }

  function editPerson(editedPerson) {
    const newPeople = [...teamList];
    const oldPerson = newPeople.find(person => person.id === editPerson.id);
    oldPerson.name = editedPerson.name;
    oldPerson.name = editedPerson.email;
    oldPerson.name = editedPerson.role;
    oldPerson.name = editedPerson.id;
    setTeamList(newPeople);
    setMemberToEdit(null);

  }

  return (
    <div className="App">
      <Form editPerson={editPerson} editMember={editMember} setList={addPersonToList} />
      {teamList.map(person => <Card key={person.name} person={person} editMember={editMember} />)}
    </div>
  );
}

export default App;
