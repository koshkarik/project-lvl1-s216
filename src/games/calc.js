import { makeGame, giveRandNumb } from '..';

const message = 'What is the result of the expression?';

const calc = () => {
  const firstNumb = giveRandNumb();
  const secondNumb = giveRandNumb();
  const numToDecideMathExpression = giveRandNumb();
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
  return { question, correctAnswer: String(correctAnswer) };
};


const calcBrainGame = () => makeGame(calc, message);

export default calcBrainGame;
