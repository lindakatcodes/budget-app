import styled from 'styled-components';
import { useState } from 'react';

// styles
const Form = styled.form`
  // border: 2px solid red;
  width: 90%;
  margin: 2% auto 10%;  
  display: flex;
  flex-direction: column;
  gap: 5%;
`;

const Label = styled.label`
  font-weight: var(--light);
  margin-left: 1%;
`;

const Input = styled.input`
  padding: 4% 2%;
  border-radius: 4px;
  margin-bottom: 2%;
`;

const Button = styled.button`
  background-color: var(--text);
  color: var(--background);
  padding: 5.5% 0;
  border-radius: 4px;
  border: none;
  font-weight: var(--bold);
  font-size: 1.05rem;
`;

// state & logic
function titleCase(str) {
  const splitStr = str.split(' ').map(val => {
    let lower = val.toLowerCase();
    const firstLetter = lower.slice(0, 1);
    return `${firstLetter.toUpperCase()}${lower.slice(1)}`;
  })
  console.log(splitStr.join(' '));
  return splitStr.join(' ');
}

async function handleSubmit(event) {
  event.preventDefault();
  const itemAmt = event.target.elements.newTrans.value;
  const itemStore = titleCase(event.target.elements.newTransStore.value);

  await fetch(`../../.netlify/functions/airtableWriteValue?amount=${itemAmt}&store=${itemStore}`)
    .then(res => res.json())  
    .then(res => {
      console.log(res.id, res.fields);
      event.target.elements.newTrans.value = '';
      event.target.elements.newTransStore.value = '';
    });
}

// final render function
function AddTransactionForm() {
  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor="newTrans">How much did you spend?</Label>
      <Input type="number" step="0.01" id="newTrans" placeholder="Enter amount" />
      <Label htmlFor="newTransStore">Where did you buy it?</Label>
      <Input type="text" id="newTransStore" placeholder="Store name" />
      <Button type="submit">Record Transaction</Button>
    </Form>
  )
}

export default AddTransactionForm;