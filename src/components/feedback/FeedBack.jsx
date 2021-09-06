// import { Title } from "./FeedBack.styled.jsx";

const FeedbackOptions = ({ options }) => {
  return Object.keys(options).map((option) => {
    return <button>{option}</button>;
  });
};

export default FeedbackOptions;
