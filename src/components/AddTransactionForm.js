import styled from 'styled-components';

const Wrapper = styled.section`
  border: 2px solid red;
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

function AddTransactionForm() {
  return (
    <Wrapper>
      <Label htmlFor="newTrans">How much did you spend?</Label>
      <Input type="text" id="newTrans" placeholder="Enter amount" />
      <Button type="submit">Record Transaction</Button>
    </Wrapper>
  )
}

export default AddTransactionForm;