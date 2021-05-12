import React, { FC } from "react";
//types
import { AnswerObject } from "../App";
import { Wrapper, ButtonWrapper } from "../styles/QuetionsCard.style";

type Props = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNr: number;
  totalQuestions: number;
};

const QuetionsCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNr,
  totalQuestions,
}) => {
  return (
    <Wrapper>
      <p className='number'>
        Question: {questionNr} / {totalQuestions}
      </p>
      <p dangerouslySetInnerHTML={{ __html: question }} />
      <div>
        {answers.map((answer) => (
          <ButtonWrapper
            correct={userAnswer?.correctAnswer === answer}
            userClicked={userAnswer?.answer === answer}
            key={answer}
          >
            <button disabled={!!userAnswer} value={answer} onClick={callback}>
              <span dangerouslySetInnerHTML={{ __html: answer }} />
            </button>
          </ButtonWrapper>
        ))}
      </div>
    </Wrapper>
  );
};

export default QuetionsCard;
