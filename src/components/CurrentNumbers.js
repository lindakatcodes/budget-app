import styled from 'styled-components';

const Wrapper = styled.section`
  border: 2px solid blue;
  width: 90%;
  margin: 2% auto 10%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Div = styled.div`
  border: 2px solid yellow;
  width: 49%;
  text-align: center;
`;

const DivMain = styled(Div)`
  width: 99%;
`;

const CNTitle = styled.h2`
  font-size: 1.3rem;
  margin: 4% 3%;
  font-weight: var(--bold);
`;

const CNAmount = styled.p`
  font-size: 1.25rem;
  font-weight: var(--regular);
  margin: 4% 3%;
`;

function CurrentNumbers() {
  return (
    <Wrapper>
      <DivMain>
        <CNTitle>Money Available</CNTitle>
        <CNAmount>$###.##</CNAmount>
      </DivMain>
      <Div>
        <CNTitle>Started With</CNTitle>
        <CNAmount>$400</CNAmount>
      </Div>
      <Div>
        <CNTitle>Used so Far</CNTitle>
        <CNAmount>$###.##</CNAmount>
      </Div>
    </Wrapper>
  )
}

export default CurrentNumbers;