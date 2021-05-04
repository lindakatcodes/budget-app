import styled from 'styled-components';
import AddTransactionForm from './components/AddTransactionForm';
import CurrentNumbers from './components/CurrentNumbers';
import TransactionHistory from './components/TransactionHistory';

const Main = styled.section`
  display: flex;
  flex-direction: column;
  place-items: center;
`;

const Title = styled.h1`
  font-weight: var(--bold);
  font-size: 2.75rem;
  margin: 10% auto 5%;
`;

function App() {
  return (
    <Main>
      <Title>Budget Time!</Title>
      <AddTransactionForm />
      <CurrentNumbers />
      <TransactionHistory />
    </Main>
  );
}

export default App;
