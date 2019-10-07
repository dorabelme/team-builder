import React from "react";
import styled from 'styled-components';

const CardContent = styled.div`
    padding: 1rem 2rem;
    min-height: 16.5rem;
    text-align: center;
    background-color: white;
    max-width: 800px;;
    margin: 40px auto;
    padding: 15px;
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
`;

const Title = styled.h2`
    font-family: 'Russo One', sans-serif;
    font-size: 2rem;
    margin-bottom: 1.5rem;
    color: black;
`;

const StyledP = styled.p`
  font-family: 'Russo One', sans-serif;
  font-size: 18px;
  color: black;
`;


function Card(props) {
    const person = props.person;
    // console.log(person)
    return (
        <CardContent>
            <StyledP>Name: {person.name}</StyledP>
            <StyledP>Email: {person.email}</StyledP>
            <StyledP>Role: {person.role}</StyledP>
            <button onClick={() => props.editMember(props.person)}>Edit</button>
        </CardContent>

    );
};

export default Card;