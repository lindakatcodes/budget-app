import styled from 'styled-components';

// styles
const Wrapper = styled.section`
  width: 90%;
  margin: 2% auto 10%;  
`;

const TableTitle = styled.h2`
  font-size: 1.5rem;
  margin: 4% 3%;
  border-bottom: 4px solid var(--text);
`;

const List = styled.ul`
  list-style: none;
  margin-top: 0;
  padding-left: 0;
`;

const ListItem = styled.li`
  display: grid;
  grid-template-columns: 0.75fr 1fr 0.5fr;
  grid-template-rows: 1fr;
  align-items: center;
  margin: 1%;
  padding: 2%;
  border-bottom: 2px solid var(--text);
`;

const RecordInfo = styled.span`
  font-size: 0.95rem;
  font-weight: var(--light);
  
  &.store {
    padding-left: 6%;
  }
  
  &.currency {
    justify-self: end;
    font-weight: var(--bold);
  }

  &.negative {
    color: var(--negative);
  }
  
  &.positive {
    color: var(--positive);
  }
`;

function TransactionHistory({records}) {
  // format all money fields to be two decimal places, for consistent look
  function formatCurrency(amt) {
    const cents = Math.abs(amt).toFixed(2);
    return `$${cents}`
  }
  
  // final rendered function
  return (
    <Wrapper>
      <TableTitle>Transaction History</TableTitle>
      <List>
        {records.map(record => {
          return (
            <ListItem key={record['Transaction ID']}>
              <RecordInfo>{record.Date}</RecordInfo>
              <RecordInfo className="store">{record.Store}</RecordInfo>
              <RecordInfo className={`currency ${record.Amount > 0 ? 'negative' : 'positive'}`}>{formatCurrency(record.Amount)}</RecordInfo>
            </ListItem>
          )
        })}
      </List>
    </Wrapper>
  )
}

export default TransactionHistory;