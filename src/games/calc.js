import { giveRandNumb, askQuestion, userAnswer, explainWrongAnswer } from '..';

export const message = 'What is the result of the expression?';

export const calc = () => {
  const firstNumb = giveRandNumb();
  const secondNumb = giveRandNumb();
  const numToDecideMathExpression = giveRandNumb() - 1;
  let operation;
  if (numToDecideMathExpression < 34) {
    operation = '+';
  } else if (numToDecideMathExpression < 67) {
    operation = '-';
  } else {
    operation = '*';
  }
  askQuestion(`${String(firstNumb)} ${operation} ${String(secondNumb)}`);
  let correctAnswer;
  switch (operation) {
    case '+':
      correctAnswer = firstNumb + secondNumb;
      break;
    case '-':
      correctAnswer = firstNumb - secondNumb;
      break;
    case '*':
      correctAnswer = firstNumb * secondNumb;
      break;
    default:
      return false;
  }
  const answer = userAnswer();
  if (Number(answer) === correctAnswer) {
    return true;
  }
  explainWrongAnswer(answer, correctAnswer);
  return false;
};
