import { Stats } from "./Statistics.styled.jsx";

const Statistics = ({
  good,
  neutral,
  bad,
  total,
  countPositiveFeedbackPercentage,
}) => {
  return (
    <>
      <Stats>Good: {good}</Stats>
      <Stats>Neutral: {neutral}</Stats>
      <Stats>Bad: {bad}</Stats>
      <Stats>Total: {total}</Stats>
      <Stats>Positive Feedback: {countPositiveFeedbackPercentage}%</Stats>
    </>
  );
};

export default Statistics;
