import styled from 'styled-components';
import { useState, useEffect } from 'react';

// styles
const Wrapper = styled.section`
  border: 2px solid darkgreen;
  width: 90%;
  margin: 2% auto 10%;  
`;

const TableTitle = styled.h2`
  font-size: 1.5rem;
  margin: 4% 3%;
`;

const List = styled.ul`
  list-style: none;
  border: 2px solid yellow;
  margin-top: 0;
  padding-left: 0;
`;

const ListItem = styled.li`
  border: 2px solid purple;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  place-items: center;
`;

// state & logic
function RecordData() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetch('../../.netlify/functions/airtableReadFunction')
      .then(res => res.json());
      // console.log(data);
      setRecords(data);
    }
    fetchData();
  }, [])
  return (
    records.map(record => <ListItem key={record['Transaction ID']}>
      <p>{record.Date}</p>
      <p>{record.Amount}</p>
      <p>{record.Store}</p>
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