import { giveRandNumb, make } from '..';

const calc = () => {
  const firstNumb = giveRandNumb();
  const secondNumb = giveRandNumb();
  const numToDecideMathExpression = giveRandNumb() - 1;
  let question = '';
  let correctAnswer = null;
  if (numToDecideMathExpression < 34) {
    question = `${firstNumb} + ${secondNumb}`;
    correctAnswer = firstNumb + secondNumb;
  } else if (numToDecideMathExpression < 67) {
    question = `${firstNumb} - ${secondNumb}`;
    correctAnswer = firstNumb - secondNumb;
  } else {
    question = `${firstNumb} * ${secondNumb}`;
    correctAnswer = firstNumb * secondNumb;
  }
  return { message: 'What is the result of the expression?', question, correctAnswer };
};

const calcBrainGame = make(calc);

export default calcBrainGame;
