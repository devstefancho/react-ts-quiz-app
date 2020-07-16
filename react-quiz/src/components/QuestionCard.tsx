import React from "react";

//type for props
type Props = {
  question: string;
  answers: string[];
  callback: any;
  userAnswer: any;
  questionNr: number; //question's number
  totalQuestions: number;
};

const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNr,
  totalQuestions,
}) => {
  return <div>Question Card</div>;
};

export default QuestionCard;
