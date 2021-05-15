import styled from 'styled-components';

// styles
const Wrapper = styled.section`
  width: 90%;
  margin: 3% auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Div = styled.div`
  width: 49%;
  text-align: center;

  &:nth-child(even) {
    border-right: 3px solid var(--text);
  }
`;

const DivMain = styled(Div)`
  width: 99%;
  border-bottom: 3px solid var(--text);
`;

const CNTitle = styled.h2`
  font-size: 1.2rem;
  margin: 3%;
  font-weight: var(--bold);

  &.availableTitle {
    font-size: 1.4rem;
  }
`;

const CNAmount = styled.p`
  font-size: 1.15rem;
  font-weight: var(--regular);
  margin: 3%;

  &.availableAmt {
    font-size: 1.35rem;
    font-weight: var(--bold);
  }

  &.negative {
    color: var(--negative);
  }
  
  &.positive {
    color: var(--positive);
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
        <CNAmount className={`availableAmt ${leftValue < 0 ? 'negative' : 'positive'}`}>{`$${leftValue.toFixed(2)}`}</CNAmount>
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