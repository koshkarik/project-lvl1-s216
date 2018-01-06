import { makeGame, giveRandNumb } from '..';

const gcd = (firstNumb, secondNumb) => {
  let num1 = firstNumb;
  let num2 = secondNumb;
  while (num1 !== 0 && num2 !== 0) {
    if (num1 > num2) num1 %= num2;
    else num2 %= num1;
  }
  return num1 + num2;
};

const makeGcdGame = () => {
  const num1 = giveRandNumb();
  const num2 = giveRandNumb();
  const question = `${num1} ${num2}`;
  const correctAnswer = String(gcd(num1, num2));
  return { question, correctAnswer };
};

const message = 'Find the greatest common divisor of given numbers.';

const gcdBrainGame = () => makeGame(makeGcdGame, message);

export default gcdBrainGame;
