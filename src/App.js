import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { ToastProvider } from 'react-toast-notifications';

import AddTransactionForm from './components/AddTransactionForm';
import CurrentNumbers from './components/CurrentNumbers';
import TimeRemaining from './components/TimeRemaining';
import TransactionHistory from './components/TransactionHistory';

// styles
const Main = styled.section`
  display: flex;
  flex-direction: column;
  place-items: center;
`;

const Title = styled.h1`
  font-weight: var(--bold);
  font-size: 2.5rem;
  width: 90%;
  text-align: center;
  margin: 5% auto 3%;
`;

function App() {
    // store the last added value from the form, to trigger transaction history update
    const [lastAdded, setLastAdded] = useState('');

  // get the full data from Airtable for transaction history
  const [records, setRecords] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetch('../../.netlify/functions/airtableReadAll')
      .then(res => res.json());
      setRecords(data);
    }
    fetchData();
  }, [lastAdded])

  // get the amount used for the month from transaction history data
  const [amtTotal, setAmtTotal] = useState(0);

  useEffect(() => {
    const data = records.filter(record => record['Current Month'] === 1);
    const allNumbers = data.map(item => item.Amount);
    const total = allNumbers.length < 1 ? 0 : allNumbers.reduce((first, second) => {
      return first + second;
    })
    setAmtTotal(total);
  }, [records])

  // main render function for the app
  return (
    <ToastProvider>
      <Main>
        <Title>Budget Time!</Title>
        <AddTransactionForm setNewItem={setLastAdded} />
        <CurrentNumbers amtTotal={amtTotal} />
        <TimeRemaining />
        <TransactionHistory records={records} />
      </Main>
    </ToastProvider>
  );
}

export default App;
