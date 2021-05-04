import styled from 'styled-components';
import { useState, useEffect } from 'react';

// styles
const Wrapper = styled.section`
  // border: 2px solid darkgreen;
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
  // border: 2px solid yellow;
  margin-top: 0;
  padding-left: 0;
`;

const ListItem = styled.li`
  // border: 2px solid purple;
  display: grid;
  grid-template-columns: 0.75fr 1fr 0.5fr;
  grid-template-rows: 1fr;
  align-items: center;
  margin: 1%;
  padding: 2%;

  &:nth-child(even) {
    background-color: var(--text);
    color: var(--background);
  }
`;

const RecordInfo = styled.span`
  font-size: 0.95rem;
  font-weight: var(--light);
  padding-left: 3%;
  // border: 2px solid green;
  
  &.store {
    padding-left: 6%;
    // border: 2px solid yellow;
  }
  
  &.currency {
    justify-self: end;
    // border: 2px solid red;
  }
`;

// state & logic
function formatCurrency(amt) {
  const cents = amt.toFixed(2);
  return `$${cents}`
}

function RecordData() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetch('../../.netlify/functions/airtableReadAll')
      .then(res => res.json());
      // console.log(data);
      setRecords(data);
    }
    fetchData();
  }, [])
  return (
    records.map(record => <ListItem key={record['Transaction ID']}>
      <RecordInfo>{record.Date}</RecordInfo>
      <RecordInfo className="store">{record.Store}</RecordInfo>
      <RecordInfo className="currency">{formatCurrency(record.Amount)}</RecordInfo>
    </ListItem>)
  )
}

// final rendered function
function TransactionHistory() {
  return (
    <Wrapper>
      <TableTitle>Transaction History</TableTitle>
      <List>
        <RecordData></RecordData>
      </List>
    </Wrapper>
  )
}

export default TransactionHistory;