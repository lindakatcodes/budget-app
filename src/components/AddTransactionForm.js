import styled from 'styled-components';
import { useToasts } from 'react-toast-notifications'

// styles
const Form = styled.form`
  width: 85%;
  margin: 2% auto 7%;  
  display: flex;
  flex-direction: column;
  gap: 5%;
`;

const Label = styled.label`
  font-weight: var(--light);
  margin-left: 1%;
`;

const Input = styled.input`
  padding: 3% 2%;
  border-radius: 4px;
  margin-bottom: 2%;
`;

const ReturnCheck = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  gap: 5%;
`;

const Button = styled.button`
  background-color: var(--text);
  color: var(--background);
  width: 75%;
  align-self: center;
  padding: 4.5% 0;
  border-radius: 4px;
  border: none;
  font-weight: var(--bold);
  font-size: 1.05rem;
`;

function AddTransactionForm(props) {
  // react-toast variable & custom toast
  const { addToast } = useToasts();

  // makes each word Title Case, for data integrity
  function titleCase(str) {
    const splitStr = str.split(' ').map(val => {
      let lower = val.toLowerCase();
      const firstLetter = lower.slice(0, 1);
      return `${firstLetter.toUpperCase()}${lower.slice(1)}`;
    })
    return splitStr.join(' ');
  }

  // add the new data to Airtable & set it to the lastAdded state in App.js
  async function handleSubmit(event) {
    event.preventDefault();
    const itemAmt = event.target.elements.newTrans.value;
    const itemStore = titleCase(event.target.elements.newTransStore.value);
    const itemReturn = event.target.elements.newTransType.checked;

    await fetch(`../../.netlify/functions/airtableWriteValue?amount=${itemAmt}&store=${itemStore}&return=${itemReturn}`)
      .then(res => res.json())  
      .then(res => {
        addToast('Success! Receipt saved.', { 
          appearance: 'success',
          autoDismiss: true,
          autoDismissTimeout: 3000,
          placement: 'top-center',
        });
        props.setNewItem(res.fields);
        event.target.elements.newTrans.value = '';
        event.target.elements.newTransStore.value = '';
        event.target.elements.newTransType.checked = false;
      })
      .catch(err => {
        addToast(`Sorry! Something went wrong.`, { 
          appearance: 'error',
          autoDismiss: true,
          autoDismissTimeout: 3000,
          placement: 'top-center',
        });
        console.log(err);
      });
  }

  // rendered component 
  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor="newTrans">How much did you spend?</Label>
      <Input type="number" step="0.01" id="newTrans" placeholder="Enter amount" />
      <Label htmlFor="newTransStore">Where did you buy it?</Label>
      <Input type="text" id="newTransStore" placeholder="Store name" />
      <ReturnCheck>
        <Label htmlFor="newTransType">Is this a return?</Label>
        <Input type="checkbox" id="newTransType" name="return" />
      </ReturnCheck>
      <Button type="submit">Record Transaction</Button>
    </Form>
  )
}

export default AddTransactionForm;