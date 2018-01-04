import { generateGame } from '..';

const message = 'What is the result of the expression?';

const calc = (firstNumb, secondNumb, numToDecideMathExpression) => {
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
  return { question, correctAnswer };
};

const calcBrainGame = generateGame(calc, message, 3);

export default calcBrainGame;
