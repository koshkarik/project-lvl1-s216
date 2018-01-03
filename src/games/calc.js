import { giveRandNumb, askQuestion, userAnswer, make } from '..';

const message = 'What is the result of the expression?';

const calc = () => {
  const firstNumb = giveRandNumb();
  const secondNumb = giveRandNumb();
  const numToDecideMathExpression = giveRandNumb() - 1;
  let operation = null;
  let correctAnswer = null;
  if (numToDecideMathExpression < 34) {
    operation = '+';
    correctAnswer = firstNumb + secondNumb;
  } else if (numToDecideMathExpression < 67) {
    operation = '-';
    correctAnswer = firstNumb - secondNumb;
  } else {
    operation = '*';
    correctAnswer = firstNumb * secondNumb;
  }
  askQuestion(`${String(firstNumb)} ${operation} ${String(secondNumb)}`);
  const answer = userAnswer();
  if (Number(answer) === correctAnswer) {
    return { flag: true, answer, correctAnswer };
  }
  return { flag: false, answer, correctAnswer };
};

const calcBrainGame = make(message, calc);

export default calcBrainGame;
