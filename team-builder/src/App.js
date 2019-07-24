import React, { useState } from 'react';
import Form from "./components/Form";
import Card from "./components/Card";

import './App.css';

function App() {
  const [teamList, setTeamList] = useState([{ name: "", email: "", role: "" }]);
  function addPersonToList(person) {
    console.log(person)
    console.log(teamList)
    const newTeamList = teamList.concat(person);
    console.log(newTeamList)
    setTeamList(newTeamList);
  }

  function memberToEdit() {
    // setTeamList({ ...teamList, [event.target.name]: event.target.value })
  }
  return (
    <div className="App">
      <h1>Form</h1>
      {/* {teamList.map(person => <button onClick={memberToEdit}>Edit</button>)} */}
      <Form setList={addPersonToList} memberToEdit={memberToEdit} />
      {teamList.map(person => <Card key={person.email} person={person} />)}
    </div>
  );
}

export default App;
