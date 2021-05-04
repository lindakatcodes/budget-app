import styled from 'styled-components';

// styles
const Wrapper = styled.section`
  // border: 2px solid blue;
  width: 90%;
  margin: 6% auto 10%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Div = styled.div`
  // border: 2px solid yellow;
  width: 49%;
  text-align: center;

  &:nth-child(even) {
    border-right: 3px solid var(--text);
  }
`;

const DivMain = styled(Div)`
  width: 99%;
  border-bottom: 4px solid var(--text);
`;

const CNTitle = styled.h2`
  font-size: 1.3rem;
  margin: 4% 3%;
  font-weight: var(--bold);

  &.availableTitle {
    font-size: 1.6rem;
  }
`;

const CNAmount = styled.p`
  font-size: 1.25rem;
  font-weight: var(--regular);
  margin: 4% 3%;

  &.availableAmt {
    font-size: 1.6rem;
    font-weight: var(--bold);
  }
`;


function CurrentNumbers({amtTotal}) {
  // values to see what the main budget is and how much money is left
  const startValue = 400;
  let leftValue = startValue - amtTotal;

  // final rendered function
  return (
    <Wrapper>
      <DivMain>
        <CNTitle className="availableTitle">Money Available</CNTitle>
        <CNAmount className="availableAmt">{`$${leftValue.toFixed(2)}`}</CNAmount>
      </DivMain>
      <Div>
        <CNTitle>Started With</CNTitle>
        <CNAmount>{`$${startValue.toFixed(2)}`}</CNAmount>
      </Div>
      <Div>
        <CNTitle>Used so Far</CNTitle>
        <CNAmount>{`$${amtTotal.toFixed(2)}`}</CNAmount>
      </Div>
    </Wrapper>
  )
}

export default CurrentNumbers;