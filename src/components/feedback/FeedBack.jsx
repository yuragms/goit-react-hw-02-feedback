// import { Title } from "./FeedBack.styled.jsx";

// function FeedbackOptions({options}) {
//   return (
//   // <Title>Please leave feedback</Title>
//   Object.keys(options).map(option => {
//     return (
//          <button>{option}</button>

//   )}

// );}

const FeedbackOptions = ({ options }) => {
  return Object.keys(options).map((option) => {
    return <button>{option}</button>;
  });
};

export default FeedbackOptions;
