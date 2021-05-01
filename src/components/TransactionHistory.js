import styled from 'styled-components';

const Wrapper = styled.section`
  border: 2px solid darkgreen;
  width: 90%;
  margin: 2% auto 10%;  
`;

const TableTitle = styled.h2`
  font-size: 1.5rem;
  margin: 4% 3%;
`;

  // const records = fetch('../../.netlify/functions/airtableFunctions').then(res => res.json())
  // .then(record => record.fields);
  // console.log(records);

function TransactionHistory() {
  return (
    <Wrapper>
      <TableTitle>Transaction History</TableTitle>
      <ul>no idea</ul>
    </Wrapper>
  )
}

export default TransactionHistory;