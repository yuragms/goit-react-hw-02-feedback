import { ButtonFeedback } from "./FeedBack.styled.jsx";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return Object.keys(options).map((option) => {
    return (
      <ButtonFeedback key={option} onClick={() => onLeaveFeedback(option)}>
        {" "}
        {option}
      </ButtonFeedback>
    );
  });
};

export default FeedbackOptions;
