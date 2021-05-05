import styled from 'styled-components';

// styles
const DayString = styled.p`
  width: 100%;
  text-align: center;
  font-size: 1.2rem;
  margin: 3% auto;
  background: var(--text);
  color: var(--background);
  padding: 4% 0;
`;

function TimeRemaining() {
  // calculate the days left in the month
  function daysLeft() {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const nextMonth = currentMonth <= 10 ? currentMonth + 1 : 0;
    const nextYear = currentMonth <= 10 ? currentDate.getFullYear() : currentDate.getFullYear() + 1;
    const nextDate = new Date(nextYear, nextMonth);
    
    const difference = nextDate.getTime() - currentDate.getTime();
    // converts milliseconds to days (using hours & minutes)
    const daysLeft = Math.ceil(difference / (1000 * 3600 * 24));
    return daysLeft; 
  }

  return (
    <DayString>{`${daysLeft()} days until budget resets!`}</DayString>
  )
}

export default TimeRemaining;